var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,r){var e={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(e[a[o]]=t[a[o]]);return e};import classNames from"classnames";import omit from"omit.js";import React from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var LCLayout=function(t){var r=t.lProps,e=t.cProps,t=(t.autoWrapProps,t.autoInnerProps,__rest(t,["lProps","cProps","autoWrapProps","autoInnerProps"])),o=omit(r,["render"]),a=omit(e,["render"]);return React.createElement(FlexLayout,__assign({},t||{},{className:classNames("".concat(selectorPrefix,"-lc-layout"),null==t?void 0:t.className),direction:"horizontal"}),React.createElement(Fixed,__assign({},o||{}),null==(t=null==r?void 0:r.render)?void 0:t.call(r)),React.createElement(Auto,__assign({},a||{}),null==(o=null==e?void 0:e.render)?void 0:o.call(e)))};export default LCLayout;
//# sourceMappingURL=LCLayout.js.map
