var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();import SearchTableImplement from"./searchtableimplement";var SearchTableStateImplement=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getData=function(){return this.state[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()]},e.prototype.getTotal=function(){return this.state[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()]},e.prototype.showLoading=function(){return this.state.loading[this.getServiceName()+"/"+this.getFetchListPropName()]},e.prototype.fetchDataExecute=function(t){return this.state[""+this.getServiceName()+this.getFetchListPropNameToFirstUpper()](t)},e}(SearchTableImplement);export default SearchTableStateImplement;
//# sourceMappingURL=searchtablestateimplement.js.map