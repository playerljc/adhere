"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),ContextMenuContext_1=require("./ContextMenuContext"),MenuItem_1=__importDefault(require("./MenuItem")),selectorPrefix="adhere-ui-context-menu-sub-menu",SubMenu=(0,react_1.memo)(function(e){var t=e.className,t=void 0===t?"":t,r=e.style,r=void 0===r?{}:r,e=e.data,e=void 0===e?[]:e,n=(0,react_1.useContext)(ContextMenuContext_1.ProviderContext).config;return react_1.default.createElement("ul",{className:(0,classnames_1.default)(selectorPrefix,null!=t?t:""),style:__assign(__assign({},null!=r?r:{}),(t=n.width,{width:"".concat(t,"px"),zIndex:199999}))},(e||[]).map(function(e){return react_1.default.createElement(MenuItem_1.default,{key:e.id,data:e})}))});exports.default=SubMenu;
//# sourceMappingURL=SubMenu.js.map
