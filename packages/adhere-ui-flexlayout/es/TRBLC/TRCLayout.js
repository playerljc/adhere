var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{useMemo}from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var TRCLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,o=e.autoWrapProps,a=e.autoInnerProps,n=e.tProps,s=e.rProps,l=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","tProps","rProps","cProps"]),c=omit(n,["render"]),i=omit(s,["render"]),u=omit(l,["render"]),m=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),t)},[l]),f=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc-auto"),((e={})["".concat(selectorPrefix,"-trblc-auto-no-autofix")]=o&&"autoFixed"in o&&!o.autoFixed,e),null==o?void 0:o.className)},[o]),p=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-horizontal-flex-layout"),"".concat(selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(selectorPrefix,"-trblc-auto-inner-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null==a?void 0:a.className)},[a]);return React.createElement("div",{className:m,style:r||{}},React.createElement(FlexLayout,__assign({},e||{},{className:classNames("".concat(selectorPrefix,"-trc-layout"),null==e?void 0:e.className),direction:"vertical"}),React.createElement(Fixed,__assign({},c||{}),null==(m=null==n?void 0:n.render)?void 0:m.call(n)),React.createElement(Auto,__assign({},o||{},{fit:!1,className:f}),React.createElement(FlexLayout,__assign({},a||{},{className:p,direction:"horizontal"}),React.createElement(Auto,__assign({},u||{}),null==(r=null==l?void 0:l.render)?void 0:r.call(l)),React.createElement(Fixed,__assign({},i||{}),null==(e=null==s?void 0:s.render)?void 0:e.call(s))))))};export default TRCLayout;
//# sourceMappingURL=TRCLayout.js.map
