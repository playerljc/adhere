var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();import cloneDeep from"lodash.clonedeep";import{SearchTableStateImplement}from"../SearchTableStateImplement";import{findRecord}from"../util";import SearchEditableCellFactory from"./SearchEditableCellFactory";var SearchEditableCellStateTable=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.updateEditorCellDate=function(e){var a=this,n=e.record,l=e.dataIndex,c=e.value;return new Promise(function(e){var t,r,o;n[l]!==c&&(o=(t=cloneDeep(a.state[a.getServiceName()]))[a.getFetchListPropName()][a.getDataKey()]||[],r=a.getRowKey(),o=findRecord(o,r,n[r]))?(o[l]=c,a.setState(((r={})[a.getServiceName()]=t,r),function(){return e()})):e()})},t.prototype.updateEditorCellDateData=function(e){var t=e.record,r=e.dataIndex,e=e.value;return this.updateEditorCellDate({record:t,dataIndex:r,value:null==e?void 0:e.valueOf()})},t}(SearchEditableCellFactory(SearchTableStateImplement));export default SearchEditableCellStateTable;
//# sourceMappingURL=SearchEditableCellStateTable.js.map
