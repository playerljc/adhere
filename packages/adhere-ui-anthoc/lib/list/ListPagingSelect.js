"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),lodash_uniqby_1=__importDefault(require("lodash.uniqby")),react_1=__importStar(require("react")),DropdownRenderSelect_1=__importDefault(require("../select/DropdownRenderSelect")),CheckboxPagingList_1=__importDefault(require("./CheckboxPagingList")),RadioPagingList_1=__importDefault(require("./RadioPagingList")),usePagingRenderProps_1=__importDefault(require("./usePagingRenderProps")),InternalListPagingSelect=(0,react_1.memo)(function(e){var t=e.pagingProps,r=e.listPagingProps,n=e.defaultOptions,e=__rest(e,["pagingProps","listPagingProps","defaultOptions"]),r=(0,usePagingRenderProps_1.default)(__assign({listPagingProps:r,mode:e.mode},t)),a=r.isMultiple,t=r.inputValue,i=r.options,o=r.setInputValue,u=r.defaultCurrentPage,l=r.defaultPageSize,s=r.setPaging,_=r.fetchData,c=r.renderProps,g=(0,react_1.useMemo)(function(){return(0,lodash_uniqby_1.default)(__spreadArray(__spreadArray([],null!=n?n:[],!0),null!=i?i:[],!0),"value")},[n,i]),f=(0,react_1.useMemo)(function(){var t=i.map(function(e){return e.value});return g.filter(function(e){e=e.value;return t.includes(e)})},[i,g]);return(0,ahooks_1.useMount)(function(){_()}),react_1.default.createElement(DropdownRenderSelect_1.default,__assign({},e,{defaultInputValue:t,options:g,onSearch:o,onClear:function(){s({page:u,limit:l})}}),function(e){e.originNode;e=__rest(e,["originNode"]),e=c(__assign(__assign({},e),{options:f}));return react_1.default.createElement(react_1.default.Fragment,null,a&&react_1.default.createElement(CheckboxPagingList_1.default,__assign({},e)),!a&&react_1.default.createElement(RadioPagingList_1.default,__assign({},e)))})}),ListPagingSelect=InternalListPagingSelect;ListPagingSelect.displayName="ListPagingSelect",exports.default=ListPagingSelect;
//# sourceMappingURL=ListPagingSelect.js.map
