var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{memo,useContext}from"react";import{ProviderContext}from"./ContextMenuContext";import MenuItem from"./MenuItem";var selectorPrefix="adhere-ui-contextmenu-submenu",SubMenu=function(e){var t=e.className,t=void 0===t?"":t,n=e.style,n=void 0===n?{}:n,e=e.data,e=void 0===e?[]:e,r=useContext(ProviderContext).config;return React.createElement("ul",{className:classNames(selectorPrefix,t||""),style:__assign(__assign({},n||{}),{width:r.width+"px",zIndex:199999})},(e||[]).map(function(e){return React.createElement(MenuItem,{key:e.id,data:e})}))};export default memo(SubMenu);
//# sourceMappingURL=SubMenu.js.map
