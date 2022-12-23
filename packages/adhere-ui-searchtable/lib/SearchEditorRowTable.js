"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.find.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),lodash_clonedeep_1=tslib_1.__importDefault(require("lodash.clonedeep")),moment_1=tslib_1.__importDefault(require("moment")),SearchEditorCellTable_1=tslib_1.__importDefault(require("./SearchEditorCellTable")),SearchEditorRowFactory_1=tslib_1.__importDefault(require("./SearchEditorRowFactory")),SearchEditorRowTable=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(r,e),r.prototype.updateEditorCellRowData=function(e){var s=this,a=e.values,l=e.record;return new Promise(function(e){var r,t=(0,lodash_clonedeep_1.default)(s.props[s.getServiceName()]),o=t[s.getFetchListPropName()][s.getDataKey()]||[],i=s.getRowKey();Object.keys(a).forEach(function(e){var r=a[e],t=(r instanceof moment_1.default&&(r=r.valueOf()),o.find(function(e){return e[i]===l[i]}));t&&(t[e]=r)}),s.props.dispatch(((r={type:"".concat(s.getServiceName(),"/receive")})[s.getServiceName()]=t,r)).then(function(){return e()})})},r}((0,SearchEditorRowFactory_1.default)(SearchEditorCellTable_1.default));exports.default=SearchEditorRowTable;
//# sourceMappingURL=SearchEditorRowTable.js.map
