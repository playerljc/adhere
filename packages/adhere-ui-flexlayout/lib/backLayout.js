"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||((a=a||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_historyback_1=__importDefault(require("@baifendian/adhere-ui-historyback")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),toolBarLayout_1=__importDefault(require("./toolBarLayout")),BackLayout=function(e){var t=e.topToolBarItems,r=void 0===t?[]:t,t=e.isShowBack,a=void 0===t||t,t=e.backPath,n=void 0===t?"/":t,t=e.enforceBackPath,o=void 0===t?"":t,i=e.history,l=e.backTitle,t=e.children,e=__rest(e,["topToolBarItems","isShowBack","backPath","enforceBackPath","history","backTitle","children"]),u=(0,react_1.useMemo)(function(){return __spreadArray(__spreadArray([],r||[],!0),[react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:"backBtn",conditional:a},function(){return react_1.default.createElement(antd_1.Button,{onClick:function(){o?i.replace(o):(0,adhere_ui_historyback_1.default)(i,n)}},l||adhere_util_intl_1.default.v("返回"))})],!1).filter(function(e){return!("props"in e&&"conditional"in e.props)||e.props.conditional})},[r,a,o,n,l]);return react_1.default.createElement(toolBarLayout_1.default,__assign({},e,{topToolBarItems:u}),t)};exports.default=(0,react_1.memo)(BackLayout);
//# sourceMappingURL=backLayout.js.map
