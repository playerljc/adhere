var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,l=1,t=arguments.length;l<t;l++)for(var n in r=arguments[l])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var l={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(l[n[t]]=e[n[t]]);return l};import classNames from"classnames";import React,{forwardRef,memo,useCallback,useImperativeHandle,useLayoutEffect,useRef}from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-ui-scrollload",EMPTY="empty",ERROR="error",NORMAL="normal",ScrollLoad=function(e,r){var l=e.className,l=void 0===l?"":l,t=e.style,t=void 0===t?{}:t,n=e.children,a=e.getScrollContainer,s=e.distance,o=void 0===s?50:s,c=e.onScrollBottom,i=e.onEmptyClick,u=e.onErrorClick,d=e.renderLoading,s=e.loadClassName,m=void 0===s?"":s,s=e.loadStyle,f=void 0===s?{}:s,y=e.renderEmpty,s=e.emptyClassName,v=void 0===s?"":s,s=e.emptyStyle,p=void 0===s?{}:s,E=e.renderError,s=e.errorClassName,R=void 0===s?"":s,s=e.errorStyle,N=void 0===s?{}:s,s=__rest(e,["className","style","children","getScrollContainer","distance","onScrollBottom","onEmptyClick","onErrorClick","renderLoading","loadClassName","loadStyle","renderEmpty","emptyClassName","emptyStyle","renderError","errorClassName","errorStyle"]),O=useRef(!1),C=useRef(null),L=useRef(null),S=useRef(null),_=useRef(null);function b(){return a?a():C.current}function g(){var e=b(),r=e.scrollHeight-e.offsetHeight,e=e.scrollTop;c&&Math.abs(e-r)<=o&&(O.current||(O.current=!0,L.current.style.display="flex",c(function(e){L.current.style.display="none",e===EMPTY?S.current.style.display="block":e===ERROR&&(_.current.style.display="block"),O.current=!1})))}function h(){i&&i()}function P(){u&&u()}function k(){L.current.style.display="none",_.current.style.display="none",S.current.style.display="none"}var e=useCallback(function(){return d?React.createElement("div",{className:classNames("".concat(selectorPrefix,"-load"),m),style:null!=f?f:{},ref:L},d()):React.createElement("div",{className:classNames("".concat(selectorPrefix,"-load"),"standard",m),style:null!=f?f:{},ref:L},Intl.v("数据加载中"))},[d,m,f]),x=useCallback(function(){return y?React.createElement("div",{className:classNames("".concat(selectorPrefix,"-empty"),v),style:null!=p?p:{},ref:S},y()):React.createElement("div",{className:classNames("".concat(selectorPrefix,"-empty"),v),style:null!=p?p:{},ref:S},"~",Intl.v("没有更多"))},[y,v,p]),H=useCallback(function(){return E?React.createElement("div",{className:classNames("".concat(selectorPrefix,"-error"),R),style:null!=N?N:{},ref:_},E()):React.createElement("div",{className:classNames("".concat(selectorPrefix,"-error"),R),style:null!=N?N:{},ref:_},Intl.v("出现错误"))},[E,R,N]);return useImperativeHandle(r,function(){return{hideAll:k}}),useLayoutEffect(function(){var e;return null!=(e=b())&&e.addEventListener("scroll",g),null!=(e=S.current)&&e.addEventListener("click",h),null!=(e=_.current)&&e.addEventListener("click",P),function(){var e;null!=(e=b())&&e.removeEventListener("scroll",g),null!=(e=S.current)&&e.removeEventListener("click",h),null!=(e=_.current)&&e.removeEventListener("click",P)}}),React.createElement("div",__assign({},s,{className:classNames(selectorPrefix,l),style:__assign(__assign({},null!=t?t:{}),{overflowY:b()===C.current?"auto":"initial"}),ref:C}),n,e(),x(),H())},ScrollLoadHOC=memo(forwardRef(ScrollLoad));ScrollLoadHOC.EMPTY="empty",ScrollLoadHOC.ERROR="error",ScrollLoadHOC.NORMAL="normal";export default ScrollLoadHOC;
//# sourceMappingURL=scrollload.js.map
