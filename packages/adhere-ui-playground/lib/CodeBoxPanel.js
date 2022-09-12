"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),PlayGround_1=__importDefault(require("./PlayGround")),PlayGroundTab_1=__importDefault(require("./PlayGroundTab")),PlayGroundMulit_1=__importDefault(require("./PlayGroundMulit")),constant_1=__importDefault(require("./constant")),selectPrefix="adhere-ui-playground-code-box",CodeBoxPanel=function(u){var e=u.columnCount,r=void 0===e?1:e,t=u.config,l=void 0===t?[]:t,n=u.title,e=u.isShowExpandAllBtn,t=void 0===e||e,e=react_1.useState(""),d=e[0],a=e[1],e=react_1.useState(u.expandAll),o=e[0],i=e[1],c=react_1.useRef(!1),e=[];null!=r&&(e.length=r),e.fill(void 0);var _=new Map([["PlayGroundMulit",function(e,t){var n=u.config,r=n[t],a=r.renderWrap,i=r.renderChildren,r=(r.type,__rest(r,["renderWrap","renderChildren","type"])),l=react_1.default.createElement(PlayGroundMulit_1.default,__assign({},r,{isActive:d===r.id,expand:o}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!i},function(){return null==i?void 0:i(e,t,n)}));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a,noMatch:function(){return l}},function(){return null==a?void 0:a(e,t,n,l)})}],["PlayGround",function(e,t){var n=l[t],r=n.renderWrap,a=n.renderChildren,n=(n.type,__rest(n,["renderWrap","renderChildren","type"])),i=react_1.default.createElement(PlayGround_1.default,__assign({},n,{isActive:d===n.id,expand:o}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a},function(){return null==a?void 0:a(e,t,l)}));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r,noMatch:function(){return i}},function(){return null==r?void 0:r(e,t,l,i)})}],["PlayGroundTab",function(e,t){var n=l[t],r=n.renderWrap,a=n.renderChildren,n=(n.type,__rest(n,["renderWrap","renderChildren","type"])),i=react_1.default.createElement(PlayGroundTab_1.default,__assign({},n,{isActive:d===n.id,expand:o}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a},function(){return null==a?void 0:a(e,t,l)}));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r,noMatch:function(){return i}},function(){return null==r?void 0:r(e,t,l,i)})}]]);return react_1.useEffect(function(){if("undefined"!=typeof window)return window.addEventListener("hashchange",e),function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",e)};function e(){var e=window.location.hash.substring(1);a(e)}},[]),react_1.useEffect(function(){return i(u.expandAll)},[u.expandAll]),react_1.useEffect(function(){c.current=!1},[o]),react_1.default.createElement("div",{className:selectPrefix},react_1.default.createElement("div",{className:selectPrefix+"-header"},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!n},function(){return react_1.default.createElement("div",{className:selectPrefix+"-header-title"},n)}),react_1.default.createElement("div",{className:selectPrefix+"-header-extra"},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:t},function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!o,noMatch:function(){return react_1.default.createElement("img",{className:selectPrefix+"-expand-code",src:constant_1.default.ExpandCodeAll,alt:"",onClick:function(){c.current||(c.current=!0,i(!0))}})}},function(){return react_1.default.createElement("img",{className:selectPrefix+"-expand-code",src:constant_1.default.CloseCodeAll,alt:"",onClick:function(){c.current||(c.current=!0,i(!1))}})})}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!u.extra},function(){return u.extra}))),react_1.default.createElement("div",{className:selectPrefix+"-main"},e.map(function(e,n){return react_1.default.createElement("div",{className:selectPrefix+"-column"},l.map(function(e,t){return t%r===n?react_1.default.createElement("div",{className:selectPrefix+"-item",key:e.id},null===(e=null==_?void 0:_.get(e.type))||void 0===e?void 0:e(n,t)):null}))})))};exports.default=react_1.memo(CodeBoxPanel);
//# sourceMappingURL=CodeBoxPanel.js.map
