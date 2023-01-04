var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};import classNames from"classnames";import IScroll from"iscroll/build/iscroll";import React,{forwardRef,memo,useEffect,useImperativeHandle,useRef}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import JdCategoryTabItem from"./item";var selectorPrefix="adhere-ui-jdcategorytab",useSetState=Hooks.useSetState,JdCategoryTab=function(e,t){var a=e.className,a=void 0===a?"":a,r=e.style,r=void 0===r?{}:r,n=e.menuClassName,n=void 0===n?"":n,s=e.menuStyle,s=void 0===s?{}:s,l=e.menuInnerClassName,l=void 0===l?"":l,c=e.menuInnerStyle,c=void 0===c?{}:c,o=e.tabClassName,o=void 0===o?"":o,u=e.tabStyle,u=void 0===u?{}:u,i=e.menuData,m=void 0===i?[]:i,i=e.menuItemClassName,f=void 0===i?"":i,i=e.menuItemStyle,d=void 0===i?{}:i,v=e.renderMenuItem,y=e.onBeforeChange,N=e.onChange,i=e.children,g=useSetState(e.activeKey),p=g[0],C=g[1],R=useRef(IScroll.utils.ease),g=useRef(null),k=useRef(null),b=useRef(null),h=useRef();function E(e,t,a){var r,n,a=a||R.current.circular,s=!0;(s=y?y(p,e):s)&&(h.current.scrollToElement((r=e,s=m.findIndex(function(e){return e.key===r}),(n=Array.from(b.current.querySelectorAll(".".concat(selectorPrefix,"-menu-item")))).length?n[s]:null),t||250,null,null,a),setTimeout(function(){C(e,function(){return N&&N(e)})},t||250))}return useEffect(function(){return C(e.activeKey)},[e.activeKey]),useEffect(function(){var e;function t(e){e.preventDefault()}return h.current||(h.current=new IScroll(k.current,{mouseWheel:!0,click:!0})),null!=(e=k.current)&&e.addEventListener("touchmove",t),function(){var e;return null==(e=k.current)?void 0:e.removeEventListener("touchmove",t)}}),useImperativeHandle(t,function(){return{scrollTo:E}}),React.createElement("div",{className:classNames(selectorPrefix,a||""),style:r||{},ref:g},React.createElement("div",{ref:k,className:classNames("".concat(selectorPrefix,"-menu"),n||""),style:__assign({},s)},React.createElement("ul",{ref:b,className:classNames("".concat(selectorPrefix,"-menu-inner"),l||""),style:c||{}},(m||[]).map(function(e){return v?React.createElement("li",{key:e.key,className:classNames("".concat(selectorPrefix,"-menu-item"),p===e.key?"active":null,f||""),style:d||{}},React.createElement("a",{onClick:function(){return E(e.key)}},v(e))):React.createElement("li",{key:e.key,className:classNames("".concat(selectorPrefix,"-menu-item"),p===e.key?"active":null,f||""),style:d||{}},React.createElement("a",{onClick:function(){return E(e.key)}},e.name))}))),React.createElement("ul",{className:classNames("".concat(selectorPrefix,"-tab"),o||""),style:u||{}},i&&(null==(t=Array.isArray(i)?i:[i])?void 0:t.map(function(e){var t=e;return t=e.key===p?React.cloneElement(e,__assign(__assign({},e.props||{}),{className:classNames(null==e?void 0:e.className,"active")})):t}))))},JdCategoryTabHOC=memo(forwardRef(JdCategoryTab));JdCategoryTabHOC.Item=JdCategoryTabItem;export default JdCategoryTabHOC;
//# sourceMappingURL=jdcategorytab.js.map
