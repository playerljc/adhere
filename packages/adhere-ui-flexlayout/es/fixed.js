var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(r[s[n]]=e[s[n]]);return r};import classNames from"classnames";import React,{memo,useContext,useMemo}from"react";import{FlexContext}from"./context";var selectorPrefix="adhere-ui-flexlayout-fixed",Fixed=function(t){var r=t.className,e=t.children,n=t.style,s=t.fit,a=(t.span,__rest(t,["className","children","style","fit","span"])),o=useContext(FlexContext).gutter,i=void 0===o?0:o,o=useMemo(function(){var e;return classNames(selectorPrefix,r,((e={})["".concat(selectorPrefix,"-fit")]=s,e["".concat(selectorPrefix,"-col-").concat(t.span)]="span"in t&&"number"==typeof t.span&&0<=t.span&&t.span<=24,e))},[r,t.span,s]),c=useMemo(function(){var e,t=n||{};return Array.isArray(i)?1===i.length?e=i[0]:2===i.length&&(e=i[1]):e=i,__assign({paddingLeft:"".concat(e/2,"px"),paddingRight:"".concat(e/2,"px")},t)},[n,i]);return React.createElement("div",__assign({className:o,style:c},a),e)};export default memo(Fixed);
//# sourceMappingURL=fixed.js.map
