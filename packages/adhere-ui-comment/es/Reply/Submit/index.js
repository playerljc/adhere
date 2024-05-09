import _Button from"antd/es/button";import _Popover from"antd/es/popover";import _Input from"antd/es/input";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import React,{memo,useCallback,useLayoutEffect,useMemo,useRef,useState}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import Intl from"@baifendian/adhere-util-intl";import data from"@emoji-mart/data";import ar from"@emoji-mart/data/i18n/ar.json";import de from"@emoji-mart/data/i18n/de.json";import en from"@emoji-mart/data/i18n/en.json";import es from"@emoji-mart/data/i18n/es.json";import fa from"@emoji-mart/data/i18n/fa.json";import fr from"@emoji-mart/data/i18n/fr.json";import it from"@emoji-mart/data/i18n/it.json";import ja from"@emoji-mart/data/i18n/ja.json";import nl from"@emoji-mart/data/i18n/nl.json";import pl from"@emoji-mart/data/i18n/pl.json";import pt from"@emoji-mart/data/i18n/pt.json";import ru from"@emoji-mart/data/i18n/ru.json";import uk from"@emoji-mart/data/i18n/uk.json";import zh from"@emoji-mart/data/i18n/zh.json";import Picker from"@emoji-mart/react";import EmojiIcon from"./emoji";var TextArea=_Input.TextArea,useSetState=Hooks.useSetState,selectorPrefix="adhere-ui-comment-reply",LOCAL_MAP=new Map([["ar",ar],["de",de],["en",en],["es",es],["fa",fa],["fr",fr],["it",it],["ja",ja],["nl",nl],["pl",pl],["pt",pt],["ru",ru],["uk",uk],["zh",zh]]),Reply=memo(function(e){var t=e.local,o=void 0===t?"zh":t,t=e.emojiPickerProps,a=void 0===t?{}:t,r=e.onResult,n=e.onCancel,t=useSetState(""),i=t[0],c=t[1],m=useRef(null),l=useRef(null),e=useState(!1),t=e[0],s=e[1],u=useCallback(function(e){var t=e.native,o=null==(e=null==m?void 0:m.current)?void 0:e.querySelector("textarea"),a=o.selectionStart;c("".concat(i.substring(0,a)).concat(t).concat(i.substring(a)),function(){o.focus(),o.setSelectionRange(a+t.length,a+t.length)})},[i]),e=useMemo(function(){return React.createElement(Picker,__assign({data:data,i18n:LOCAL_MAP.get(o||"zh"),onEmojiSelect:u},null!=a?a:{}))},[data,o,u,a]);return useLayoutEffect(function(){var e,t;function o(e){e=e.target;[(null==m?void 0:m.current).querySelector("textarea")].includes(e)||s(!1)}function a(e){e.stopPropagation()}return document.body.addEventListener("click",o),null!=(t=null==(e=null==l?void 0:l.current)?void 0:e.addEventListener)&&t.call(e,"click",a),function(){var e,t;document.body.removeEventListener("click",o),null!=(t=null==(e=null==l?void 0:l.current)?void 0:e.removeEventListener)&&t.call(e,"click",a)}}),React.createElement("div",{className:"".concat(selectorPrefix)},React.createElement("div",{className:"".concat(selectorPrefix,"-textarea-wrap"),ref:m},React.createElement(TextArea,{className:"".concat(selectorPrefix,"-textarea"),placeholder:Intl.v("请输入回复内容"),autoFocus:!0,value:i,onChange:function(e){return c(e.target.value)},showCount:!0,maxLength:100})),React.createElement("div",{ref:l,className:"".concat(selectorPrefix,"-toolbar-emoji-wrap")}),React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar")},React.createElement(_Popover,{placement:"bottomLeft",getPopupContainer:function(){return l.current},content:e,open:t},React.createElement("div",{onClick:function(e){e.stopPropagation(),s(function(e){return!e})}},React.createElement(EmojiIcon,{className:"".concat(selectorPrefix,"-toolbar-item-emoji")}))),React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar-inner")},React.createElement(_Button,{type:"primary",className:"".concat(selectorPrefix,"-toolbar-item"),disabled:!i,onClick:function(){return null==r?void 0:r(i.trim())}},Intl.v("添加")),React.createElement(_Button,{className:"".concat(selectorPrefix,"-toolbar-item"),onClick:function(){return null==n?void 0:n()}},Intl.v("取消")))))});Reply.displayName="Reply";export default Reply;
//# sourceMappingURL=index.js.map
