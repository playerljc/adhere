"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),classnames_1=__importDefault(require("classnames")),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),selectorPrefix="adhere-ui-font-size-setting",FontSizeSetting=(0,react_1.memo)(function(e){var t=e.className,a=e.style,r=e.onChange,l=(0,react_1.useState)(e.value),n=l[0],c=l[1],l=(0,react_1.useRef)(null),u=(0,react_1.useCallback)(function(e){c(e),null!=r&&r(e)},[n]);return(0,react_1.useEffect)(function(){c(e.value)},[e.value]),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=t?t:""),style:null!=a?a:{},ref:l},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-range-wrap")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-separated-tool")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-separated")},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("小"))),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-separated")},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("中"))),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-separated")},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("大"))),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-separated")},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("特大")))),react_1.default.createElement(antd_1.Slider,__assign({},(0,omit_js_1.default)(e,["className","style","value","onChange"]),{value:n,onChange:u}))))});exports.default=FontSizeSetting;
//# sourceMappingURL=FontSizeSetting.js.map
