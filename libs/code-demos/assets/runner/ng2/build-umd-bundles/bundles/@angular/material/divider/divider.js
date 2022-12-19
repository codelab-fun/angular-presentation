!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("@angular/cdk/coercion"),require("@angular/material/core")):"function"==typeof define&&define.amd?define(["exports","@angular/core","@angular/cdk/coercion","@angular/material/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ngMaterialDivider={},e.ngCore,e.ngCdkCoercion,e.ngMaterialCore)}(this,(function(e,t,r,i){"use strict";function a(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var o=a(t);class n{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(e){this._vertical=r.coerceBooleanProperty(e)}get inset(){return this._inset}set inset(e){this._inset=r.coerceBooleanProperty(e)}}n.ɵfac=o.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:o,type:n,deps:[],target:o.ɵɵFactoryTarget.Component}),n.ɵcmp=o.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.0.0",type:n,selector:"mat-divider",inputs:{vertical:"vertical",inset:"inset"},host:{attributes:{role:"separator"},properties:{"attr.aria-orientation":'vertical ? "vertical" : "horizontal"',"class.mat-divider-vertical":"vertical","class.mat-divider-horizontal":"!vertical","class.mat-divider-inset":"inset"},classAttribute:"mat-divider"},ngImport:o,template:"",isInline:!0,styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],changeDetection:o.ChangeDetectionStrategy.OnPush,encapsulation:o.ViewEncapsulation.None}),o.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:o,type:n,decorators:[{type:t.Component,args:[{selector:"mat-divider",host:{role:"separator","[attr.aria-orientation]":'vertical ? "vertical" : "horizontal"',"[class.mat-divider-vertical]":"vertical","[class.mat-divider-horizontal]":"!vertical","[class.mat-divider-inset]":"inset",class:"mat-divider"},template:"",encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]}]}],propDecorators:{vertical:[{type:t.Input}],inset:[{type:t.Input}]}});class s{}s.ɵfac=o.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:o,type:s,deps:[],target:o.ɵɵFactoryTarget.NgModule}),s.ɵmod=o.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.0.0",ngImport:o,type:s,declarations:[n],imports:[i.MatCommonModule],exports:[n,i.MatCommonModule]}),s.ɵinj=o.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.0.0",ngImport:o,type:s,imports:[i.MatCommonModule,i.MatCommonModule]}),o.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:o,type:s,decorators:[{type:t.NgModule,args:[{imports:[i.MatCommonModule],exports:[n,i.MatCommonModule],declarations:[n]}]}]}),e.MatDivider=n,e.MatDividerModule=s}));
