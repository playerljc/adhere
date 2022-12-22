import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.find.js";import{__assign,__extends,__spreadArray}from"tslib";import cloneDeep from"lodash.clonedeep";import moment from"moment";import{SearchTableStateImplement}from"./SearchTableStateImplement";var SearchEditorCellStateTable=function(t){function e(e){e=t.call(this,e)||this;return e.valueToFormItemValueMap=new Map([["rangePicker",function(e){var t=e.record,e=e.dataIndex,t=null==t?void 0:t[e];return Array.isArray(t)&&2===t.length?[moment(t[0]),moment(t[1])]:[moment(),moment()]}],["datePicker",function(e){var t=e.record,e=e.dataIndex,t=null==t?void 0:t[e];return moment(t)}],["timePicker",function(e){var t=e.record,e=e.dataIndex,t=null==t?void 0:t[e];return moment(t)}]]),e.cellConfigReducers=__spreadArray(__spreadArray([],e.cellConfigReducers,!0),[e.cellEditableReducer],!1),e}return __extends(e,t),e.prototype.onTableRowComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?__spreadArray(__spreadArray([],this.tableRowComponentReducers,!0),["useEditableRow"],!1):this.tableRowComponentReducers},e.prototype.onTableCellComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?__spreadArray(__spreadArray([],this.tableCellComponentReducers,!0),["useEditableCell"],!1):this.tableCellComponentReducers},e.prototype.onEditorRow=function(e){return{editable:!1}},e.prototype.onEditorCell=function(e){},e.prototype.cellEditableReducer=function(e){var t,r=e.rowIndex,o=e.column,e=e.record;return"$editable"in o&&null!=(t=o.$editable)&&t.editable&&this.onEditorCell&&this.onEditorCell({rowIndex:r,editorConfig:o.$editable,record:__assign({},e)}),o},e.prototype.valueToFormItemValue=function(e){var t=e.type,r=e.record,e=e.dataIndex,t=this.valueToFormItemValueMap.get(t);return t?null==t?void 0:t({record:r,dataIndex:e}):null==r?void 0:r[e]},e.prototype.updateEditorCellDate=function(e){var n=this,a=e.record,s=e.dataIndex,l=e.value;return new Promise(function(e){var t,r,o;a[s]!==l&&(o=(t=cloneDeep(n.state[n.getServiceName()]))[n.getFetchListPropName()][n.getDataKey()]||[],r=n.getRowKey(),o=o.find(function(e){return e[r]===a[r]}))?(o[s]=l,n.setState(((o={})[n.getServiceName()]=t,o),function(){return e()})):e()})},e.prototype.updateEditorCellDateData=function(e){var n=this,a=e.record,s=e.dataIndex,l=e.value;return new Promise(function(e){var t,r,o;a[s]!==(null==l?void 0:l.valueOf())&&(o=(t=cloneDeep(n.state[n.getServiceName()]))[n.getFetchListPropName()][n.getDataKey()]||[],r=n.getRowKey(),o=o.find(function(e){return e[r]===a[r]}))?(o[s]=null==l?void 0:l.valueOf(),n.setState(((o={})[n.getServiceName()]=t,o),function(){return e()})):e()})},e}(SearchTableStateImplement);export default SearchEditorCellStateTable;
//# sourceMappingURL=SearchEditorCellStateTable.js.map
