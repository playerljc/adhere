"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),moment_1=tslib_1.__importDefault(require("moment"));function default_1(e){return t=e,tslib_1.__extends(r,t),r.prototype.onTableRowComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?tslib_1.__spreadArray(tslib_1.__spreadArray([],this.tableRowComponentReducers,!0),["useEditableRow"],!1):this.tableRowComponentReducers},r.prototype.onTableCellComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?tslib_1.__spreadArray(tslib_1.__spreadArray([],this.tableCellComponentReducers,!0),["useEditableCell"],!1):this.tableCellComponentReducers},r.prototype.onEditorRow=function(e){return{editable:!1}},r.prototype.onEditorCell=function(e){},r.prototype.cellEditableReducer=function(e){var r,t=e.rowIndex,o=e.column,e=e.record;return"$editable"in o&&null!=(r=o.$editable)&&r.editable&&this.onEditorCell&&this.onEditorCell({rowIndex:t,editorConfig:o.$editable,record:tslib_1.__assign({},e)}),o},r.prototype.valueToFormItemValue=function(e){var r=e.type,t=e.record,e=e.dataIndex,r=this.valueToFormItemValueMap.get(r);return r?null==r?void 0:r({record:t,dataIndex:e}):null==t?void 0:t[e]},r;function r(e){e=t.call(this,e)||this;return e.valueToFormItemValueMap=new Map([["rangePicker",function(e){var r=e.record,e=e.dataIndex,r=null==r?void 0:r[e];return Array.isArray(r)&&2===r.length?[(0,moment_1.default)(r[0]),(0,moment_1.default)(r[1])]:[(0,moment_1.default)(),(0,moment_1.default)()]}],["datePicker",function(e){var r=e.record,e=e.dataIndex,r=null==r?void 0:r[e];return(0,moment_1.default)(r)}],["timePicker",function(e){var r=e.record,e=e.dataIndex,r=null==r?void 0:r[e];return(0,moment_1.default)(r)}]]),e.cellConfigReducers=tslib_1.__spreadArray(tslib_1.__spreadArray([],e.cellConfigReducers,!0),[e.cellEditableReducer],!1),e}var t}exports.default=default_1;
//# sourceMappingURL=SearchEditorCellFactory.js.map
