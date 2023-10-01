import _EditOutlined from"@ant-design/icons/es/icons/EditOutlined";var __rest=this&&this.__rest||function(e,t){var l={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};import classNames from"classnames";import React from"react";import{selectorPrefix}from"../../../SearchTable";var EditableCellView=function(e){var t=e.record,l=e.column,r=e.rowIndex,n=(e.columns,e.editableConfig),i=e.onTriggerChange,e=__rest(e,["record","column","rowIndex","columns","editableConfig","onTriggerChange"]),a=n.useTrigger,c=n.renderToEditTrigger,o=n.dataIndex,d=n.onBeforeToEdit;return a?React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-view")},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-editable-cell-view-inner"),"ellipsis"in l&&l.ellipsis?"".concat(selectorPrefix,"-editable-cell-view-inner-ellipsis"):"")},null==e?void 0:e.children),React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-view-trigger")},React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-view-trigger-inner"),onClick:function(){var e;d?null!=(e=d({value:t[o],record:t,dataIndex:o,rowIndex:r}))&&e.then(function(){return null==i?void 0:i()}):null!=i&&i()}},!!c&&(null==c?void 0:c({value:null==t?void 0:t[o],record:t,dataIndex:o,rowIndex:r})),!c&&React.createElement(_EditOutlined,null)))):React.createElement(React.Fragment,null,null==e?void 0:e.children)};export default EditableCellView;
//# sourceMappingURL=index.js.map
