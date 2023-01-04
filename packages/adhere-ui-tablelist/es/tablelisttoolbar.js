import{__assign}from"tslib";import{Checkbox,Popover,Tooltip}from"antd";import React from"react";import{SortableContainer,SortableElement}from"react-sortable-hoc";import{ReloadOutlined,SettingOutlined}from"@ant-design/icons";import Intl from"@baifendian/adhere-util-intl";import{selectorPrefix}from"./tablelist";var ToolbarSelectAll=function(e){var t=e.selectAll,n=e.rowSelection,l=e.rowKey,o=e.dataSource,a=e.setSelectAll;return n?React.createElement(Tooltip,__assign({title:Intl.v("全选"),placement:"top"},t),React.createElement(Checkbox,{indeterminate:t.total&&n.selectAll?null==(e=null==(e=n.selectAll)?void 0:e.exceptKeys)?void 0:e.length:n.selectedRowKeys.length&&n.selectedRowKeys.length!==(null==o?void 0:o.length),checked:t.total&&n.selectAll?!(null!=(e=null==(e=n.selectAll)?void 0:e.exceptKeys)&&e.length):n.selectedRowKeys.length===(null==o?void 0:o.length),onChange:function(e){e.target.checked?n.onChange(o.map(function(e){return e[l]}),o):n.onChange([],[]),t.total&&a&&a(e.target.checked)}},t.title||Intl.v("全选"))):null},ToolbarReload=function(e){var t=e.reload,n=e.onSearch;return React.createElement(Tooltip,__assign({title:Intl.v("刷新"),placement:"top"},t),t.render||React.createElement(ReloadOutlined,{onClick:function(){return n()}}))},ToolbarSetting=function(e){var t=e.setting,n=e.tableColumns,l=e.onSettingChange,o=e.onSettingSortEnd,e=e.selectedColumnKeys,a=SortableElement(function(e){return React.createElement(Checkbox,__assign({},e))}),r=SortableContainer(function(e){return React.createElement(Checkbox.Group,__assign({},e))});return React.createElement(Popover,__assign({title:React.createElement(function(e){var t=e.columns,n=void 0===t?[]:t,t=e.selectedColumnKeys,t=void 0===t?[]:t,l=e.onChange;return React.createElement(React.Fragment,null,React.createElement(Checkbox,{indeterminate:0!==(null==t?void 0:t.length)&&(null==t?void 0:t.length)!==(null==n?void 0:n.length),checked:(null==t?void 0:t.length)===(null==n?void 0:n.length),onChange:function(e){return l(e.target.checked?n.map(function(e){return e.key}):[])}},Intl.v("列展示")))},{columns:n,onChange:l,selectedColumnKeys:e}),content:React.createElement(function(e){var t=e.columns,t=void 0===t?[]:t,n=e.selectedColumnKeys,n=void 0===n?[]:n,l=e.onChange,e=e.onSortEnd;return React.createElement(r,{helperClass:"".concat(selectorPrefix,"-set-dragging"),value:n,onChange:l,onSortEnd:e,distance:2},t.map(function(e,t){return React.createElement(a,{value:e.key,index:t,key:e.key},e.title)}))},{columns:n,onChange:l,onSortEnd:o,selectedColumnKeys:e}),trigger:"click",placement:"bottomRight",overlayClassName:"".concat(selectorPrefix,"-settingOverlay")},t.Popover),React.createElement(Tooltip,__assign({title:Intl.v("设置"),placement:"top"},t),t.render||React.createElement(SettingOutlined,{type:"setting"})))};export{ToolbarSelectAll,ToolbarReload,ToolbarSetting};
//# sourceMappingURL=tablelisttoolbar.js.map
