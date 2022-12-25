"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.assign.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),react_1=tslib_1.__importStar(require("react")),react_dnd_1=require("react-dnd"),SearchTable_1=require("../../../SearchTable"),type="DraggableBodyRow",DragSortRow=function(r){var e,o=r.rowIndex,r=r.rowConfig,a=(0,react_1.useContext)(SearchTable_1.SearchTableContext),t={type:type,dropOverDownwardClassName:"".concat(SearchTable_1.selectorPrefix,"-row-drag-sort-drop-over-downward"),dropOverUpwardClasName:"".concat(SearchTable_1.selectorPrefix,"-row-drag-sort-drop-over-upward"),dropConfig:function(){return{accept:n.type,collect:function(r){var e=(r.getItem()||{}).index;return e===o?{}:{isOver:r.isOver(),dropClassName:e<o?n.dropOverDownwardClassName:n.dropOverUpwardClasName}},drop:function(r){var e;null!=(e=null==a?void 0:a.context)&&e.moveRow(r.index,o)}}},dragConfig:function(){return{type:n.type,item:{index:o},collect:function(r){return{isDragging:r.isDragging()}}}}},n=tslib_1.__assign(tslib_1.__assign({},t),(null==r?void 0:r.$rowDragSort)||{}),i=(null!=(e=null==r?void 0:r.$rowDragSort)&&e.dropConfig&&(n.dropConfig=Object.assign(t.dropConfig(),r.$rowDragSort.dropConfig||{})),null!=(e=null==r?void 0:r.$rowDragSort)&&e.dragConfig&&(n.dragConfig=Object.assign(t.dragConfig(),r.$rowDragSort.dragConfig||{})),(0,react_1.useRef)(null));return function(r){var e=r;try{var o=(0,react_dnd_1.useDrop)(n.dropConfig),a=o[0],t=a.isOver,s=a.dropClassName;(0,o[1])((0,(0,react_dnd_1.useDrag)(n.dragConfig)[1])(i)),e=react_1.default.cloneElement(r,tslib_1.__assign(tslib_1.__assign({},r.props),{ref:i,style:tslib_1.__assign({cursor:"move"},r.props.style||{}),className:(0,classnames_1.default)(r.props.className,t?s:"")}))}catch(r){console.log("e",r)}return e}};exports.default=DragSortRow;
//# sourceMappingURL=DragSortRow.js.map
