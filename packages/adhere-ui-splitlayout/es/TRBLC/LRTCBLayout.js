var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,l=arguments.length;r<l;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};import React,{forwardRef,memo}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import SplitLayout from"../splitlayout";var LRTCBLayout=function(t,e){var r=t.bSplitProps,l=t.lSplitProps,o=t.tSplitProps,a=t.rSplitProps,t=__rest(t,["bSplitProps","lSplitProps","tSplitProps","rSplitProps"]);return React.createElement(FlexLayout.TRBLC.LRTCBLayout,__assign({ref:e},t,{lSplit:React.createElement(SplitLayout,__assign({},null!=l?l:{})),rSplit:React.createElement(SplitLayout,__assign({},null!=a?a:{})),tSplit:React.createElement(SplitLayout,__assign({},null!=o?o:{})),bSplit:React.createElement(SplitLayout,__assign({},null!=r?r:{}))}))};export default memo(forwardRef(LRTCBLayout));
//# sourceMappingURL=LRTCBLayout.js.map
