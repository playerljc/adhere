import classNames from"classnames";import React,{forwardRef,useImperativeHandle,useRef}from"react";import ReactDOM from"react-dom/client";import{ProviderContext}from"./ContextMenuContext";import Menu from"./Menu";var selectorPrefix="adhere-ui-context-menu",ContextMenuComponentFunction=forwardRef(function(e,n){var t=e.data,t=void 0===t?[]:t,o=e.config,r=e.el,a=useRef();return useImperativeHandle(n,function(){return{mount:function(){var e;return null==(e=a.current)?void 0:e.mount()}}}),React.createElement(ProviderContext.Provider,{value:{config:o,el:r}},React.createElement("div",{className:classNames(selectorPrefix),style:{zIndex:19998},onClick:function(e){e.stopPropagation(),(e=openHandlers.get(r))&&e.unmount()},onContextMenu:function(e){e.preventDefault(),(e=openHandlers.get(r))&&e.unmount()}},React.createElement(Menu,{data:t,className:null!=(e=o.className)?e:"",style:null!=(n=o.style)?n:{},ref:a})))}),openHandlers=new WeakMap,ContextMenu={open:function(e,n){var t=React.createRef(),o=(n=Object.assign({width:200,maskClosable:!0},n),document.createElement("div")),r=(document.body.appendChild(o),ReactDOM.createRoot(o));return r.render(React.createElement(ContextMenuComponentFunction,{data:e,config:n,el:o,ref:function(e){t.current=e,null!=(e=t.current)&&e.mount()}})),openHandlers.set(o,r),o},close:function(e){e=openHandlers.get(e);e&&e.unmount()}};export default ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
