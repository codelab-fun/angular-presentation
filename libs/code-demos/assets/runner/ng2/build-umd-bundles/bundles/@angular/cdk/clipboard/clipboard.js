!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/common"),require("@angular/core")):"function"==typeof define&&define.amd?define(["exports","@angular/common","@angular/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ngCdkClipboard={},e.ngCommon,e.ngCore)}(this,(function(e,t,o){"use strict";function r(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var n=r(o);class i{constructor(e,t){this._document=t;const o=this._textarea=this._document.createElement("textarea"),r=o.style;r.position="fixed",r.top=r.opacity="0",r.left="-999em",o.setAttribute("aria-hidden","true"),o.value=e,o.readOnly=!0,this._document.body.appendChild(o)}copy(){const e=this._textarea;let t=!1;try{if(e){const o=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),t=this._document.execCommand("copy"),o&&o.focus()}}catch{}return t}destroy(){const e=this._textarea;e&&(e.remove(),this._textarea=void 0)}}class s{constructor(e){this._document=e}copy(e){const t=this.beginCopy(e),o=t.copy();return t.destroy(),o}beginCopy(e){return new i(e,this._document)}}s.ɵfac=n.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:s,deps:[{token:t.DOCUMENT}],target:n.ɵɵFactoryTarget.Injectable}),s.ɵprov=n.ɵɵngDeclareInjectable({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:s,providedIn:"root"}),n.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:s,decorators:[{type:o.Injectable,args:[{providedIn:"root"}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:o.Inject,args:[t.DOCUMENT]}]}]}});const a=new o.InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");class c{constructor(e,t,r){this._clipboard=e,this._ngZone=t,this.text="",this.attempts=1,this.copied=new o.EventEmitter,this._pending=new Set,r&&null!=r.attempts&&(this.attempts=r.attempts)}copy(e=this.attempts){if(e>1){let t=e;const o=this._clipboard.beginCopy(this.text);this._pending.add(o);const r=()=>{const e=o.copy();e||!--t||this._destroyed?(this._currentTimeout=null,this._pending.delete(o),o.destroy(),this.copied.emit(e)):this._currentTimeout=this._ngZone.runOutsideAngular((()=>setTimeout(r,1)))};r()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach((e=>e.destroy())),this._pending.clear(),this._destroyed=!0}}c.ɵfac=n.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:c,deps:[{token:s},{token:n.NgZone},{token:a,optional:!0}],target:n.ɵɵFactoryTarget.Directive}),c.ɵdir=n.ɵɵngDeclareDirective({minVersion:"14.0.0",version:"15.0.0",type:c,selector:"[cdkCopyToClipboard]",inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"},host:{listeners:{click:"copy()"}},ngImport:n}),n.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:c,decorators:[{type:o.Directive,args:[{selector:"[cdkCopyToClipboard]",host:{"(click)":"copy()"}}]}],ctorParameters:function(){return[{type:s},{type:n.NgZone},{type:void 0,decorators:[{type:o.Optional},{type:o.Inject,args:[a]}]}]},propDecorators:{text:[{type:o.Input,args:["cdkCopyToClipboard"]}],attempts:[{type:o.Input,args:["cdkCopyToClipboardAttempts"]}],copied:[{type:o.Output,args:["cdkCopyToClipboardCopied"]}]}});class p{}p.ɵfac=n.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:p,deps:[],target:n.ɵɵFactoryTarget.NgModule}),p.ɵmod=n.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.0.0",ngImport:n,type:p,declarations:[c],exports:[c]}),p.ɵinj=n.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:p}),n.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:n,type:p,decorators:[{type:o.NgModule,args:[{declarations:[c],exports:[c]}]}]}),e.CDK_COPY_TO_CLIPBOARD_CONFIG=a,e.CdkCopyToClipboard=c,e.Clipboard=s,e.ClipboardModule=p,e.PendingCopy=i}));
