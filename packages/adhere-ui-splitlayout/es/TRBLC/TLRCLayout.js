var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(r[o[a]]=t[o[a]]);return r};import React,{forwardRef,memo}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import SplitLayout from"../SplitLayout";var TLRCLayout=memo(forwardRef(function(t,e){var r=t.tSplitProps,a=t.lSplitProps,o=t.rSplitProps,t=__rest(t,["tSplitProps","lSplitProps","rSplitProps"]);return React.createElement(FlexLayout.TRBLC.TLRCLayout,__assign({ref:e},t,{tSplit:React.createElement(SplitLayout,__assign({},null!=r?r:{})),lSplit:React.createElement(SplitLayout,__assign({},null!=a?a:{})),rSplit:React.createElement(SplitLayout,__assign({},null!=o?o:{}))}))}));TLRCLayout.displayName="TLRCLayout";export default TLRCLayout;
//# sourceMappingURL=TLRCLayout.js.map
