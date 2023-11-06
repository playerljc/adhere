var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,l=1,t=arguments.length;l<t;l++)for(var n in r=arguments[l])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var l={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(l[n[t]]=e[n[t]]);return l};import classNames from"classnames";import React,{forwardRef,memo,useCallback,useImperativeHandle,useLayoutEffect,useRef}from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-ui-scroll-load",EMPTY="empty",ERROR="error",NORMAL="normal",InternalScrollLoad=memo(forwardRef(function(e,r){var l=e.className,l=void 0===l?"":l,t=e.style,t=void 0===t?{}:t,n=e.children,a=e.getScrollContainer,s=e.distance,o=void 0===s?50:s,c=e.onScrollBottom,i=e.onEmptyClick,u=e.onErrorClick,d=e.renderLoading,s=e.loadClassName,m=void 0===s?"":s,s=e.loadStyle,f=void 0===s?{}:s,y=e.renderEmpty,s=e.emptyClassName,v=void 0===s?"":s,s=e.emptyStyle,p=void 0===s?{}:s,E=e.renderError,s=e.errorClassName,R=void 0===s?"":s,s=e.errorStyle,N=void 0===s?{}:s,s=__rest(e,["className","style","children","getScrollContainer","distance","onScrollBottom","onEmptyClick","onErrorClick","renderLoading","loadClassName","loadStyle","renderEmpty","emptyClassName","emptyStyle","renderError","errorClassName","errorStyle"]),L=useRef(!1),S=useRef(null),_=useRef(null),b=useRef(null),g=useRef(null);function h(){return a?a():S.current}function O(){var e=h(),r=e.scrollHeight-e.offsetHeight,e=e.scrollTop;c&&Math.abs(e-r)<=o&&(L.current||(L.current=!0,_.current.style.display="flex",c(function(e){_.current.style.display="none",e===EMPTY?b.current.style.display="block":e===ERROR&&(g.current.style.display="block"),L.current=!1})))}function C(){i&&i()}function P(){u&&u()}function k(){_.current.style.display="none",g.current.style.display="none",b.current.style.display="none"}var e=useCallback(function(){return d?React.createElement("div",{className:classNames("".concat(selectorPrefix,"-load"),m),style:null!=f?f:{},ref:_},d()):React.createElement("div",{className:classNames("".concat(selectorPrefix,"-load"),"standard",m),style:null!=f?f:{},ref:_},Intl.v("数据加载中"))},[d,m,f]),x=useCallback(function(){return y?React.createElement("div",{className:classNames("".concat(selectorPrefix,"-empty"),v),style:null!=p?p:{},ref:b},y()):React.createElement("div",{className:classNames("".concat(selectorPrefix,"-empty"),v),style:null!=p?p:{},ref:b},"~",Intl.v("没有更多"))},[y,v,p]),I=useCallback(function(){return E?React.createElement("div",{className:classNames("".concat(selectorPrefix,"-error"),R),style:null!=N?N:{},ref:g},E()):React.createElement("div",{className:classNames("".concat(selectorPrefix,"-error"),R),style:null!=N?N:{},ref:g},Intl.v("出现错误"))},[E,R,N]);return useImperativeHandle(r,function(){return{hideAll:k}}),useLayoutEffect(function(){var e;return null!=(e=h())&&e.addEventListener("scroll",O),null!=(e=b.current)&&e.addEventListener("click",C),null!=(e=g.current)&&e.addEventListener("click",P),function(){var e;null!=(e=h())&&e.removeEventListener("scroll",O),null!=(e=b.current)&&e.removeEventListener("click",C),null!=(e=g.current)&&e.removeEventListener("click",P)}}),React.createElement("div",__assign({},s,{className:classNames(selectorPrefix,l),style:__assign(__assign({},null!=t?t:{}),{overflowY:h()===S.current?"auto":"initial"}),ref:S}),n,e(),x(),I())})),ScrollLoad=InternalScrollLoad;ScrollLoad.EMPTY="empty",ScrollLoad.ERROR="error",ScrollLoad.NORMAL="normal";export default ScrollLoad;
//# sourceMappingURL=ScrollLoad.js.map
