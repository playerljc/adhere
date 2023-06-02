var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r};import classNames from"classnames";import React,{forwardRef,memo,useContext,useMemo}from"react";import{FlexContext}from"./context";import{useGap}from"./hooks";import{getGridStyle}from"./util";var selectorPrefix="adhere-ui-flexlayout-auto",Auto=function(e,t){var r=e.children,o=e.className,s=void 0===o?"":o,o=e.style,i=void 0===o?{}:o,o=e.autoFixed,n=void 0===o||o,o=e.fit,a=void 0===o||o,o=__rest(e,["children","className","style","autoFixed","fit"]),e=useContext(FlexContext),c=e.gutter,l=void 0===c?0:c,f=e.direction,u=e.children,m=useGap(l),c=useMemo(function(){var e;return classNames(selectorPrefix,s,((e={})["".concat(selectorPrefix,"-auto-fixed")]=n,e["".concat(selectorPrefix,"-fit")]=a,e["".concat(selectorPrefix,"-gap")]=m,e))},[s,n,a]),e=useMemo(function(){var e=i||{},t=m?getGridStyle({gutter:l,span:null,children:u,direction:f}):{};return __assign(__assign({},e),t)},[i,l]);return React.createElement("div",__assign({ref:t},o,{className:c,style:e}),r)};export default memo(forwardRef(Auto));
//# sourceMappingURL=auto.js.map
