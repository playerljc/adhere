"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),dayjs_1=tslib_1.__importDefault(require("dayjs")),lodash_clonedeep_1=tslib_1.__importDefault(require("lodash.clonedeep")),SearchEditableCellTable_1=tslib_1.__importDefault(require("./SearchEditableCellTable")),SearchEditableFactory_1=tslib_1.__importDefault(require("./SearchEditableFactory")),SearchEditableTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.updateEditorData=function(r){var o=this;return new Promise(function(e){var t,a=lodash_clonedeep_1.default(o.props[o.getServiceName()]),i=a[o.getFetchListPropName()][o.getDataKey()]||[],l=o.getRowKey();r.forEach(function(r){Object.keys(r).forEach(function(e){var t=r[e],a=(t instanceof dayjs_1.default&&(t=t.valueOf()),i.find(function(e){return e[l]===r[l]}));a&&(a[e]=t)})}),o.props.dispatch(((t={type:o.getServiceName()+"/receive"})[o.getServiceName()]=a,t)).then(function(){return e()})})},t}(SearchEditableFactory_1.default(SearchEditableCellTable_1.default));exports.default=SearchEditableTable;
//# sourceMappingURL=SearchEditableTable.js.map
