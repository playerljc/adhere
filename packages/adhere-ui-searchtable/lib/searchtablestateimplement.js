"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),searchtableimplement_1=tslib_1.__importDefault(require("./searchtableimplement")),searchtable_1=require("./searchtable"),SearchTableStateImplement=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.getData=function(){return this.state[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()]},t.prototype.getTotal=function(){return this.state[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()]},t.prototype.showLoading=function(){return this.state.loading["".concat(this.getServiceName(),"/").concat(this.getFetchListPropName())]},t.prototype.fetchDataExecute=function(e){return this.state["".concat(this.getServiceName()).concat(this.getFetchListPropNameToFirstUpper())](e)},t}(searchtableimplement_1.default);SearchTableStateImplement.defaultProps=tslib_1.__assign({},searchtable_1.defaultProps),SearchTableStateImplement.propTypes=tslib_1.__assign({},searchtable_1.propTypes),exports.default=SearchTableStateImplement;
//# sourceMappingURL=searchtablestateimplement.js.map
