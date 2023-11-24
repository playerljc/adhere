"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),radio_1=__importDefault(require("../radio")),List_1=__importDefault(require("./List")),selectorPrefix="adhere-ui-ant-hoc-radio-list",InternalRadioList=(0,react_1.memo)(function(e){var a=e.value,n=e.onChange,t=e.options,o=__rest(e,["value","onChange","options"]);return react_1.default.createElement(List_1.default,__assign({dataSource:t},o,{renderItem:function(t,e){var r;return react_1.default.createElement("div",{className:"".concat(selectorPrefix)},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-extra")},react_1.default.createElement(radio_1.default,{onChange:function(e){e.stopPropagation(),e.target.checked&&null!=n&&n(t.value,[])},checked:t.value===a})),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-body")},null==(r=null==o?void 0:o.renderItem)?void 0:r.call(o,t,e)))}}))}),RadioList=InternalRadioList;RadioList.displayName="RadioList",exports.default=RadioList;
//# sourceMappingURL=RadioList.js.map
