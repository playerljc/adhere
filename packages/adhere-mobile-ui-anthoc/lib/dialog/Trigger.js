"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,n){void 0===n&&(n=t);var o=Object.getOwnPropertyDescriptor(r,t);o&&("get"in o?r.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,o)}:function(e,r,t,n){e[n=void 0===n?t:n]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),antd_mobile_1=require("antd-mobile"),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),PopoverTrigger_1=__importDefault(require("../PopoverTrigger")),selectorPrefix="adhere-mobile-ui-ant-hoc-dialog-trigger",InternalDialogTrigger=(0,react_1.memo)(function(e){var r,t=e.showCloseButton,n=void 0===t||t,o=e.closeActionText,l=e.closeActionKey,a=e.value,i=e.onChange,u=e.actions,c=e.children,t=e.popoverTriggerProps,s=__rest(e,["showCloseButton","closeActionText","closeActionKey","value","onChange","actions","children","popoverTriggerProps"]),_=(0,react_1.useRef)(null);var f=(0,react_1.useMemo)(function(){var e=(null!=u?u:[]).map(function(n){return __assign(__assign({},n),{onClick:function(){var e,r,t;r=n.onClick,t=null==(e=_.current)?void 0:e.close,null!=(r=null==r?void 0:r())&&r.then(function(e){null!=i&&i(e),setTimeout(function(){t()},300)})}})});return n&&e.push({key:null!=l?l:"close",text:null!=o?o:adhere_util_intl_1.default.v("关闭"),onClick:function(){}}),e},[u,n]),g=(0,react_1.useMemo)(function(){return __assign(__assign({closeOnMaskClick:!0,closeOnAction:n},s),{actions:f,content:c&&(0,react_1.cloneElement)(c,__assign(__assign({},c.props),{value:a}),c.props.children),afterClose:function(){var e;(_.current=null)!=(e=null==s?void 0:s.afterClose)&&e.call(s)}})},[s,f,c,a]),e=(0,react_1.useCallback)(function(){_.current=antd_mobile_1.Dialog.show(g)},[g]);return(0,ahooks_1.useUpdateEffect)(function(){_.current&&_.current.replace(react_1.default.createElement(antd_mobile_1.Dialog,__assign({},g)))},[s]),react_1.default.createElement(PopoverTrigger_1.default,__assign({className:(0,classnames_1.default)(selectorPrefix,null!=(r=null==t?void 0:t.className)?r:""),renderPopover:e},null!=t?t:{}))}),DialogTrigger=InternalDialogTrigger;DialogTrigger.displayName="DialogTrigger",exports.default=DialogTrigger;
//# sourceMappingURL=Trigger.js.map