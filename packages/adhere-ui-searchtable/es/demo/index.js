import{ConfigProvider}from"antd";import React,{Suspense,lazy}from"react";import ReactDOM from"react-dom/client";import AdhereConfigProvider from"@baifendian/adhere-ui-configprovider";import Resource from"@baifendian/adhere-util-resource";import DictConfig from"./config/dict/dict.config";import"../index.less";import"./index.less";DictConfig();var ProSearchStateTableImpl=lazy(function(){return import("./proEditableTableRowDragSortSearchTable.jsx")});ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(ConfigProvider,{locale:Resource.Dict.value.LocalsAntd.value.zh_CN},React.createElement(AdhereConfigProvider,{intl:{lang:"zh_CN",locales:{}}},function(){return React.createElement("div",{style:{display:"flex",height:700}},React.createElement(Suspense,{fallback:React.createElement("div",null,"loading")},React.createElement(ProSearchStateTableImpl,{pagination:!0})))})));
//# sourceMappingURL=index.js.map
