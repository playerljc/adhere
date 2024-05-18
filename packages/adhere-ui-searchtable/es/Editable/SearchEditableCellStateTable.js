var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();import{SearchTableStateImplement}from"../SearchTableStateImplement";import{cloneDeep,findRecord}from"../Util";import SearchEditableCellFactory from"./SearchEditableCellFactory";var SearchEditableCellStateTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.updateEditorCellDate=function(e){var o=this,n=e.record,l=e.dataIndex,c=e.value;return new Promise(function(e){var t,r,a;n[l]!==c&&(a=(t=cloneDeep(o.state[o.getServiceName()]))[o.getFetchListPropName()][o.getDataKey()]||[],r=o.getRowKey(),a=findRecord(a,r,n[r]))?(a[l]=c,o.setState(((r={})[o.getServiceName()]=t,r),function(){return e()})):e()})},t.prototype.updateEditorCellDateData=function(e){var t=e.record,r=e.dataIndex,e=e.value;return this.updateEditorCellDate({record:t,dataIndex:r,value:null==e?void 0:e.valueOf()})},t}(SearchEditableCellFactory(SearchTableStateImplement));export default SearchEditableCellStateTable;
//# sourceMappingURL=SearchEditableCellStateTable.js.map
