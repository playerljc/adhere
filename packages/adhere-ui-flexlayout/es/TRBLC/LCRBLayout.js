var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t};import classNames from"classnames";import omit from"omit.js";import React from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var LCRBLayout=function(e){var r=e.lProps,t=e.rProps,o=e.cProps,a=e.bProps,l=e.autoWrapProps,n=e.autoInnerProps,e=__rest(e,["lProps","rProps","cProps","bProps","autoWrapProps","autoInnerProps"]),s=omit(r,["render"]),i=omit(t,["render"]),c=omit(o,["render"]),u=omit(a,["render"]);return React.createElement(FlexLayout,__assign({},e||{},{className:classNames("".concat(selectorPrefix,"-lcrb-layout"),null==e?void 0:e.className),direction:"vertical"}),React.createElement(Auto,__assign({},l||{},{fit:!1}),React.createElement(FlexLayout,__assign({},n||{},{className:classNames("".concat(selectorPrefix,"-trblc-layout-auto-inner"),null==l?void 0:l.className),direction:"horizontal"}),React.createElement(Fixed,__assign({},s||{}),null==(e=null==r?void 0:r.render)?void 0:e.call(r)),React.createElement(Auto,__assign({},c||{}),null==(n=null==o?void 0:o.render)?void 0:n.call(o)),React.createElement(Fixed,__assign({},i||{}),null==(l=null==t?void 0:t.render)?void 0:l.call(t)))),React.createElement(Fixed,__assign({},u||{}),null==(s=null==a?void 0:a.render)?void 0:s.call(a)))};export default LCRBLayout;
//# sourceMappingURL=LCRBLayout.js.map
