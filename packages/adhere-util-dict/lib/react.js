"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.set=void 0,require("ahooks")),react_1=__importStar(require("react")),adhere_ui_suspense_1=__importDefault(require("@baifendian/adhere-ui-suspense")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),dict_1=__importDefault(require("./dict")),ComponentCache=new Map,FunctionComponent=function(f){return function(e,t){var n=e.children,r=e.firstLoading,a=e.renderNormalLoading,i=e.isEmpty,o=e.renderEmpty,u=e.args,c=e.isUseMemo,l=__rest(e,["children","firstLoading","renderNormalLoading","isEmpty","renderEmpty","args","isUseMemo"]),e=(0,react_1.useState)({data:null,isValidate:!0,isPending:!0}),s=e[0],d=e[1],_=(0,react_1.useRef)(),e=(0,react_1.useMemo)(function(){var e=__assign({},l);return r&&(e.firstLoading=r),a&&(e.renderNormalLoading=a),o&&(e.renderEmpty=o),i&&(e.isEmpty=i),e},[r,a,o,i]);(0,ahooks_1.useUpdateLayoutEffect)(function(){var e,t;d(function(e){return{data:e.data,isValidate:!0,isPending:!0}}),null!=(t=null==(e=null==_?void 0:_.current)?void 0:e.fetchData)&&t.call(e)},u||[]),(0,react_1.useImperativeHandle)(t,function(){return{reload:function(){var e,t;return d(function(e){return{data:e.data,isValidate:!0,isPending:!0}}),null==(t=null==(e=null==_?void 0:_.current)?void 0:e.fetchData)?void 0:t.call(e)},reset:function(){var e,t;return d(function(e){return{data:null,isValidate:!0,isPending:!0}}),null==(t=null==(e=null==_?void 0:_.current)?void 0:e.reset)?void 0:t.call(e)}}});return react_1.default.createElement(adhere_ui_suspense_1.default.ASync,__assign({ref:_,fetchData:function(){dict_1.default.handlers[f].isUseMemo=c||!1;var e=(e=dict_1.default.value[f]).value.apply(e,u||[]);return e.then?e.then(function(e){return d({data:e,isValidate:!0,isPending:!1}),e}).catch(function(e){return d({data:e,isValidate:!1,isPending:!1}),e}):(d({data:e,isValidate:!0,isPending:!1}),Promise.resolve(e))}},e,{isEmpty:function(){return null==s||(null==i?void 0:i(s))}}),null==n?void 0:n(s))}},PromiseComponent=function(s){return function(e,t){var n=e.children,r=e.firstLoading,a=e.renderNormalLoading,i=e.isEmpty,o=e.renderEmpty,u=__rest(e,["children","firstLoading","renderNormalLoading","isEmpty","renderEmpty"]),e=(0,react_1.useState)({data:null,isPending:!0,isValidate:!0}),c=e[0],l=e[1],e=(0,react_1.useMemo)(function(){var e=__assign({},u);return r&&(e.firstLoading=r),a&&(e.renderNormalLoading=a),o&&(e.renderEmpty=o),i&&(e.isEmpty=i),e},[r,a,o,i]);return react_1.default.createElement(adhere_ui_suspense_1.default.ASync,__assign({ref:t,fetchData:function(){return dict_1.default.value[s].value.then(function(e){return l({data:e,isValidate:!0,isPending:!1}),e}).catch(function(e){return l({data:e,isValidate:!1,isPending:!1}),e})}},e,{isEmpty:function(){return null==c||(null==i?void 0:i(c))}}),null==n?void 0:n(c))}},NoPromiseComponent=function(a){return function(e){var t=e.children,n=e.isEmpty,e=e.renderEmpty,r=dict_1.default.value[a].value;return null==r||null!=n&&n(r)?e?null==e?void 0:e():null:null==t?void 0:t({data:r,isValidate:!0,isPending:!1})}},ComponentMap=new Map([["Function",function(e){return ComponentCache.has("Function_".concat(e))||ComponentCache.set("Function_".concat(e),(0,react_1.memo)((0,react_1.forwardRef)(FunctionComponent(e)))),ComponentCache.get("Function_".concat(e))}],["Promise",function(e){return ComponentCache.has("Promise_".concat(e))||ComponentCache.set("Promise_".concat(e),(0,react_1.memo)((0,react_1.forwardRef)(PromiseComponent(e)))),ComponentCache.get("Promise_".concat(e))}],["NotPromise",function(e){return ComponentCache.has("NotPromise_".concat(e))||ComponentCache.set("NotPromise_".concat(e),(0,react_1.memo)(NoPromiseComponent(e))),ComponentCache.get("NotPromise_".concat(e))}]]),Component=function(a){return function(e,t){var n=dict_1.default.value[a].value,r=adhere_util_1.default.isFunction(n)?null==(r=ComponentMap.get("Function"))?void 0:r(a):n.then?null==(r=ComponentMap.get("Promise"))?void 0:r(a):null==(n=ComponentMap.get("NotPromise"))?void 0:n(a);return r?react_1.default.createElement(r,__assign({ref:t},e)):null}};function set(e){DictReactComponents[e]||(DictReactComponents[e]=(0,react_1.memo)((0,react_1.forwardRef)(Component(e))))}exports.set=set;var DictReactComponents={};exports.default=DictReactComponents;
//# sourceMappingURL=react.js.map
