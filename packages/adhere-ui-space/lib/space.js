"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),selectorPrefix="adhere-ui-space",SpaceGroup=function(e){var t=e.children,r=__rest(e,["children"]);return react_1.default.createElement(react_1.default.Fragment,null,Array.isArray(t)?t.map(function(e,t){return 0!==t?react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(Space,__assign({},r,{key:t})),e):e}):t)},Space=function(e){var t=e.className,r=e.style,r=void 0===r?{}:r,a=e.direction,a=void 0===a?"horizontal":a,e=e.size,e=void 0===e?20:e;return react_1.default.createElement("div",{className:classnames_1.default(selectorPrefix,(void 0===t?"":t)||""),style:__assign(__assign({},"horizontal"===a?{display:"inline-block",height:"100%",margin:"0 "+e+"px"}:{width:"100%",margin:e+"px 0"}),r||{})})},MemoWrap=react_1.memo(Space);MemoWrap.Group=SpaceGroup,exports.default=MemoWrap;
//# sourceMappingURL=space.js.map
