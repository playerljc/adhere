"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var l in e=arguments[r])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,a){void 0===a&&(a=r);var l=Object.getOwnPropertyDescriptor(e,r);l&&("get"in l?e.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,a,l)}:function(t,e,r,a){t[a=void 0===a?r:a]=e[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e},__rest=this&&this.__rest||function(t,e){var r={};for(l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(r[l]=t[l]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(t);a<l.length;a++)e.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(t,l[a])&&(r[l[a]]=t[l[a]]);return r},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),splitlayout_1=__importDefault(require("../splitlayout")),LCRBLayout=function(t,e){var r=t.bSplitProps,a=t.lSplitProps,l=t.rSplitProps,t=__rest(t,["bSplitProps","lSplitProps","rSplitProps"]);return react_1.default.createElement(adhere_ui_flexlayout_1.default.TRBLC.LCRBLayout,__assign({ref:e},t,{lSplit:react_1.default.createElement(splitlayout_1.default,__assign({},null!=a?a:{})),rSplit:react_1.default.createElement(splitlayout_1.default,__assign({},null!=l?l:{})),bSplit:react_1.default.createElement(splitlayout_1.default,__assign({},null!=r?r:{}))}))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(LCRBLayout));
//# sourceMappingURL=LCRBLayout.js.map
