var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{useMemo}from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout from"../flexlayout";import{selectorPrefix}from"../flexlayout";var TCLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,o=(e.autoWrapProps,e.autoInnerProps,e.tProps),a=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","tProps","cProps"]),s=omit(o,["render"]),n=omit(a,["render"]),l=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),t)},[a]);return React.createElement("div",{className:l,style:r||{}},React.createElement(FlexLayout,__assign({},e||{},{className:classNames("".concat(selectorPrefix,"-tc-layout"),null==e?void 0:e.className),direction:"vertical"}),React.createElement(Fixed,__assign({},s||{}),null==(l=null==o?void 0:o.render)?void 0:l.call(o)),React.createElement(Auto,__assign({},n||{}),null==(r=null==a?void 0:a.render)?void 0:r.call(a))))};export default TCLayout;
//# sourceMappingURL=TCLayout.js.map
