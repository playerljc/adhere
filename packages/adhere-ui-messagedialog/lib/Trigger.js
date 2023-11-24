"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),lodash_debounce_1=__importDefault(require("lodash.debounce")),react_1=__importStar(require("react")),MessageDialog_1=__importDefault(require("./MessageDialog")),Modal_1=require("./Modal"),SubmitButton_1=__importDefault(require("./SubmitButton")),Trigger=function(e){var t=e.className,n=e.style,r=e.value,u=e.onChange,l=e.children,a=e.renderTrigger,o=e.modalConfig,i=e.actions,e=e.maximized,c=void 0===e||e,s=(0,react_1.useMemo)(function(){return l?react_1.default.cloneElement(l,__assign(__assign({},l.props),{value:r}),l.props.children):null},[l]);return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(Modal_1.selectorPrefix,"-trigger"),null!=t?t:""),style:null!=n?n:{},onClick:(0,lodash_debounce_1.default)(function(){var e,t,n=null!=(n=null==o?void 0:o.config)?n:{};n.footer=null!=(e=null==(e=(t=null!=i?i:[]).map)?void 0:e.call(t,function(e){return react_1.default.createElement(SubmitButton_1.default,__assign({},null!=e?e:{},{onClick:function(){return r=e.onClick,l=null==a?void 0:a.close,new Promise(function(t,n){var e;null!=(e=null==r?void 0:r())&&e.then(function(e){null!=u&&u(e),setTimeout(function(){t(e),null!=l&&l()},300)}).catch(function(e){return n(e)})});var r,l}}))}))?e:[];var a=null==(t=new Map([[!0,MessageDialog_1.default.MaximizeModal],[!1,MessageDialog_1.default.Modal]]).get(c))?void 0:t({config:n,defaultCloseBtn:!0,children:s})},200)},null==a?void 0:a())};Trigger.displayName="Trigger",exports.default=Trigger;
//# sourceMappingURL=Trigger.js.map
