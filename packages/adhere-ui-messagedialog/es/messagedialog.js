import _ConfigProvider from"antd/es/config-provider";import _Form from"antd/es/form";import _Button from"antd/es/button";import"core-js/modules/es.object.assign.js";import{__assign,__rest}from"tslib";import React from"react";import ReactDOM from"react-dom";import FormItemCreator from"@baifendian/adhere-ui-formitemcreator";import Intl from"@baifendian/adhere-util-intl";import Resource from"@baifendian/adhere-util-resource";import ModalDialog,{selectorPrefix}from"./modal";var DEFAULT_LOCAL="zh_CN",LOCAL=Resource.Dict.value.LocalsAntd.value,PromptLayout={labelCol:{span:6},wrapperCol:{span:18}};function renderByIcon(e,o){return React.createElement("div",{className:"".concat(selectorPrefix,"-renderByIcon")},React.createElement("div",{className:"".concat(selectorPrefix,"-renderByIcon-fixed")},e),React.createElement("div",{className:"".concat(selectorPrefix,"-renderByIcon-auto")},o))}var MessageDialogFactory={Confirm:function(e){var o=e.title,t=e.text,n=void 0===t?null:t,r=e.width,a=e.zIndex,i=e.local,t=e.icon,t=void 0===t?null:t,l=e.onSuccess,c=this.Modal({config:{title:o,centered:!0,width:(void 0===r?300:r)||300,closable:!1,zIndex:void 0===a?1e3:a,footer:[React.createElement(_Button,{key:"submit",type:"primary",title:Intl.v("确定"),onClick:function(){l?l().then(function(){return c()}):c()}},Intl.v("确定"))]},local:i,children:t?renderByIcon(t,n):n}).close},Alert:function(e){var o=e.title,t=e.text,n=void 0===t?null:t,r=e.width,a=e.zIndex,t=e.local,e=e.icon;this.Modal({config:{title:o,centered:!0,width:(void 0===r?300:r)||300,closable:!1,zIndex:void 0===a?1e3:a},local:t,children:e?renderByIcon(e,n):n})},Prompt:function(e){var o=e.title,t=e.config,n=e.layout,r=void 0===n?PromptLayout:n,a=e.width,i=void 0===a?300:a,n=e.zIndex,a=void 0===n?1e3:n,n=e.local,l=e.onSuccess,c=React.createRef(),s=this.Modal({config:{title:o,centered:!0,width:i||300,closable:!1,zIndex:a,footer:[React.createElement(_Button,{key:"submit",type:"primary",title:Intl.v("确定"),onClick:function(){l?c.current.validateFields().then(function(e){l(null==e?void 0:e.value).then(function(){return s()})}):s()}},Intl.v("确定"))]},local:n,children:React.createElement(_Form,{name:"Prompt",ref:c,style:{width:"100%"}},React.createElement(FormItemCreator,{columns:[__assign(__assign({},t||{label:"normal",type:FormItemCreator.TEXT,initialValue:""}),{name:"value"})],layout:r||PromptLayout}))}).close},InputPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.INPUT})}))},TextAreaPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.TEXTAREA})}))},PassWordPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.PASSWORD})}))},NumberPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.NUMBER})}))},Modal:function(e){var o=e.config,t=e.children,n=void 0===t?null:t,t=e.defaultCloseBtn,t=void 0===t||t,e=e.local,e=void 0===e?DEFAULT_LOCAL:e,o=Object.assign({maskClosable:!1},void 0===o?{}:o),r=document.createElement("div");function a(){var e,o;ReactDOM.unmountComponentAtNode(r)&&null!==(o=null===(e=null==r?void 0:r.parentElement)||void 0===e?void 0:e.removeChild)&&void 0!==o&&o.call(e,r)}return ReactDOM.render(React.createElement(_ConfigProvider,{locale:LOCAL[e||DEFAULT_LOCAL]},React.createElement(ModalDialog,{close:a,config:o,closeBtn:t},n)),r),document.body.appendChild(r),{el:r,close:a}},close:function(e){var o,t;ReactDOM.unmountComponentAtNode(e)&&null!==(t=null===(o=null==e?void 0:e.parentElement)||void 0===o?void 0:o.removeChild)&&void 0!==t&&t.call(o,e)}};export default MessageDialogFactory;
//# sourceMappingURL=messagedialog.js.map
