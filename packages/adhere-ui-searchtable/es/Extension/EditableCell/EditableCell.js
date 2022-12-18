import{__assign,__rest}from"tslib";import React,{useEffect,useMemo,useState}from"react";import EditableCellEdit from"./Edit";import EditableCellView from"./View";var EditableCell=function(e){e.record;var t=e.column,i=(e.rowIndex,e.columns,e.$context),n=__rest(e,["record","column","rowIndex","columns","$context"]),a={editable:!1,defaultStatus:"view",type:"input",props:{},formItemProps:{},useTrigger:!0,require:!0,dataIndex:null==t?void 0:t.dataIndex,useKeepEdit:!1},l=useMemo(function(){return __assign(__assign({},a),(null==t?void 0:t.$editable)||{})},[t,null==t?void 0:t.dataIndex]),r=useState(l.defaultStatus),d=r[0],u=r[1];return useEffect(function(){return u("view")},[null==i?void 0:i.getData()]),useEffect(function(){u(null==l?void 0:l.defaultStatus)},[null==l?void 0:l.defaultStatus]),l.editable?l.useKeepEdit?React.createElement("td",__assign({},n||{}),React.createElement(EditableCellEdit,__assign({},e,{editableConfig:l,onTriggerChange:function(){return u("view")}}))):"view"===d?React.createElement("td",__assign({},n||{}),React.createElement(EditableCellView,__assign({},e,{editableConfig:l,onTriggerChange:function(){return u("edit")}}))):"edit"===d?React.createElement("td",__assign({},n||{}),React.createElement(EditableCellEdit,__assign({},e,{editableConfig:l,onTriggerChange:function(){return u("view")}}))):React.createElement("td",__assign({},n||{}),null==n?void 0:n.children):React.createElement("td",__assign({},n||{}),null==n?void 0:n.children)};export default EditableCell;
//# sourceMappingURL=EditableCell.js.map
