"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),PlayGround_1=__importDefault(require("./PlayGround")),PlayGroundMulti_1=__importDefault(require("./PlayGroundMulti")),PlayGroundTab_1=__importDefault(require("./PlayGroundTab")),PlayGroundTabMobile_1=__importDefault(require("./PlayGroundTabMobile")),constant_1=__importDefault(require("./constant")),selectPrefix="adhere-ui-playground-code-box",CodeBoxPanel=(0,react_1.memo)(function(o){var e=o.columnCount,a=void 0===e?1:e,e=o.config,l=void 0===e?[]:e,t=o.title,e=o.isShowExpandAllBtn,e=void 0===e||e,n=(0,react_1.useState)(""),c=n[0],r=n[1],n=(0,react_1.useState)(o.expandAll),u=n[0],i=n[1],d=(0,react_1.useRef)(!1),n=Array.from({length:a}).fill(void 0),_=new Map([["PlayGroundMulti",function(e,t){var n=o.config,r=n[t],a=r.renderWrap,i=r.renderChildren,r=(r.type,__rest(r,["renderWrap","renderChildren","type"])),l=react_1.default.createElement(PlayGroundMulti_1.default,__assign({},r,{isActive:c===r.id,expand:u}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!i},function(){return null==i?void 0:i(e,t,n)}));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a,noMatch:function(){return l}},function(){return null==a?void 0:a(e,t,n,l)})}],["PlayGround",function(e,t){var n=l[t],r=n.renderWrap,a=n.renderChildren,n=(n.type,__rest(n,["renderWrap","renderChildren","type"])),i=react_1.default.createElement(PlayGround_1.default,__assign({},n,{isActive:c===n.id,expand:u}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a},function(){return null==a?void 0:a(e,t,l)}));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r,noMatch:function(){return i}},function(){return null==r?void 0:r(e,t,l,i)})}],["PlayGroundTab",function(e,t){var n=l[t],r=n.renderWrap,a=n.renderChildren,n=(n.type,__rest(n,["renderWrap","renderChildren","type"])),i=react_1.default.createElement(PlayGroundTab_1.default,__assign({},n,{isActive:c===n.id,expand:u}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a},function(){return null==a?void 0:a(e,t,l)}));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r,noMatch:function(){return i}},function(){return null==r?void 0:r(e,t,l,i)})}],["PlayGroundTabMobile",function(e,t){var n=l[t],r=n.renderWrap,n=(n.type,__rest(n,["renderWrap","type"])),a=react_1.default.createElement(PlayGroundTabMobile_1.default,__assign({},n,{isActive:c===n.id,expand:u}));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r,noMatch:function(){return a}},function(){return null==r?void 0:r(e,t,l,a)})}]]);return(0,react_1.useEffect)(function(){if("undefined"!=typeof window)return window.addEventListener("hashchange",e),function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",e)};function e(){var e=window.location.hash.substring(1);r(e)}},[]),(0,react_1.useEffect)(function(){i(o.expandAll)},[o.expandAll]),(0,react_1.useEffect)(function(){d.current=!1},[u]),react_1.default.createElement("div",{className:selectPrefix},react_1.default.createElement("div",{className:"".concat(selectPrefix,"-header")},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t},function(){return react_1.default.createElement("div",{className:"".concat(selectPrefix,"-header-title")},t)}),react_1.default.createElement("div",{className:"".concat(selectPrefix,"-header-extra")},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:e},function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:u,noMatch:function(){return react_1.default.createElement("img",{className:"".concat(selectPrefix,"-expand-code"),src:constant_1.default.ExpandCodeAll,alt:"",onClick:function(){d.current||(d.current=!0,i(!0))}})}},function(){return react_1.default.createElement("img",{className:"".concat(selectPrefix,"-expand-code"),src:constant_1.default.CloseCodeAll,alt:"",onClick:function(){d.current||(d.current=!0,i(!1))}})})}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!o.extra},function(){return o.extra}))),react_1.default.createElement("div",{className:"".concat(selectPrefix,"-main")},n.map(function(e,r){return react_1.default.createElement("div",{className:"".concat(selectPrefix,"-column"),key:"".concat(r)},l.map(function(e,t){var n;return t%a===r?react_1.default.createElement("div",{className:"".concat(selectPrefix,"-item"),key:e.id},null==(n=null==(n=null==_?void 0:_.get)?void 0:n.call(_,e.type))?void 0:n(r,t)):null}))})))});exports.default=CodeBoxPanel;
//# sourceMappingURL=CodeBoxPanel.js.map
