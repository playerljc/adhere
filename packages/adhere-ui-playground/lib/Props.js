"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),Table_1=__importDefault(require("./Table")),Collapse_1=__importDefault(require("./Collapse")),selectPrefix="adhere-ui-playground-props",Props=function(e){var t=e.data,r=void 0===t?[]:t,t=(e.children,__rest(e,["data","children"])),e=react_1.useMemo(function(){return[{title:adhere_util_intl_1.default.v("参数"),key:"params",dataIndex:"params",width:"20%"},{title:adhere_util_intl_1.default.v("说明"),key:"desc",dataIndex:"desc",width:"50%"},{title:adhere_util_intl_1.default.v("类型"),key:"type",dataIndex:"type",width:"15%",render:function(e){return react_1.default.createElement("code",{className:selectPrefix+"-highlight"},e)}},{title:adhere_util_intl_1.default.v("默认值"),key:"defaultVal",dataIndex:"defaultVal",width:"15%",render:function(e){return react_1.default.createElement("code",null,e||"-")}}]},[]);return react_1.default.createElement(Collapse_1.default,__assign({},t),react_1.default.createElement("div",{className:selectPrefix},react_1.default.createElement(Table_1.default,{columns:e,dataSource:(r||[]).map(function(e,t){return __assign(__assign({},e),{id:""+(t+1)})}),rowKey:"id"})))};exports.default=Props;
//# sourceMappingURL=Props.js.map
