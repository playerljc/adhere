"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile")),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),Context_1=__importDefault(require("./Context")),Menu_1=__importDefault(require("./Menu")),selectorPrefix="adhere-mobile-ui-popovermenu",InternalPopoverMenu=(0,react_1.memo)(function(e){var t=e.className,r=e.style,n=e.menuClassName,a=e.menuStyle,o=e.direction,u=e.popoverProps,l=e.items,i=e.maxCount,e=e.children,c=(0,react_1.useRef)([]),s=(0,react_1.useRef)(),_=(0,react_1.useMemo)(function(){return"horizontal"!==o&&o?"right":"bottom"},[o]),f=(0,react_1.useMemo)(function(){return react_1.default.createElement(Menu_1.default,{className:n,style:a,direction:o,maxCount:i,items:l})},[n,a,l]);return(0,react_1.useEffect)(function(){c.current.push(s.current)},[]),react_1.default.createElement(Context_1.default.Provider,{value:{refs:c.current}},react_1.default.createElement(antd_mobile_1.Popover,__assign({ref:s,className:(0,classnames_1.default)(selectorPrefix,null!=t?t:""),style:null!=r?r:{},placement:_,trigger:"click",stopPropagation:[],content:f},null!=u?u:{}),e))}),PopoverMenu=InternalPopoverMenu;PopoverMenu.displayName="PopoverMenu",exports.default=PopoverMenu;
//# sourceMappingURL=PopoverMenu.js.map
