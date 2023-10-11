"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,l)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,l=0,a=t.length;l<a;l++)!n&&l in t||((n=n||Array.prototype.slice.call(t,0,l))[l]=t[l]);return e.concat(n||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_icons_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile-icons")),classnames_1=__importDefault(require("classnames")),lodash_debounce_1=__importDefault(require("lodash.debounce")),react_1=__importStar(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),popup_1=__importDefault(require("./popup")),SubmitButton_1=__importDefault(require("./SubmitButton")),selectorPrefix="adhere-ui-popup",triggerSelectorPrefix="".concat(selectorPrefix,"-trigger"),triggerSelectorInnerPrefix="".concat(triggerSelectorPrefix,"-inner"),Trigger=function(e){var t=e.className,r=e.style,n=e.renderTrigger,l=e.popupConfig,a=e.title,c=e.closeIcon,i=void 0===c||c,o=e.extra,u=e.actions,s=e.children,f=e.value,_=e.onChange,d=(0,react_1.useMemo)(function(){return s?react_1.default.cloneElement(s,__assign(__assign({},s.props),{value:f}),s.props.children):null},[s]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(triggerSelectorPrefix,null!=t?t:""),style:null!=r?r:{},onClick:(0,lodash_debounce_1.default)(function(){var e,t,r=popup_1.default.create(__assign(__assign({},null!=l?l:{}),{onBeforeClose:function(){var e,t;return null!=(t=null==(t=null==(e=null!=l?l:{})?void 0:e.onBeforeClose)?void 0:t.call(e))?t:Promise.resolve()},onAfterClose:function(){var e,t;return null!=(t=null==(t=null==(e=null!=l?l:{})?void 0:e.onAfterClose)?void 0:t.call(e))?t:popup_1.default.destroy(r)},children:react_1.default.createElement("div",{className:(0,classnames_1.default)(triggerSelectorInnerPrefix)},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(triggerSelectorInnerPrefix,"-header"))},react_1.default.createElement("div",{className:"".concat(triggerSelectorInnerPrefix,"-close"),onClick:function(){return r.close()}},i&&react_1.default.createElement("span",{className:"".concat(triggerSelectorInnerPrefix,"-close-inner")},react_1.default.createElement(antd_mobile_icons_1.LeftOutline,null))),a&&react_1.default.createElement("div",{className:"".concat(triggerSelectorInnerPrefix,"-title")},a),o&&react_1.default.createElement("div",{className:"".concat(triggerSelectorInnerPrefix,"-extra")},o)),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(triggerSelectorInnerPrefix,"-body"))},d),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(triggerSelectorInnerPrefix,"-actions"))},__spreadArray([react_1.default.createElement("div",{key:"close",className:(0,classnames_1.default)("".concat(triggerSelectorInnerPrefix,"-action"))},react_1.default.createElement(SubmitButton_1.default,{key:"close",onClick:function(){return new Promise(function(e){null!=r&&r.close(),e()})}},adhere_util_intl_1.default.v("关闭")))],null!=(t=null==(t=(e=null!=u?u:[]).map)?void 0:t.call(e,function(e){return react_1.default.createElement("div",{key:e.key,className:(0,classnames_1.default)("".concat(triggerSelectorInnerPrefix,"-action"))},react_1.default.createElement(SubmitButton_1.default,__assign({},null!=e?e:{},{onClick:function(){return n=e.onClick,l=function(){return null==r?void 0:r.close()},new Promise(function(t,r){var e;null!=(e=null==n?void 0:n())&&e.then(function(e){null!=_&&_(e),setTimeout(function(){t(e),null!=l&&l()},300)}).catch(function(e){return r(e)})});var n,l}})))}))?t:[],!0)))}));r.show()},200)},null==n?void 0:n())};exports.default=Trigger;
//# sourceMappingURL=Trigger.js.map
