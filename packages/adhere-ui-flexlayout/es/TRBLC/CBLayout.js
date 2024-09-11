var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{forwardRef,memo,useMemo}from"react";import Auto from"../Auto";import Fixed from"../Fixed";import FlexLayout,{selectorPrefix}from"../FlexLayout";var CBLayout=memo(forwardRef(function(e,t){var r=e.wrapClassName,o=e.wrapStyle,a=e.bProps,l=e.bSplit,s=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","bProps","bSplit","cProps"]),n=omit(a,["children"]),i=omit(s,["children"]),c=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=s&&"autoFixed"in s&&!s.autoFixed,e),null!=r?r:"")},[s]);return React.createElement("div",{ref:t,className:c,style:null!=o?o:{}},React.createElement(FlexLayout,__assign({},null!=e?e:{},{className:classNames("".concat(selectorPrefix,"-cb-layout"),null!=(t=null==e?void 0:e.className)?t:""),direction:"vertical"}),React.createElement(Auto,__assign({},null!=i?i:{}),null==s?void 0:s.children),l,React.createElement(Fixed,__assign({collapseDirection:"B"},null!=n?n:{}),null==a?void 0:a.children)))}));CBLayout.displayName="CBLayout";export default CBLayout;
//# sourceMappingURL=CBLayout.js.map
