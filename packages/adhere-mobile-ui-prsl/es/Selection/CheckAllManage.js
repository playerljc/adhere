import _Checkbox from"antd-mobile/es/components/checkbox";import React,{useContext}from"react";import Space from"@baifendian/adhere-ui-space";import Intl from"@baifendian/adhere-util-intl";import Context from"../Context";var selectorPrefix="adhere-mobile-ui-prsl-selection",CheckAllManage=function(){var e=useContext(Context),t=e.getOptionSelectedRowKeys,a=e.getDatasourceLength,e=e.selectionAllChange,t=t(),a=a(),a=t.length===a;return React.createElement("div",{className:"".concat(selectorPrefix,"-check-all")},React.createElement("div",{className:"".concat(selectorPrefix,"-check-box")},React.createElement(Space.Group,{direction:"horizontal",size:5},React.createElement(_Checkbox,{checked:a,onChange:e}),React.createElement("span",null,Intl.v("全选")))),React.createElement("div",{className:"".concat(selectorPrefix,"-total")},Intl.vHtml("共 <em>{n}</em> 条",{n:t.length})))};export default CheckAllManage;
//# sourceMappingURL=CheckAllManage.js.map