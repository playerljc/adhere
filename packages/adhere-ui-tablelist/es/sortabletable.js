import _Table from"antd/es/table";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r};import React from"react";import{SortableContainer,SortableElement}from"react-sortable-hoc";import{selectorPrefix}from"./tablelist";var SortableItem=SortableElement(function(t){return React.createElement("tr",__assign({},t))}),SortableWrapper=SortableContainer(function(t){return React.createElement("tbody",__assign({},t))}),SortableTable=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={dataSource:n.props.dataSource||[],isSort:!1},n.DraggableBodyRow=function(t){t.className,t.style;var e=__rest(t,["className","style"]),t=n.state.dataSource,r=n.props.rowKey,o=void 0===r?"id":r,r=t.findIndex(function(t){return t[o&&"function"==typeof o?o(t):o]===e["data-row-key"]});return React.createElement(SortableItem,__assign({index:r},n.props.sortable&&"boolean"!=typeof n.props.sortable&&n.props.sortable.itemProps,e))},n.DraggableContainer=function(t){return React.createElement(SortableWrapper,__assign({helperClass:"".concat(selectorPrefix,"-row-dragging"),onSortEnd:n.onSortEnd,distance:2},n.props.sortable&&"boolean"!=typeof n.props.sortable&&n.props.sortable.containerProps,t))},n.onSortEnd=function(t){var e,r=t.oldIndex,t=t.newIndex,o=n.state.dataSource;r!==t&&(e=o[r],(o=o.filter(function(t,e){return e!==r})).splice(t,0,e),n.setState({isSort:!0,dataSource:o}))},n}return __extends(e,t),e.getDerivedStateFromProps=function(t,e){return e.isSort||JSON.stringify(t.dataSource)===JSON.stringify(e.dataSource)?e.isSort?{isSort:!1}:null:{dataSource:t.dataSource}},e.prototype.render=function(){var t=this.props,t=(t.sortable,__rest(t,["sortable"]));return React.createElement(_Table,__assign({},t,{dataSource:this.state.dataSource,components:{body:{wrapper:this.DraggableContainer,row:this.DraggableBodyRow}}}))},e}(React.Component);export default SortableTable;
//# sourceMappingURL=sortabletable.js.map
