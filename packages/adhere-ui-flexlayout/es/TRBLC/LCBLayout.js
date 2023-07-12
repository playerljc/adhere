var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(r[l[o]]=e[l[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{useMemo}from"react";import Auto from"../auto";import Fixed from"../fixed";import FlexLayout,{selectorPrefix}from"../flexlayout";var LCBLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,o=e.autoWrapProps,l=e.autoInnerProps,a=e.lProps,n=e.lSplit,s=e.cProps,i=e.bProps,c=e.bSplit,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","lSplit","cProps","bProps","bSplit"]),u=omit(a,["render"]),m=omit(s,["render"]),p=omit(i,["render"]),f=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=s&&"autoFixed"in s&&!s.autoFixed,e),null!=t?t:"")},[s]),d=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc-auto"),((e={})["".concat(selectorPrefix,"-trblc-auto-no-autofix")]=o&&"autoFixed"in o&&!o.autoFixed,e),null!=(e=null==o?void 0:o.className)?e:"")},[o]),x=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-horizontal-flex-layout"),"".concat(selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(selectorPrefix,"-trblc-auto-inner-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),null!=(e=null==l?void 0:l.className)?e:"")},[l]);return React.createElement("div",{className:f,style:null!=r?r:{}},React.createElement(FlexLayout,__assign({},null!=e?e:{},{className:classNames("".concat(selectorPrefix,"-lcb-layout"),null!=(f=null==e?void 0:e.className)?f:""),direction:"vertical"}),React.createElement(Auto,__assign({},null!=o?o:{},{fit:!1,className:d}),React.createElement(FlexLayout,__assign({},null!=l?l:{},{className:x,direction:"horizontal"}),React.createElement(Fixed,__assign({},null!=u?u:{}),null==(r=null==a?void 0:a.render)?void 0:r.call(a)),n,React.createElement(Auto,__assign({},null!=m?m:{}),null==(e=null==s?void 0:s.render)?void 0:e.call(s)))),c,React.createElement(Fixed,__assign({},null!=p?p:{}),null==(f=null==i?void 0:i.render)?void 0:f.call(i))))};export default LCBLayout;
//# sourceMappingURL=LCBLayout.js.map
