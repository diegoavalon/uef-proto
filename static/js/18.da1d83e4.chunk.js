(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{158:function(e,t,i){"use strict";i.r(t),i.d(t,"UiToggle",function(){return l});var o=i(32),l=function(){function e(){this.onText="on",this.offText="off",this.size="default"}return e.prototype.render=function(){var e="_"+Math.random().toString(36).substr(2,9);return Object(o.b)("span",{class:"ui-toggle__wrapper"},Object(o.b)("label",{class:"ui-toggle__description",htmlFor:e},Object(o.b)("slot",null)),Object(o.b)("label",{class:"ui-toggle"+(this.disabled?" disabled":"")+" "+this.size},Object(o.b)("input",{type:"checkbox",id:e,class:"ui-toggle__input sr-only",value:this.value,disabled:this.disabled}),Object(o.b)("span",{class:"ui-toggle__inner",role:"presentation"},Object(o.b)("span",{class:"ui-toggle__label ui-toggle__label--checked"},this.onText),Object(o.b)("span",{class:"ui-toggle__handle"},Object(o.b)("svg",{role:"presentation",viewBox:"0 0 15 15.343",xmlns:"http://www.w3.org/2000/svg"},Object(o.b)("title",null,"checkmark"),Object(o.b)("path",{fill:"#0099d6",stroke:"#ffffff","stroke-width":"2",class:"ui-toggle__icon",d:"M1.013 8.11c0-.223.078-.412.234-.568l1.14-1.14c.155-.155.345-.233.568-.233s.413.077.57.233l2.46 2.47 5.492-5.5c.156-.156.346-.234.568-.234.224 0 .413.077.57.233l1.138 1.14c.156.155.234.345.234.568 0 .224-.078.414-.234.57l-6.06 6.06-1.14 1.14c-.155.155-.345.233-.568.233s-.413-.078-.57-.234l-1.138-1.14-3.03-3.03c-.156-.156-.234-.346-.234-.57z"}))),Object(o.b)("span",{class:"ui-toggle__label ui-toggle__label--unchecked"},this.offText))))},Object.defineProperty(e,"is",{get:function(){return"ui-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},offText:{type:String,attr:"off-text"},onText:{type:String,attr:"on-text"},size:{type:String,attr:"size"},value:{type:String,attr:"value",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sr-only{position:absolute!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;border:0!important}.ui-toggle__wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.ui-toggle__description{margin-right:12px}.ui-toggle,.ui-toggle__inner{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-block;vertical-align:middle}.ui-toggle__inner{border-radius:.1875rem;background-color:#eee;-webkit-box-shadow:inset 0 0 0 1px #eee;box-shadow:inset 0 0 0 1px #eee;-webkit-box-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06);box-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06);height:2.5rem;min-width:80px;position:relative;width:auto}.ui-toggle__label{font-smoothing:antialiased;text-shadow:0 0 1px transparent;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;line-height:2.5625rem;text-transform:uppercase;letter-spacing:1px;visibility:hidden;white-space:nowrap;width:100%}.ui-toggle__label--checked{padding-left:1rem;padding-right:3.5rem}.ui-toggle__label--unchecked{padding-left:3.5rem;padding-right:1rem;color:#999;position:relative;top:-40px;visibility:visible}.ui-toggle__handle{border-radius:.1875rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;-webkit-box-shadow:0 0 0 2px #eee,0 5px 5px 0 rgba(0,0,0,.08);box-shadow:0 0 0 2px #eee,0 5px 5px 0 rgba(0,0,0,.08);height:2.5rem;left:0;overflow:hidden;padding:.4375rem;position:absolute;top:0;width:2.5rem;z-index:1}.ui-toggle__handle,.ui-toggle__icon{-webkit-transition:all .15s ease-out;transition:all .15s ease-out}.ui-toggle__icon{opacity:0}.ui-toggle__input:checked+.ui-toggle__inner{background-color:#0099d6;-webkit-box-shadow:none;box-shadow:none;-webkit-box-shadow:inset 0 2px 8px 0 rgba(0,0,0,.06);box-shadow:inset 0 2px 8px 0 rgba(0,0,0,.06)}.ui-toggle__input:checked+.ui-toggle__inner .ui-toggle__label{color:#fff;visibility:visible}.ui-toggle__input:checked+.ui-toggle__inner .ui-toggle__handle{-webkit-box-shadow:0 0 0 2px #0099d6,0 5px 5px 0 rgba(0,0,0,.08);box-shadow:0 0 0 2px #0099d6,0 5px 5px 0 rgba(0,0,0,.08);left:100%;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ui-toggle__input:checked+.ui-toggle__inner .ui-toggle__icon{opacity:1}.ui-toggle__input:checked+.ui-toggle__inner .ui-toggle__label--unchecked{top:-40px;visibility:hidden}.ui-toggle.disabled *{cursor:not-allowed!important}.ui-toggle.disabled .ui-toggle__inner{background:#f6f6f6!important}.ui-toggle.disabled .ui-toggle__label{color:#ccc!important}.ui-toggle.disabled .ui-toggle__handle{background:#f6f6f6;-webkit-box-shadow:0 0 0 .0625rem #cbd6e2,0 5px 5px 0 rgba(0,0,0,.08);box-shadow:0 0 0 .0625rem #cbd6e2,0 5px 5px 0 rgba(0,0,0,.08)}.ui-toggle.disabled .ui-toggle__icon{fill:#ccc;stroke:#f6f6f6}.ui-toggle.disabled .ui-toggle__handle{-webkit-box-shadow:0 0 0 .0625rem #dbdada,0 5px 5px 0 rgba(0,0,0,.08)!important;box-shadow:0 0 0 .0625rem #dbdada,0 5px 5px 0 rgba(0,0,0,.08)!important}.ui-toggle.sm .ui-toggle__inner{height:32px;width:64px;min-width:0}.ui-toggle.sm .ui-toggle__label,.ui-toggle.xs .ui-toggle__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.ui-toggle.sm .ui-toggle__handle{width:32px;height:32px}.ui-toggle.xs .ui-toggle__inner{height:26px;width:52px;min-width:0}.ui-toggle.xs .ui-toggle__handle{width:26px;height:26px}"},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=18.da1d83e4.chunk.js.map