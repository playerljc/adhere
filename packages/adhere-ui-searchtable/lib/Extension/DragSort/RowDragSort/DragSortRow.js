"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),react_1=tslib_1.__importStar(require("react")),react_dnd_1=require("react-dnd"),SearchTable_1=require("../../../SearchTable"),type="DraggableBodyRow",DragSortRow=function(r){var e,o=r.rowIndex,r=r.rowConfig,a=(0,react_1.useContext)(SearchTable_1.SearchTableContext),n={type:type,dropOverDownwardClassName:"".concat(SearchTable_1.selectorPrefix,"-row-drag-sort-drop-over-downward"),dropOverUpwardClasName:"".concat(SearchTable_1.selectorPrefix,"-row-drag-sort-drop-over-upward"),dragConfig:function(){return{type:t.type,item:{index:o},collect:function(r){return{isDragging:r.isDragging()}}}},dropConfig:function(){return{accept:t.type,collect:function(r){var e=(r.getItem()||{}).index;return e===o?{}:{isOver:r.isOver(),dropClassName:e<o?t.dropOverDownwardClassName:t.dropOverUpwardClasName}},drop:function(r){var e;null!=(e=null==a?void 0:a.context)&&e.moveRow(r.index,o)}}}},t=tslib_1.__assign(tslib_1.__assign({},n),(null==r?void 0:r.$rowDragSort)||{}),s=(null!=(e=null==r?void 0:r.$rowDragSort)&&e.dropConfig?t.dropConfig=Object.assign(n.dropConfig(),r.$rowDragSort.dropConfig||{}):t.dropConfig=n.dropConfig(),null!=(e=null==r?void 0:r.$rowDragSort)&&e.dragConfig?t.dragConfig=Object.assign(n.dragConfig(),r.$rowDragSort.dragConfig||{}):t.dragConfig=n.dragConfig(),(0,react_1.useRef)(null));try{var i=(0,react_dnd_1.useDrag)(t.dragConfig)[1],l=(0,react_dnd_1.useDrop)(t.dropConfig),d=l[0].isOver,g=l[0].dropClassName;(0,l[1])(i(s))}catch(r){console.log(r)}return function(r){var e={cursor:"canDrag"in t.dragConfig&&!t.dragConfig.canDrag()?"no-drop":"move"};return react_1.default.cloneElement(r,tslib_1.__assign(tslib_1.__assign({},r.props),{ref:s,style:tslib_1.__assign(tslib_1.__assign({},e),r.props.style||{}),className:(0,classnames_1.default)(r.props.className,d?g:"")}))}};exports.default=DragSortRow;
//# sourceMappingURL=DragSortRow.js.map
