import _ConfigProvider from"antd/es/config-provider";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)};import React from"react";import ReactDOM from"react-dom/client";import{StyleProvider,legacyLogicalPropertiesTransformer,px2remTransformer}from"@ant-design/cssinjs";import{AdapterScreen,ConfigProvider as AdhereConfigProvider,Resource}from"@baifendian/adhere";import{antdThemeToCssVariable}from"./theme";import"antd/dist/reset.css";import"font-awesome/css/font-awesome.min.css";import"@baifendian/adhere-ui-configprovider/es/index.less";import"@baifendian/adhere/lib/css.less";export default function(e){var r=e.children,t=e.lang,t=void 0===t?"zh_CN":t,o=e.locales,o=void 0===o?{en_US:[],zh_CN:[],pt_PT:[]}:o,a=e.theme,a=void 0===a?{}:a,e=e.curTheme,i=void 0===e?"default":e,e=(AdapterScreen.detectZoom(),{transformers:[legacyLogicalPropertiesTransformer,px2remTransformer({rootValue:192})]});ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(_ConfigProvider,{locale:Resource.Dict.value.LocalsAntd.value[t]},React.createElement(StyleProvider,__assign({},e),React.createElement(AdhereConfigProvider,{intl:{lang:t,locales:o},onIntlInit:function(){antdThemeToCssVariable(i)},theme:a},function(){return r}))))}
//# sourceMappingURL=pc.js.map
