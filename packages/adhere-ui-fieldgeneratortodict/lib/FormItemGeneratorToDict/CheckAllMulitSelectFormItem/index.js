"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),selectorPrefix="adhere-ui-antdformitem",CheckAllMulitSelectFormItem=function(a){var e=(0,react_1.useState)(!1),t=e[0],n=e[1];function r(e){n(e.target.checked),a.onCheckAllChange&&a.onCheckAllChange(e.target.checked)}return(0,react_1.useEffect)(function(){var e;n(JSON.stringify(JSON.parse(JSON.stringify((null==(e=null==a?void 0:a.selectProps)?void 0:e.value)||[])).sort())===JSON.stringify((a.dataSource||[]).map(function(e){return e.value}).sort()))},[null==(e=null==a?void 0:a.selectProps)?void 0:e.value,a.dataSource]),react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign(__assign({},a.selectProps),{dropdownRender:function(e){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-wrap-checkallwrap")},react_1.default.createElement(adhere_ui_anthoc_1.Checkbox,{checked:t,onChange:r},adhere_util_intl_1.default.v("全选"))),react_1.default.createElement(adhere_ui_anthoc_1.Divider,{style:{margin:"4px 0"}}),e)},onChange:function(e){var t,r;n(e.length===(a.dataSource||[]).map(function(e){return e.value}).length),null!=(r=null==(t=null==a?void 0:a.selectProps)?void 0:t.onChange)&&r.call(t,e)}}),dataSource:a.dataSource})};exports.default=CheckAllMulitSelectFormItem;
//# sourceMappingURL=index.js.map