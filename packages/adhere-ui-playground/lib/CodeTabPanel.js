"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},prop_types_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodeTabPanelPropTypes=exports.CodeTabPanelDefaultProps=void 0,__importDefault(require("prop-types"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),CodePanel_1=__importStar(require("./CodePanel")),SimpleTabs_1=__importDefault(require("./SimpleTabs")),selectPrefix="adhere-ui-playground-code-tab-panel",TabPanel=SimpleTabs_1.default.TabPanel,CodeTabPanel=function(e){var t=e.config,t=void 0===t?[]:t,r=e.onChange,a=react_1.useState(e.active),n=a[0],i=a[1],a=react_1.useCallback(function(e){i(e),r&&r(e)},[r,n]);return react_1.useEffect(function(){return i(e.active)},[e.active]),react_1.default.createElement("div",{className:selectPrefix},react_1.default.createElement(SimpleTabs_1.default,{activeKey:n,onChange:a},(t||[]).map(function(e){var t=e.key,r=e.title,a=__rest(e,["key","title"]);return react_1.default.createElement(TabPanel,{title:r,key:t,index:t},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:n===t},function(){return react_1.default.createElement(CodePanel_1.default,__assign({},a))}))})))};exports.CodeTabPanelDefaultProps={active:"",config:[]},exports.CodeTabPanelPropTypes={active:prop_types_1.default.string,config:prop_types_1.default.arrayOf(prop_types_1.default.shape(__assign(__assign({},CodePanel_1.CodePanelPropTypes),{key:prop_types_1.default.string,title:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.node])}))),onChange:prop_types_1.default.func},exports.default=react_1.memo(CodeTabPanel);
//# sourceMappingURL=CodeTabPanel.js.map
