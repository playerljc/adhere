"use strict";var AutoSelectCompleteFormItem,__assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},__spreadArray=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,u=t.length;n<u;n++)!r&&n in t||((r=r||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),lodash_debounce_1=__importDefault(require("lodash.debounce")),react_1=__importStar(require("react")),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),adhere_ui_hooks_1=__importDefault(require("@baifendian/adhere-ui-hooks")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),adhere_util_watchmemoized_1=__importDefault(require("@baifendian/adhere-util-watchmemoized")),CheckAllMultiSelectFormItem_1=__importDefault(require("../CheckAllMultiSelectFormItem")),ItemFactory_1=require("../ItemFactory"),MultiSelectFormItem_1=__importDefault(require("../MultiSelectFormItem")),SelectFormItem_1=__importDefault(require("../SelectFormItem")),util_1=require("../util"),memoized=adhere_util_watchmemoized_1.default.memoized,useForceUpdate=adhere_ui_hooks_1.default.useForceUpdate,SelectFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(SelectFormItem_1.default,{selectProps:__assign({},e),dataSource:t})},SelectMultiFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(MultiSelectFormItem_1.default,{selectProps:__assign({},e),dataSource:t})},SelectCheckAllMultiFormItemWrap=function(e){var t=e.dataSource,a=(e.onCheckAllChange,__rest(e,["dataSource","onCheckAllChange"]));return react_1.default.createElement(CheckAllMultiSelectFormItem_1.default,{selectProps:__assign({},a),dataSource:t,onCheckAllChange:function(e){a.onChange(e?t.map(function(e){return e.value}):[])}})};(0,ItemFactory_1.setItem)("Select","FormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[u].value,n=r instanceof Function?r(t):r;return(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(SelectFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("Select","MultiFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[u].value,n=r instanceof Function?r(t):r;return(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(SelectMultiFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("Select","CheckAllMultiFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[u].value,n=r instanceof Function?r(t):r;return(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(SelectCheckAllMultiFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("SelectDynamic","FormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),n=r[0],u=r[1],o=adhere_util_dict_1.default.value[c].value;return(0,ahooks_1.useMount)(function(){o.then&&o.then(function(e){u(e)})}),(0,ahooks_1.useUpdateEffect)(function(){o instanceof Function&&o(t).then(function(e){u(e)})},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(SelectFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("SelectDynamic","MultiFormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),n=r[0],u=r[1],o=adhere_util_dict_1.default.value[c].value;return(0,ahooks_1.useMount)(function(){o.then&&o.then(function(e){u(e)})}),(0,ahooks_1.useUpdateEffect)(function(){o instanceof Function&&o(t).then(function(e){u(e)})},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(SelectMultiFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("SelectDynamic","CheckAllMultiFormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),n=r[0],u=r[1],o=adhere_util_dict_1.default.value[c].value;return(0,ahooks_1.useMount)(function(){o.then&&o.then(function(e){u(e)})}),(0,ahooks_1.useUpdateEffect)(function(){o instanceof Function&&o(t).then(function(e){u(e)})},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(SelectCheckAllMultiFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("AutoSelectComplete","FormItem",function(f){return function(e){var t=e.debounceTimeout,a=void 0===t?300:t,r=__rest(e,["debounceTimeout"]),n=useForceUpdate(),u=adhere_util_dict_1.default.value[f].value,o=(0,react_1.useRef)(0),t=(0,react_1.useState)(!1),e=t[0],c=t[1],t=(0,react_1.useState)([]),l=t[0],i=t[1],_=(0,react_1.useRef)();return(0,react_1.useEffect)(function(){_.current=(0,lodash_debounce_1.default)(memoized.createMemoFun(function(e){o.current+=1;var a=o.current;!e||Array.isArray(e)&&!e.length?(i(function(e){return e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value})}),c(!1)):u(e).then(function(t){a===o.current&&(i(function(e){var a=__spreadArray(__spreadArray([],t,!0),e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value}),!0);return __spreadArray([],Array.from(new Set(a.map(function(e){return e.value}))),!0).map(function(t){return a.find(function(e){return e.value===t})})}),c(!1))})}),a||300),n()},[a,r.value]),react_1.default.createElement(SelectFormItem_1.default,{selectProps:__assign({notFoundContent:e?react_1.default.createElement(adhere_ui_anthoc_1.Spin,{size:"small"}):null,filterOption:!1,onSearch:_.current,onClear:function(){i([]),c(!1)}},r),dataSource:l})}}),(0,ItemFactory_1.setItem)("AutoSelectComplete","MultiFormItem",function(e,a){return function(e){var t=null!=AutoSelectCompleteFormItem?AutoSelectCompleteFormItem:AutoSelectCompleteFormItem=(0,ItemFactory_1.getItem)({itemName:"AutoSelectComplete",functionName:"FormItem",dictName:a});return react_1.default.createElement(t,__assign({mode:"multiple"},e))}}),(0,ItemFactory_1.setItem)("AutoSelectComplete","CheckAllMultiFormItem",function(m){return function(r){var e=useForceUpdate(),t=(r.onCheckAllChange,r.debounceTimeout),a=__rest(r,["onCheckAllChange","debounceTimeout"]),n=adhere_util_dict_1.default.value[m].value,u=(0,react_1.useRef)(0),o=(0,react_1.useState)(!1),c=o[0],l=o[1],o=(0,react_1.useState)([]),i=o[0],_=o[1],f=(0,react_1.useRef)();return(0,react_1.useEffect)(function(){f.current=(0,lodash_debounce_1.default)(memoized.createMemoFun(function(e){u.current+=1;var a=u.current;!e||Array.isArray(e)&&!e.length?(_(function(e){return e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value})}),l(!1)):n(e).then(function(t){a===u.current&&(_(function(e){var a=__spreadArray(__spreadArray([],t,!0),e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value}),!0);return __spreadArray([],Array.from(new Set(a.map(function(e){return e.value}))),!0).map(function(t){return a.find(function(e){return e.value===t})})}),l(!1))})}),t||300),e()},[t,r.value]),react_1.default.createElement(CheckAllMultiSelectFormItem_1.default,{selectProps:__assign({notFoundContent:c?react_1.default.createElement(adhere_ui_anthoc_1.Spin,{size:"small"}):null,filterOption:!1,onSearch:f.current,onClear:function(){_([]),l(!1)}},a),dataSource:i,onCheckAllChange:function(e){a.onChange(e?i.map(function(e){return e.value}):[])}})}});
//# sourceMappingURL=Select.js.map
