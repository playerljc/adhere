"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,l=t.length;n<l;n++)!a&&n in t||((a=a||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_hooks_1=__importDefault(require("@baifendian/adhere-ui-hooks")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),dialog_1=__importDefault(require("../dialog")),tag_1=__importDefault(require("../tag")),InputMultipleHOC_1=__importDefault(require("./InputMultipleHOC")),selectorPrefix="adhere-mobile-ui-anthoc-input-multiple",usePropToState=adhere_ui_hooks_1.default.usePropToState,InputMultipleDialog=function(e){var t=e.triggerProps,r=__rest(e,["triggerProps"]),e=usePropToState(r.value),a=e[0],e=e[1],n=(0,react_1.useMemo)(function(){return null!=t?t:{}},[t]),l=(0,react_1.useMemo)(function(){var e;return Array.from(new Set(__spreadArray(__spreadArray([],null!=(e=r.options)?e:[],!0),null!=(e=r.value)?e:[],!0))).map(function(e){return{label:e,value:e}})},[r.options,r.value]);return react_1.default.createElement(dialog_1.default.TriggerPrompt,__assign({submitAction:{key:"submit",primary:!0,onClick:function(){var e;return null!=(e=null==r?void 0:r.onChange)&&e.call(r,a),Promise.resolve(a)}},popoverTriggerProps:{renderTrigger:function(e){return e&&e.length?react_1.default.createElement("ul",{className:"".concat(selectorPrefix,"-render-trigger")},null==e?void 0:e.map(function(e){return react_1.default.createElement("li",{key:e},react_1.default.createElement(tag_1.default,{round:!0,color:"primary"},e))})):react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-placeholder")},adhere_util_intl_1.default.v("请输入关键字"))}}},n,{value:r.value}),react_1.default.createElement(InputMultipleHOC_1.default,__assign({},r,{options:l,onChange:e})))};exports.default=InputMultipleDialog;
//# sourceMappingURL=InputMultipleDialog.js.map
