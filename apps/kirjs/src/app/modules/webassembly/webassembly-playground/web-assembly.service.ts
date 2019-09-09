import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare const require;
// TODO(kirjs): Find a better way.
const wabt = (function () {
  // Needed to make umd properly export stuff.
  const exports = {};
  const module = {};
  const code = require('!raw-loader!wabt');
  return eval(code)();
})();

export interface Result<T> {
  type: 'error' | 'result';
  value: T | string;
  error?: string;
}


function wat2wasm(wat) {
  const module = wabt.parseWat('main.wasm', wat);
  const binary = module.toBinary({
    log: false,
    canonicalize_lebs: false,
    relocatable: false,
    write_debug_names: false
  });
  return binary.buffer;
}


export interface RunConfig {
  args: any[];
  imports: any;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebAssemblyService {
  constructor() {
  }

  run<T>(wa: string, js: string, config: RunConfig) {
    return new Observable<Result<number>>((subscriber) => {
      try {
        const wasm = wat2wasm(wa);

        const setResult = (result: number) => {
          subscriber.next({
            type: 'result',
            value: result
          });
          subscriber.complete();
        };

        const setError = (error: number) => {
          subscriber.next({
            type: 'error',
            value: error
          });
          subscriber.complete();
        };

        eval(`
      (async function(){
      try {
        const code = new Uint8Array([${wasm.toString()}]).buffer;
        ${js}
          setResult(await run(code, config));
        } catch(e){
          setError(e.message);
        }
      }())
    `);
      } catch (e) {
        subscriber.next({
          type: 'error',
          value: e.message
        });
        subscriber.complete();

      }
    });
  }

  saveWasmFile(code: string) {
    function saveByteArray(name, byte) {
      const blob = new Blob([byte], {type: 'application/wasm'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = name;
      link.click();
    }

    saveByteArray('result.wasm', wat2wasm(code));
  }
}
