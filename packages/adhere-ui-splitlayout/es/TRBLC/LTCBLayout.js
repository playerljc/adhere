var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(r[a[o]]=t[a[o]]);return r};import React,{forwardRef,memo}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import SplitLayout from"../splitlayout";var LTCBLayout=function(t,e){var r=t.lSplitProps,o=t.tSplitProps,a=t.bSplitProps,t=__rest(t,["lSplitProps","tSplitProps","bSplitProps"]);return React.createElement(FlexLayout.TRBLC.LTCBLayout,__assign({ref:e},t,{lSplit:React.createElement(SplitLayout,__assign({},null!=r?r:{})),tSplit:React.createElement(SplitLayout,__assign({},null!=o?o:{})),bSplit:React.createElement(SplitLayout,__assign({},null!=a?a:{}))}))};export default memo(forwardRef(LTCBLayout));
//# sourceMappingURL=LTCBLayout.js.map
