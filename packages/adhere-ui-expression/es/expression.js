import _Empty from"antd/es/empty";import _CloseCircleOutlined from"@ant-design/icons/es/icons/CloseCircleOutlined";import{useMount,useUpdateLayoutEffect}from"ahooks";import classNames from"classnames";import React,{forwardRef,memo,useImperativeHandle,useMemo,useRef}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import Util from"@baifendian/adhere-util";import Intl from"@baifendian/adhere-util-intl";import View from"./View";import ElasticSearchOperators from"./operators/ElasticSearch";var getCurrentParentElementWithCursor=Util.getCurrentParentElementWithCursor,getCurrentElementWithCursor=Util.getCurrentElementWithCursor,setCursorToEnd=Util.setCursorToEnd,setCursorPositionToNode=Util.setCursorPositionToNode,setCursorPosition=Util.setCursorPosition,getCursorIndex=Util.getCursorIndex,getCursorRectByDocument=Util.getCursorRectByDocument,isString=Util.isString,isFunction=Util.isFunction,defaultTriggerCharCode=32,htmlSpace="&nbsp;",modalWidth=300,useSetState=Hooks.useSetState,selectorPrefix="adhere-ui-expression",Expression=function(e,t){var n=e.className,r=e.style,l=e.editorClassName,o=e.editorStyle,u=e.operatorWrapClassName,U=e.operatorWrapStyle,O=e.quickTipWrapClassName,F=e.quickTipWrapStyle,i=e.textClassName,a=e.operatorClassName,c=e.value,q=e.placeholder,s=e.triggerCharCode,_=e.quickTipProp,d=e.quickTipDataSource,p=e.disableQuickTip,m=e.operators,B=e.allowClear,f=e.onChange,v=e.onContinuousTextChange,V=e.onEditorInputEnd,A=e.onEditorBlurEnd,C=e.onEditorKeyDownEnd,Q=e.onEditorPasteEnd,e=useMemo(function(){return null!=m?m:ElasticSearchOperators},[m]),h=useRef(null),E=useRef(null),j=useRef(null),K=useRef(null),z=useRef(null),g=useRef(null),x=useRef(null),T=useRef(-1),y=useRef(0),N=useRef(null),R=useRef(""),P=useRef(!1),S=useSetState(!1),G=S[0],J=S[1],S=useSetState(!1),X=S[0],Y=S[1],S=useSetState(!0),Z=S[0],$=S[1],S=useSetState(!1),ee=S[0],te=S[1],ne=useMemo(function(){return String.fromCharCode(null!=s?s:defaultTriggerCharCode)},[s]);function k(){(H()?W:w)()}function L(){var e,t;return"font"===(null==(t=null==(e=null==(e=null==(e=null==E?void 0:E.current)?void 0:e.firstElementChild)?void 0:e.tagName)?void 0:e.toLowerCase)?void 0:t.call(e))?null==(t=null==E?void 0:E.current)?void 0:t.firstElementChild:null==E?void 0:E.current}function H(){var e,t;return""===(null==(t=null==(e=null==(e=L())?void 0:e.innerHTML)?void 0:e.trim)?void 0:t.call(e))}function re(){var e=L();e&&(e.innerHTML="",M(),b(),W(),te(!1))}function le(e,t){var n,r,l,o,u=getCursorRectByDocument();u&&e&&(r=null==(r=h.current)?void 0:r.offsetWidth,l=null==(l=null==h?void 0:h.current)?void 0:l.offsetHeight,o=null==(o=null==(n=h.current)?void 0:n.getBoundingClientRect)?void 0:o.call(n),r)&&l&&h&&e&&o&&(0===(null==u?void 0:u.x)&&0===(null==u?void 0:u.y)?(e.style.left="".concat(o.x+20,"px"),e.style.top="".concat(o.y+l-2,"px")):((null==o?void 0:o.x)+r-(null==u?void 0:u.x)<modalWidth?e.style.left="".concat(o.x+r-modalWidth-10,"px"):e.style.left="".concat(u.x+10,"px"),e.style.top="".concat(u.y+25,"px"))),null!=t&&t()}function oe(){le(j.current,function(){return J(!0,function(){})})}function M(){J(!1)}function ue(){le(K.current,function(){return Y(!0)})}function b(){Y(!1)}function W(){$(!0)}function w(){$(!1)}function D(e){var t="",n=(isString(i)?t=i:isFunction(i)&&(t=i(e)),document.createElement("span"));return n.className=classNames("text",null!=t?t:""),n.innerHTML=e,n}function I(e){var t="",n=(isString(a)?t=a:isFunction(a)&&(t=a(e)),document.createElement("span"));return n.className=classNames("operator",null!=t?t:""),n.setAttribute("contenteditable","false"),n.innerHTML=e,n}function ie(e){var t;console.log("Input"),P.current||(x&&(x.current=getCurrentElementWithCursor()),g&&(g.current=getCurrentParentElementWithCursor()),T.current=getCursorIndex(),(H()?W:w)(),null!==(e=e.nativeEvent.data)?(t=e,!N.current||N.current===x.current&&y.current+1===T.current?(y.current=T.current,N.current=x.current,R.current+=t):(y.current=T.current,N.current=x.current,R.current=t),p||null!=v&&v(R.current)):p||null!=v&&v(null==(t=null==x?void 0:x.current)?void 0:t.textContent),p||e!==ne&&ue(),e!==ne&&null!=V&&V(e,R.current),null!=f&&f(null==(e=null==E?void 0:E.current)?void 0:e.innerHTML),te(!H()))}return useMount(function(){var e=L();e&&(e.innerHTML=null!=c?c:""),setCursorToEnd(e),k()}),useUpdateLayoutEffect(function(){k()},[c]),useImperativeHandle(t,function(){return{setValue:function(e){var t=L();t&&(t.innerHTML=null!=e?e:""),setCursorToEnd(t),k()},getValue:function(){var e;return null==(e=L())?void 0:e.innerHTML},isEditorEmpty:H,showOperators:oe,hideOperators:M,showQuickTip:ue,hideQuickTip:b,clear:re}}),React.createElement("div",{ref:h,className:classNames(selectorPrefix,null!=n?n:""),style:null!=r?r:{}},React.createElement("div",{ref:E,className:classNames("".concat(selectorPrefix,"-editor"),null!=l?l:"",((S={})["".concat(selectorPrefix,"-editor--show-clear")]=!!B,S)),style:null!=o?o:{},contentEditable:"true",onInput:ie,onKeyDown:function(e){return e.keyCode===(null!=s?s:defaultTriggerCharCode)?(b(),oe(),null!=C&&C(e),!1):13===e.keyCode?(M(),e.stopPropagation(),e.preventDefault(),null!=C&&C(e),!1):(M(),void(null!=C&&C(e)))},onBlur:function(e){e.stopPropagation(),e.preventDefault(),(H()?W:w)(),null!=A&&A(e)},onCompositionStart:function(){P.current=!0},onCompositionEnd:function(e){P.current=!1,ie(e)},onPaste:function(e){e.preventDefault(),null!=Q&&Q(e)}}),!!B&&ee&&React.createElement("div",{className:"".concat(selectorPrefix,"-editor-clear")},React.createElement(_CloseCircleOutlined,{rev:null,onClick:function(){var e;re(),null!=(e=L())&&e.focus()}})),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-editor-placeholder"),((t={})["".concat(selectorPrefix,"-editor-placeholder--show")]=Z,t)),ref:z},null!=q?q:Intl.v("请输入关键词")),React.createElement("div",{ref:j,className:classNames("".concat(selectorPrefix,"-operators"),null!=u?u:"",((n={})["".concat(selectorPrefix,"-operators--show")]=G,n)),style:null!=U?U:{}},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-operators-header"))},React.createElement("i",{onClick:M},React.createElement(_CloseCircleOutlined,{rev:null}))),React.createElement("ul",{className:classNames("".concat(selectorPrefix,"-operators-main"))},e.map(function(e){var t=e.label,s=e.value,d=e.type;return React.createElement("li",{key:s,onClick:function(){var e,t,n,r,l,o,u,i,a,c;t=d,(e=s)&&(n=L(),"brackets"===t?(t=e[0],o=e[1],/^&#\d+;/gim.test(e)&&(t=(r=e.split(";").filter(function(e){return e}))[0],o=r[1]),r=I(t),t=I(o),o=D("".concat(htmlSpace).concat(htmlSpace)),g.current===n?(i=D(null==(i=null==(u=null==(u=null==x?void 0:x.current)?void 0:u.textContent)?void 0:u.substring)?void 0:i.call(u,0,T.current+1)),a=D(null==(a=null==u?void 0:u.substring)?void 0:a.call(u,T.current+1)),(c=document.createDocumentFragment()).appendChild(i),c.appendChild(r),c.appendChild(o),c.appendChild(t),a&&a.textContent&&0!==a.textContent.length&&c.appendChild(a),null!=(l=null==n?void 0:n.replaceChild)&&l.call(n,c,x.current)):(i=D(null==(l=null==(u=null==(l=null==x?void 0:x.current)?void 0:l.textContent)?void 0:u.substring)?void 0:l.call(u,0,T.current)),a=D(null==(l=null==u?void 0:u.substring)?void 0:l.call(u,T.current)),(c=document.createDocumentFragment()).appendChild(i),c.appendChild(i),c.appendChild(r),c.appendChild(o),c.appendChild(t),a&&a.textContent&&0!==a.textContent.length&&c.appendChild(a),null!=(t=null==(r=null==(l=null==g?void 0:g.current)?void 0:l.parentElement)?void 0:r.replaceChild)&&t.call(r,c,g.current)),setCursorPosition(o,1)):(l=I(e),o=D(htmlSpace),g.current===n?(i=D(null==(r=null==(u=null==(t=null==x?void 0:x.current)?void 0:t.textContent)?void 0:u.substring)?void 0:r.call(u,0,T.current+1)),a=D(null==(e=null==u?void 0:u.substring)?void 0:e.call(u,T.current+1)),(c=document.createDocumentFragment()).appendChild(i),c.appendChild(l),c.appendChild(o),a&&a.textContent&&0!==a.textContent.length&&c.appendChild(a),null!=n&&n.replaceChild(c,x.current),setCursorPosition(o,0)):null!=(e=null==(r=null==(t=null==g?void 0:g.current)?void 0:t.classList)?void 0:r.contains)&&e.call(r,"text")&&(i=D(null==(t=null==(u=null==(n=null==x?void 0:x.current)?void 0:n.textContent)?void 0:u.substring)?void 0:t.call(u,0,T.current)),a=D(null==(e=null==u?void 0:u.substring)?void 0:e.call(u,T.current)),(c=document.createDocumentFragment()).appendChild(i),c.appendChild(l),c.appendChild(o),a&&a.textContent&&0!==a.textContent.length&&c.appendChild(a),null!=(t=null==(n=null==(r=null==g?void 0:g.current)?void 0:r.parentElement)?void 0:n.replaceChild)&&t.call(n,c,g.current),setCursorPosition(o,0))),null!=f)&&f(null==(e=null==E?void 0:E.current)?void 0:e.innerHTML),M()},dangerouslySetInnerHTML:{__html:t}})}))),React.createElement("div",{ref:K,className:classNames("".concat(selectorPrefix,"-quick-tips"),null!=O?O:"",((r={})["".concat(selectorPrefix,"-quick-tips--show")]=X,r)),style:null!=F?F:{}},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-quick-tips-header"))},React.createElement("i",{onClick:b},React.createElement(_CloseCircleOutlined,{rev:null}))),!(d||[]).length&&React.createElement("div",null,React.createElement(_Empty,null)),React.createElement("ul",{className:classNames("".concat(selectorPrefix,"-quick-tips-main"))},!!(d||[]).length&&(d||[]).map(function(i,e){return React.createElement("li",{key:i.value,onClick:function(e){return t=(t=i)[null!=_?_:"value"],u=L(),t&&(o=(r=(l=(null==(l=x.current)?void 0:l.textContent)||"").lastIndexOf(R.current,y.current))+R.current.length,n=document.createDocumentFragment(),r=document.createTextNode(l.substring(0,r)),l=document.createTextNode(l.substring(o)),(o=document.createElement("div")).innerHTML=t,n.appendChild(r),Array.from(o.childNodes).forEach(function(e){n.appendChild(e)}),n.appendChild(l),h.current===g.current?(u.innerHTML="",u.appendChild(n)):u===g.current?null!=(t=null==x?void 0:x.current)&&t.parentElement&&x.current.parentElement.replaceChild(n,x.current):null!=(r=null==g?void 0:g.current)&&r.parentElement&&g.current.parentElement.replaceChild(n,g.current),setCursorPositionToNode(l,0),null!=f)&&f(null==(o=null==E?void 0:E.current)?void 0:o.innerHTML),b(),void w();var t,n,r,l,o,u}},i.label)}))))},Wrap=memo(forwardRef(Expression));Wrap.View=View,Wrap.parse=function(e,n){var t;return e?((t=document.createElement("div")).innerHTML=e,"font"===(null==(e=null==(e=null==t?void 0:t.firstElementChild)?void 0:e.tagName)?void 0:e.toLowerCase())&&(t.innerHTML=t.firstElementChild.innerHTML),Array.from(t.childNodes).map(function(e){var t;if(1===e.nodeType){if(e.classList.contains("text"))return null!=(t=null==n?void 0:n({nodeType:3,value:e.textContent}))?t:"";if(e.classList.contains("operator"))return null!=(t=null==n?void 0:n({nodeType:1,value:e.textContent}))?t:""}else if(3===e.nodeType)return null!=(t=null==n?void 0:n({nodeType:3,value:e.textContent}))?t:"";return""}).join("")):""},Wrap.validator=function(){return{validator:function(e,t){var n=document.createElement("div");return n.innerHTML=t,n.innerText?Promise.resolve():Promise.reject(new Error(Intl.v("请输入关键字")))}}};export default Wrap;export{selectorPrefix};
//# sourceMappingURL=expression.js.map
