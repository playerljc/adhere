var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{useMemo}from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var CRLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,o=e.rProps,a=e.cProps,e=(e.autoWrapProps,e.autoInnerProps,__rest(e,["wrapClassName","wrapStyle","rProps","cProps","autoWrapProps","autoInnerProps"])),l=omit(o,["render"]),n=omit(a,["render"]),s=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null!=t?t:"")},[a]);return React.createElement("div",{className:s,style:null!=r?r:{}},React.createElement(FlexLayout,__assign({},null!=e?e:{},{className:classNames("".concat(selectorPrefix,"-cr-layout"),null!=(s=null==e?void 0:e.className)?s:""),direction:"horizontal"}),React.createElement(Auto,__assign({},null!=n?n:{}),null==(r=null==a?void 0:a.render)?void 0:r.call(a)),React.createElement(Fixed,__assign({},null!=l?l:{}),null==(e=null==o?void 0:o.render)?void 0:e.call(o))))};export default CRLayout;
//# sourceMappingURL=CRLayout.js.map
