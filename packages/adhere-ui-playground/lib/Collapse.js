"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),selectorPrefix="adhere-ui-playground-collapse",Collapse=(0,react_1.memo)(function(e){var t=e.headerClassName,t=void 0===t?"":t,a=e.headerStyle,a=void 0===a?{}:a,r=e.bodyClassName,l=void 0===r?"":r,r=e.bodyStyle,c=void 0===r?{}:r,o=e.children,i=e.title,n=e.extra,r=e.border,d=void 0!==r&&r,r=e.scrollY,r=void 0!==r&&r,s=e.fixedHeaderScrollBody,s=void 0!==s&&s,u=(0,react_1.useState)(e.defaultCollapse||!1),f=u[0],_=u[1];return(0,react_1.useEffect)(function(){_(e.defaultCollapse||!1)},[e.defaultCollapse]),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,r?"".concat(selectorPrefix,"-scroll-y"):"",s?"".concat(selectorPrefix,"-fixed-header-scroll-body"):"")},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-header"),d?"".concat(selectorPrefix,"-header-border"):"",null!=t?t:""),style:null!=a?a:{},onClickCapture:function(){_(!f)}},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-header-collapse")},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-header-collapse-icon"),f?"":"".concat(selectorPrefix,"-header-collapse-icon-close"))}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!i},function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-header-title")},i)})),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!n},function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-header-extra")},n)})),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!f},function(){return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-body"),d?"".concat(selectorPrefix,"-body-border"):"",null!=l?l:"",i||n?"".concat(selectorPrefix,"-body-exists-header"):""),style:null!=c?c:{}},o)}))});Collapse.displayName="Collapse",exports.default=Collapse;
//# sourceMappingURL=Collapse.js.map
