"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AutoComplete_1=__importDefault(require("../AutoComplete")),PagingRadio_1=__importDefault(require("./PagingRadio")),InternalAutoCompletePagingRadio=(0,react_1.memo)(function(e){var a=e.pagingRadioProps,e=__rest(e,["pagingRadioProps"]);return react_1.default.createElement(AutoComplete_1.default,__assign({labelProp:"title"},null!=e?e:{},{value:e.value?[e.value]:[]}),function(e){var t=e.value,r=e.onChange,e=e.searchDataSource;return react_1.default.createElement(PagingRadio_1.default,__assign({value:t&&t.length?t[0]:null,onChange:r,options:e},null!=a?a:{}))})}),AutoCompletePagingRadio=InternalAutoCompletePagingRadio;AutoCompletePagingRadio.displayName="AutoCompletePagingRadio",exports.default=AutoCompletePagingRadio;
//# sourceMappingURL=AutoCompletePagingRadio.js.map
