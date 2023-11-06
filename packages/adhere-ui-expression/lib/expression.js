"use strict";var __createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,require("ahooks")),antd_1=require("antd"),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_hooks_1=__importDefault(require("@baifendian/adhere-ui-hooks")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),View_1=__importDefault(require("./View")),ElasticSearch_1=__importDefault(require("./operators/ElasticSearch")),getCurrentParentElementWithCursor=adhere_util_1.default.getCurrentParentElementWithCursor,getCurrentElementWithCursor=adhere_util_1.default.getCurrentElementWithCursor,setCursorToEnd=adhere_util_1.default.setCursorToEnd,setCursorPositionToNode=adhere_util_1.default.setCursorPositionToNode,setCursorPosition=adhere_util_1.default.setCursorPosition,getCursorIndex=adhere_util_1.default.getCursorIndex,getCursorRectByDocument=adhere_util_1.default.getCursorRectByDocument,isString=adhere_util_1.default.isString,isFunction=adhere_util_1.default.isFunction,defaultTriggerCharCode=32,htmlSpace="&nbsp;",modalWidth=300,useSetState=adhere_ui_hooks_1.default.useSetState,InternalExpression=(exports.selectorPrefix="adhere-ui-expression",(0,react_1.memo)((0,react_1.forwardRef)(function(e,t){var n=e.className,r=e.style,l=e.editorClassName,u=e.editorStyle,o=e.operatorWrapClassName,O=e.operatorWrapStyle,W=e.quickTipWrapClassName,I=e.quickTipWrapStyle,a=e.textClassName,i=e.operatorClassName,c=e.value,j=e.placeholder,s=e.triggerCharCode,F=e.quickTipProp,d=e.quickTipDataSource,f=e.disableQuickTip,p=e.operators,B=e.allowClear,m=e.onChange,_=e.onContinuousTextChange,V=e.onEditorInputEnd,A=e.onEditorBlurEnd,v=e.onEditorKeyDownEnd,Q=e.onEditorPasteEnd,e=(0,react_1.useMemo)(function(){return null!=p?p:ElasticSearch_1.default},[p]),C=(0,react_1.useRef)(null),h=(0,react_1.useRef)(null),K=(0,react_1.useRef)(null),U=(0,react_1.useRef)(null),z=(0,react_1.useRef)(null),x=(0,react_1.useRef)(null),E=(0,react_1.useRef)(null),g=(0,react_1.useRef)(-1),y=(0,react_1.useRef)(0),T=(0,react_1.useRef)(null),P=(0,react_1.useRef)(""),b=(0,react_1.useRef)(!1),S=useSetState(!1),G=S[0],J=S[1],S=useSetState(!1),X=S[0],Y=S[1],S=useSetState(!0),Z=S[0],$=S[1],S=useSetState(!1),ee=S[0],te=S[1],ne=(0,react_1.useMemo)(function(){return String.fromCharCode(null!=s?s:defaultTriggerCharCode)},[s]);function k(){(M()?w:H)()}function N(){var e,t;return"font"===(null==(t=null==(e=null==(e=null==(e=null==h?void 0:h.current)?void 0:e.firstElementChild)?void 0:e.tagName)?void 0:e.toLowerCase)?void 0:t.call(e))?null==(t=null==h?void 0:h.current)?void 0:t.firstElementChild:null==h?void 0:h.current}function M(){var e,t;return""===(null==(t=null==(e=null==(e=N())?void 0:e.innerHTML)?void 0:e.trim)?void 0:t.call(e))}function re(){var e=N();e&&(e.innerHTML="",D(),L(),w(),te(!1))}function le(e,t){var n,r,l,u,o=getCursorRectByDocument();o&&e&&(r=null==(r=C.current)?void 0:r.offsetWidth,l=null==(l=null==C?void 0:C.current)?void 0:l.offsetHeight,u=null==(u=null==(n=C.current)?void 0:n.getBoundingClientRect)?void 0:u.call(n),r)&&l&&C&&e&&u&&(0===(null==o?void 0:o.x)&&0===(null==o?void 0:o.y)?(e.style.left="".concat(u.x+20,"px"),e.style.top="".concat(u.y+l-2,"px")):((null==u?void 0:u.x)+r-(null==o?void 0:o.x)<modalWidth?e.style.left="".concat(u.x+r-modalWidth-10,"px"):e.style.left="".concat(o.x+10,"px"),e.style.top="".concat(o.y+25,"px"))),null!=t&&t()}function ue(){le(K.current,function(){return J(!0,function(){})})}function D(){J(!1)}function oe(){le(U.current,function(){return Y(!0)})}function L(){Y(!1)}function w(){$(!0)}function H(){$(!1)}function q(e){var t="",n=(isString(a)?t=a:isFunction(a)&&(t=a(e)),document.createElement("span"));return n.className=(0,classnames_1.default)("text",null!=t?t:""),n.innerHTML=e,n}function R(e){var t="",n=(isString(i)?t=i:isFunction(i)&&(t=i(e)),document.createElement("span"));return n.className=(0,classnames_1.default)("operator",null!=t?t:""),n.setAttribute("contenteditable","false"),n.innerHTML=e,n}function ae(e){var t;console.log("Input"),b.current||(E&&(E.current=getCurrentElementWithCursor()),x&&(x.current=getCurrentParentElementWithCursor()),g.current=getCursorIndex(),(M()?w:H)(),null!==(e=e.nativeEvent.data)?(t=e,!T.current||T.current===E.current&&y.current+1===g.current?(y.current=g.current,T.current=E.current,P.current+=t):(y.current=g.current,T.current=E.current,P.current=t),f||null!=_&&_(P.current)):f||null!=_&&_(null==(t=null==E?void 0:E.current)?void 0:t.textContent),f||e!==ne&&oe(),e!==ne&&null!=V&&V(e,P.current),null!=m&&m(null==(e=null==h?void 0:h.current)?void 0:e.innerHTML),te(!M()))}return(0,ahooks_1.useMount)(function(){var e=N();e&&(e.innerHTML=null!=c?c:""),setCursorToEnd(e),k()}),(0,ahooks_1.useUpdateLayoutEffect)(function(){k()},[c]),(0,react_1.useImperativeHandle)(t,function(){return{setValue:function(e){var t=N();t&&(t.innerHTML=null!=e?e:""),setCursorToEnd(t),k()},getValue:function(){var e;return null==(e=N())?void 0:e.innerHTML},isEditorEmpty:M,showOperators:ue,hideOperators:D,showQuickTip:oe,hideQuickTip:L,clear:re}}),react_1.default.createElement("div",{ref:C,className:(0,classnames_1.default)(exports.selectorPrefix,null!=n?n:""),style:null!=r?r:{}},react_1.default.createElement("div",{ref:h,className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-editor"),null!=l?l:"",((S={})["".concat(exports.selectorPrefix,"-editor--show-clear")]=!!B,S)),style:null!=u?u:{},contentEditable:"true",onInput:ae,onKeyDown:function(e){return e.keyCode===(null!=s?s:defaultTriggerCharCode)?(L(),ue(),null!=v&&v(e),!1):13===e.keyCode?(D(),e.stopPropagation(),e.preventDefault(),null!=v&&v(e),!1):(D(),void(null!=v&&v(e)))},onBlur:function(e){e.stopPropagation(),e.preventDefault(),(M()?w:H)(),null!=A&&A(e)},onCompositionStart:function(){b.current=!0},onCompositionEnd:function(e){b.current=!1,ae(e)},onPaste:function(e){e.preventDefault(),null!=Q&&Q(e)}}),!!B&&ee&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-editor-clear")},react_1.default.createElement(icons_1.CloseCircleOutlined,{onClick:function(){var e;re(),null!=(e=N())&&e.focus()}})),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-editor-placeholder"),((t={})["".concat(exports.selectorPrefix,"-editor-placeholder--show")]=Z,t)),ref:z},null!=j?j:adhere_util_intl_1.default.v("请输入关键词")),react_1.default.createElement("div",{ref:K,className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-operators"),null!=o?o:"",((n={})["".concat(exports.selectorPrefix,"-operators--show")]=G,n)),style:null!=O?O:{}},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-operators-header"))},react_1.default.createElement("i",{onClick:D},react_1.default.createElement(icons_1.CloseCircleOutlined,null))),react_1.default.createElement("ul",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-operators-main"))},e.map(function(e){var t=e.label,s=e.value,d=e.type;return react_1.default.createElement("li",{key:s,onClick:function(){var e,t,n,r,l,u,o,a,i,c;t=d,(e=s)&&(n=N(),"brackets"===t?(t=e[0],u=e[1],/^&#\d+;/gim.test(e)&&(t=(r=e.split(";").filter(function(e){return e}))[0],u=r[1]),r=R(t),t=R(u),u=q("".concat(htmlSpace).concat(htmlSpace)),x.current===n?(a=q(null==(a=null==(o=null==(o=null==E?void 0:E.current)?void 0:o.textContent)?void 0:o.substring)?void 0:a.call(o,0,g.current+1)),i=q(null==(i=null==o?void 0:o.substring)?void 0:i.call(o,g.current+1)),(c=document.createDocumentFragment()).appendChild(a),c.appendChild(r),c.appendChild(u),c.appendChild(t),i&&i.textContent&&0!==i.textContent.length&&c.appendChild(i),null!=(l=null==n?void 0:n.replaceChild)&&l.call(n,c,E.current)):(a=q(null==(l=null==(o=null==(l=null==E?void 0:E.current)?void 0:l.textContent)?void 0:o.substring)?void 0:l.call(o,0,g.current)),i=q(null==(l=null==o?void 0:o.substring)?void 0:l.call(o,g.current)),(c=document.createDocumentFragment()).appendChild(a),c.appendChild(a),c.appendChild(r),c.appendChild(u),c.appendChild(t),i&&i.textContent&&0!==i.textContent.length&&c.appendChild(i),null!=(t=null==(r=null==(l=null==x?void 0:x.current)?void 0:l.parentElement)?void 0:r.replaceChild)&&t.call(r,c,x.current)),setCursorPosition(u,1)):(l=R(e),u=q(htmlSpace),x.current===n?(a=q(null==(r=null==(o=null==(t=null==E?void 0:E.current)?void 0:t.textContent)?void 0:o.substring)?void 0:r.call(o,0,g.current+1)),i=q(null==(e=null==o?void 0:o.substring)?void 0:e.call(o,g.current+1)),(c=document.createDocumentFragment()).appendChild(a),c.appendChild(l),c.appendChild(u),i&&i.textContent&&0!==i.textContent.length&&c.appendChild(i),null!=n&&n.replaceChild(c,E.current),setCursorPosition(u,0)):null!=(e=null==(r=null==(t=null==x?void 0:x.current)?void 0:t.classList)?void 0:r.contains)&&e.call(r,"text")&&(a=q(null==(t=null==(o=null==(n=null==E?void 0:E.current)?void 0:n.textContent)?void 0:o.substring)?void 0:t.call(o,0,g.current)),i=q(null==(e=null==o?void 0:o.substring)?void 0:e.call(o,g.current)),(c=document.createDocumentFragment()).appendChild(a),c.appendChild(l),c.appendChild(u),i&&i.textContent&&0!==i.textContent.length&&c.appendChild(i),null!=(t=null==(n=null==(r=null==x?void 0:x.current)?void 0:r.parentElement)?void 0:n.replaceChild)&&t.call(n,c,x.current),setCursorPosition(u,0))),null!=m)&&m(null==(e=null==h?void 0:h.current)?void 0:e.innerHTML),D()},dangerouslySetInnerHTML:{__html:t}})}))),react_1.default.createElement("div",{ref:U,className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-quick-tips"),null!=W?W:"",((r={})["".concat(exports.selectorPrefix,"-quick-tips--show")]=X,r)),style:null!=I?I:{}},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-quick-tips-header"))},react_1.default.createElement("i",{onClick:L},react_1.default.createElement(icons_1.CloseCircleOutlined,null))),!(d||[]).length&&react_1.default.createElement("div",null,react_1.default.createElement(antd_1.Empty,null)),react_1.default.createElement("ul",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-quick-tips-main"))},!!(d||[]).length&&(d||[]).map(function(a,e){return react_1.default.createElement("li",{key:a.value,onClick:function(e){return t=(t=a)[null!=F?F:"value"],o=N(),t&&(u=(r=(l=(null==(l=E.current)?void 0:l.textContent)||"").lastIndexOf(P.current,y.current))+P.current.length,n=document.createDocumentFragment(),r=document.createTextNode(l.substring(0,r)),l=document.createTextNode(l.substring(u)),(u=document.createElement("div")).innerHTML=t,n.appendChild(r),Array.from(u.childNodes).forEach(function(e){n.appendChild(e)}),n.appendChild(l),C.current===x.current?(o.innerHTML="",o.appendChild(n)):o===x.current?null!=(t=null==E?void 0:E.current)&&t.parentElement&&E.current.parentElement.replaceChild(n,E.current):null!=(r=null==x?void 0:x.current)&&r.parentElement&&x.current.parentElement.replaceChild(n,x.current),setCursorPositionToNode(l,0),null!=m)&&m(null==(u=null==h?void 0:h.current)?void 0:u.innerHTML),L(),void H();var t,n,r,l,u,o}},a.label)}))))}))),Expression=InternalExpression;Expression.View=View_1.default,Expression.parse=function(e,n){var t;return e?((t=document.createElement("div")).innerHTML=e,"font"===(null==(e=null==(e=null==t?void 0:t.firstElementChild)?void 0:e.tagName)?void 0:e.toLowerCase())&&(t.innerHTML=t.firstElementChild.innerHTML),Array.from(t.childNodes).map(function(e){var t;if(1===e.nodeType){if(e.classList.contains("text"))return null!=(t=null==n?void 0:n({nodeType:3,value:e.textContent}))?t:"";if(e.classList.contains("operator"))return null!=(t=null==n?void 0:n({nodeType:1,value:e.textContent}))?t:""}else if(3===e.nodeType)return null!=(t=null==n?void 0:n({nodeType:3,value:e.textContent}))?t:"";return""}).join("")):""},Expression.validator=function(){return{validator:function(e,t){var n=document.createElement("div");return n.innerHTML=t,n.innerText?Promise.resolve():Promise.reject(new Error(adhere_util_intl_1.default.v("请输入关键字")))}}},exports.default=Expression;
//# sourceMappingURL=Expression.js.map
