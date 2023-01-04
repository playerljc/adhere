import{__extends}from"tslib";import cloneDeep from"lodash.clonedeep";import{SearchTableStateImplement}from"../SearchTableStateImplement";import SearchEditableCellFactory from"./SearchEditableCellFactory";var SearchEditableCellStateTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.updateEditorCellDate=function(e){var n=this,l=e.record,o=e.dataIndex,i=e.value;return new Promise(function(e){var t,a,r;l[o]!==i&&(r=(t=cloneDeep(n.state[n.getServiceName()]))[n.getFetchListPropName()][n.getDataKey()]||[],a=n.getRowKey(),r=r.find(function(e){return e[a]===l[a]}))?(r[o]=i,n.setState(((r={})[n.getServiceName()]=t,r),function(){return e()})):e()})},t.prototype.updateEditorCellDateData=function(e){var n=this,l=e.record,o=e.dataIndex,i=e.value;return new Promise(function(e){var t,a,r;l[o]!==(null==i?void 0:i.valueOf())&&(r=(t=cloneDeep(n.state[n.getServiceName()]))[n.getFetchListPropName()][n.getDataKey()]||[],a=n.getRowKey(),r=r.find(function(e){return e[a]===l[a]}))?(r[o]=null==i?void 0:i.valueOf(),n.setState(((r={})[n.getServiceName()]=t,r),function(){return e()})):e()})},t}(SearchEditableCellFactory(SearchTableStateImplement));export default SearchEditableCellStateTable;
//# sourceMappingURL=SearchEditableCellStateTable.js.map
