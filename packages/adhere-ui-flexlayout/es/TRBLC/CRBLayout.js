var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import classNames from"classnames";import omit from"omit.js";import React,{forwardRef,memo,useMemo}from"react";import Auto from"../Auto";import Fixed from"../Fixed";import FlexLayout,{selectorPrefix}from"../FlexLayout";var CRBLayout=memo(forwardRef(function(e,t){var r=e.wrapClassName,o=e.wrapStyle,a=e.autoWrapProps,l=e.autoInnerProps,n=e.rProps,s=e.rSplit,i=e.cProps,c=e.bProps,u=e.bSplit,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","rProps","rSplit","cProps","bProps","bSplit"]),m=omit(n,["children"]),p=omit(i,["children"]),f=omit(c,["children"]),d=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc"),((e={})["".concat(selectorPrefix,"-trblc-no-autofix")]=i&&"autoFixed"in i&&!i.autoFixed,e),null!=r?r:"")},[i]),x=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-trblc-auto"),((e={})["".concat(selectorPrefix,"-trblc-auto-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null!=(e=null==a?void 0:a.className)?e:"")},[a]),y=useMemo(function(){var e;return classNames("".concat(selectorPrefix,"-horizontal-flex-layout"),"".concat(selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(selectorPrefix,"-trblc-auto-inner-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),null!=(e=null==l?void 0:l.className)?e:"")},[l]);return React.createElement("div",{ref:t,className:d,style:null!=o?o:{}},React.createElement(FlexLayout,__assign({},null!=e?e:{},{className:classNames("".concat(selectorPrefix,"-crb-layout"),null!=(t=null==e?void 0:e.className)?t:""),direction:"vertical"}),React.createElement(Auto,__assign({},null!=a?a:{},{fit:!1,className:x}),React.createElement(FlexLayout,__assign({},null!=l?l:{},{className:y,direction:"horizontal"}),React.createElement(Auto,__assign({},null!=p?p:{}),null==i?void 0:i.children),s,React.createElement(Fixed,__assign({collapseDirection:"R"},null!=m?m:{}),null==n?void 0:n.children))),u,React.createElement(Fixed,__assign({collapseDirection:"B"},null!=f?f:{}),null==c?void 0:c.children)))}));CRBLayout.displayName="CRBLayout";export default CRBLayout;
//# sourceMappingURL=CRBLayout.js.map
