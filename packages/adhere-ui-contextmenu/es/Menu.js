var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{forwardRef,memo,useCallback,useContext,useImperativeHandle,useRef}from"react";import{ProviderContext}from"./ContextMenuContext";import MenuItem from"./MenuItem";var selectorPrefix="adhere-ui-contextmenu-submenu",Menu=function(e,t){var n=e.className,n=void 0===n?"":n,r=e.style,r=void 0===r?{}:r,e=e.data,e=void 0===e?[]:e,i=useRef(null),u=useContext(ProviderContext).config,o=useCallback(function(){return{width:u.width+"px",zIndex:199999}},[u]);function a(){var e=u.x,t=u.y,n=null==(n=i.current)?void 0:n.offsetWidth,r=null==(r=i.current)?void 0:r.offsetHeight,o=document.body.clientWidth||document.documentElement.clientWidth,a=document.body.clientHeight||document.documentElement.clientHeight;a-t<r&&(t=a-r),i.current.style.left=(e=o-e<n?o-n:e)+"px",i.current.style.top=t+"px"}return useImperativeHandle(t,function(){return{mount:a}}),React.createElement("ul",{className:classNames(selectorPrefix,n||""),style:__assign(__assign({},r||{}),o()),ref:i},(e||[]).map(function(e){return React.createElement(MenuItem,{key:e.id,data:e})}))};export default memo(forwardRef(Menu));
//# sourceMappingURL=Menu.js.map
