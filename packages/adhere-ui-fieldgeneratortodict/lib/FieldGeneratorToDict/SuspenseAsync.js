"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var u in t=arguments[r])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var u=Object.getOwnPropertyDescriptor(t,r);u&&("get"in u?t.__esModule:!u.writable&&!u.configurable)||(u={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,u)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_suspense_1=__importDefault(require("@baifendian/adhere-ui-suspense")),SuspenseAsync=(0,react_1.memo)(function(e){var t=e.data,r=e.renderEmpty,n=e.isEmpty,u=e.emptyComponent,a=e.children,i=(0,react_1.useState)([]),o=i[0],c=i[1];return(0,react_1.useEffect)(function(){c(o||[])},[t]),react_1.default.createElement(adhere_ui_suspense_1.default.ASync,__assign({},e,{isEmpty:function(){return n?null==n?void 0:n(o):0===o.length},renderEmpty:r?r(o):u}),a)});exports.default=SuspenseAsync;
//# sourceMappingURL=SuspenseAsync.js.map
