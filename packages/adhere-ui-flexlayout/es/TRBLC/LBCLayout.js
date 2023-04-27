var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var LBCLayout=function(e){var t=e.lProps,r=e.bProps,o=e.cProps,a=e.autoWrapProps,n=e.autoInnerProps,e=__rest(e,["lProps","bProps","cProps","autoWrapProps","autoInnerProps"]),l=omit(t,["render"]),s=omit(r,["render"]),i=omit(o,["render"]);return React.createElement(FlexLayout,__assign({},e||{},{className:classNames("".concat(selectorPrefix,"-lbc-layout"),null==e?void 0:e.className),direction:"horizontal"}),React.createElement(Fixed,__assign({},l||{}),null==(e=null==t?void 0:t.render)?void 0:e.call(t)),React.createElement(Auto,__assign({},a||{},{fit:!1}),React.createElement(FlexLayout,__assign({},n||{},{className:classNames("".concat(selectorPrefix,"-trblc-layout-auto-inner"),null==a?void 0:a.className),direction:"vertical"}),React.createElement(Auto,__assign({},i||{}),null==(l=null==o?void 0:o.render)?void 0:l.call(o)),React.createElement(Fixed,__assign({},s||{}),null==(e=null==r?void 0:r.render)?void 0:e.call(r)))))};export default LBCLayout;
//# sourceMappingURL=LBCLayout.js.map
