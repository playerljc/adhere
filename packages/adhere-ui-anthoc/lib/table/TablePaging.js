"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,a,t,n){void 0===n&&(n=t);var r=Object.getOwnPropertyDescriptor(a,t);r&&("get"in r?a.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(e,n,r)}:function(e,a,t,n){e[n=void 0===n?t:n]=a[t]},__setModuleDefault=Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a},__importStar=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(a,e,t);return __setModuleDefault(a,e),a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),adhere_ui_suspense_1=__importDefault(require("@baifendian/adhere-ui-suspense")),CheckboxPagingTable_1=__importDefault(require("./CheckboxPagingTable")),RadioPagingTable_1=__importDefault(require("./RadioPagingTable")),usePagingRenderProps_1=__importDefault(require("./usePagingRenderProps")),InternalTablePaging=(0,react_1.memo)(function(e){var a=e.mode,t=e.value,n=e.onChange,r=e.pagingProps,u=e.tablePagingProps,i=e.isSuspenseAsync,o=void 0===i||i,l=e.suspenseProps,i=(0,react_1.useState)(t),e=i[0],s=i[1],_=(0,react_1.useRef)(null),i=(0,usePagingRenderProps_1.default)(__assign(__assign({tablePagingProps:u,mode:a},r),{suspenseRef:_.current})),u=i.isMultiple,c=i.options,g=i.fetchData,a=i.renderProps,f=i.paging,r=(0,react_1.useMemo)(function(){return function(e,a){s(e),null!=n&&n(e,a)}},[n]),p=(0,react_1.useCallback)(function(){return 1===f.page&&!c.length},[f,c]);return(0,ahooks_1.useMount)(function(){o||g()}),(0,ahooks_1.useUpdateEffect)(function(){var e,a;o?null!=(a=null==(e=null==_?void 0:_.current)?void 0:e.reset)&&a.call(e):g()},[o,_.current]),(0,ahooks_1.useUpdateEffect)(function(){s(t)},[t]),(0,react_1.useCallback)(function(e){return o?react_1.default.createElement(adhere_ui_suspense_1.default.ASync,__assign({ref:_},null!=l?l:{},{fetchData:g,isEmpty:p}),e):react_1.default.createElement(react_1.default.Fragment,null,e)},[o,l,f,c])([u&&react_1.default.createElement(CheckboxPagingTable_1.default,__assign({},a({value:e,onChange:r,options:c}))),!u&&react_1.default.createElement(RadioPagingTable_1.default,__assign({},a({value:e,onChange:r,options:c})))])}),TablePaging=InternalTablePaging;TablePaging.displayName="TablePaging",exports.default=TablePaging;
//# sourceMappingURL=TablePaging.js.map
