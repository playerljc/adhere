var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]]);return r};import classNames from"classnames";import React,{memo}from"react";var selectorPrefix="adhere-ui-split",SplitGroup=function(e){var t=e.children,r=__rest(e,["children"]);return React.createElement(React.Fragment,null,Array.isArray(t)?t.map(function(e,t){return 0!==t?React.createElement(React.Fragment,null,React.createElement(Split,__assign({},r,{key:t})),e):e}):t)},Split=function(e){var t=e.className,r=e.direction,r=void 0===r?"vertical":r,e=e.size,e=void 0===e?20:e;return React.createElement("div",{className:classNames(selectorPrefix,(void 0===t?"":t)||""),style:"horizontal"===r?{display:"inline-block",width:1,height:"100%",margin:"0 "+e+"px"}:{width:"100%",height:1,margin:e+"px 0"}})},MemoWrap=memo(Split);MemoWrap.Group=SplitGroup;export default MemoWrap;
//# sourceMappingURL=split.js.map
