"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,__importDefault(require("classnames"))),react_1=__importStar(require("react")),react_draggable_1=__importDefault(require("react-draggable")),icons_1=require("@ant-design/icons"),adhere_ui_space_1=__importDefault(require("@baifendian/adhere-ui-space")),Modal_1=__importDefault(require("./Modal")),MaximizeModalDialog=(exports.selectorPrefix="adhere-ui-message-dialog-maximize-modal",(0,react_1.memo)(function(e){var t=e.config,r=t.title,a=t.closeIcon,o=__rest(t,["title","closeIcon"]),n=__rest(e,["config"]),c=(0,react_1.useRef)(null),t=(0,react_1.useState)(!1),l=t[0],i=t[1],e=(0,react_1.useState)(!0),s=e[0],u=e[1],t=(0,react_1.useState)({left:0,top:0,bottom:0,right:0}),d=t[0],f=t[1],e=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(exports.selectorPrefix),null!=(e=o.className)?e:"",((e={})["".concat(exports.selectorPrefix,"-maximize")]=l,e))},[l,o]);function _(e,t){var r,a=window.document.documentElement,o=a.clientWidth,a=a.clientHeight,n=null==(n=null==(r=c.current)?void 0:r.getBoundingClientRect)?void 0:n.call(r);n&&f({left:-n.left+t.x,right:o-(n.right-t.x),top:-n.top+t.y,bottom:a-(n.bottom-t.y)})}function m(){var e;null!=(e=null==n?void 0:n.close)&&e.call(n)}function p(){i(!1)}function g(){i(!0)}return react_1.default.createElement(Modal_1.default,__assign({},n,{config:__assign(__assign({},null!=o?o:{}),{className:e,modalRender:function(e){return react_1.default.createElement(react_draggable_1.default,{disabled:!!l||s,bounds:d,nodeRef:c,onStart:_},function(e){var t;return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-inner"),ref:c},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-header"),((t={})["".concat(exports.selectorPrefix,"-header-draggable")]=!l,t)),onMouseOver:function(){l||s&&u(!1)},onMouseOut:function(){l||u(!0)}},react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-header-title")},r),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-header-actions")},react_1.default.createElement(adhere_ui_space_1.default.Group,{direction:"horizontal",size:5},l&&react_1.default.createElement(icons_1.BlockOutlined,{rev:"",className:"".concat(exports.selectorPrefix,"-header-action"),onClick:p}),!l&&react_1.default.createElement(icons_1.BorderOutlined,{rev:"",className:"".concat(exports.selectorPrefix,"-header-action"),onClick:g}),function(){if(a)return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-header-action"),onClick:m},a);return react_1.default.createElement(icons_1.CloseOutlined,{rev:"",className:"".concat(exports.selectorPrefix,"-header-action"),onClick:m})}()))),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-body")},e))}(e))}})}))}));MaximizeModalDialog.displayName="MaximizeModalDialog",exports.default=MaximizeModalDialog;
//# sourceMappingURL=MaximizeModal.js.map
