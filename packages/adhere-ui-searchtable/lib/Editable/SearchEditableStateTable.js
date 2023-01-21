var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();import dayjs from"dayjs";import cloneDeep from"lodash.clonedeep";import SearchEditableCellStateTable from"./SearchEditableCellStateTable";import SearchEditableFactory from"./SearchEditableFactory";var SearchEditableStateTable=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.updateEditorData=function(o){var c=this;return new Promise(function(t){var e,r=cloneDeep(c.state[c.getServiceName()]),a=r[c.getFetchListPropName()][c.getDataKey()]||[],n=c.getRowKey();o.forEach(function(o){Object.keys(o).forEach(function(t){var e=o[t],r=(e instanceof dayjs&&(e=e.valueOf()),a.find(function(t){return t[n]===o[n]}));r&&(r[t]=e)})}),c.setState(((e={})[c.getServiceName()]=r,e),function(){return t()})})},e}(SearchEditableFactory(SearchEditableCellStateTable));export default SearchEditableStateTable;
//# sourceMappingURL=SearchEditableStateTable.js.map
