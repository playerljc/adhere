"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),react_1=tslib_1.__importDefault(require("react")),react_sortable_hoc_1=require("react-sortable-hoc"),tablelist_1=require("./tablelist"),SortableItem=(0,react_sortable_hoc_1.SortableElement)(function(t){return react_1.default.createElement("tr",tslib_1.__assign({},t))}),SortableWrapper=(0,react_sortable_hoc_1.SortableContainer)(function(t){return react_1.default.createElement("tbody",tslib_1.__assign({},t))}),SortableTable=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.state={dataSource:o.props.dataSource||[],isSort:!1},o.DraggableBodyRow=function(t){t.className,t.style;var e=tslib_1.__rest(t,["className","style"]),t=o.state.dataSource,r=o.props.rowKey,a=void 0===r?"id":r,r=t.findIndex(function(t){return t[a&&"function"==typeof a?a(t):a]===e["data-row-key"]});return react_1.default.createElement(SortableItem,tslib_1.__assign({index:r},o.props.sortable&&"boolean"!=typeof o.props.sortable&&o.props.sortable.itemProps,e))},o.DraggableContainer=function(t){return react_1.default.createElement(SortableWrapper,tslib_1.__assign({helperClass:"".concat(tablelist_1.selectorPrefix,"-row-dragging"),onSortEnd:o.onSortEnd,distance:2},o.props.sortable&&"boolean"!=typeof o.props.sortable&&o.props.sortable.containerProps,t))},o.onSortEnd=function(t){var e,r=t.oldIndex,t=t.newIndex,a=o.state.dataSource;r!==t&&(e=a[r],(a=a.filter(function(t,e){return e!==r})).splice(t,0,e),o.setState({isSort:!0,dataSource:a}))},o}return tslib_1.__extends(e,t),e.getDerivedStateFromProps=function(t,e){return e.isSort||JSON.stringify(t.dataSource)===JSON.stringify(e.dataSource)?e.isSort?{isSort:!1}:null:{dataSource:t.dataSource}},e.prototype.render=function(){var t=this.props,t=(t.sortable,tslib_1.__rest(t,["sortable"]));return react_1.default.createElement(antd_1.Table,tslib_1.__assign({},t,{dataSource:this.state.dataSource,components:{body:{wrapper:this.DraggableContainer,row:this.DraggableBodyRow}}}))},e}(react_1.default.Component);exports.default=SortableTable;
//# sourceMappingURL=sortabletable.js.map
