var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,a,n=r.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(o=n.next()).done;)i.push(o.value)}catch(e){a={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i};import{Button,Input,Popover}from"antd";import React,{memo,useCallback,useLayoutEffect,useMemo,useRef,useState}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import Intl from"@baifendian/adhere-util-intl";import data from"@emoji-mart/data";import ar from"@emoji-mart/data/i18n/ar.json";import de from"@emoji-mart/data/i18n/de.json";import en from"@emoji-mart/data/i18n/en.json";import es from"@emoji-mart/data/i18n/es.json";import fa from"@emoji-mart/data/i18n/fa.json";import fr from"@emoji-mart/data/i18n/fr.json";import it from"@emoji-mart/data/i18n/it.json";import ja from"@emoji-mart/data/i18n/ja.json";import nl from"@emoji-mart/data/i18n/nl.json";import pl from"@emoji-mart/data/i18n/pl.json";import pt from"@emoji-mart/data/i18n/pt.json";import ru from"@emoji-mart/data/i18n/ru.json";import uk from"@emoji-mart/data/i18n/uk.json";import zh from"@emoji-mart/data/i18n/zh.json";import Picker from"@emoji-mart/react";import EmojiIcon from"./emoji";var TextArea=Input.TextArea,useSetState=Hooks.useSetState,selectorPrefix="adhere-ui-comment-reply",LOCAL_MAP=new Map([["ar",ar],["de",de],["en",en],["es",es],["fa",fa],["fr",fr],["it",it],["ja",ja],["nl",nl],["pl",pl],["pt",pt],["ru",ru],["uk",uk],["zh",zh]]),Reply=function(e){var t=e.local,r=void 0===t?"zh":t,t=e.emojiPickerProps,o=void 0===t?{}:t,a=e.onResult,n=e.onCancel,t=__read(useSetState(""),2),i=t[0],c=t[1],l=useRef(null),m=useRef(null),e=__read(useState(!1),2),t=e[0],s=e[1],u=useCallback(function(e){var t=e.native,r=null==(e=null==l?void 0:l.current)?void 0:e.querySelector("textarea"),o=r.selectionStart;c("".concat(i.substring(0,o)).concat(t).concat(i.substring(o)),function(){r.focus(),r.setSelectionRange(o+t.length,o+t.length)})},[i]),e=useMemo(function(){return React.createElement(Picker,__assign({data:data,i18n:LOCAL_MAP.get(r||"zh"),onEmojiSelect:u},o||{}))},[data,r,o]);return useLayoutEffect(function(){var e,t;function r(e){e=e.target;[(null==l?void 0:l.current).querySelector("textarea")].includes(e)||s(!1)}function o(e){e.stopPropagation()}return document.body.addEventListener("click",r),null!=(t=null==(e=null==m?void 0:m.current)?void 0:e.addEventListener)&&t.call(e,"click",o),function(){var e,t;document.body.removeEventListener("click",r),null!=(t=null==(e=null==m?void 0:m.current)?void 0:e.removeEventListener)&&t.call(e,"click",o)}}),React.createElement("div",{className:"".concat(selectorPrefix)},React.createElement("div",{className:"".concat(selectorPrefix,"-textarea-wrap"),ref:l},React.createElement(TextArea,{className:"".concat(selectorPrefix,"-textarea"),placeholder:Intl.v("请输入回复内容"),autoFocus:!0,value:i,onChange:function(e){return c(e.target.value)},showCount:!0,maxLength:100})),React.createElement("div",{ref:m,className:"".concat(selectorPrefix,"-toolbar-emoji-wrap")}),React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar")},React.createElement(Popover,{placement:"bottomLeft",getPopupContainer:function(){return m.current},content:e,open:t},React.createElement("div",{onClick:function(e){e.stopPropagation(),s(function(e){return!e})}},React.createElement(EmojiIcon,{className:"".concat(selectorPrefix,"-toolbar-item-emoji")}))),React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar-inner")},React.createElement(Button,{type:"primary",className:"".concat(selectorPrefix,"-toolbar-item"),disabled:!i,onClick:function(){return null==a?void 0:a(i.trim())}},Intl.v("添加")),React.createElement(Button,{className:"".concat(selectorPrefix,"-toolbar-item"),onClick:function(){return null==n?void 0:n()}},Intl.v("取消")))))};export default memo(Reply);
//# sourceMappingURL=index.js.map
