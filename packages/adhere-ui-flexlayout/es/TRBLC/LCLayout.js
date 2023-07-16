var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{useMemo}from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var LCLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,o=(e.autoWrapProps,e.autoInnerProps,e.lProps),a=e.lSplit,l=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","lSplit","cProps"]),n=omit(o,["render"]),s=omit(l,["render"]),i=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),null!=t?t:"")},[l]);return React.createElement("div",{className:i,style:null!=r?r:{}},React.createElement(FlexLayout,__assign({},null!=e?e:{},{className:classNames("".concat(selectorPrefix,"-lc-layout"),null!=(i=null==e?void 0:e.className)?i:""),direction:"horizontal"}),React.createElement(Fixed,__assign({},null!=n?n:{}),null==(r=null==o?void 0:o.render)?void 0:r.call(o)),a,React.createElement(Auto,__assign({},null!=s?s:{}),null==(e=null==l?void 0:l.render)?void 0:e.call(l))))};export default LCLayout;
//# sourceMappingURL=LCLayout.js.map
