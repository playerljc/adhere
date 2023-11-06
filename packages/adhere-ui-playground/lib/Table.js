"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),selectorPrefix="adhere-ui-playground-table",Table=(0,react_1.memo)(function(e){var t=e.className,t=void 0===t?"":t,a=e.style,a=void 0===a?{}:a,r=e.tableClassName,r=void 0===r?"":r,l=e.tableStyle,l=void 0===l?{}:l,n=e.columns,o=void 0===n?[]:n,n=e.dataSource,n=void 0===n?[]:n,e=e.rowKey,u=void 0===e?"id":e;return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix),null!=t?t:""),style:null!=a?a:{}},react_1.default.createElement("table",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-inner"),null!=r?r:""),style:null!=l?l:{}},react_1.default.createElement("thead",null,react_1.default.createElement("tr",{className:"".concat(selectorPrefix,"-header")},(o||[]).map(function(e){var t=e.className,t=void 0===t?"":t,a=e.style,a=void 0===a?{}:a,r=e.align,l={key:e.key,width:e.width};return react_1.default.createElement("th",__assign({},l,{className:(0,classnames_1.default)("".concat(selectorPrefix,"-header-column"),null!=t?t:""),style:__assign({textAlign:r||"left"},null!=a?a:{})}),e.title||"-")}))),react_1.default.createElement("tbody",null,(n||[]).map(function(i,c){return react_1.default.createElement("tr",{className:"".concat(selectorPrefix,"-row"),key:i[u]},o.map(function(e,t){var a=e.dataIndex,r=e.render,l=e.align,n=e.valign;return react_1.default.createElement("td",{className:"".concat(selectorPrefix,"-cell"),key:e.key,valign:n||"top",style:{textAlign:l||"left"}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r,noMatch:function(){return i[a]||"-"}},function(){return null==r?void 0:r(i[a],i,c,t)}))}))}))))});exports.default=Table;
//# sourceMappingURL=Table.js.map
