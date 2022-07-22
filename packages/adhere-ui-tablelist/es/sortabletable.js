import _Table from"antd/es/table";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.splice.js";import{__assign,__extends,__rest}from"tslib";import React from"react";import{SortableContainer,SortableElement}from"react-sortable-hoc";var SortableItem=SortableElement(function(e){return React.createElement("tr",__assign({},e))}),SortableWrapper=SortableContainer(function(e){return React.createElement("tbody",__assign({},e))}),SortableTable=function(e){function t(){var a=null!==e&&e.apply(this,arguments)||this;return a.state={dataSource:a.props.dataSource||[],isSort:!1},a.DraggableBodyRow=function(e){e.className,e.style;var t=__rest(e,["className","style"]),r=a.state.dataSource,e=a.props.rowKey,o=void 0===e?"id":e,r=r.findIndex(function(e){return e[o&&"function"==typeof o?o(e):o]===t["data-row-key"]});return React.createElement(SortableItem,__assign({index:r},a.props.sortable&&"boolean"!=typeof a.props.sortable&&a.props.sortable.itemProps,t))},a.DraggableContainer=function(e){return React.createElement(SortableWrapper,__assign({helperClass:"row-dragging",onSortEnd:a.onSortEnd,distance:2},a.props.sortable&&"boolean"!=typeof a.props.sortable&&a.props.sortable.containerProps,e))},a.onSortEnd=function(e){var r=e.oldIndex,t=e.newIndex,o=a.state.dataSource;r!==t&&(e=o[r],(o=o.filter(function(e,t){return t!==r})).splice(t,0,e),a.setState({isSort:!0,dataSource:o}))},a}return __extends(t,e),t.getDerivedStateFromProps=function(e,t){return t.isSort||JSON.stringify(e.dataSource)===JSON.stringify(t.dataSource)?t.isSort?{isSort:!1}:null:{dataSource:e.dataSource}},t.prototype.render=function(){var e=this.props,e=(e.sortable,__rest(e,["sortable"]));return React.createElement(_Table,__assign({},e,{dataSource:this.state.dataSource,components:{body:{wrapper:this.DraggableContainer,row:this.DraggableBodyRow}}}))},t}(React.Component);export default SortableTable;
//# sourceMappingURL=sortabletable.js.map
