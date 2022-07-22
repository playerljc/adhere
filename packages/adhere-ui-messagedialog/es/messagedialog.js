import _ConfigProvider from"antd/es/config-provider";import _Form from"antd/es/form";import _Button from"antd/es/button";import"core-js/modules/es.object.assign.js";import{__assign,__rest}from"tslib";import FormItemCreator from"@baifendian/adhere-ui-formitemcreator";import intl from"@baifendian/adhere-util-intl";import Resource from"@baifendian/adhere-util-resource";import React from"react";import ReactDOM from"react-dom";import ModalDialog,{selectorPrefix}from"./modal";var DEFAULT_LOCAL="zh_CN",LOCAL=Resource.Dict.value.LocalsAntd.value,PromptLayout={labelCol:{span:6},wrapperCol:{span:18}};function renderByIcon(e,o){return React.createElement("div",{className:"".concat(selectorPrefix,"-renderByIcon")},React.createElement("div",{className:"".concat(selectorPrefix,"-renderByIcon-fixed")},e),React.createElement("div",{className:"".concat(selectorPrefix,"-renderByIcon-auto")},o))}var MessageDialogFactory={Confirm:function(e){var o=e.title,t=e.text,n=void 0===t?null:t,i=e.width,r=e.zIndex,a=e.local,t=e.icon,t=void 0===t?null:t,l=e.onSuccess,c=this.Modal({config:{title:o,centered:!0,width:(void 0===i?300:i)||300,closable:!1,zIndex:void 0===r?1e3:r,footer:[React.createElement(_Button,{key:"submit",type:"primary",title:intl.v("确定"),onClick:function(){l?l().then(function(){c()}):c()}},intl.v("确定"))]},local:a,children:t?renderByIcon(t,n):n}).close},Alert:function(e){var o=e.title,t=e.text,n=void 0===t?null:t,i=e.width,r=e.zIndex,t=e.local,e=e.icon;this.Modal({config:{title:o,centered:!0,width:(void 0===i?300:i)||300,closable:!1,zIndex:void 0===r?1e3:r},local:t,children:e?renderByIcon(e,n):n})},Prompt:function(e){var o=e.title,t=e.config,n=e.layout,i=void 0===n?PromptLayout:n,r=e.width,a=void 0===r?300:r,n=e.zIndex,r=void 0===n?1e3:n,n=e.local,l=e.onSuccess,c=React.createRef(),s=this.Modal({config:{title:o,centered:!0,width:a||300,closable:!1,zIndex:r,footer:[React.createElement(_Button,{key:"submit",type:"primary",title:intl.v("确定"),onClick:function(){l?c.current.validateFields().then(function(e){l(e.value).then(function(){s()})}):s()}},intl.v("确定"))]},local:n,children:React.createElement(_Form,{name:"Prompt",ref:c,style:{width:"100%"}},React.createElement(FormItemCreator,{columns:[__assign(__assign({},t||{label:"normal",type:FormItemCreator.TEXT,initialValue:""}),{name:"value"})],layout:i||PromptLayout}))}).close},InputPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.INPUT})}))},TextAreaPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.TEXTAREA})}))},PassWordPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.PASSWORD})}))},NumberPrompt:function(e){var o=e.config,e=__rest(e,["config"]);MessageDialogFactory.Prompt(__assign(__assign({},e),{config:__assign(__assign({},o),{type:FormItemCreator.NUMBER})}))},Modal:function(e){var o=e.config,t=e.children,n=void 0===t?null:t,t=e.defaultCloseBtn,t=void 0===t||t,e=e.local,e=void 0===e?DEFAULT_LOCAL:e,o=Object.assign({maskClosable:!1},void 0===o?{}:o),i=document.createElement("div");function r(){var e,o;ReactDOM.unmountComponentAtNode(i)&&null!==(o=null===(e=null==i?void 0:i.parentElement)||void 0===e?void 0:e.removeChild)&&void 0!==o&&o.call(e,i)}return ReactDOM.render(React.createElement(_ConfigProvider,{locale:LOCAL[e||DEFAULT_LOCAL]},React.createElement(ModalDialog,{close:r,config:o,closeBtn:t},n)),i),document.body.appendChild(i),{el:i,close:r}},close:function(e){var o,t;ReactDOM.unmountComponentAtNode(e)&&null!==(t=null===(o=null==e?void 0:e.parentElement)||void 0===o?void 0:o.removeChild)&&void 0!==t&&t.call(o,e)}};export default MessageDialogFactory;
//# sourceMappingURL=messagedialog.js.map
