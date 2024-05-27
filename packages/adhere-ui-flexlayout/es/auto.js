var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};import classNames from"classnames";import React,{forwardRef,memo,useContext,useMemo}from"react";import ConfigProvider from"@baifendian/adhere-ui-configprovider";import{FlexContext}from"./Context";import{useGap}from"./Hooks";import{getGridStyle}from"./Util";var selectorPrefix="adhere-ui-flex-layout-auto",Auto=memo(forwardRef(function(e,t){var r=e.children,o=e.className,i=void 0===o?"":o,o=e.style,n=void 0===o?{}:o,o=e.autoFixed,a=void 0===o||o,o=e.fit,s=void 0===o||o,o=__rest(e,["children","className","style","autoFixed","fit"]),l=useContext(ConfigProvider.Context).media,e=useContext(FlexContext),c=e.gutter,f=void 0===c?0:c,u=e.direction,m=e.children,d=useGap(f),c=useMemo(function(){var e;return classNames(selectorPrefix,i,((e={})["".concat(selectorPrefix,"-auto-fixed")]=a,e["".concat(selectorPrefix,"-fit")]=s,e["".concat(selectorPrefix,"-gap")]=d,e))},[i,a,s]),e=useMemo(function(){var e=null!=n?n:{},t=d?getGridStyle({gutter:f,span:null,children:m,direction:u,media:l}):{};return __assign(__assign({},e),t)},[n,f]);return React.createElement("div",__assign({ref:t},o,{className:c,style:e}),r)}));Auto.displayName="Auto";export default Auto;
//# sourceMappingURL=Auto.js.map
