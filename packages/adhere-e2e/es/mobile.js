import _ConfigProvider2 from"antd-mobile/es/components/config-provider";import _ConfigProvider from"@baifendian/adhere-ui-anthoc/es/config-provider";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import"antd-mobile/es/global";import zhCN from"antd-mobile/es/locales/zh-CN";import React from"react";import ReactDOM from"react-dom/client";import{StyleProvider,legacyLogicalPropertiesTransformer,px2remTransformer}from"@ant-design/cssinjs";import AdhereConfigProvider from"@baifendian/adhere-ui-configprovider";import ContextMenu from"@baifendian/adhere-ui-contextmenu";import MessageDialog from"@baifendian/adhere-ui-messagedialog";import Notification from"@baifendian/adhere-ui-notification";import Popup from"@baifendian/adhere-ui-popup";import Browsersniff from"@baifendian/adhere-util-browsersniff";import Resource from"@baifendian/adhere-util-resource";import{antdThemeToCssVariable}from"./theme";import{isUseMedia}from"./util";import"antd/dist/reset.css";import"font-awesome/css/font-awesome.min.css";import"@baifendian/adhere-ui-configprovider/es/index.less";import"@baifendian/adhere-ui-css/lib/css.less";var timerRef=null,rem=window.document.body.clientWidth/10;document.documentElement.style.fontSize=rem+"px",document.getElementById("app").classList.add("mobile"),import("react-fastclick").then(function(e){return e.default()}),Browsersniff.iSOSiOS()&&(document.addEventListener("focusin",function(e){e&&e.target&&e.target.tagName&&["input","textarea"].includes(e.target.tagName.toLowerCase())&&clearTimeout(timerRef)}),document.addEventListener("focusout",function(e){e&&e.target&&e.target.tagName&&["input","textarea"].includes(e.target.tagName.toLowerCase())&&(timerRef=setTimeout(function(){window.scrollTo(0,0)},0))}));export default function(e){var t=e.children,r=e.lang,i=void 0===r?"zh_CN":r,r=e.locales,o=void 0===r?{en_US:[],zh_CN:[],pt_PT:[]}:r,r=e.theme,n=void 0===r?{}:r,r=e.curTheme,a=void 0===r?"default":r,s={transformers:[legacyLogicalPropertiesTransformer,isUseMedia()&&px2remTransformer({rootValue:37.5})].filter(function(e){return!!e})},d={locale:Resource.Dict.value.LocalsAntd.value[i]};function m(e){return React.createElement(_ConfigProvider,__assign({},d),React.createElement(StyleProvider,__assign({},s),React.createElement(_ConfigProvider2,{locale:zhCN},React.createElement(AdhereConfigProvider,{intl:{lang:i,locales:o},onIntlInit:function(){antdThemeToCssVariable(a)},theme:n,media:{isUseMedia:isUseMedia(),designWidth:37.5},isUseWrapper:!1},e))))}MessageDialog.setRenderToWrapper(m),Popup.setRenderToWrapper(m),ContextMenu.setRenderToWrapper(m),Notification.setRenderToWrapper(m),ReactDOM.createRoot(document.getElementById("app")).render((e=function(){return t},React.createElement(_ConfigProvider,__assign({},d),React.createElement(StyleProvider,__assign({},s),React.createElement(_ConfigProvider2,{locale:zhCN},React.createElement(AdhereConfigProvider,{intl:{lang:i,locales:o},onIntlInit:function(){antdThemeToCssVariable(a)},theme:n,media:{isUseMedia:isUseMedia(),designWidth:37.5}},e))))))}
//# sourceMappingURL=mobile.js.map
