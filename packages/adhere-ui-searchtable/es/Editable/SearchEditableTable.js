var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};import dayjs from"dayjs";import cloneDeep from"lodash.clonedeep";import SearchEditableCellTable from"./SearchEditableCellTable";import SearchEditableFactory from"./SearchEditableFactory";var SearchEditableTable=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.updateEditorData=function(r){var n=this;return new Promise(function(t){var e=cloneDeep(n.props[n.getServiceName()]),o=e[n.getFetchListPropName()][n.getDataKey()]||[],a=n.getRowKey();r.forEach(function(n){Object.keys(n).forEach(function(t){var e=n[t],r=(e instanceof dayjs&&(e=e.valueOf()),o.find(function(t){return t[a]===n[a]}));r&&(r[t]=e)})}),n.props.dispatch(__assign({type:"".concat(n.getServiceName(),"/receive")},e)).then(function(){return t()})})},e}(SearchEditableFactory(SearchEditableCellTable));export default SearchEditableTable;
//# sourceMappingURL=SearchEditableTable.js.map
