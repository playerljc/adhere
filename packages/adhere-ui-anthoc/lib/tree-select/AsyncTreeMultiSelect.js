"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var u in t=arguments[r])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var u=Object.getOwnPropertyDescriptor(t,r);u&&("get"in u?t.__esModule:!u.writable&&!u.configurable)||(u={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,u)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AsyncTreeSelect_1=__importDefault(require("./AsyncTreeSelect")),useTreeSelectMulti_1=__importDefault(require("./useTreeSelectMulti")),AsyncTreeMultiSelect=function(e){var t=(0,useTreeSelectMulti_1.default)();return react_1.default.createElement(AsyncTreeSelect_1.default,__assign({},t,e))};exports.default=(0,react_1.memo)(AsyncTreeMultiSelect);
//# sourceMappingURL=AsyncTreeMultiSelect.js.map
