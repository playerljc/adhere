"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.array.find.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),lodash_clonedeep_1=tslib_1.__importDefault(require("lodash.clonedeep")),moment_1=tslib_1.__importDefault(require("moment")),SearchEditableCellStateTable_1=tslib_1.__importDefault(require("./SearchEditableCellStateTable")),SearchEditableFactory_1=tslib_1.__importDefault(require("./SearchEditableFactory")),SearchEditableStateTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.updateEditorData=function(a){var l=this;return new Promise(function(e){var t,r=(0,lodash_clonedeep_1.default)(l.state[l.getServiceName()]),o=r[l.getFetchListPropName()][l.getDataKey()]||[],i=l.getRowKey();a.forEach(function(a){Object.keys(a).forEach(function(e){var t=a[e],r=(t instanceof moment_1.default&&(t=t.valueOf()),o.find(function(e){return e[i]===a[i]}));r&&(r[e]=t)})}),l.setState(((t={})[l.getServiceName()]=r,t),function(){return e()})})},t}((0,SearchEditableFactory_1.default)(SearchEditableCellStateTable_1.default));exports.default=SearchEditableStateTable;
//# sourceMappingURL=SearchEditableStateTable.js.map