"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.parse-int.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.object.to-string.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib");function handleResize(l,r,i){return function(e,t){t=t.size;i.set(r.key,t),l.forceUpdate()}}exports.default=function(e){var t=e.columnsWidth,l=e.context,r=e.index,i=e.column,o=null===(o=null===(e=null===(o=null==l?void 0:l.tableWrapRef)||void 0===o?void 0:o.current)||void 0===e?void 0:e.querySelectorAll)||void 0===o?void 0:o.call(e,".ant-table-header > table > colgroup > col"),e=0;l.getRowSelection()&&(e+=1),l.isShowNumber()&&(e+=1);var n=(n=o&&o.length>e?null===(s=null===(n=null==o?void 0:o[e+r])||void 0===n?void 0:n.style)||void 0===s?void 0:s.width:null)&&parseInt(n),s=t.get(i.key),n=s?s.width:i.width||n;return tslib_1.__assign(tslib_1.__assign({},i),{width:n,onHeaderCell:function(){var e=l.getTableColumns().find(function(e){return e.dataIndex===i.dataIndex}),e=(e.onHeaderCell,tslib_1.__rest(e,["onHeaderCell"]));return{width:e.width,onResize:handleResize(l,e,t)}}})};
//# sourceMappingURL=SearchTableResizableColumnItem.js.map
