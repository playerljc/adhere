"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]]);return n};function handleResize(n,o,l){return function(e,t){t=t.size;console.log("handleResize",o,t,n),l.set(o.key,t),n.forceUpdate()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){var t=e.columnsWidth,n=e.context,o=e.index,l=e.column,r=null===(r=null===(e=null===(r=null==n?void 0:n.tableWrapRef)||void 0===r?void 0:r.current)||void 0===e?void 0:e.querySelectorAll)||void 0===r?void 0:r.call(e,".ant-table-header > table > colgroup > col"),e=0;n.getRowSelection()&&(e+=1),n.isShowNumber()&&(e+=1);var i=(i=r&&r.length>e?null===(a=null===(i=null==r?void 0:r[e+o])||void 0===i?void 0:i.style)||void 0===a?void 0:a.width:null)&&parseInt(i),a=t.get(l.key),i=a?a.width:l.width||i;return __assign(__assign({},l),{width:i,onHeaderCell:function(){var e=n.getTableColumns().find(function(e){return e.dataIndex===l.dataIndex}),e=(e.onHeaderCell,__rest(e,["onHeaderCell"]));return{width:e.width,onResize:handleResize(n,e,t)}}})};
//# sourceMappingURL=SearchTableResizableColumnItem.js.map
