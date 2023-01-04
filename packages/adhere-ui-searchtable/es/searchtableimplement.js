import{__assign,__extends,__spreadArray}from"tslib";import PropTypes from"prop-types";import React,{createRef,forwardRef}from"react";import ServiceRegister from"@ctsj/state/lib/middleware/saga/serviceregister";import SearchTable,{defaultProps,propTypes}from"./SearchTable";var selectorPrefix="adhere-ui-searchtableimplement",SearchTableImplement=function(t){function e(e){var o=t.call(this,e)||this;return o.innerWrapRef=createRef(),o.onSelectChange=function(e,t){var r;o.setState(((r={})[e]=t,r))},o.onInputChange=function(e,t){var r;o.setState(((r={})[e]=t.target.value.trim(),r))},o.onDateTimeRangeChange=function(e,t){var r;o.setState(((r={})[e[0]]=t&&t.length?t[0]:null,r[e[1]]=t&&t.length?t[1]:null,r))},Object.assign(o.state,__assign(__assign({},o.getParams()),((e={})[o.getOrderFieldProp()]=o.getOrderFieldValue(),e[o.getOrderProp()]=o.getOrderPropValue()||"descend",e.searchParams=__assign({},o.getParams()),e.selectedRowKeys=[],e.selectedRows=[],e))),o}return __extends(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this);var e=this.props.getTableWrapperInstance;e&&e(this.innerWrapRef)},e.prototype.getFetchListPropName=function(){return""},e.prototype.getFetchListPropNameToFirstUpper=function(){var e=this.getFetchListPropName();return 1<e.length?"".concat(e.charAt(0).toUpperCase()).concat(e.substring(1)):e},e.prototype.getParams=function(){return{}},e.prototype.getServiceName=function(){return""},e.prototype.getFetchDataParams=function(){return{}},e.prototype.isShowNumber=function(){return!0},e.prototype.getNumberGeneratorRule=function(){return SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY},e.prototype.getRowSelectionMode=function(){return SearchTable.ROW_SELECTION_NORMAL_MODE},e.prototype.getTableNumberColumnWidth=function(){return 80},e.prototype.getTableNumberColumnProps=function(){return{}},e.prototype.getRowKey=function(){return"id"},e.prototype.getDataKey=function(){return"list"},e.prototype.getTotalKey=function(){return"totalCount"},e.prototype.getData=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()]},e.prototype.getTotal=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()]},e.prototype.getRowSelection=function(){function o(e,r){var o=n.getRowKey();e?n.setState({selectedRowKeys:__spreadArray(__spreadArray([],n.state.selectedRowKeys||[],!0),r.map(function(e){return e[o]}),!0),selectedRows:__spreadArray(__spreadArray([],n.state.selectedRows||[],!0),r,!0)}):n.setState({selectedRows:(n.state.selectedRows||[]).filter(function(t){return!r.find(function(e){return e[o]===t[o]})}),selectedRowKeys:(n.state.selectedRowKeys||[]).filter(function(t){return!r.find(function(e){return e[o]===t})})})}var n=this;return{selectedRowKeys:this.state.selectedRowKeys,onChange:function(e,t){n.getRowSelectionMode()!==SearchTable.ROW_SELECTION_CONTINUOUS_MODE&&n.setState({selectedRowKeys:e,selectedRows:t})},onSelect:function(e,t){n.getRowSelectionMode()!==SearchTable.ROW_SELECTION_NORMAL_MODE&&o(t,[e])},onSelectAll:function(e,t,r){n.getRowSelectionMode()!==SearchTable.ROW_SELECTION_NORMAL_MODE&&o(e,r)}}},e.prototype.renderSearchForm=function(){return null},e.prototype.renderInner=function(){var e=t.prototype.renderInner.call(this);return React.createElement("div",{ref:this.innerWrapRef,className:"".concat(selectorPrefix,"-tablewrapper")},e)},e.prototype.renderSearchFooterItems=function(){return[]},e.prototype.getOrderFieldProp=function(){return"orderField"},e.prototype.getOrderFieldValue=function(){return""},e.prototype.getOrderProp=function(){return"order"},e.prototype.getOrderPropValue=function(){return"descend"},e.prototype.clear=function(){var r=this;return new Promise(function(e){var t;r.setState(__assign(__assign({},r.getParams()),((t={})[r.getOrderFieldProp()]=r.getOrderFieldValue(),t[r.getOrderProp()]=r.getOrderPropValue()||"descend",t.searchParams=__assign({},r.getParams()),t.selectedRowKeys=[],t.selectedRows=[],t)),function(){e()})})},e.prototype.showLoading=function(){return this.props.loading["".concat(this.getServiceName(),"/").concat(this.getFetchListPropName())]},e.prototype.getSearchParams=function(){var e=this.state,t=e.page,r=e.limit,e=e.searchParams,o=this.state[this.getOrderProp()];return __assign({},__assign(__assign(__assign({page:t,limit:r},e),((t={})[this.getOrderProp()]="descend"===o?"desc":"asc",t[this.getOrderFieldProp()]=this.state[this.getOrderFieldProp()],t)),this.getFetchDataParams()))},e.prototype.fetchData=function(){return this.fetchDataExecute(this.getSearchParams())},e.prototype.fetchDataExecute=function(e){return this.props["".concat(this.getServiceName()).concat(this.getFetchListPropNameToFirstUpper())](e)},e.prototype.onSearch=function(){var r=this,e=Object.keys(this.getParams()),o={};return e.forEach(function(e){o[e]=r.state[e]}),new Promise(function(e){var t;r.setState({searchParams:__assign(__assign({},o),((t={})[r.getOrderFieldProp()]=r.state[r.getOrderFieldProp()],t[r.getOrderProp()]=r.state[r.getOrderProp()],t))},function(){r.fetchData().then(function(){e()})})})},e.prototype.getColumns=function(){return[]},e.prototype.onSubTableChange=function(e,t,r,o){},e.prototype.renderSearchFormAfter=function(){return null},e.prototype.renderSearchFormBefore=function(){return null},e.prototype.renderTableFooter=function(){return null},e.prototype.renderTableHeader=function(){return null},e.prototype.onTableRowComponentReducers=function(e){return this.tableRowComponentReducers},e.prototype.onTableCellComponentReducers=function(e){return this.tableCellComponentReducers},e}(SearchTable),SearchTableImplementFactory=(SearchTableImplement.defaultProps=__assign({},defaultProps),SearchTableImplement.propTypes=__assign(__assign({},propTypes),{getTableWrapperInstance:PropTypes.func}),function(e){function t(e){return __assign(__assign(__assign({},ServiceRegister.mapStateToProps({namespaces:n||[],state:e})),{loading:e.loading}),a?a(e):{})}function o(e){return __assign(__assign({},ServiceRegister.mapDispatchToProps({namespaces:n||[],dispatch:e})),s?s(e):{})}var r=e.serviceNames,n=void 0===r?[]:r,a=e.mapStateToProps,s=e.mapDispatchToProps;return function(r){return ServiceRegister.connect(n||[])(t,o)(forwardRef(function(e,t){return React.createElement(r,__assign({ref:t,className:"".concat(selectorPrefix,"-wrap"),isShowExpandSearch:!0,defaultExpandSearchCollapse:!1,fixedHeaderAutoTable:!0,fixedTableSpaceBetween:!0},e))}))}});export default SearchTableImplementFactory;export{selectorPrefix,SearchTableImplement};
//# sourceMappingURL=SearchTableImplement.js.map
