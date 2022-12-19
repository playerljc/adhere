import _Form from"antd/es/form";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.reduce.js";import{__assign,__extends,__spreadArray}from"tslib";import cloneDeep from"lodash.clonedeep";import moment from"moment";import React,{createRef}from"react";import EditableTableCell from"./Extension/EditableCell/EditableTableCell";import EditableTableRow from"./Extension/EditableCell/EditableTableRow";import SearchEditorCellStateTable from"./SearchEditorCellStateTable";import{SearchTableContext,selectorPrefix}from"./SearchTable";var SearchEditorStateTable=function(t){function e(e){e=t.call(this,e)||this;return e.formRef=createRef(),e.state=__assign(__assign({},e.state),{isTableEditor:!1}),e.rowReducers=__spreadArray(__spreadArray([],e.rowReducers,!0),[e.rowEditableReducer],!1),e}return __extends(e,t),e.prototype.onComponents=function(e,t){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})&&(t.body={row:EditableTableRow,cell:EditableTableCell}),t},e.prototype.updateEditorData=function(o){var i=this;return new Promise(function(e){var t,r=cloneDeep(i.state[i.getServiceName()]),a=r[i.getFetchListPropName()][i.getDataKey()]||[],n=i.getRowKey();o.forEach(function(o){Object.keys(o).forEach(function(e){var t=o[e],r=(t instanceof moment&&(t=t.valueOf()),a.find(function(e){return e[n]===o[n]}));r&&(r[e]=t)})}),i.setState(((t={})[i.getServiceName()]=r,t),function(){return e()})})},e.prototype.rowEditableReducer=function(e){var t=e.rowConfig,r=e.rowIndex,o=e.columns,e=e.record;return this.onEditorRow&&(t.$editable=this.onEditorRow({rowIndex:r,record:e,columns:o})),t},e.prototype.onEditorRow=function(e){return{editable:!0}},e.prototype.onEditorCell=function(e){e.record;e=e.editorConfig;e&&(e.useTrigger=!1,this.state.isTableEditor&&(e.defaultStatus="edit"))},e.prototype.fetchData=function(){var n=this;return t.prototype.fetchData.call(this).then(function(e){var t,r,o=n.getData(),a=n.getTableColumns();return null!=(r=null==(t=null==(t=n.formRef)?void 0:t.current)?void 0:t.setFieldValue)&&r.call(t,"dataSource",o.map(function(o){var e;return a.reduce(function(e,t){var r=t.dataIndex,t=t.$editable;return r in o&&t&&"type"in t&&(e[r]=n.valueToFormItemValue({type:t.type,record:o,dataIndex:r})),e},((e={})[n.getRowKey()]=o[n.getRowKey()],e))})),n.setState({isTableEditor:!1}),e})},e.prototype.render=function(){var a=this;return React.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},React.createElement(_Form,{ref:this.formRef,className:"".concat(selectorPrefix,"-form"),component:!1},React.createElement(_Form.List,{name:"dataSource"},function(e,t,r){var o;return React.createElement(SearchTableContext.Provider,{value:{context:a,form:null==(o=a.formRef)?void 0:o.current,formList:{fields:e,operation:t,meta:r}}},a.renderChildren())})))},e}(SearchEditorCellStateTable);export default SearchEditorStateTable;
//# sourceMappingURL=SearchEditorStateTable.js.map
