import _ConfigProvider from"antd/es/config-provider";import React from"react";import ReactDOM from"react-dom/client";import{ConfigProvider as AdhereConfigProvider,Resource}from"@baifendian/adhere";import{antdThemeToCssVariable}from"./theme";import"antd/dist/reset.css";import"font-awesome/css/font-awesome.min.css";import"@baifendian/adhere-ui-configprovider/es/index.less";import"@baifendian/adhere/lib/css.less";export default function(e){var o=e.children,r=e.lang,r=void 0===r?"zh_CN":r,t=e.locales,t=void 0===t?{en_US:[],zh_CN:[],pt_PT:[]}:t,i=e.theme,i=void 0===i?{}:i,e=e.curTheme,n=void 0===e?"default":e;ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(_ConfigProvider,{locale:Resource.Dict.value.LocalsAntd.value[r]},React.createElement(AdhereConfigProvider,{intl:{lang:r,locales:t},onIntlInit:function(){antdThemeToCssVariable(n)},theme:i},function(){return o})))}
//# sourceMappingURL=pc.js.map
