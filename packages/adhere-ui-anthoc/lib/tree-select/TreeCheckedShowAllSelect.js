"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,l){void 0===l&&(l=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,n)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),TreeSelect_1=__importDefault(require("./TreeSelect")),InternalTreeCheckedShowAllSelect=(0,react_1.memo)(function(e){return react_1.default.createElement(TreeSelect_1.default,__assign({},e,{treeCheckable:!0,showCheckedStrategy:TreeSelect_1.default.SHOW_ALL}))}),TreeCheckedShowAllSelect=InternalTreeCheckedShowAllSelect;TreeCheckedShowAllSelect.displayName="TreeCheckedShowAllSelect",exports.default=TreeCheckedShowAllSelect;
//# sourceMappingURL=TreeCheckedShowAllSelect.js.map