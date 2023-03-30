var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import cloneDeep from"lodash.clonedeep";import{SearchTableImplement}from"../SearchTableImplement";import SearchEditableCellFactory from"./SearchEditableCellFactory";var SearchEditableCellTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.updateEditorCellDate=function(e){var o=this,a=e.record,i=e.dataIndex,c=e.value;return new Promise(function(e){var t,r,n;a[i]!==c&&(n=(t=cloneDeep(o.props[o.getServiceName()]))[o.getFetchListPropName()][o.getDataKey()]||[],r=o.getRowKey(),n=n.find(function(e){return e[r]===a[r]}))?(n[i]=c,o.props.dispatch(__assign({type:"".concat(o.getServiceName(),"/receive")},t)).then(function(){return e()})):e()})},t.prototype.updateEditorCellDateData=function(e){var o=this,a=e.record,i=e.dataIndex,c=e.value;return new Promise(function(e){var t,r,n;a[i]!==(null==c?void 0:c.valueOf())&&(n=(t=cloneDeep(o.props[o.getServiceName()]))[o.getFetchListPropName()][o.getDataKey()]||[],r=o.getRowKey(),n=n.find(function(e){return e[r]===a[r]}))?(n[i]=null==c?void 0:c.valueOf(),o.props.dispatch(__assign({type:"".concat(o.getServiceName(),"/receive")},t)).then(function(){return e()})):e()})},t}(SearchEditableCellFactory(SearchTableImplement));export default SearchEditableCellTable;
//# sourceMappingURL=SearchEditableCellTable.js.map
