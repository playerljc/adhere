"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,l)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),AutoCompleteTreeSelect_1=__importDefault(require("./AutoCompleteTreeSelect")),InternalAutoCompleteTreeCheckedShowChildSelect=(0,react_1.memo)(function(e){return react_1.default.createElement(AutoCompleteTreeSelect_1.default,__assign({},e,{treeCheckable:!0,showCheckedStrategy:antd_1.TreeSelect.SHOW_CHILD}))}),AutoCompleteTreeCheckedShowChildSelect=InternalAutoCompleteTreeCheckedShowChildSelect;AutoCompleteTreeCheckedShowChildSelect.displayName="AutoCompleteTreeCheckedShowChildSelect",exports.default=AutoCompleteTreeCheckedShowChildSelect;
//# sourceMappingURL=AutoCompleteTreeCheckedShowChildSelect.js.map