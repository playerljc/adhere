"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,l)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var a,l=0,n=t.length;l<n;l++)!a&&l in t||((a=a||Array.prototype.slice.call(t,0,l))[l]=t[l]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),use_immer_1=require("use-immer"),adhere_ui_scrollload_1=__importDefault(require("@baifendian/adhere-ui-scrollload")),Paging_1=__importDefault(require("./Paging")),DEFAULT_LIMIT=20;function StaticPaging(e){var a=e.options,t=e.children,l=e.defaultPaging,e=__rest(e,["options","children","defaultPaging"]),r=(0,react_1.useRef)(),n=(0,react_1.useRef)(null),i=(0,react_1.useRef)(adhere_ui_scrollload_1.default.NORMAL),o=(0,react_1.useState)(!0),u=o[0],c=o[1],o=(0,use_immer_1.useImmer)(__assign({page:1,limit:DEFAULT_LIMIT,data:[]},null!=l?l:{})),_=o[0],s=o[1],f=(0,react_1.useMemo)(function(){var e=(null!=a?a:[]).length;return Math.floor(e/_.limit)+(e%_.limit==0?0:1)},[_.limit,a]),o=(0,react_1.useMemo)(function(){return(0,react_1.cloneElement)(t,__assign(__assign({},t.props),{options:_.data}))},[_.data,t]);function d(){s(function(e){var t=null!=l?l:{page:1,limit:DEFAULT_LIMIT},r=null!=(r=t.page)?r:1,t=null!=(t=t.limit)?t:DEFAULT_LIMIT;e.page=r,e.limit=t,e.data=(null!=a?a:[]).slice((e.page-1)*e.limit,e.page*e.limit)})}function p(){var e,t;(t=null==(t=null==(e=null==r?void 0:r.current)?void 0:e.getScrollEl)?void 0:t.call(e))&&(t.scrollTop=0),null!=(t=null==(e=null==r?void 0:r.current)?void 0:e.hideAll)&&t.call(e),n.current=null,i.current=adhere_ui_scrollload_1.default.NORMAL,d()}return(0,ahooks_1.useUpdateLayoutEffect)(function(){n.current&&(i.current=_.page<f?adhere_ui_scrollload_1.default.NORMAL:adhere_ui_scrollload_1.default.EMPTY,n.current(i.current))},[_.data]),(0,ahooks_1.useUpdateEffect)(function(){p()},[a,l]),(0,ahooks_1.useMount)(function(){c(!1),d()}),react_1.default.createElement(Paging_1.default,__assign({ref:r,isLoading:u,onRefresh:function(){p()},onLoadMore:function(e){i.current===adhere_ui_scrollload_1.default.EMPTY?(i.current=adhere_ui_scrollload_1.default.EMPTY,e(adhere_ui_scrollload_1.default.EMPTY)):(n.current=e,s(function(e){e.page=e.page+1,e.data=__spreadArray(__spreadArray([],e.data,!0),(null!=a?a:[]).slice((e.page-1)*e.limit,e.page*e.limit),!0)}))}},e),o)}exports.default=StaticPaging;
//# sourceMappingURL=StaticPaging.js.map
