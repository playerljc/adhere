"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},prop_types_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodeTabPanelPropTypes=exports.CodeTabPanelDefaultProps=void 0,__importDefault(require("prop-types"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),CodePanel_1=__importStar(require("./CodePanel")),SimpleTabs_1=__importDefault(require("./SimpleTabs")),selectPrefix="adhere-ui-playground-code-tab-panel",TabPanel=SimpleTabs_1.default.TabPanel,CodeTabPanel=(0,react_1.memo)(function(e){var t=e.config,t=void 0===t?[]:t,a=e.onChange,r=(0,react_1.useState)(e.active),i=r[0],n=r[1],r=(0,react_1.useCallback)(function(e){n(e),a&&a(e)},[a,i]);return(0,react_1.useEffect)(function(){n(e.active)},[e.active]),react_1.default.createElement("div",{className:selectPrefix},react_1.default.createElement(SimpleTabs_1.default,{activeKey:i,onChange:r},(t||[]).map(function(e){var t=e.key,a=e.title,r=e.className,n=e.style,o=__rest(e,["key","title","className","style"]);return react_1.default.createElement(TabPanel,{key:t,index:t,className:r,style:n,title:a},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:i===t},function(){return react_1.default.createElement(CodePanel_1.default,__assign({},o))}))})))});exports.CodeTabPanelDefaultProps={active:"",config:[]},exports.CodeTabPanelPropTypes={active:prop_types_1.default.string,config:prop_types_1.default.arrayOf(prop_types_1.default.shape(__assign(__assign({},CodePanel_1.CodePanelPropTypes),{className:prop_types_1.default.string,style:prop_types_1.default.object,key:prop_types_1.default.string,title:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.node])}))),onChange:prop_types_1.default.func},exports.default=CodeTabPanel;
//# sourceMappingURL=CodeTabPanel.js.map
