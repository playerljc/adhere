var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)r.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]]);return t};import classNames from"classnames";import React,{forwardRef,memo,useContext,useImperativeHandle,useMemo,useRef}from"react";import ConfigProvider from"@baifendian/adhere-ui-configprovider";import{FlexContext}from"./Context";import{useGap,useGrid,useTrigger}from"./Hooks";import{getGridStyle}from"./Util";var selectorPrefix="adhere-ui-flex-layout-fixed",gridCount=24,Fixed=memo(forwardRef(function(e,r){var t=e.className,o=e.children,i=e.style,l=e.fit,s=e.span,n=e.trigger,a=e.collapseDirection,a=void 0===a?"L":a,c=e.collapsedSize,c=void 0===c?80:c,f=e.defaultCollapsible,f=void 0!==f&&f,u=e.onCollapse,p=__rest(e,["className","children","style","fit","span","trigger","collapseDirection","collapsedSize","defaultCollapsible","onCollapse"]),d=useContext(ConfigProvider.Context).media,g=useContext(FlexContext),m=g.gutter,x=void 0===m?0:m,y=g.direction,_=g.children,v=useRef(null),C=useGrid(e),h=useGap(x),m=useTrigger({trigger:n,collapseDirection:a,collapsedSize:c,defaultCollapsible:f,onCollapse:u,selectorPrefix:selectorPrefix,elRef:v}),g=m.renderTrigger,b=m.collapseStyle,e=useMemo(function(){var e;return classNames(selectorPrefix,null!=t?t:"",((e={})["".concat(selectorPrefix,"-fit")]=l,e["".concat(selectorPrefix,"-col-").concat(s)]=C,e["".concat(selectorPrefix,"-gap")]=h,e))},[t,s,l,h,C]),n=useMemo(function(){var e=null!=i?i:{},r=h?getGridStyle({gutter:x,span:s,children:_,direction:y,media:d}):{};return __assign(__assign(__assign({},e),r),null!=b?b:{})},[i,x,b,h,y,d,s,_]);return useImperativeHandle(r,function(){return{getEl:function(){return v.current}}}),React.createElement("div",__assign({ref:v},p,{className:classNames(e),style:n}),o,g())}));Fixed.displayName="Fixed";export default Fixed;export{gridCount};
//# sourceMappingURL=Fixed.js.map
