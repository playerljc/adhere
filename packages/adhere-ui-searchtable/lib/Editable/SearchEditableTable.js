"use strict";var __extends=function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),lodash_clonedeep_1=__importDefault(require("lodash.clonedeep")),SearchEditableCellTable_1=__importDefault(require("./SearchEditableCellTable")),SearchEditableFactory_1=__importDefault(require("./SearchEditableFactory")),SearchEditableTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.updateEditorData=function(r){var a=this;return new Promise(function(e){var t=(0,lodash_clonedeep_1.default)(a.props[a.getServiceName()]),n=t[a.getFetchListPropName()][a.getDataKey()]||[],o=a.getRowKey();r.forEach(function(a){Object.keys(a).forEach(function(e){var t=a[e],r=(t instanceof dayjs_1.default&&(t=t.valueOf()),n.find(function(e){return e[o]===a[o]}));r&&(r[e]=t)})}),a.props.dispatch(__assign({type:"".concat(a.getServiceName(),"/receive")},t)).then(function(){return e()})})},t}((0,SearchEditableFactory_1.default)(SearchEditableCellTable_1.default));exports.default=SearchEditableTable;
//# sourceMappingURL=SearchEditableTable.js.map
