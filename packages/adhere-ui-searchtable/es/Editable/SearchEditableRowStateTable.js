var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();import dayjs from"dayjs";import cloneDeep from"lodash.clonedeep";import SearchEditableCellStateTable from"./SearchEditableCellStateTable";import SearchEditableRowFactory from"./SearchEditableRowFactory";var SearchEditableRowStateTable=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.updateEditorCellRowData=function(t){var n=this,c=t.values,i=t.record;return new Promise(function(t){var e,r=cloneDeep(n.state[n.getServiceName()]),o=r[n.getFetchListPropName()][n.getDataKey()]||[],a=n.getRowKey();Object.keys(c).forEach(function(t){var e=c[t],r=(e instanceof dayjs&&(e=e.valueOf()),o.find(function(t){return t[a]===i[a]}));r&&(r[t]=e)}),n.setState(((e={})[n.getServiceName()]=r,e),function(){return t()})})},e}(SearchEditableRowFactory(SearchEditableCellStateTable));export default SearchEditableRowStateTable;
//# sourceMappingURL=SearchEditableRowStateTable.js.map
