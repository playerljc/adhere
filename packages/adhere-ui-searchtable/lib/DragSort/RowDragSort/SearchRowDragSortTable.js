"use strict";var __extends=function(){var o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},array_move_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("array-move")),lodash_clonedeep_1=__importDefault(require("lodash.clonedeep")),SearchTableImplement_1=require("../../SearchTableImplement"),SearchRowDragSortFactory_1=__importDefault(require("./SearchRowDragSortFactory")),SearchRowDragSortTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.moveRow=function(o,a){var n=this;return new Promise(function(e){var t=(0,lodash_clonedeep_1.default)(n.props[n.getServiceName()]),r=t[n.getFetchListPropName()][n.getDataKey()]||[];t[n.getFetchListPropName()][n.getDataKey()]=(0,array_move_1.arrayMoveImmutable)(r,o,a),n.props.dispatch(__assign({type:"".concat(n.getServiceName(),"/receive")},t)).then(function(){return e()})})},t}((0,SearchRowDragSortFactory_1.default)(SearchTableImplement_1.SearchTableImplement));exports.default=SearchRowDragSortTable;
//# sourceMappingURL=SearchRowDragSortTable.js.map
