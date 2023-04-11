"use strict";var __extends=function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||((n=n||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},prop_types_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchTableImplement=exports.selectorPrefix=void 0,__importDefault(require("prop-types"))),react_1=__importStar(require("react")),serviceregister_1=__importDefault(require("@ctsj/state/lib/middleware/saga/serviceregister")),SearchTable_1=__importStar(require("./SearchTable")),SearchTableImplement=(exports.selectorPrefix="adhere-ui-searchtableimplement",function(t){function e(e){var n=t.call(this,e)||this;return n.innerWrapRef=(0,react_1.createRef)(),n.onSelectChange=function(e,t){var r;n.setState(((r={})[e]=t,r))},n.onInputChange=function(e,t){var r;n.setState(((r={})[e]=t.target.value.trim(),r))},n.onDateTimeRangeChange=function(e,t){var r;n.setState(((r={})[e[0]]=t&&t.length?t[0]:null,r[e[1]]=t&&t.length?t[1]:null,r))},Object.assign(n.state,__assign(__assign({},n.getParams()),((e={})[n.getOrderFieldProp()]=n.getOrderFieldValue(),e[n.getOrderProp()]=n.getOrderPropValue()||"descend",e.searchParams=__assign({},n.getParams()),e.selectedRowKeys=[],e.selectedRows=[],e))),n}return __extends(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this);var e=this.props.getTableWrapperInstance;e&&e(this.innerWrapRef)},e.prototype.getFetchListPropName=function(){return""},e.prototype.getFetchListPropNameToFirstUpper=function(){var e=this.getFetchListPropName();return 1<e.length?"".concat(e.charAt(0).toUpperCase()).concat(e.substring(1)):e},e.prototype.getParams=function(){return{}},e.prototype.getServiceName=function(){return""},e.prototype.getFetchDataParams=function(){return{}},e.prototype.isShowNumber=function(){return!0},e.prototype.getNumberGeneratorRule=function(){return SearchTable_1.default.NUMBER_GENERATOR_RULE_CONTINUITY},e.prototype.getRowSelectionMode=function(){return SearchTable_1.default.ROW_SELECTION_NORMAL_MODE},e.prototype.getTableNumberColumnWidth=function(){return 80},e.prototype.getTableNumberColumnProps=function(){return{}},e.prototype.getRowKey=function(){return"id"},e.prototype.getDataKey=function(){return"list"},e.prototype.getTotalKey=function(){return"totalCount"},e.prototype.getData=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()]},e.prototype.getTotal=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()]},e.prototype.getRowSelection=function(){function n(e,r){var n=o.getRowKey();e?o.setState({selectedRowKeys:__spreadArray(__spreadArray([],o.state.selectedRowKeys||[],!0),r.map(function(e){return e[n]}),!0),selectedRows:__spreadArray(__spreadArray([],o.state.selectedRows||[],!0),r,!0)}):o.setState({selectedRows:(o.state.selectedRows||[]).filter(function(t){return!r.find(function(e){return e[n]===t[n]})}),selectedRowKeys:(o.state.selectedRowKeys||[]).filter(function(t){return!r.find(function(e){return e[n]===t})})})}var o=this;return{selectedRowKeys:this.state.selectedRowKeys,onChange:function(e,t){o.getRowSelectionMode()!==SearchTable_1.default.ROW_SELECTION_CONTINUOUS_MODE&&o.setState({selectedRowKeys:e,selectedRows:t})},onSelect:function(e,t){o.getRowSelectionMode()!==SearchTable_1.default.ROW_SELECTION_NORMAL_MODE&&n(t,[e])},onSelectAll:function(e,t,r){o.getRowSelectionMode()!==SearchTable_1.default.ROW_SELECTION_NORMAL_MODE&&n(e,r)}}},e.prototype.renderSearchForm=function(){return null},e.prototype.renderInner=function(){var e=t.prototype.renderInner.call(this);return react_1.default.createElement("div",{ref:this.innerWrapRef,className:"".concat(exports.selectorPrefix,"-tablewrapper")},e)},e.prototype.renderSearchFooterItems=function(){return[]},e.prototype.getOrderFieldProp=function(){return"orderField"},e.prototype.getOrderFieldValue=function(){return""},e.prototype.getOrderProp=function(){return"order"},e.prototype.getOrderPropValue=function(){return"descend"},e.prototype.clear=function(){var r=this;return new Promise(function(e){var t;r.setState(__assign(__assign({},r.getParams()),((t={})[r.getOrderFieldProp()]=r.getOrderFieldValue(),t[r.getOrderProp()]=r.getOrderPropValue()||"descend",t.searchParams=__assign({},r.getParams()),t.selectedRowKeys=[],t.selectedRows=[],t)),function(){e()})})},e.prototype.clearAll=function(){var t=this;return new Promise(function(e){t.setState({page:1,limit:t.getLimit()},function(){return t.clear().then(function(){return e()})})})},e.prototype.showLoading=function(){return this.props.loading["".concat(this.getServiceName(),"/").concat(this.getFetchListPropName())]},e.prototype.getSearchParams=function(){var e=this.state,t=e.page,r=e.limit,e=e.searchParams,n=this.state[this.getOrderProp()];return __assign({},__assign(__assign(__assign({page:t,limit:r},e),((t={})[this.getOrderProp()]="descend"===n?"desc":"asc",t[this.getOrderFieldProp()]=this.state[this.getOrderFieldProp()],t)),this.getFetchDataParams()))},e.prototype.fetchData=function(){return this.fetchDataExecute(this.getSearchParams())},e.prototype.sync=function(){var n=this;return new Promise(function(e){var t,r=n.state.page;1===r?e(n.fetchData()):t=n.fetchData().then(function(){n.getData().length?e(t):n.setState({page:r-1},function(){return e(n.fetchData())})})})},e.prototype.fetchDataExecute=function(e){return this.props["".concat(this.getServiceName()).concat(this.getFetchListPropNameToFirstUpper())](e)},e.prototype.onSearch=function(){var r=this,e=Object.keys(this.getParams()),n={};return e.forEach(function(e){n[e]=r.state[e]}),new Promise(function(e){var t;r.setState({searchParams:__assign(__assign({},n),((t={})[r.getOrderFieldProp()]=r.state[r.getOrderFieldProp()],t[r.getOrderProp()]=r.state[r.getOrderProp()],t))},function(){r.fetchData().then(function(){e()})})})},e.prototype.getColumns=function(){return[]},e.prototype.onSubTableChange=function(e,t,r,n){},e.prototype.renderSearchFormAfter=function(){return null},e.prototype.renderSearchFormBefore=function(){return null},e.prototype.renderSearchFooter=function(){return null},e.prototype.renderSearchHeader=function(){return null},e.prototype.onTableRowComponentReducers=function(e){return this.tableRowComponentReducers},e.prototype.onTableCellComponentReducers=function(e){return this.tableCellComponentReducers},e}(SearchTable_1.default)),SearchTableImplementFactory=((exports.SearchTableImplement=SearchTableImplement).defaultProps=__assign({},SearchTable_1.defaultProps),SearchTableImplement.propTypes=__assign(__assign({},SearchTable_1.propTypes),{getTableWrapperInstance:prop_types_1.default.func}),function(e){function t(e){return __assign(__assign(__assign({},serviceregister_1.default.mapStateToProps({namespaces:o||[],state:e})),{loading:e.loading}),a?a(e):{})}function n(e){return __assign(__assign({},serviceregister_1.default.mapDispatchToProps({namespaces:o||[],dispatch:e})),s?s(e):{})}var r=e.serviceNames,o=void 0===r?[]:r,a=e.mapStateToProps,s=e.mapDispatchToProps;return function(r){return serviceregister_1.default.connect(o||[])(t,n)((0,react_1.forwardRef)(function(e,t){return react_1.default.createElement(r,__assign({ref:t,className:"".concat(exports.selectorPrefix,"-wrap"),isShowExpandSearch:!0,defaultExpandSearchCollapse:!1,fixedHeaderAutoTable:!0,fixedTableSpaceBetween:!0},e))}))}});exports.default=SearchTableImplementFactory;
//# sourceMappingURL=SearchTableImplement.js.map
