"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.find.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),lodash_clonedeep_1=tslib_1.__importDefault(require("lodash.clonedeep")),moment_1=tslib_1.__importDefault(require("moment")),EditableCell_1=tslib_1.__importDefault(require("./Extension/EditableCell/EditableCell")),EditableRow_1=tslib_1.__importDefault(require("./Extension/EditableCell/EditableRow")),SearchTableImplement_1=require("./SearchTableImplement"),SearchEditorCellTable=function(r){function e(e){e=r.call(this,e)||this;return e.valueToFormItemValueMap=new Map([["rangePicker",function(e){var r=e.record,e=e.dataIndex,r=null==r?void 0:r[e];return Array.isArray(r)&&2===r.length?[(0,moment_1.default)(r[0]),(0,moment_1.default)(r[1])]:[(0,moment_1.default)(),(0,moment_1.default)()]}],["datePicker",function(e){var r=e.record,e=e.dataIndex,r=null==r?void 0:r[e];return(0,moment_1.default)(r)}],["timePicker",function(e){var r=e.record,e=e.dataIndex,r=null==r?void 0:r[e];return(0,moment_1.default)(r)}]]),e.cellReducers=tslib_1.__spreadArray(tslib_1.__spreadArray([],e.cellReducers,!0),[e.cellEditableReducer],!1),e}return tslib_1.__extends(e,r),e.prototype.onComponents=function(e,r){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})&&(r.body={row:EditableRow_1.default,cell:EditableCell_1.default}),r},e.prototype.valueToFormItemValue=function(e){var r=e.type,t=e.record,e=e.dataIndex,r=this.valueToFormItemValueMap.get(r);return r?null==r?void 0:r({record:t,dataIndex:e}):null==t?void 0:t[e]},e.prototype.cellEditableReducer=function(e){var r,t=e.rowIndex,o=e.column,e=e.record;return"$editable"in o&&null!=(r=o.$editable)&&r.editable&&this.onEditorCell&&this.onEditorCell({rowIndex:t,editorConfig:o.$editable,record:tslib_1.__assign({},e)}),o},e.prototype.updateEditorCellDate=function(e){var l=this,a=e.record,s=e.dataIndex,i=e.value;return new Promise(function(e){var r=(0,lodash_clonedeep_1.default)(l.props[l.getServiceName()]),t=r[l.getFetchListPropName()][l.getDataKey()]||[],o=l.getRowKey(),t=t.find(function(e){return e[o]===a[o]});t?(t[s]=i,l.props.dispatch(((t={type:"".concat(l.getServiceName(),"/receive")})[l.getServiceName()]=r,t)).then(function(){return e()})):e()})},e.prototype.updateEditorCellDateData=function(e){var l=this,a=e.record,s=e.dataIndex,i=e.value;return new Promise(function(e){var r=(0,lodash_clonedeep_1.default)(l.props[l.getServiceName()]),t=r[l.getFetchListPropName()][l.getDataKey()]||[],o=l.getRowKey(),t=t.find(function(e){return e[o]===a[o]});t?(t[s]=null==i?void 0:i.valueOf(),l.props.dispatch(((t={type:"".concat(l.getServiceName(),"/receive")})[l.getServiceName()]=r,t)).then(function(){return e()})):e()})},e}(SearchTableImplement_1.SearchTableImplement);exports.default=SearchEditorCellTable;
//# sourceMappingURL=SearchEditorCellTable.js.map
