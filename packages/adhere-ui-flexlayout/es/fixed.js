var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};import classNames from"classnames";import React,{forwardRef,memo,useContext,useMemo}from"react";import{FlexContext}from"./context";import{useGap,useGrid}from"./hooks";import{getGridStyle}from"./util";var selectorPrefix="adhere-ui-flexlayout-fixed",gridCount=24,Fixed=function(t,e){var r=t.className,o=t.children,n=t.style,s=t.fit,i=t.span,a=__rest(t,["className","children","style","fit","span"]),c=useContext(FlexContext),l=c.gutter,f=void 0===l?0:l,u=c.direction,p=c.children,m=useGrid(t),d=useGap(f),l=useMemo(function(){var e;return classNames(selectorPrefix,null!=r?r:"",((e={})["".concat(selectorPrefix,"-fit")]=s,e["".concat(selectorPrefix,"-col-").concat(t.span)]=m,e["".concat(selectorPrefix,"-gap")]=d,e))},[r,t.span,s]),c=useMemo(function(){var e=null!=n?n:{},t=d?getGridStyle({gutter:f,span:i,children:p,direction:u}):{};return __assign(__assign({},e),t)},[n,f]);return React.createElement("div",__assign({ref:e},a,{className:l,style:c}),o)};export default memo(forwardRef(Fixed));export{gridCount};
//# sourceMappingURL=fixed.js.map
