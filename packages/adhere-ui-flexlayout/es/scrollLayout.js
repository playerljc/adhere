var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{createContext,useContext,useRef}from"react";var selectorPrefix="adhere-ui-flexlayout-scrolllayout",ScrollLayoutContext=createContext({getEl:function(){return document.body}}),useScrollLayout=function(){var e=useContext(ScrollLayoutContext);return __assign({},e)},ScrollLayout=function(e){var t=e.children,r=e.className,o=e.style,e=e.scrollY,l=useRef(null);return React.createElement(ScrollLayoutContext.Provider,{value:{getEl:function(){return null==l?void 0:l.current}}},React.createElement("div",{ref:l,className:classNames(selectorPrefix,r),style:__assign({overflowY:e?"auto":"hidden"},o||{})},t))};export default ScrollLayout;export{ScrollLayoutContext,useScrollLayout};
//# sourceMappingURL=scrollLayout.js.map
