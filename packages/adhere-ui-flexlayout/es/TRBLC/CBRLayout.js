var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{useMemo}from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var CBRLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,a=e.autoWrapProps,o=e.autoInnerProps,s=e.rProps,n=e.bProps,l=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","rProps","bProps","cProps"]),c=omit(s,["render"]),i=omit(n,["render"]),u=omit(l,["render"]),m=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),t)},[l]),p=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc-auto"),((e={})["".concat(selectorPrefix,"-trblc-auto-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null==a?void 0:a.className)},[a]),f=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(selectorPrefix,"-trblc-auto-inner-no-autofix")]=o&&"autoFixed"in o&&!o.autoFixed,e),null==o?void 0:o.className)},[o]);return React.createElement("div",{className:m,style:r||{}},React.createElement(FlexLayout,__assign({},e||{},{className:classNames("".concat(selectorPrefix,"-cbr-layout"),null==e?void 0:e.className),direction:"horizontal"}),React.createElement(Auto,__assign({},a||{},{fit:!1,className:p}),React.createElement(FlexLayout,__assign({},o||{},{className:f,direction:"vertical"}),React.createElement(Auto,__assign({},u||{}),null==(m=null==l?void 0:l.render)?void 0:m.call(l)),React.createElement(Fixed,__assign({},i||{}),null==(r=null==n?void 0:n.render)?void 0:r.call(n)))),React.createElement(Fixed,__assign({},c||{}),null==(e=null==s?void 0:s.render)?void 0:e.call(s))))};export default CBRLayout;
//# sourceMappingURL=CBRLayout.js.map
