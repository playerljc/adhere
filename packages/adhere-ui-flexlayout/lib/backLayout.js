"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var a,o=0,n=t.length;o<n;o++)!a&&o in t||((a=a||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_historyback_1=__importDefault(require("@baifendian/adhere-ui-historyback")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),ToolBarLayout_1=__importDefault(require("./ToolBarLayout")),BackLayout=(0,react_1.memo)(function(e){var t=e.topToolBarItems,r=void 0===t?[]:t,t=e.isShowBack,a=void 0===t||t,t=e.backPath,o=void 0===t?"/":t,t=e.enforceBackPath,n=void 0===t?"":t,i=e.history,u=e.backTitle,t=e.children,e=__rest(e,["topToolBarItems","isShowBack","backPath","enforceBackPath","history","backTitle","children"]),l=(0,react_1.useMemo)(function(){return __spreadArray(__spreadArray([],r||[],!0),[react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:"backBtn",conditional:a},function(){return react_1.default.createElement(antd_1.Button,{onClick:function(){n?i.replace(n):(0,adhere_ui_historyback_1.default)(i,o)}},u||adhere_util_intl_1.default.v("返回"))})],!1).filter(function(e){return!("props"in e&&"conditional"in e.props)||e.props.conditional})},[r,a,n,o,u]);return react_1.default.createElement(ToolBarLayout_1.default,__assign({},e,{topToolBarItems:l}),t)});BackLayout.displayName="BackLayout",exports.default=BackLayout;
//# sourceMappingURL=BackLayout.js.map
