import _ConfigProvider2 from"antd-mobile/es/components/config-provider";import _ConfigProvider from"antd/es/config-provider";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};import"antd-mobile/es/global";import zhCN from"antd-mobile/es/locales/zh-CN";import React from"react";import ReactDOM from"react-dom/client";import{StyleProvider,legacyLogicalPropertiesTransformer,px2remTransformer}from"@ant-design/cssinjs";import{ConfigProvider as AdhereConfigProvider,Resource}from"@baifendian/adhere";import Browsersniff from"@baifendian/adhere-util-browsersniff";import{antdThemeToCssVariable}from"./theme";import"antd/dist/reset.css";import"font-awesome/css/font-awesome.min.css";import"@baifendian/adhere-ui-configprovider/es/index.less";import"@baifendian/adhere/lib/css.less";var timerRef=null;document.getElementById("app").classList.add("mobile"),import("react-fastclick").then(function(e){return e.default()}),Browsersniff.iSOSiOS()&&(document.addEventListener("focusin",function(e){e&&e.target&&e.target.tagName&&["input","textarea"].includes(e.target.tagName.toLowerCase())&&clearTimeout(timerRef)}),document.addEventListener("focusout",function(e){e&&e.target&&e.target.tagName&&["input","textarea"].includes(e.target.tagName.toLowerCase())&&(timerRef=setTimeout(function(){window.scrollTo(0,0)},0))}));export default function(e){var t=e.children,r=e.lang,r=void 0===r?"zh_CN":r,o=e.locales,o=void 0===o?{en_US:[],zh_CN:[],pt_PT:[]}:o,i=e.theme,i=void 0===i?{}:i,e=e.curTheme,a=void 0===e?"default":e,e={transformers:[legacyLogicalPropertiesTransformer,px2remTransformer({rootValue:37.5})]};ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(_ConfigProvider,{locale:Resource.Dict.value.LocalsAntd.value[r]},React.createElement(StyleProvider,__assign({},e),React.createElement(_ConfigProvider2,{locale:zhCN},React.createElement(AdhereConfigProvider,{intl:{lang:r,locales:o},onIntlInit:function(){antdThemeToCssVariable(a)},theme:i},function(){return t})))))}
//# sourceMappingURL=mobile.js.map
