var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(r[a[o]]=t[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{forwardRef,memo,useMemo}from"react";import Auto from"../Auto";import Fixed from"../Fixed";import FlexLayout from"../FlexLayout";import{selectorPrefix}from"../FlexLayout";var TCLayout=memo(forwardRef(function(t,e){var r=t.wrapClassName,o=t.wrapStyle,a=(t.autoWrapProps,t.autoInnerProps,t.tProps),l=t.tSplit,s=t.cProps,t=__rest(t,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","tProps","tSplit","cProps"]),n=omit(a,["children"]),i=omit(s,["children"]),c=useMemo(function(){var t;return classNames("".concat(selectorPrefix,"-trblc"),((t={})["".concat(selectorPrefix,"-trblc-no-autofix")]=s&&"autoFixed"in s&&!s.autoFixed,t),null!=r?r:"")},[s]);return React.createElement("div",{ref:e,className:c,style:null!=o?o:{}},React.createElement(FlexLayout,__assign({},null!=t?t:{},{className:classNames("".concat(selectorPrefix,"-tc-layout"),null!=(e=null==t?void 0:t.className)?e:""),direction:"vertical"}),React.createElement(Fixed,__assign({},null!=n?n:{}),null==a?void 0:a.children),l,React.createElement(Auto,__assign({},null!=i?i:{}),null==s?void 0:s.children)))}));export default TCLayout;
//# sourceMappingURL=TCLayout.js.map
