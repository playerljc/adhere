var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,r=1,o=arguments.length;r<o;r++)for(var t in a=arguments[r])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{memo,useContext,useMemo}from"react";import ConfigProvider from"@baifendian/adhere-ui-configprovider";import SpaceGroup from"./Group";import{getValue}from"./Util";var selectorPrefix="adhere-ui-space",InternalSpace=memo(function(e){var a=e.className,a=void 0===a?"":a,r=e.style,r=void 0===r?{}:r,o=e.direction,t=void 0===o?"horizontal":o,o=e.size,i=void 0===o?40:o,n=useContext(ConfigProvider.Context).media,s=useMemo(function(){return getValue(n,i)},[n,i]),e=useMemo(function(){return"horizontal"===t?{display:"inline-block",height:"100%",marginRight:"".concat(s)}:{width:"100%",marginTop:"".concat(s)}},[t,i]);return React.createElement("div",{className:classNames(selectorPrefix,null!=a?a:""),style:__assign(__assign({},e),null!=r?r:{})})}),Space=InternalSpace;Space.displayName="Space",Space.Group=SpaceGroup;export default Space;
//# sourceMappingURL=Space.js.map
