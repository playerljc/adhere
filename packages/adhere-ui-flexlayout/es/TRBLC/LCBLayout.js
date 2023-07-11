var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{useMemo}from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var LCBLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,o=e.autoWrapProps,a=e.autoInnerProps,l=e.lProps,n=e.cProps,s=e.bProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","cProps","bProps"]),c=omit(l,["render"]),i=omit(n,["render"]),u=omit(s,["render"]),m=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=n&&"autoFixed"in n&&!n.autoFixed,e),null!=t?t:"")},[n]),f=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc-auto"),((e={})["".concat(selectorPrefix,"-trblc-auto-no-autofix")]=o&&"autoFixed"in o&&!o.autoFixed,e),null!=(e=null==o?void 0:o.className)?e:"")},[o]),p=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-horizontal-flex-layout"),"".concat(selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(selectorPrefix,"-trblc-auto-inner-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null!=(e=null==a?void 0:a.className)?e:"")},[a]);return React.createElement("div",{className:m,style:null!=r?r:{}},React.createElement(FlexLayout,__assign({},null!=e?e:{},{className:classNames("".concat(selectorPrefix,"-lcb-layout"),null!=(m=null==e?void 0:e.className)?m:""),direction:"vertical"}),React.createElement(Auto,__assign({},null!=o?o:{},{fit:!1,className:f}),React.createElement(FlexLayout,__assign({},null!=a?a:{},{className:p,direction:"horizontal"}),React.createElement(Fixed,__assign({},null!=c?c:{}),null==(r=null==l?void 0:l.render)?void 0:r.call(l)),React.createElement(Auto,__assign({},null!=i?i:{}),null==(e=null==n?void 0:n.render)?void 0:e.call(n)))),React.createElement(Fixed,__assign({},null!=u?u:{}),null==(m=null==s?void 0:s.render)?void 0:m.call(s))))};export default LCBLayout;
//# sourceMappingURL=LCBLayout.js.map
