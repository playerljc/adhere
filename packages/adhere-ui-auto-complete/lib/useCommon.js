"use strict";var __createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),adhere_util_watchmemoized_1=__importDefault(require("@baifendian/adhere-util-watchmemoized")),memoized=adhere_util_watchmemoized_1.default.memoized,selectorPrefix="adhere-ui-auto-complete",useMemoInternal=function(e){var t=e.renderLoading,r=e.emptyContent,n=e.loadData,e=(0,react_1.useState)(!1),a=e[0],u=e[1],e=(0,react_1.useState)(!1),o=e[0],e=e[1],i=(0,react_1.useMemo)(function(){var e;return null!=(e=null==t?void 0:t())?e:react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-loading")},react_1.default.createElement(antd_1.Spin,{size:"large"}))},[t]),l=(0,react_1.useMemo)(function(){return null!=r?r:react_1.default.createElement(antd_1.Empty,{image:antd_1.Empty.PRESENTED_IMAGE_SIMPLE})},[r]),c=(0,react_1.useCallback)(memoized.createMemoFun(function(e){u(!0),null!=n&&n(e).then(function(){u(!1)})}),[n]);return{defaultDebounceTimeout:300,fetchLoading:i,empty:l,selectorPrefix:selectorPrefix,fetching:a,open:o,setOpen:e,onClear:function(){null!=n&&n("").then(function(){u(!1)})},onInputMemo:c}};exports.default=useMemoInternal;
//# sourceMappingURL=useCommon.js.map
