import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.find.js";import{__assign,__extends,__spreadArray}from"tslib";import cloneDeep from"lodash.clonedeep";import moment from"moment";import SearchEditorCellStateTable from"./SearchEditorCellStateTable";var SearchEditorRowStateTable=function(o){function e(e){e=o.call(this,e)||this;return e.state=__assign(__assign({},e.state),{editorRowId:""}),e.rowConfigReducers=__spreadArray(__spreadArray([],e.rowConfigReducers,!0),[e.rowEditableReducer],!1),e}return __extends(e,o),e.prototype.updateEditorCellRowData=function(e){var a=this,s=e.values,n=e.record;return new Promise(function(e){var t,o=cloneDeep(a.state[a.getServiceName()]),r=o[a.getFetchListPropName()][a.getDataKey()]||[],i=a.getRowKey();Object.keys(s).forEach(function(e){var t=s[e],o=(t instanceof moment&&(t=t.valueOf()),r.find(function(e){return e[i]===n[i]}));o&&(o[e]=t)}),a.setState(((t={})[a.getServiceName()]=o,t),function(){return e()})})},e.prototype.rowEditableReducer=function(e){var t=e.rowConfig,o=e.rowIndex,r=e.columns,e=e.record;return this.onEditorRow&&(t.$editable=this.onEditorRow({rowIndex:o,record:e,columns:r})),t},e.prototype.onEditorRow=function(e){return{editable:!0}},e.prototype.onEditorCell=function(e){var t=e.record,e=e.editorConfig;e&&(e.useTrigger=!1,t[this.getRowKey()]===this.state.editorRowId&&(e.defaultStatus="edit"))},e.prototype.fetchData=function(){var t=this;return o.prototype.fetchData.call(this).then(function(e){return t.setState({editorRowId:""}),e})},e}(SearchEditorCellStateTable);export default SearchEditorRowStateTable;
//# sourceMappingURL=SearchEditorRowStateTable.js.map