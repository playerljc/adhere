var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||((n=n||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};import PropTypes from"prop-types";import React,{createRef,forwardRef}from"react";import ServiceRegister from"@ctsj/state/lib/middleware/saga/serviceregister";import SearchTable,{defaultProps,propTypes}from"./SearchTable";var selectorPrefix="adhere-ui-searchtableimplement",SearchTableImplement=function(t){function e(e){var n=t.call(this,e)||this;return n.innerWrapRef=createRef(),n.onSelectChange=function(e,t){var r;n.setState(((r={})[e]=t,r))},n.onInputChange=function(e,t){var r;n.setState(((r={})[e]=t.target.value.trim(),r))},n.onDateTimeRangeChange=function(e,t){var r;n.setState(((r={})[e[0]]=t&&t.length?t[0]:null,r[e[1]]=t&&t.length?t[1]:null,r))},Object.assign(n.state,__assign(__assign({},n.getParams()),((e={})[n.getOrderFieldProp()]=n.getOrderFieldValue(),e[n.getOrderProp()]=n.getOrderPropValue()||"descend",e.searchParams=__assign({},n.getParams()),e.selectedRowKeys=[],e.selectedRows=[],e))),n}return __extends(e,t),e.prototype.componentDidMount=function(){null!=(e=t.prototype.componentDidMount)&&e.call(this);var e=this.props.getTableWrapperInstance;e&&e(this.innerWrapRef)},e.prototype.getFetchListPropName=function(){return""},e.prototype.getFetchListPropNameToFirstUpper=function(){var e=this.getFetchListPropName();return 1<e.length?"".concat(e.charAt(0).toUpperCase()).concat(e.substring(1)):e},e.prototype.getParams=function(){return{}},e.prototype.getServiceName=function(){return""},e.prototype.getFetchDataParams=function(){return{}},e.prototype.isShowNumber=function(){return!0},e.prototype.getNumberGeneratorRule=function(){return SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY},e.prototype.getRowSelectionMode=function(){return SearchTable.ROW_SELECTION_NORMAL_MODE},e.prototype.getTableNumberColumnWidth=function(){return 80},e.prototype.getTableNumberColumnProps=function(){return{}},e.prototype.getRowKey=function(){return"id"},e.prototype.getDataKey=function(){return"list"},e.prototype.getTotalKey=function(){return"totalCount"},e.prototype.getData=function(){var e;return null==(e=null==(e=null==(e=this.props)?void 0:e[this.getServiceName()])?void 0:e[this.getFetchListPropName()])?void 0:e[this.getDataKey()]},e.prototype.getTotal=function(){var e;return null==(e=null==(e=null==(e=this.props)?void 0:e[this.getServiceName()])?void 0:e[this.getFetchListPropName()])?void 0:e[this.getTotalKey()]},e.prototype.getRowSelection=function(){function n(e,r){var n=o.getRowKey();e?o.setState({selectedRowKeys:__spreadArray(__spreadArray([],(null==(e=o.state)?void 0:e.selectedRowKeys)||[],!0),r.map(function(e){return e[n]}),!0),selectedRows:__spreadArray(__spreadArray([],(null==(e=o.state)?void 0:e.selectedRows)||[],!0),r,!0)}):o.setState({selectedRows:((null==(e=o.state)?void 0:e.selectedRows)||[]).filter(function(t){return!r.find(function(e){return e[n]===t[n]})}),selectedRowKeys:((null==(e=o.state)?void 0:e.selectedRowKeys)||[]).filter(function(t){return!r.find(function(e){return e[n]===t})})})}var e,o=this;return{selectedRowKeys:null==(e=this.state)?void 0:e.selectedRowKeys,onChange:function(e,t){o.getRowSelectionMode()!==SearchTable.ROW_SELECTION_CONTINUOUS_MODE&&o.setState({selectedRowKeys:e,selectedRows:t})},onSelect:function(e,t){o.getRowSelectionMode()!==SearchTable.ROW_SELECTION_NORMAL_MODE&&n(t,[e])},onSelectAll:function(e,t,r){o.getRowSelectionMode()!==SearchTable.ROW_SELECTION_NORMAL_MODE&&n(e,r)}}},e.prototype.renderSearchForm=function(){return null},e.prototype.renderInner=function(){var e=t.prototype.renderInner.call(this);return React.createElement("div",{ref:this.innerWrapRef,className:"".concat(selectorPrefix,"-tablewrapper")},e)},e.prototype.renderSearchFooterItems=function(){return[]},e.prototype.getOrderFieldProp=function(){return"orderField"},e.prototype.getOrderFieldValue=function(){return""},e.prototype.getOrderProp=function(){return"order"},e.prototype.getOrderPropValue=function(){return"descend"},e.prototype.clearSearch=function(){var r=this;return new Promise(function(e){var t;r.setState(__assign(__assign({},r.getParams()),((t={})[r.getOrderFieldProp()]=r.getOrderFieldValue(),t[r.getOrderProp()]=r.getOrderPropValue()||"descend",t.searchParams=__assign({},r.getParams()),t.selectedRowKeys=[],t.selectedRows=[],t.expandedRowKeys=[],t)),function(){e()})})},e.prototype.clearPaging=function(){var t=this;return new Promise(function(e){t.setState({page:1,limit:t.getLimit()},function(){e()})})},e.prototype.showLoading=function(){var e;return null==(e=null==(e=this.props)?void 0:e.loading)?void 0:e["".concat(this.getServiceName(),"/").concat(this.getFetchListPropName())]},e.prototype.getSearchParams=function(){var e=this.state,t=e.page,r=e.limit,e=e.searchParams,n=null==(n=this.state)?void 0:n[this.getOrderProp()];return __assign({},__assign(__assign(__assign({page:t,limit:r},e),((t={})[this.getOrderProp()]="descend"===n?"desc":"asc",t[this.getOrderFieldProp()]=null==(r=this.state)?void 0:r[this.getOrderFieldProp()],t)),this.getFetchDataParams()))},e.prototype.fetchData=function(){return this.fetchDataExecute(this.getSearchParams())},e.prototype.sync=function(){var o=this;return new Promise(function(e){var t,r,n=null==(t=o.state)?void 0:t.page;1===n?e(o.fetchData()):r=o.fetchData().then(function(){o.getData().length?e(r):o.setState({page:n-1},function(){return e(o.fetchData())})})})},e.prototype.fetchDataExecute=function(e){var t;return null==(t=this.props)?void 0:t["".concat(this.getServiceName()).concat(this.getFetchListPropNameToFirstUpper())](e)},e.prototype.onSearch=function(){var n=this,e=Object.keys(this.getParams()),o={};return e.forEach(function(e){var t;o[e]=null==(t=n.state)?void 0:t[e]}),new Promise(function(e){var t,r;n.setState({searchParams:__assign(__assign({},o),((t={})[n.getOrderFieldProp()]=null==(r=n.state)?void 0:r[n.getOrderFieldProp()],t[n.getOrderProp()]=null==(r=n.state)?void 0:r[n.getOrderProp()],t))},function(){n.fetchData().then(function(){e()})})})},e.prototype.getColumns=function(){return[]},e.prototype.onSubTableChange=function(e,t,r,n){},e.prototype.renderSearchFormAfter=function(){return null},e.prototype.renderSearchFormBefore=function(){return null},e.prototype.renderSearchFooter=function(){return null},e.prototype.renderSearchHeader=function(){return null},e.prototype.onTableRowComponentReducers=function(e){return this.tableRowComponentReducers},e.prototype.onTableCellComponentReducers=function(e){return this.tableCellComponentReducers},e}(SearchTable),SearchTableImplementFactory=(SearchTableImplement.defaultProps=__assign({},defaultProps),SearchTableImplement.propTypes=__assign(__assign({},propTypes),{getTableWrapperInstance:PropTypes.func}),function(e){function t(e){return __assign(__assign(__assign({},ServiceRegister.mapStateToProps({namespaces:o||[],state:e})),{loading:e.loading}),a?a(e):{})}function n(e){return __assign(__assign({},ServiceRegister.mapDispatchToProps({namespaces:o||[],dispatch:e})),s?s(e):{})}var r=e.serviceNames,o=void 0===r?[]:r,a=e.mapStateToProps,s=e.mapDispatchToProps;return function(r){return ServiceRegister.connect(o||[])(t,n)(forwardRef(function(e,t){return React.createElement(r,__assign({ref:t,className:"".concat(selectorPrefix,"-wrap"),isShowExpandSearch:!0,defaultExpandSearchCollapse:!1,fixedHeaderAutoTable:!0,fixedTableSpaceBetween:!0},e))}))}});export default SearchTableImplementFactory;export{selectorPrefix,SearchTableImplement};
//# sourceMappingURL=SearchTableImplement.js.map
