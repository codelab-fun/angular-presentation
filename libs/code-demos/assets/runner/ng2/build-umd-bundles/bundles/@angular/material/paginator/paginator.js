!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/common"),require("@angular/core"),require("rxjs"),require("@angular/material/button"),require("@angular/material/select"),require("@angular/material/tooltip"),require("@angular/material/core"),require("@angular/cdk/coercion"),require("@angular/material/form-field")):"function"==typeof define&&define.amd?define(["exports","@angular/common","@angular/core","rxjs","@angular/material/button","@angular/material/select","@angular/material/tooltip","@angular/material/core","@angular/cdk/coercion","@angular/material/form-field"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ngMaterialPaginator={},e.ngCommon,e.ngCore,e.rxjs,e.ngMaterialButton,e.ngMaterialSelect,e.ngMaterialTooltip,e.ngMaterialCore,e.ngCdkCoercion,e.ngMaterialFormField)}(this,(function(e,t,a,n,i,o,s,r,l,p){"use strict";function g(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var c=g(t),d=g(a),m=g(i),u=g(o),h=g(s),b=g(r),v=g(p);class f{constructor(){this.changes=new n.Subject,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,t,a)=>{if(0==a||0==t)return`0 of ${a}`;const n=e*t;return`${n+1} – ${n<(a=Math.max(a,0))?Math.min(n+t,a):n+t} of ${a}`}}}function P(e){return e||new f}f.ɵfac=d.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:f,deps:[],target:d.ɵɵFactoryTarget.Injectable}),f.ɵprov=d.ɵɵngDeclareInjectable({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:f,providedIn:"root"}),d.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:f,decorators:[{type:a.Injectable,args:[{providedIn:"root"}]}]});const x={provide:f,deps:[[new a.Optional,new a.SkipSelf,f]],useFactory:P};const _=new a.InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS"),z=r.mixinDisabled(r.mixinInitialized(class{}));class y extends z{constructor(e,t,n){if(super(),this._intl=e,this._changeDetectorRef=t,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.selectConfig={},this.page=new a.EventEmitter,this._intlChanges=e.changes.subscribe((()=>this._changeDetectorRef.markForCheck())),n){const{pageSize:e,pageSizeOptions:t,hidePageSize:a,showFirstLastButtons:i}=n;null!=e&&(this._pageSize=e),null!=t&&(this._pageSizeOptions=t),null!=a&&(this._hidePageSize=a),null!=i&&(this._showFirstLastButtons=i)}}get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(l.coerceNumberProperty(e),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=l.coerceNumberProperty(e),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(l.coerceNumberProperty(e),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map((e=>l.coerceNumberProperty(e))),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(e){this._hidePageSize=l.coerceBooleanProperty(e)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(e){this._showFirstLastButtons=l.coerceBooleanProperty(e)}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const e=this.getNumberOfPages()-1;return this.pageIndex<e&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){const t=this.pageIndex*this.pageSize,a=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(a)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._initialized&&(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort(((e,t)=>e-t)),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}y.ɵfac=d.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:y,deps:"invalid",target:d.ɵɵFactoryTarget.Directive}),y.ɵdir=d.ɵɵngDeclareDirective({minVersion:"14.0.0",version:"15.0.0",type:y,inputs:{color:"color",pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",selectConfig:"selectConfig"},outputs:{page:"page"},usesInheritance:!0,ngImport:d}),d.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:y,decorators:[{type:a.Directive}],ctorParameters:function(){return[{type:f},{type:d.ChangeDetectorRef},{type:void 0}]},propDecorators:{color:[{type:a.Input}],pageIndex:[{type:a.Input}],length:[{type:a.Input}],pageSize:[{type:a.Input}],pageSizeOptions:[{type:a.Input}],hidePageSize:[{type:a.Input}],showFirstLastButtons:[{type:a.Input}],selectConfig:[{type:a.Input}],page:[{type:a.Output}]}});let I=0;class S extends y{constructor(e,t,a){super(e,t,a),this._pageSizeLabelId="mat-paginator-page-size-label-"+I++,this._formFieldAppearance=a?.formFieldAppearance||"outline"}}S.ɵfac=d.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:S,deps:[{token:f},{token:d.ChangeDetectorRef},{token:_,optional:!0}],target:d.ɵɵFactoryTarget.Component}),S.ɵcmp=d.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.0.0",type:S,selector:"mat-paginator",inputs:{disabled:"disabled"},host:{attributes:{role:"group"},classAttribute:"mat-mdc-paginator"},exportAs:["matPaginator"],usesInheritance:!0,ngImport:d,template:'<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    <div class="mat-mdc-paginator-page-size" *ngIf="!hidePageSize">\n      <div class="mat-mdc-paginator-page-size-label" id="{{_pageSizeLabelId}}">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf="_displayedPageSizeOptions.length > 1"\n        [appearance]="_formFieldAppearance!"\n        [color]="color"\n        class="mat-mdc-paginator-page-size-select">\n        <mat-select\n          [value]="pageSize"\n          [disabled]="disabled"\n          [aria-labelledby]="_pageSizeLabelId"\n          [panelClass]="selectConfig.panelClass || \'\'"\n          [disableOptionCentering]="selectConfig.disableOptionCentering"\n          (selectionChange)="_changePageSize($event.value)">\n          <mat-option *ngFor="let pageSizeOption of _displayedPageSizeOptions" [value]="pageSizeOption">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class="mat-mdc-paginator-page-size-value"\n        *ngIf="_displayedPageSizeOptions.length <= 1">{{pageSize}}</div>\n    </div>\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-live="polite">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-first"\n              (click)="firstPage()"\n              [attr.aria-label]="_intl.firstPageLabel"\n              [matTooltip]="_intl.firstPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_previousButtonsDisabled()"\n              *ngIf="showFirstLastButtons">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n        </svg>\n      </button>\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="previousPage()"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_previousButtonsDisabled()">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="nextPage()"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_nextButtonsDisabled()">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-last"\n              (click)="lastPage()"\n              [attr.aria-label]="_intl.lastPageLabel"\n              [matTooltip]="_intl.lastPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_nextButtonsDisabled()"\n              *ngIf="showFirstLastButtons">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n',styles:[".mat-mdc-paginator{display:block}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],dependencies:[{kind:"directive",type:c.NgForOf,selector:"[ngFor][ngForOf]",inputs:["ngForOf","ngForTrackBy","ngForTemplate"]},{kind:"directive",type:c.NgIf,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]},{kind:"component",type:m.MatIconButton,selector:"button[mat-icon-button]",inputs:["disabled","disableRipple","color"],exportAs:["matButton"]},{kind:"component",type:v.MatFormField,selector:"mat-form-field",inputs:["hideRequiredMarker","color","floatLabel","appearance","subscriptSizing","hintLabel"],exportAs:["matFormField"]},{kind:"component",type:u.MatSelect,selector:"mat-select",inputs:["disabled","disableRipple","tabIndex"],exportAs:["matSelect"]},{kind:"component",type:b.MatOption,selector:"mat-option",exportAs:["matOption"]},{kind:"directive",type:h.MatTooltip,selector:"[matTooltip]",exportAs:["matTooltip"]}],changeDetection:d.ChangeDetectionStrategy.OnPush,encapsulation:d.ViewEncapsulation.None}),d.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:S,decorators:[{type:a.Component,args:[{selector:"mat-paginator",exportAs:"matPaginator",inputs:["disabled"],host:{class:"mat-mdc-paginator",role:"group"},changeDetection:a.ChangeDetectionStrategy.OnPush,encapsulation:a.ViewEncapsulation.None,template:'<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    <div class="mat-mdc-paginator-page-size" *ngIf="!hidePageSize">\n      <div class="mat-mdc-paginator-page-size-label" id="{{_pageSizeLabelId}}">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf="_displayedPageSizeOptions.length > 1"\n        [appearance]="_formFieldAppearance!"\n        [color]="color"\n        class="mat-mdc-paginator-page-size-select">\n        <mat-select\n          [value]="pageSize"\n          [disabled]="disabled"\n          [aria-labelledby]="_pageSizeLabelId"\n          [panelClass]="selectConfig.panelClass || \'\'"\n          [disableOptionCentering]="selectConfig.disableOptionCentering"\n          (selectionChange)="_changePageSize($event.value)">\n          <mat-option *ngFor="let pageSizeOption of _displayedPageSizeOptions" [value]="pageSizeOption">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class="mat-mdc-paginator-page-size-value"\n        *ngIf="_displayedPageSizeOptions.length <= 1">{{pageSize}}</div>\n    </div>\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-live="polite">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-first"\n              (click)="firstPage()"\n              [attr.aria-label]="_intl.firstPageLabel"\n              [matTooltip]="_intl.firstPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_previousButtonsDisabled()"\n              *ngIf="showFirstLastButtons">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n        </svg>\n      </button>\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="previousPage()"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_previousButtonsDisabled()">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="nextPage()"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_nextButtonsDisabled()">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      <button mat-icon-button type="button"\n              class="mat-mdc-paginator-navigation-last"\n              (click)="lastPage()"\n              [attr.aria-label]="_intl.lastPageLabel"\n              [matTooltip]="_intl.lastPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              [matTooltipPosition]="\'above\'"\n              [disabled]="_nextButtonsDisabled()"\n              *ngIf="showFirstLastButtons">\n        <svg class="mat-mdc-paginator-icon" viewBox="0 0 24 24" focusable="false">\n          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n',styles:[".mat-mdc-paginator{display:block}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"]}]}],ctorParameters:function(){return[{type:f},{type:d.ChangeDetectorRef},{type:void 0,decorators:[{type:a.Optional},{type:a.Inject,args:[_]}]}]}});class O{}O.ɵfac=d.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:O,deps:[],target:d.ɵɵFactoryTarget.NgModule}),O.ɵmod=d.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.0.0",ngImport:d,type:O,declarations:[S],imports:[t.CommonModule,i.MatButtonModule,o.MatSelectModule,s.MatTooltipModule],exports:[S]}),O.ɵinj=d.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:O,providers:[x],imports:[t.CommonModule,i.MatButtonModule,o.MatSelectModule,s.MatTooltipModule]}),d.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:d,type:O,decorators:[{type:a.NgModule,args:[{imports:[t.CommonModule,i.MatButtonModule,o.MatSelectModule,s.MatTooltipModule],exports:[S],declarations:[S],providers:[x]}]}]}),e.MAT_PAGINATOR_DEFAULT_OPTIONS=_,e.MAT_PAGINATOR_INTL_PROVIDER=x,e.MAT_PAGINATOR_INTL_PROVIDER_FACTORY=P,e.MatPaginator=S,e.MatPaginatorIntl=f,e.MatPaginatorModule=O,e.PageEvent=class{},e._MatPaginatorBase=y}));
