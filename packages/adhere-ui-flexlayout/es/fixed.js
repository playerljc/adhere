var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r};import classNames from"classnames";import React,{memo,useContext,useMemo}from"react";import{FlexContext}from"./context";import{useGap,useGrid}from"./hooks";import{getGridStyle}from"./util";var selectorPrefix="adhere-ui-flexlayout-fixed",gridCount=24,Fixed=function(t){var r=t.className,e=t.children,o=t.style,s=t.fit,n=t.span,i=__rest(t,["className","children","style","fit","span"]),a=useContext(FlexContext),c=a.gutter,l=void 0===c?0:c,u=a.direction,f=a.children,p=useGrid(t),m=useGap(l),c=useMemo(function(){var e;return classNames(selectorPrefix,r,((e={})["".concat(selectorPrefix,"-fit")]=s,e["".concat(selectorPrefix,"-col-").concat(t.span)]=p,e["".concat(selectorPrefix,"-gap")]=m,e))},[r,t.span,s]),a=useMemo(function(){var e=o||{},t=p?getGridStyle({gutter:l,span:n,children:f,direction:u}):{};return __assign(__assign({},e),t)},[o,l]);return React.createElement("div",__assign({className:c,style:a},i),e)};export default memo(Fixed);export{gridCount};
//# sourceMappingURL=fixed.js.map
