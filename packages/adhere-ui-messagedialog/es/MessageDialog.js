import _Form from"antd/es/form";import _Button from"antd/es/button";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var r in o=arguments[t])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,o){var t={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};import{produce}from"immer";import React from"react";import ReactDOM from"react-dom/client";import FormItemCreator from"@baifendian/adhere-ui-formitemcreator";import Intl from"@baifendian/adhere-util-intl";import{DEFAULT_WIDTH,DEFAULT_ZINDEX,PROMPT_LAYOUT}from"./Constent";import MaximizeModalDialog from"./MaximizeModal";import ModalDialog,{selectorPrefix}from"./Modal";import Trigger from"./Trigger";import TriggerPrompt from"./TriggerPrompt";function renderByIcon(e,o){return React.createElement("div",{className:"".concat(selectorPrefix,"-render-icon")},React.createElement("div",{className:"".concat(selectorPrefix,"-render-icon-fixed")},e),React.createElement("div",{className:"".concat(selectorPrefix,"-render-icon-auto")},o))}var renderToWrapper,lock=!1,MessageDialogHandlers=new WeakMap,MessageDialogFactory={setRenderToWrapper:function(e){renderToWrapper=e},Confirm:function(e){var o=e.title,t=e.text,t=void 0===t?null:t,n=e.width,r=e.zIndex,i=e.local,l=e.icon,l=void 0===l?null:l,a=e.onSuccess,c=this.Modal({config:{title:o,centered:!0,width:(void 0===n?DEFAULT_WIDTH:n)||DEFAULT_WIDTH,closable:!1,zIndex:void 0===r?DEFAULT_ZINDEX:r,footer:[React.createElement(_Button,{key:"submit",type:"primary",title:Intl.v("确定"),onClick:function(){var e;a?a().then(function(){var e;return null==(e=null==c?void 0:c.close)?void 0:e.call(c)}):null!=(e=null==c?void 0:c.close)&&e.call(c)}},Intl.v("确定"))]},local:i,children:l?renderByIcon(l,t):t});return c},Alert:function(e){var o=e.title,t=e.text,t=void 0===t?null:t,n=e.width,r=e.zIndex,i=e.local,e=e.icon;return this.Modal({config:{title:o,centered:!0,width:(void 0===n?DEFAULT_WIDTH:n)||DEFAULT_WIDTH,closable:!1,zIndex:void 0===r?DEFAULT_ZINDEX:r},local:i,children:e?renderByIcon(e,t):t})},Prompt:function(e){var o=e.title,t=e.config,n=e.layout,n=void 0===n?PROMPT_LAYOUT:n,r=e.width,i=e.zIndex,l=e.local,a=e.onSuccess,c=React.createRef(),s=this.Modal({config:{title:o,centered:!0,width:(void 0===r?DEFAULT_WIDTH:r)||DEFAULT_WIDTH,closable:!1,zIndex:void 0===i?DEFAULT_ZINDEX:i,footer:[React.createElement(_Button,{key:"submit",type:"primary",title:Intl.v("确定"),onClick:function(){var e;a?c.current.validateFields().then(function(e){a(null==e?void 0:e.value).then(function(){var e;return null==(e=null==s?void 0:s.close)?void 0:e.call(s)})}):null!=(e=null==s?void 0:s.close)&&e.call(s)}},Intl.v("确定"))]},local:l,children:React.createElement(_Form,{name:"Prompt",ref:c,style:{width:"100%"}},React.createElement(FormItemCreator,{columns:[__assign(__assign({},t||{label:"normal",type:FormItemCreator.TEXT,initialValue:""}),{name:"value"})],layout:n||PROMPT_LAYOUT}))});return s},InputPrompt:function(e){var o=e.config,e=__rest(e,["config"]);return MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.INPUT})}))},TextAreaPrompt:function(e){var o=e.config,e=__rest(e,["config"]);return MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.TEXTAREA})}))},PassWordPrompt:function(e){var o=e.config,e=__rest(e,["config"]);return MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.PASSWORD})}))},NumberPrompt:function(e){var o=e.config,e=__rest(e,["config"]);return MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.NUMBER})}))},Modal:function(e){var t,n,r,o=e.config,i=void 0===o?{}:o,o=e.children,l=void 0===o?null:o,o=e.defaultCloseBtn,a=void 0===o||o;if(!lock)return t=lock=!0,n=__assign(__assign({maskClosable:!1},i),{afterClose:function(){var e;lock=!1,null!=i&&i.afterClose&&null!=(e=null==i?void 0:i.afterClose)&&e.call(i)}}),e=document.createElement("div"),r=ReactDOM.createRoot(e),c(),MessageDialogHandlers.set(e,r),document.body.appendChild(e),{el:e,close:s,setConfig:function(e){n=produce(n,e),c()},update:function(e){c(e)}};function c(e){var o=React.createElement(ModalDialog,{open:t,close:s,config:n,closeBtn:a},null!=e?e:l);r.render(null!=(e=null==renderToWrapper?void 0:renderToWrapper(function(){return o}))?e:o)}function s(){t=!1,c(),setTimeout(function(){r.unmount(),lock=!1},300)}},MaximizeModal:function(e){var t,n,r,o=e.config,i=void 0===o?{}:o,o=e.children,l=void 0===o?null:o,o=e.defaultCloseBtn,a=void 0===o||o;if(!lock)return t=lock=!0,n=__assign(__assign({maskClosable:!1},i),{afterClose:function(){var e;lock=!1,null!=i&&i.afterClose&&null!=(e=null==i?void 0:i.afterClose)&&e.call(i)}}),e=document.createElement("div"),r=ReactDOM.createRoot(e),c(),MessageDialogHandlers.set(e,r),document.body.appendChild(e),{el:e,close:s,setConfig:function(e){n=produce(n,e),c()},update:function(e){c(e)}};function c(e){var o=React.createElement(MaximizeModalDialog,{close:s,open:t,config:n,closeBtn:a},null!=e?e:l);r.render(null!=(e=null==renderToWrapper?void 0:renderToWrapper(function(){return o}))?e:o)}function s(){t=!1,c(),setTimeout(function(){r.unmount(),lock=!1},300)}},close:function(e){e=MessageDialogHandlers.get(e);e&&e.unmount(),lock=!1},Trigger:Trigger,TriggerPrompt:TriggerPrompt};export default MessageDialogFactory;
//# sourceMappingURL=MessageDialog.js.map
