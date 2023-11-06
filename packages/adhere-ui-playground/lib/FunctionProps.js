"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&("get"in r?t.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,r)}:function(e,t,a,l){e[l=void 0===l?a:l]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),Collapse_1=__importDefault(require("./Collapse")),selectorPrefix="adhere-ui-playground-functionprops",FunctionProps=(0,react_1.memo)(function(e){var t=e.data,i=void 0===t?[]:t,t=__rest(e,["data"]);return react_1.default.createElement(Collapse_1.default,__assign({},t),react_1.default.createElement("div",{className:selectorPrefix},react_1.default.createElement("table",{className:"".concat(selectorPrefix,"-inner")},(i||[]).map(function(e,t){var a=e.name,l=e.desc,r=e.modifier,c=e.params,n=e.returnType,e=e.returnDesc;return react_1.default.createElement(react_1.default.Fragment,{key:"".concat(t)},react_1.default.createElement("tr",{className:"".concat(selectorPrefix,"-item")},react_1.default.createElement("td",{valign:"top",className:"".concat(selectorPrefix,"-item-name")},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r},function(){return react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-modifier")},r||"public"," -"," ")}),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-functionName")},a,"(",react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},(c||[]).map(function(e){return e.name}).join(" , ")),")")),react_1.default.createElement("td",{valign:"top",className:"".concat(selectorPrefix,"-item-info")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-item-desc")},l),react_1.default.createElement("dl",null,react_1.default.createElement("dt",{className:"".concat(selectorPrefix,"-")},adhere_util_intl_1.default.v("参数说明"),"："),react_1.default.createElement("dd",null,react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!c&&0!==c.length},function(){return react_1.default.createElement("ul",{className:"".concat(selectorPrefix,"-level1")},c.map(function(e,t){return react_1.default.createElement("li",{key:"".concat(t+1)},react_1.default.createElement("div",{style:{marginBottom:10}},react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.name)," ","- ",e.desc||"-"),react_1.default.createElement("ul",{className:"".concat(selectorPrefix,"-level2"),style:{marginBottom:10}},react_1.default.createElement("li",null,adhere_util_intl_1.default.v("类型"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.type||"-")),react_1.default.createElement("li",null,adhere_util_intl_1.default.v("默认值"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.defaultVal||"-")),react_1.default.createElement("li",null,adhere_util_intl_1.default.v("是否必填"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.required?adhere_util_intl_1.default.v("是"):adhere_util_intl_1.default.v("否")))))}))}))),react_1.default.createElement("dl",null,react_1.default.createElement("dt",null,adhere_util_intl_1.default.v("返回值"),"："),react_1.default.createElement("dd",null,react_1.default.createElement("ul",{className:"".concat(selectorPrefix,"-level1")},react_1.default.createElement("li",null,adhere_util_intl_1.default.v("类型"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},n||"-")),react_1.default.createElement("li",null,adhere_util_intl_1.default.v("说明"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e||"-"))))))),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:t!==i.length-1},function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-dividing")})}))}))))});exports.default=FunctionProps;
//# sourceMappingURL=FunctionProps.js.map
