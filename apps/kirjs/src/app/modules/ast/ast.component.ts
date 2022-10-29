import { Component } from '@angular/core';

import { parse } from 'babylon';
import {
  findHighlightsObjectProp,
  isBody,
  isLoc,
  isType,
  processCode,
  removeDoubleWhiteLines,
  removeLoc,
} from './parse-hello-world-ast';
import { exercise } from '../../../../../codelab/src/app/shared/helpers/helpers';

declare const require;

const helloWorld = require('./samples/hello-world.json');

function jsify(program) {
  return 'const ast = ' + JSON.stringify(program, null, '  ');
}

const helloWorldCodePre = jsify(helloWorld);

const angularCodeBefore = `import {
  Component
} from '@angular/core';

@Component({
  selector: 'amazing-component',
  template: './app.html',
})
export class SimpleEditorComponent implements ControlValueAccessor {
}`;
const angularCodeAfter = `import {
  Component,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'amazing-component',
  template: './app.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleEditorComponent),
      multi: true
    }
  ],
})
export class SimpleEditorComponent implements ControlValueAccessor {
  registerOnTouched(fn: any): void {
  }

  registerOnChange(onChange: (code: string) => void): void {
    this.change.subscribe(onChange)
  }

  writeValue(value: string): void {
    console.log(value)
  }
}`;

const consoleLog = `console.log('hello')`;
const consoleLogAst = parse(consoleLog);
const consoleLogCode = JSON.stringify(consoleLogAst, null, '  ');
const consoleLogBodyAst = consoleLogAst.program.body;
const consoleLogBodyAstCode = JSON.stringify(consoleLogBodyAst, null, '  ');
const consoleLogNoLocCode = removeDoubleWhiteLines(
  processCode(consoleLogBodyAstCode, { remove: [removeLoc] })
);

@Component({
  selector: 'kirjs-ast',
  templateUrl: './ast.component.html',
  styleUrls: ['./ast.component.css'],
})
export class AstComponent {
  fontSize = 28;

  displayCallee = false;
  code = {
    parser: `import { parse } from 'babylon';
parse("console.log('🐶🐶🐶')");`,
    astPreview: 'log',
    astPreviewDebugger: 'console.log();\ndebugger\n123',
    types: {
      identifier: `
// Before
path.node.property.type === 'Identifier'

// with babel types
import {isIdentifier} from 'babel-types';
isIdentifier(path.node.property)`,
      name: `
// Before
path.node.property.type === 'Identifier'
path.node.property.name === 'log'

// with babel types
import {isIdentifier} from 'babel-types';
isIdentifier(path.node.property, {name: log})`,
    },
    astHello: 'hello(console.log)',
    matches: {
      loc: /"loc": \{[\s\S]*?\{[\s\S]*?\}[\s\S]*?\{[\s\S]*?\}[\s\S]*?\},/,
    },
    astExampleFull: processCode(helloWorldCodePre, { remove: [] }),
    astExample: removeDoubleWhiteLines(
      processCode(helloWorldCodePre, { remove: [removeLoc] })
    ),
    astExampleNoBody: removeDoubleWhiteLines(
      processCode(jsify(helloWorld.program.body), { remove: [removeLoc] })
    ),
    consoleLog: consoleLog,
    consoleLogAst: consoleLogCode,
    consoleLogAstJs: 'const ast = ' + consoleLogCode,
    consoleLogBodyAstCode,
    consoleLogNoLocCode,
    angularCodeBefore,
    angularCodeAfter,
    angularMatchesAfter: [/a/],
    findConsoleLog: [
      exercise(
        'find-console-log',
        require('!!raw-loader!./samples/find-console-log/find-console-log.js')
          .default,
        require('!!raw-loader!./samples/find-console-log/find-console-log-regex.solved.js')
          .default
      ),
      exercise(
        'find-console-log.test',
        require('!!raw-loader!./samples/find-console-log/find-console-log.test.js')
          .default
      ),
    ],
    findDebuggerBabel: [
      exercise(
        'find-debugger-babel',
        require('!!raw-loader!./samples/find-debugger/find-debugger-babel.ts')
          .default,
        require('!!raw-loader!./samples/find-debugger/find-debugger-babel.solved.ts')
          .default
      ),
      exercise(
        'find-debugger.test',
        require('!!raw-loader!./samples/find-debugger/find-debugger.test.js')
          .default
      ),
    ],
    traverseConsoleLogBabel: [
      exercise(
        'traverse-console-log-babel',
        require('!!raw-loader!./samples/find-console-log/traverse-console-log-babel.ts')
          .default,
        require('!!raw-loader!./samples/find-console-log/traverse-console-log-babel.solved.ts')
          .default
      ),
      exercise(
        'find-console-log.test',
        require('!!raw-loader!./samples/find-console-log/find-console-log.test.js')
          .default
      ),
    ],
    traverseConsoleLogBabel2: [
      exercise(
        'traverse-console-log-babel',
        require('!!raw-loader!./samples/find-console-log/traverse-console-log-babel.solved.ts')
          .default,
        require('!!raw-loader!./samples/find-console-log/traverse-console-log-babel.solved2.ts')
          .default
      ),
      exercise(
        'find-console-log.test',
        require('!!raw-loader!./samples/find-console-log/find-console-log.test.js')
          .default
      ),
    ],
    removeConsoleLogBabel: [
      exercise(
        'remove-console-log',
        require('!!raw-loader!./samples/find-console-log/remove-console-log.ts')
          .default,
        require('!!raw-loader!./samples/find-console-log/remove-console-log.solved.ts')
          .default
      ),
      exercise(
        'remove-console-log.test',
        require('!!raw-loader!./samples/find-console-log/remove-console-log.test.js')
          .default
      ),
    ],
    findfIt: [
      exercise(
        'find-fit',
        require('!!raw-loader!./samples/find-fit/find-fit.js').default,
        require('!!raw-loader!./samples/find-fit/find-fit.solved.js').default
      ),
      exercise(
        'find-fit.test',
        require('!!raw-loader!./samples/find-fit/find-fit.test.js').default
      ),
    ],
    itLines: [
      exercise(
        'it-lines',
        require('!!raw-loader!./samples/it-lines/it-lines.js').default,
        require('!!raw-loader!./samples/it-lines/it-lines.solved.js').default
      ),
      exercise(
        'it-lines.test',
        require('!!raw-loader!./samples/it-lines/it-lines.test.js').default
      ),
    ],
    decToBin: require('!!raw-loader!./samples/dec-to-bin.js').default,
    decToBinFixed:
      require('!!raw-loader!./samples/dec-to-bin-with-semicolons.js').default,
  };

  constructor() {}

  matchTreePartsLoc(code) {
    return findHighlightsObjectProp(code, [isLoc]);
  }

  matchTreePartsBody(code) {
    return findHighlightsObjectProp(code, [isBody]);
  }

  matchTreePartsType(code) {
    return findHighlightsObjectProp(code, [isType]);
  }

  updateFontSize(diff) {
    this.fontSize += diff;
  }
}
