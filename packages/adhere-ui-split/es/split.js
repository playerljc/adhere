var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{memo,useCallback,useContext,useMemo}from"react";import ConfigProvider from"@baifendian/adhere-ui-configprovider";import SplitGroup from"./Group";import{getValue}from"./Util";var selectorPrefix="adhere-ui-split",InternalSplit=memo(function(e){var t=e.className,t=void 0===t?"":t,i=e.style,r=e.direction,a=void 0===r?"vertical":r,r=e.size,o=void 0===r?20:r,n=useContext(ConfigProvider.Context).media,l=useMemo(function(){return getValue(n,o)},[n,o]),e=useCallback(function(){return"horizontal"===a?{display:"inline-block",width:1,height:"100%",margin:"0 ".concat(l)}:{width:"100%",height:1,margin:"".concat(l," 0")}},[a,o]);return React.createElement("div",{className:classNames(selectorPrefix,null!=t?t:""),style:__assign(__assign({},e()),null!=i?i:{})})}),Split=InternalSplit;Split.displayName="Split",Split.Group=SplitGroup;export default Split;
//# sourceMappingURL=Split.js.map
