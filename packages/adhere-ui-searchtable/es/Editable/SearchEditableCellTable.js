import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.find.js";import{__extends}from"tslib";import cloneDeep from"lodash.clonedeep";import{SearchTableImplement}from"../SearchTableImplement";import SearchEditableCellFactory from"./SearchEditableCellFactory";var SearchEditableCellTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.updateEditorCellDate=function(e){var o=this,n=e.record,i=e.dataIndex,l=e.value;return new Promise(function(e){var t,r,a;n[i]!==l&&(a=(t=cloneDeep(o.props[o.getServiceName()]))[o.getFetchListPropName()][o.getDataKey()]||[],r=o.getRowKey(),a=a.find(function(e){return e[r]===n[r]}))?(a[i]=l,o.props.dispatch(((a={type:"".concat(o.getServiceName(),"/receive")})[o.getServiceName()]=t,a)).then(function(){return e()})):e()})},t.prototype.updateEditorCellDateData=function(e){var o=this,n=e.record,i=e.dataIndex,l=e.value;return new Promise(function(e){var t,r,a;n[i]!==(null==l?void 0:l.valueOf())&&(a=(t=cloneDeep(o.props[o.getServiceName()]))[o.getFetchListPropName()][o.getDataKey()]||[],r=o.getRowKey(),a=a.find(function(e){return e[r]===n[r]}))?(a[i]=null==l?void 0:l.valueOf(),o.props.dispatch(((a={type:"".concat(o.getServiceName(),"/receive")})[o.getServiceName()]=t,a)).then(function(){return e()})):e()})},t}(SearchEditableCellFactory(SearchTableImplement));export default SearchEditableCellTable;
//# sourceMappingURL=SearchEditableCellTable.js.map