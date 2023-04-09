"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof"),_button=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,_interopRequireDefault(require("antd/lib/button"))),_popover=_interopRequireDefault(require("antd/lib/popover")),_input=_interopRequireDefault(require("antd/lib/input")),_react=_interopRequireWildcard(require("react")),_adhereUiHooks=_interopRequireDefault(require("@baifendian/adhere-ui-hooks")),_adhereUtilIntl=_interopRequireDefault(require("@baifendian/adhere-util-intl")),_data=_interopRequireDefault(require("@emoji-mart/data")),_ar=_interopRequireDefault(require("@emoji-mart/data/i18n/ar.json")),_de=_interopRequireDefault(require("@emoji-mart/data/i18n/de.json")),_en=_interopRequireDefault(require("@emoji-mart/data/i18n/en.json")),_es=_interopRequireDefault(require("@emoji-mart/data/i18n/es.json")),_fa=_interopRequireDefault(require("@emoji-mart/data/i18n/fa.json")),_fr=_interopRequireDefault(require("@emoji-mart/data/i18n/fr.json")),_it=_interopRequireDefault(require("@emoji-mart/data/i18n/it.json")),_ja=_interopRequireDefault(require("@emoji-mart/data/i18n/ja.json")),_nl=_interopRequireDefault(require("@emoji-mart/data/i18n/nl.json")),_pl=_interopRequireDefault(require("@emoji-mart/data/i18n/pl.json")),_pt=_interopRequireDefault(require("@emoji-mart/data/i18n/pt.json")),_ru=_interopRequireDefault(require("@emoji-mart/data/i18n/ru.json")),_uk=_interopRequireDefault(require("@emoji-mart/data/i18n/uk.json")),_zh=_interopRequireDefault(require("@emoji-mart/data/i18n/zh.json")),_react2=_interopRequireDefault(require("@emoji-mart/react")),_emoji=_interopRequireDefault(require("./emoji"));function _getRequireWildcardCache(e){var t,r;return"function"!=typeof WeakMap?null:(t=new WeakMap,r=new WeakMap,(_getRequireWildcardCache=function(e){return e?r:t})(e))}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};t=_getRequireWildcardCache(t);if(t&&t.has(e))return t.get(e);var r,a,n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&((a=i?Object.getOwnPropertyDescriptor(e,r):null)&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]);return n.default=e,t&&t.set(e,n),n}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},TextArea=_input.default.TextArea,useSetState=_adhereUiHooks.default.useSetState,selectorPrefix="adhere-ui-comment-reply",LOCAL_MAP=new Map([["ar",_ar.default],["de",_de.default],["en",_en.default],["es",_es.default],["fa",_fa.default],["fr",_fr.default],["it",_it.default],["ja",_ja.default],["nl",_nl.default],["pl",_pl.default],["pt",_pt.default],["ru",_ru.default],["uk",_uk.default],["zh",_zh.default]]),Reply=function(e){var t=e.local,r=void 0===t?"zh":t,t=e.emojiPickerProps,a=void 0===t?{}:t,n=e.onResult,i=e.onCancel,t=useSetState(""),u=t[0],o=t[1],l=(0,_react.useRef)(null),c=(0,_react.useRef)(null),e=(0,_react.useState)(!1),t=e[0],f=e[1],d=(0,_react.useCallback)(function(e){var t=e.native,r=null==(e=null==l?void 0:l.current)?void 0:e.querySelector("textarea"),a=r.selectionStart;o("".concat(u.substring(0,a)).concat(t).concat(u.substring(a)),function(){r.focus(),r.setSelectionRange(a+t.length,a+t.length)})},[u]),e=(0,_react.useMemo)(function(){return _react.default.createElement(_react2.default,__assign({data:_data.default,i18n:LOCAL_MAP.get(r||"zh"),onEmojiSelect:d},a||{}))},[_data.default,r,a]);return(0,_react.useLayoutEffect)(function(){var e,t;function r(e){e=e.target;[(null==l?void 0:l.current).querySelector("textarea")].includes(e)||f(!1)}function a(e){e.stopPropagation()}return document.body.addEventListener("click",r),null!=(t=null==(e=null==c?void 0:c.current)?void 0:e.addEventListener)&&t.call(e,"click",a),function(){var e,t;document.body.removeEventListener("click",r),null!=(t=null==(e=null==c?void 0:c.current)?void 0:e.removeEventListener)&&t.call(e,"click",a)}}),_react.default.createElement("div",{className:"".concat(selectorPrefix)},_react.default.createElement("div",{className:"".concat(selectorPrefix,"-textarea-wrap"),ref:l},_react.default.createElement(TextArea,{className:"".concat(selectorPrefix,"-textarea"),placeholder:_adhereUtilIntl.default.v("请输入回复内容"),autoFocus:!0,value:u,onChange:function(e){return o(e.target.value)},showCount:!0,maxLength:100})),_react.default.createElement("div",{ref:c,className:"".concat(selectorPrefix,"-toolbar-emoji-wrap")}),_react.default.createElement("div",{className:"".concat(selectorPrefix,"-toolbar")},_react.default.createElement(_popover.default,{placement:"bottomLeft",getPopupContainer:function(){return c.current},content:e,open:t},_react.default.createElement("div",{onClick:function(e){e.stopPropagation(),f(function(e){return!e})}},_react.default.createElement(_emoji.default,{className:"".concat(selectorPrefix,"-toolbar-item-emoji")}))),_react.default.createElement("div",{className:"".concat(selectorPrefix,"-toolbar-inner")},_react.default.createElement(_button.default,{type:"primary",className:"".concat(selectorPrefix,"-toolbar-item"),disabled:!u,onClick:function(){return null==n?void 0:n(u.trim())}},_adhereUtilIntl.default.v("添加")),_react.default.createElement(_button.default,{className:"".concat(selectorPrefix,"-toolbar-item"),onClick:function(){return null==i?void 0:i()}},_adhereUtilIntl.default.v("取消")))))},_default=(0,_react.memo)(Reply);exports.default=_default;
//# sourceMappingURL=index.js.map
