import _SettingOutlined from"@ant-design/icons/es/icons/SettingOutlined";import _Tooltip from"antd/es/tooltip";import _Popover from"antd/es/popover";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};import React from"react";import Intl from"@baifendian/adhere-util-intl";import{selectorPrefix}from"../../SearchTable";import Setting from"./Setting";var ColumnSetting=function(t){return React.createElement(_Popover,{content:React.createElement(Setting,__assign({},t)),placement:"bottomRight",trigger:"click"},React.createElement(_Tooltip,{title:"".concat(Intl.v("列设置"))},React.createElement("div",{className:"".concat(selectorPrefix,"-column-setting-btn")},t.renderColumnSettingBtn&&t.renderColumnSettingBtn(),!t.renderColumnSettingBtn&&React.createElement(_SettingOutlined,null))))};export default ColumnSetting;
//# sourceMappingURL=index.js.map
