var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};import PropTypes from"prop-types";import React from"react";import{Resizable}from"react-resizable";import{selectorPrefix}from"../../SearchTable";function SearchTableResizableTitle(e){var t=e.onResize,r=e.width,e=__rest(e,["onResize","width"]);return t||r?React.createElement(Resizable,{width:r,height:0,handle:React.createElement("span",{className:"".concat(selectorPrefix,"-resizable-handle"),onClick:function(e){e.stopPropagation()}}),draggableOpts:{enableUserSelectHack:!1},onResize:t},React.createElement("th",__assign({},e))):React.createElement("th",__assign({},e))}SearchTableResizableTitle.propTypes={width:PropTypes.oneOfType([PropTypes.number,PropTypes.number]),onResize:PropTypes.func};export default SearchTableResizableTitle;
//# sourceMappingURL=SearchTableResizableTitle.js.map
