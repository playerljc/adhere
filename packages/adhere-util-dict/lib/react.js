"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.set=void 0,require("ahooks")),react_1=__importStar(require("react")),adhere_ui_suspense_1=__importDefault(require("@baifendian/adhere-ui-suspense")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),dict_1=__importDefault(require("./dict"));function set(_){var e;DictReactComponents[_]||(e=dict_1.default.value[_].value,adhere_util_1.default.isFunction(e)?DictReactComponents[_]=(0,react_1.forwardRef)(function(e,t){function r(){dict_1.default.handlers[_].isUseMemo=s||!1;var e=(e=dict_1.default.value[_]).value.apply(e,o||[]);return e.then?e.then(function(e){return l(e),e}):(l(e),Promise.resolve(e))}var n=e.children,i=e.firstLoading,a=e.isEmpty,u=e.renderEmpty,o=e.args,s=e.isUseMemo,e=(0,react_1.useState)(),c=e[0],l=e[1],e={};i&&(e.firstLoading=i),u&&(e.renderEmpty=u),a&&(e.isEmpty=a);return(0,ahooks_1.useUpdateLayoutEffect)(function(){r()},o||[]),react_1.default.createElement(adhere_ui_suspense_1.default.ASync,__assign({ref:t,fetchData:r},e,{isEmpty:function(){return null==c||(null==a?void 0:a(c))}}),null==n?void 0:n(c))}):e.then?DictReactComponents[_]=(0,react_1.forwardRef)(function(e,t){var r=e.children,n=e.firstLoading,i=e.isEmpty,e=e.renderEmpty,a=(0,react_1.useState)(),u=a[0],o=a[1],a={};n&&(a.firstLoading=n),e&&(a.renderEmpty=e),i&&(a.isEmpty=i);return react_1.default.createElement(adhere_ui_suspense_1.default.ASync,__assign({ref:t,fetchData:function(){return dict_1.default.value[_].value.then(function(e){return o(e),e})}},a,{isEmpty:function(){return null==u||(null==i?void 0:i(u))}}),null==r?void 0:r(u))}):DictReactComponents[_]=function(e){e=e.children;return null==e?void 0:e(dict_1.default.value[_].value)})}exports.set=set;var DictReactComponents={};exports.default=DictReactComponents;
//# sourceMappingURL=react.js.map
