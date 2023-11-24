import _Form from"antd/es/form";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||((o=o||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};import React,{createRef}from"react";import{SearchTableContext,selectorPrefix}from"../SearchTable";import{findRecord}from"../Util";export default function(e){return __extends(t,r=e),t.prototype.onTableRowComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?__spreadArray(__spreadArray([],this.tableRowComponentReducers,!0),["useEditableTableRow"],!1):this.tableRowComponentReducers},t.prototype.onTableCellComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?__spreadArray(__spreadArray([],this.tableCellComponentReducers,!0),["useEditableTableCell"],!1):this.tableCellComponentReducers},t.prototype.rowEditableReducer=function(e){var t=e.rowConfig,r=e.rowIndex,o=e.columns,e=e.record;return this.onEditorRow&&(t.$editable=this.onEditorRow({rowIndex:r,record:e,columns:o})),t},t.prototype.onEditorRow=function(e){return{editable:!0}},t.prototype.onEditorCell=function(e){e.record;e=e.editorConfig;e&&(e.useTrigger=!1,this.state.isTableEditor)&&(e.defaultStatus="edit")},t.prototype.onExpandedRowsChange=function(e){var t=this;return r.prototype.onExpandedRowsChange.call(this,e).then(function(){t.state.isTableEditor&&t.setFieldValues(t.getData())})},t.prototype.setFieldValues=function(t){function r(o){var e;return(a||[]).reduce(function(e,t){var r=t.dataIndex,t=t.$editable;return r in o&&t&&"type"in t&&(e[r]=n.valueToFormItemValue({type:t.type,record:o,dataIndex:r})),e},((e={})[n.getRowKey()]=o[n.getRowKey()],e))}var e,n=this,a=this.getTableColumns(),o=[],i=this.state.expandedRowKeys,l=this.getRowKey();o=i.length?(e=null==(e=null==(i=null==(i=this.tableWrapRef)?void 0:i.current)?void 0:i.querySelectorAll)?void 0:e.call(i,".ant-table-wrapper tr[data-row-key]"),Array.from(e).map(function(e){e=e.dataset.rowKey,e=findRecord(t,l,e);return r(e)})):t.map(r),null!=(i=null==(e=null==(i=this.formRef)?void 0:i.current)?void 0:e.setFieldValue)&&i.call(e,"dataSource",o)},t.prototype.fetchData=function(){var t=this;return r.prototype.fetchData.call(this).then(function(e){return t.setFieldValues(e.data[t.getDataKey()]),t.setState({isTableEditor:!1}),e})},t.prototype.render=function(){var n=this;return React.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},React.createElement(_Form,{ref:this.formRef,className:"".concat(selectorPrefix,"-form"),component:!1},React.createElement(_Form.List,{name:"dataSource"},function(e,t,r){var o;return React.createElement(SearchTableContext.Provider,{value:{context:n,editable:{tableEditable:{form:null==(o=n.formRef)?void 0:o.current,formList:{fields:e,operation:t,meta:r}}}}},n.renderChildren())})))},t;function t(e){e=r.call(this,e)||this;return e.formRef=createRef(),e.state=__assign(__assign({},e.state),{isTableEditor:!1}),e.rowConfigReducers=__spreadArray(__spreadArray([],e.rowConfigReducers,!0),[e.rowEditableReducer],!1),e}var r}
//# sourceMappingURL=SearchEditableFactory.js.map
