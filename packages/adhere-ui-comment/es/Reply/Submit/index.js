import _Button from"antd/es/button";import _Popover from"antd/es/popover";import _Input from"antd/es/input";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.string.trim.js";import{__assign,__read}from"tslib";import React,{useLayoutEffect,useRef,useState}from"react";import data from"@emoji-mart/data";import Picker from"@emoji-mart/react";import Intl from"@baifendian/adhere-util-intl";import Hooks from"@baifendian/adhere-ui-hooks";import ar from"@emoji-mart/data/i18n/ar.json";import de from"@emoji-mart/data/i18n/de.json";import en from"@emoji-mart/data/i18n/en.json";import es from"@emoji-mart/data/i18n/es.json";import fa from"@emoji-mart/data/i18n/fa.json";import fr from"@emoji-mart/data/i18n/fr.json";import it from"@emoji-mart/data/i18n/it.json";import ja from"@emoji-mart/data/i18n/ja.json";import nl from"@emoji-mart/data/i18n/nl.json";import pl from"@emoji-mart/data/i18n/pl.json";import pt from"@emoji-mart/data/i18n/pt.json";import ru from"@emoji-mart/data/i18n/ru.json";import uk from"@emoji-mart/data/i18n/uk.json";import zh from"@emoji-mart/data/i18n/zh.json";import EmojiIcon from"./emoji";var TextArea=_Input.TextArea,useSetState=Hooks.useSetState,selectorPrefix="adhere-ui-comment-reply",LOCAL_MAP=new Map([["ar",ar],["de",de],["en",en],["es",es],["fa",fa],["fr",fr],["it",it],["ja",ja],["nl",nl],["pl",pl],["pt",pt],["ru",ru],["uk",uk],["zh",zh]]),Reply=function(e){var t=e.local,o=void 0===t?"zh":t,t=e.emojiPickerProps,t=void 0===t?{}:t,r=e.onResult,a=e.onCancel,e=__read(useSetState(""),2),n=e[0],i=e[1],m=useRef(null),s=useRef(null),e=__read(useState(!1),2),c=e[0],l=e[1];return useLayoutEffect(function(){var e,t;function o(e){e=e.target;[(null==m?void 0:m.current).querySelector("textarea")].includes(e)||l(!1)}function r(e){e.stopPropagation()}return document.body.addEventListener("click",o),null!==(t=null===(e=null==s?void 0:s.current)||void 0===e?void 0:e.addEventListener)&&void 0!==t&&t.call(e,"click",r),function(){var e,t;document.body.removeEventListener("click",o),null!==(t=null===(e=null==s?void 0:s.current)||void 0===e?void 0:e.removeEventListener)&&void 0!==t&&t.call(e,"click",r)}},[]),React.createElement("div",{className:"".concat(selectorPrefix)},React.createElement("div",{className:"".concat(selectorPrefix,"-textarea-wrap"),ref:m},React.createElement(TextArea,{className:"".concat(selectorPrefix,"-textarea"),placeholder:Intl.v("请输入回复内容"),autoFocus:!0,value:n,onChange:function(e){return i(e.target.value)},showCount:!0,maxLength:100})),React.createElement("div",{ref:s,className:"".concat(selectorPrefix,"-emoji-wrap")}),React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar")},React.createElement(_Popover,{placement:"bottomLeft",getPopupContainer:function(){return s.current},content:React.createElement(Picker,__assign({data:data,i18n:LOCAL_MAP.get(o||"zh"),onEmojiSelect:function(e){var t=e.native,o=null===(e=null==m?void 0:m.current)||void 0===e?void 0:e.querySelector("textarea"),r=o.selectionStart;i("".concat(n.substring(0,r)).concat(t).concat(n.substring(r)),function(){o.focus(),o.setSelectionRange(r+t.length,r+t.length)})}},t||{})),visible:c},React.createElement("div",{onClick:function(e){e.stopPropagation(),l(!c)}},React.createElement(EmojiIcon,{className:"".concat(selectorPrefix,"-toolbar-item-emoji")}))),React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar-inner")},React.createElement(_Button,{type:"primary",className:"".concat(selectorPrefix,"-toolbar-item"),disabled:!n,onClick:function(){null!=r&&r(n.trim())}},Intl.v("添加")),React.createElement(_Button,{className:"".concat(selectorPrefix,"-toolbar-item"),onClick:function(){return null==a?void 0:a()}},Intl.v("取消")))))};export default Reply;
//# sourceMappingURL=index.js.map
