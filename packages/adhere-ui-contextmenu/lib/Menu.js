"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(require("react")),classnames_1=__importDefault(require("classnames")),MenuItem_1=__importDefault(require("./MenuItem")),ContextMenuContext_1=require("./ContextMenuContext"),selectorPrefix="adhere-ui-contextmenu-submenu",Menu=function(e,t){var n=e.className,r=void 0===n?"":n,u=e.style,n=void 0===u?{}:u,u=e.data,e=void 0===u?[]:u,a=react_1.useRef(null),o=react_1.useContext(ContextMenuContext_1.ProviderContext).config,u=react_1.useCallback(function(){return{width:o.width+"px",zIndex:199999}},[o]);function i(){var e=o.x,t=o.y,n=null===(u=a.current)||void 0===u?void 0:u.offsetWidth,r=null===(i=a.current)||void 0===i?void 0:i.offsetHeight,u=document.body.clientWidth||document.documentElement.clientWidth,i=document.body.clientHeight||document.documentElement.clientHeight;i-t<r&&(t=i-r),a.current.style.left=(e=u-e<n?u-n:e)+"px",a.current.style.top=t+"px"}return react_1.useImperativeHandle(t,function(){return{mount:i}}),react_1.default.createElement("ul",{className:classnames_1.default(selectorPrefix,r||""),style:__assign(__assign({},n||{}),u()),ref:a},(e||[]).map(function(e){return react_1.default.createElement(MenuItem_1.default,{key:e.id,data:e})}))};exports.default=react_1.forwardRef(Menu);
//# sourceMappingURL=Menu.js.map
