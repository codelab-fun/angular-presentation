!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/cdk/accordion"),require("@angular/cdk/portal"),require("@angular/common"),require("@angular/core"),require("@angular/material/core"),require("@angular/cdk/coercion"),require("@angular/cdk/a11y"),require("rxjs/operators"),require("@angular/cdk/keycodes"),require("@angular/platform-browser/animations"),require("rxjs"),require("@angular/animations"),require("@angular/cdk/collections")):"function"==typeof define&&define.amd?define(["exports","@angular/cdk/accordion","@angular/cdk/portal","@angular/common","@angular/core","@angular/material/core","@angular/cdk/coercion","@angular/cdk/a11y","rxjs/operators","@angular/cdk/keycodes","@angular/platform-browser/animations","rxjs","@angular/animations","@angular/cdk/collections"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ngMaterialExpansion={},e.ngCdkAccordion,e.ngCdkPortal,e.ngCommon,e.ngCore,e.ngMaterialCore,e.ngCdkCoercion,e.ngCdkA11y,e.rxjsOperators,e.ngCdkKeycodes,e.ngPlatformBrowserAnimations,e.rxjs,e.ngAnimations,e.ngCdkCollections)}(this,(function(e,t,n,a,o,i,r,s,p,d,l,c,g,m){"use strict";function h(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var x=h(n),u=h(a),y=h(o),b=h(s),f=h(m);const _=new o.InjectionToken("MAT_ACCORDION"),v="225ms cubic-bezier(0.4,0.0,0.2,1)",I={indicatorRotate:g.trigger("indicatorRotate",[g.state("collapsed, void",g.style({transform:"rotate(0deg)"})),g.state("expanded",g.style({transform:"rotate(180deg)"})),g.transition("expanded <=> collapsed, void => collapsed",g.animate(v))]),bodyExpansion:g.trigger("bodyExpansion",[g.state("collapsed, void",g.style({height:"0px",visibility:"hidden"})),g.state("expanded",g.style({height:"*",visibility:"visible"})),g.transition("expanded <=> collapsed, void => collapsed",g.animate(v))])},C=new o.InjectionToken("MAT_EXPANSION_PANEL");class w{constructor(e,t){this._template=e,this._expansionPanel=t}}w.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:w,deps:[{token:y.TemplateRef},{token:C,optional:!0}],target:y.ɵɵFactoryTarget.Directive}),w.ɵdir=y.ɵɵngDeclareDirective({minVersion:"14.0.0",version:"15.0.0",type:w,selector:"ng-template[matExpansionPanelContent]",ngImport:y}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:w,decorators:[{type:o.Directive,args:[{selector:"ng-template[matExpansionPanelContent]"}]}],ctorParameters:function(){return[{type:y.TemplateRef},{type:void 0,decorators:[{type:o.Inject,args:[C]},{type:o.Optional}]}]}});let E=0;const D=new o.InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");class k extends t.CdkAccordionItem{constructor(e,t,n,a,i,r,s){super(e,t,n),this._viewContainerRef=a,this._animationMode=r,this._hideToggle=!1,this.afterExpand=new o.EventEmitter,this.afterCollapse=new o.EventEmitter,this._inputChanges=new c.Subject,this._headerId="mat-expansion-panel-header-"+E++,this._bodyAnimationDone=new c.Subject,this.accordion=e,this._document=i,this._bodyAnimationDone.pipe(p.distinctUntilChanged(((e,t)=>e.fromState===t.fromState&&e.toState===t.toState))).subscribe((e=>{"void"!==e.fromState&&("expanded"===e.toState?this.afterExpand.emit():"collapsed"===e.toState&&this.afterCollapse.emit())})),s&&(this.hideToggle=s.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=r.coerceBooleanProperty(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&(this.expanded&&"default"===this.accordion.displayMode)}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(p.startWith(null),p.filter((()=>this.expanded&&!this._portal)),p.take(1)).subscribe((()=>{this._portal=new n.TemplatePortal(this._lazyContent._template,this._viewContainerRef)}))}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}}k.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:k,deps:[{token:_,optional:!0,skipSelf:!0},{token:y.ChangeDetectorRef},{token:f.UniqueSelectionDispatcher},{token:y.ViewContainerRef},{token:a.DOCUMENT},{token:l.ANIMATION_MODULE_TYPE,optional:!0},{token:D,optional:!0}],target:y.ɵɵFactoryTarget.Component}),k.ɵcmp=y.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.0.0",type:k,selector:"mat-expansion-panel",inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},host:{properties:{"class.mat-expanded":"expanded","class._mat-animation-noopable":'_animationMode === "NoopAnimations"',"class.mat-expansion-panel-spacing":"_hasSpacing()"},classAttribute:"mat-expansion-panel"},providers:[{provide:_,useValue:void 0},{provide:C,useExisting:k}],queries:[{propertyName:"_lazyContent",first:!0,predicate:w,descendants:!0}],viewQueries:[{propertyName:"_body",first:!0,predicate:["body"],descendants:!0}],exportAs:["matExpansionPanel"],usesInheritance:!0,usesOnChanges:!0,ngImport:y,template:'<ng-content select="mat-expansion-panel-header"></ng-content>\n<div class="mat-expansion-panel-content"\n     role="region"\n     [@bodyExpansion]="_getExpandedState()"\n     (@bodyExpansion.done)="_bodyAnimationDone.next($event)"\n     [attr.aria-labelledby]="_headerId"\n     [id]="id"\n     #body>\n  <div class="mat-expansion-panel-body">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n  </div>\n  <ng-content select="mat-action-row"></ng-content>\n</div>\n',styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],dependencies:[{kind:"directive",type:x.CdkPortalOutlet,selector:"[cdkPortalOutlet]",inputs:["cdkPortalOutlet"],outputs:["attached"],exportAs:["cdkPortalOutlet"]}],animations:[I.bodyExpansion],changeDetection:y.ChangeDetectionStrategy.OnPush,encapsulation:y.ViewEncapsulation.None}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:k,decorators:[{type:o.Component,args:[{selector:"mat-expansion-panel",exportAs:"matExpansionPanel",encapsulation:o.ViewEncapsulation.None,changeDetection:o.ChangeDetectionStrategy.OnPush,inputs:["disabled","expanded"],outputs:["opened","closed","expandedChange"],animations:[I.bodyExpansion],providers:[{provide:_,useValue:void 0},{provide:C,useExisting:k}],host:{class:"mat-expansion-panel","[class.mat-expanded]":"expanded","[class._mat-animation-noopable]":'_animationMode === "NoopAnimations"',"[class.mat-expansion-panel-spacing]":"_hasSpacing()"},template:'<ng-content select="mat-expansion-panel-header"></ng-content>\n<div class="mat-expansion-panel-content"\n     role="region"\n     [@bodyExpansion]="_getExpandedState()"\n     (@bodyExpansion.done)="_bodyAnimationDone.next($event)"\n     [attr.aria-labelledby]="_headerId"\n     [id]="id"\n     #body>\n  <div class="mat-expansion-panel-body">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n  </div>\n  <ng-content select="mat-action-row"></ng-content>\n</div>\n',styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}']}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:o.Optional},{type:o.SkipSelf},{type:o.Inject,args:[_]}]},{type:y.ChangeDetectorRef},{type:f.UniqueSelectionDispatcher},{type:y.ViewContainerRef},{type:void 0,decorators:[{type:o.Inject,args:[a.DOCUMENT]}]},{type:void 0,decorators:[{type:o.Optional},{type:o.Inject,args:[l.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:o.Inject,args:[D]},{type:o.Optional}]}]},propDecorators:{hideToggle:[{type:o.Input}],togglePosition:[{type:o.Input}],afterExpand:[{type:o.Output}],afterCollapse:[{type:o.Output}],_lazyContent:[{type:o.ContentChild,args:[w]}],_body:[{type:o.ViewChild,args:["body"]}]}});class M{}M.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:M,deps:[],target:y.ɵɵFactoryTarget.Directive}),M.ɵdir=y.ɵɵngDeclareDirective({minVersion:"14.0.0",version:"15.0.0",type:M,selector:"mat-action-row",host:{classAttribute:"mat-action-row"},ngImport:y}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:M,decorators:[{type:o.Directive,args:[{selector:"mat-action-row",host:{class:"mat-action-row"}}]}]});const P=i.mixinTabIndex(class{});class T extends P{constructor(e,t,n,a,o,i,r){super(),this.panel=e,this._element=t,this._focusMonitor=n,this._changeDetectorRef=a,this._animationMode=i,this._parentChangeSubscription=c.Subscription.EMPTY;const s=e.accordion?e.accordion._stateChanges.pipe(p.filter((e=>!(!e.hideToggle&&!e.togglePosition)))):c.EMPTY;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=c.merge(e.opened,e.closed,s,e._inputChanges.pipe(p.filter((e=>!!(e.hideToggle||e.disabled||e.togglePosition))))).subscribe((()=>this._changeDetectorRef.markForCheck())),e.closed.pipe(p.filter((()=>e._containsFocus()))).subscribe((()=>n.focusVia(t,"program"))),o&&(this.expandedHeight=o.expandedHeight,this.collapsedHeight=o.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case d.SPACE:case d.ENTER:d.hasModifierKey(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe((e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)}))}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}T.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:T,deps:[{token:k,host:!0},{token:y.ElementRef},{token:b.FocusMonitor},{token:y.ChangeDetectorRef},{token:D,optional:!0},{token:l.ANIMATION_MODULE_TYPE,optional:!0},{token:"tabindex",attribute:!0}],target:y.ɵɵFactoryTarget.Component}),T.ɵcmp=y.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.0.0",type:T,selector:"mat-expansion-panel-header",inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},host:{attributes:{role:"button"},listeners:{click:"_toggle()",keydown:"_keydown($event)"},properties:{"attr.id":"panel._headerId","attr.tabindex":"tabIndex","attr.aria-controls":"_getPanelId()","attr.aria-expanded":"_isExpanded()","attr.aria-disabled":"panel.disabled","class.mat-expanded":"_isExpanded()","class.mat-expansion-toggle-indicator-after":"_getTogglePosition() === 'after'","class.mat-expansion-toggle-indicator-before":"_getTogglePosition() === 'before'","class._mat-animation-noopable":'_animationMode === "NoopAnimations"',"style.height":"_getHeaderHeight()"},classAttribute:"mat-expansion-panel-header mat-focus-indicator"},usesInheritance:!0,ngImport:y,template:'<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]="_getExpandedState()" *ngIf="_showToggle()"\n      class="mat-expansion-indicator"></span>\n',styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],dependencies:[{kind:"directive",type:u.NgIf,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]}],animations:[I.indicatorRotate],changeDetection:y.ChangeDetectionStrategy.OnPush,encapsulation:y.ViewEncapsulation.None}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:T,decorators:[{type:o.Component,args:[{selector:"mat-expansion-panel-header",encapsulation:o.ViewEncapsulation.None,changeDetection:o.ChangeDetectionStrategy.OnPush,inputs:["tabIndex"],animations:[I.indicatorRotate],host:{class:"mat-expansion-panel-header mat-focus-indicator",role:"button","[attr.id]":"panel._headerId","[attr.tabindex]":"tabIndex","[attr.aria-controls]":"_getPanelId()","[attr.aria-expanded]":"_isExpanded()","[attr.aria-disabled]":"panel.disabled","[class.mat-expanded]":"_isExpanded()","[class.mat-expansion-toggle-indicator-after]":"_getTogglePosition() === 'after'","[class.mat-expansion-toggle-indicator-before]":"_getTogglePosition() === 'before'","[class._mat-animation-noopable]":'_animationMode === "NoopAnimations"',"[style.height]":"_getHeaderHeight()","(click)":"_toggle()","(keydown)":"_keydown($event)"},template:'<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]="_getExpandedState()" *ngIf="_showToggle()"\n      class="mat-expansion-indicator"></span>\n',styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}']}]}],ctorParameters:function(){return[{type:k,decorators:[{type:o.Host}]},{type:y.ElementRef},{type:b.FocusMonitor},{type:y.ChangeDetectorRef},{type:void 0,decorators:[{type:o.Inject,args:[D]},{type:o.Optional}]},{type:void 0,decorators:[{type:o.Optional},{type:o.Inject,args:[l.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:o.Attribute,args:["tabindex"]}]}]},propDecorators:{expandedHeight:[{type:o.Input}],collapsedHeight:[{type:o.Input}]}});class A{}A.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:A,deps:[],target:y.ɵɵFactoryTarget.Directive}),A.ɵdir=y.ɵɵngDeclareDirective({minVersion:"14.0.0",version:"15.0.0",type:A,selector:"mat-panel-description",host:{classAttribute:"mat-expansion-panel-header-description"},ngImport:y}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:A,decorators:[{type:o.Directive,args:[{selector:"mat-panel-description",host:{class:"mat-expansion-panel-header-description"}}]}]});class O{}O.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:O,deps:[],target:y.ɵɵFactoryTarget.Directive}),O.ɵdir=y.ɵɵngDeclareDirective({minVersion:"14.0.0",version:"15.0.0",type:O,selector:"mat-panel-title",host:{classAttribute:"mat-expansion-panel-header-title"},ngImport:y}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:O,decorators:[{type:o.Directive,args:[{selector:"mat-panel-title",host:{class:"mat-expansion-panel-header-title"}}]}]});class N extends t.CdkAccordion{constructor(){super(...arguments),this._ownHeaders=new o.QueryList,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=r.coerceBooleanProperty(e)}ngAfterContentInit(){this._headers.changes.pipe(p.startWith(this._headers)).subscribe((e=>{this._ownHeaders.reset(e.filter((e=>e.panel.accordion===this))),this._ownHeaders.notifyOnChanges()})),this._keyManager=new s.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}}N.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:N,deps:null,target:y.ɵɵFactoryTarget.Directive}),N.ɵdir=y.ɵɵngDeclareDirective({minVersion:"14.0.0",version:"15.0.0",type:N,selector:"mat-accordion",inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},host:{properties:{"class.mat-accordion-multi":"this.multi"},classAttribute:"mat-accordion"},providers:[{provide:_,useExisting:N}],queries:[{propertyName:"_headers",predicate:T,descendants:!0}],exportAs:["matAccordion"],usesInheritance:!0,ngImport:y}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:N,decorators:[{type:o.Directive,args:[{selector:"mat-accordion",exportAs:"matAccordion",inputs:["multi"],providers:[{provide:_,useExisting:N}],host:{class:"mat-accordion","[class.mat-accordion-multi]":"this.multi"}}]}],propDecorators:{_headers:[{type:o.ContentChildren,args:[T,{descendants:!0}]}],hideToggle:[{type:o.Input}],displayMode:[{type:o.Input}],togglePosition:[{type:o.Input}]}});class S{}S.ɵfac=y.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:S,deps:[],target:y.ɵɵFactoryTarget.NgModule}),S.ɵmod=y.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.0.0",ngImport:y,type:S,declarations:[N,k,M,T,O,A,w],imports:[a.CommonModule,i.MatCommonModule,t.CdkAccordionModule,n.PortalModule],exports:[N,k,M,T,O,A,w]}),S.ɵinj=y.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:S,imports:[a.CommonModule,i.MatCommonModule,t.CdkAccordionModule,n.PortalModule]}),y.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.0.0",ngImport:y,type:S,decorators:[{type:o.NgModule,args:[{imports:[a.CommonModule,i.MatCommonModule,t.CdkAccordionModule,n.PortalModule],exports:[N,k,M,T,O,A,w],declarations:[N,k,M,T,O,A,w]}]}]}),e.EXPANSION_PANEL_ANIMATION_TIMING=v,e.MAT_ACCORDION=_,e.MAT_EXPANSION_PANEL=C,e.MAT_EXPANSION_PANEL_DEFAULT_OPTIONS=D,e.MatAccordion=N,e.MatExpansionModule=S,e.MatExpansionPanel=k,e.MatExpansionPanelActionRow=M,e.MatExpansionPanelContent=w,e.MatExpansionPanelDescription=A,e.MatExpansionPanelHeader=T,e.MatExpansionPanelTitle=O,e.matExpansionAnimations=I}));
