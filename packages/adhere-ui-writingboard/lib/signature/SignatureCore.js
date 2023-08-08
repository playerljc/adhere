"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),antd_1=require("antd"),react_1=__importStar(require("react")),react_color_1=require("react-color"),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),index_1=__importDefault(require("../index")),types_1=require("../types"),selectorPrefix="adhere-ui-signature-core",Signature=function(e,t){var r=e.wrapProps,a=e.toolProps,n=e.areaProps,u=e.defaultWidth,l=e.defaultColor,e=(0,react_1.useState)(types_1.Mode.FREE),i=e[0],o=e[1],e=(0,react_1.useState)(null!=l?l:"#000"),c=e[0],_=e[1],e=(0,react_1.useState)(null!=u?u:2),d=e[0],f=e[1],s=(0,react_1.useRef)(null),e=(0,react_1.useMemo)(function(){return{gutter:20,wrapClassName:"".concat(selectorPrefix,"-wrap")}},[]),p=(0,react_1.useMemo)(function(){return{fit:!0}},[]),m=(0,react_1.useMemo)(function(){return{autoFixed:!0}},[]),y=(0,react_1.useMemo)(function(){return react_1.default.createElement(antd_1.Card,null,react_1.default.createElement(antd_1.Space,{direction:"vertical",size:20},react_1.default.createElement(antd_1.InputNumber,{style:{width:"100%"},value:d,precision:0,max:10,min:1,onChange:function(e){f(e),s.current&&s.current.setLineWidth(e)}}),react_1.default.createElement(react_color_1.CompactPicker,{color:c,onChangeComplete:function(e){_(e.hex),s.current&&s.current.setStrokeStyle(e.hex)}}),react_1.default.createElement(antd_1.Button,{size:"large",block:!0,type:"primary",onClick:function(){var e;s.current&&(e=i===types_1.Mode.FREE?types_1.Mode.RUBBER:types_1.Mode.FREE,o(e),s.current.setMode(e))}},i===types_1.Mode.FREE?adhere_util_intl_1.default.v("橡皮"):adhere_util_intl_1.default.v("绘制")),react_1.default.createElement(antd_1.Button,{size:"large",block:!0,type:"primary",onClick:function(){s.current&&s.current.clear()}},adhere_util_intl_1.default.v("清除"))))},[i,d,c,a]),g=(0,react_1.useMemo)(function(){return react_1.default.createElement(antd_1.Card,null,react_1.default.createElement(index_1.default,{ref:s,defaultMode:i,defaultLineWidth:d,defaultStrokeStyle:c}))},[n]);return(0,react_1.useImperativeHandle)(t,function(){return{save:function(e,t,r){if(s.current)return s.current.toDataURL(null!=e?e:"#fff",null!=t?t:"image/png",null!=r?r:1)},isEmpty:function(){var e,t;return null==s||!s.current||(null==(t=null==(e=null==s?void 0:s.current)?void 0:e.isEmpty)?void 0:t.call(e))}}}),(0,ahooks_1.useUpdateEffect)(function(){f(u)},[u]),(0,ahooks_1.useUpdateEffect)(function(){_(l)},[l]),react_1.default.createElement(adhere_ui_flexlayout_1.default.TRBLC.LCLayout,__assign({},e,r,{lProps:__assign(__assign(__assign({},p),a),{children:y}),cProps:__assign(__assign(__assign({},m),n),{children:g})}))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(Signature));
//# sourceMappingURL=SignatureCore.js.map
