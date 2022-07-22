import _Tooltip from"antd/es/tooltip";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.splice.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";import{__assign}from"tslib";import React from"react";import{isEmpty,difference,union}from"lodash";import moment from"moment";import FormItemCreator from"@baifendian/adhere-ui-formitemcreator";import intl from"@baifendian/adhere-util-intl";var Util=function(e){var i=this;this.getModeProps=function(){return __assign({rowKey:"id"},i.ins.props[i.ins.props.mode||"table"])},this.getDefaultSelectedColumnKeys=function(e){var t=i.getModeProps().showNumber,e=(e||[]).filter(function(e){return e.show||!e.hasOwnProperty("show")}).map(function(e){return e.key});return t&&!e.includes("xuhao")&&e.unshift((null==t?void 0:t.key)||"xuhao"),e},this.getRowSelection=function(){var e=i.ins.state,t=e.selectedRowKeys,n=void 0===t?[]:t,s=e.selectedRows,t=void 0===s?[]:s,s=e.selectAll,e=i.getModeProps().rowSelection;return e?__assign(__assign({clearOnChange:!1},e),{onChange:i.onSelectChange,selectedRowKeys:e.selectedRowKeys||n,selectedRows:t,selectAll:s}):null},this.getSortDataSource=function(){return i.ins.SortableTableRef.state.dataSource},this.getParams=function(){var e=i.ins.props.params,t={};return i.ins.searchFormRef&&i.ins.searchFormRef.current&&(t=i.ins.searchFormRef.current.getFieldsValue()),__assign(__assign(__assign({},t),i.ins.state.params),e)},this.getFormColumns=function(e,t,s){return e.map(function(e){var n=e;return n.contentProps=n.contentProps||{},n.contentProps.size=t,n.type!==FormItemCreator.RANGEPICKER&&n.type!==FormItemCreator.SELECT||(n.contentProps=__assign({getPopupContainer:function(){return i.ins.TableListRef}},n.contentProps)),n.type===FormItemCreator.SELECT&&(n.contentProps=__assign({style:{width:"150px"},allowClear:!0},n.contentProps)),s&&(n.contentProps=__assign({onSearch:n.type===FormItemCreator.SEARCH?function(e){var t;return i.onSearch(((t={})[n.name]=e,t))}:null,onPressEnter:n.type!==FormItemCreator.SEARCH?function(e){var t;return i.onSearch(((t={})[n.name]=[FormItemCreator.INPUT,FormItemCreator.TEXTAREA,FormItemCreator.NUMBER].includes(n.type)?e.target.value:e,t))}:null},n.contentProps)),n})},this.getPagination=function(e){var t=i.ins.state.params;return __assign({size:"default",defaultPageSize:10,current:t.page,pageSize:t.limit,showSizeChanger:!0,pageSizeOptions:["10","20","50"],showQuickJumper:!0,showTotal:function(e,t){var n=t[0],t=t[1];return"当前 ".concat(n,"-").concat(t,"/共 ").concat(e," 条")},onChange:i.onPageChange,onShowSizeChange:i.onPageChange},e)},this.getTableColumns=function(){var s=i.ins.state.params,e=i.getModeProps(),t=e.columns,e=e.showNumber,t=(t||[]).map(function(r){var e;return __assign(__assign({},r),{render:function(t,e,n){var s="";return s=r.render?r.render(t,e,n):"date"===r.valueType?t?moment(t).format("L"):"-":"datetime"===r.valueType?t?moment(t).format("LLL"):"-":"map"===r.valueType&&r.map?(n=t&&(r.map||[]).find(function(e){return e.value.toString()===t.toString()}),t&&n?n.label:"-"):t,null!=r&&r.ellipsis?React.createElement(_Tooltip,{title:s,placement:"topLeft"},s):s},filtered:(null===(e=r.filters)||void 0===e?void 0:e.length)&&s[r.key]})});return e&&!t.find(function(e){return"xuhao"===e.key})&&t.unshift(__assign({title:intl.v("序号"),dataIndex:"xuhao",key:"xuhao",width:80,render:function(e,t,n){return(s.page-1)*s.limit+n+1}},e)),t},this.getLoading=function(e){return!(!e&&!i.ins.state.loading)&&(e&&e.hasOwnProperty("size")?e:{size:"large"})},this.fetchList=function(e){e=__assign(__assign({},i.getParams()),e);i.ins.props.request&&(i.ins.setState({loading:!0}),i.ins.props.request(e).then(function(){i.ins.setState({loading:!1})}))},this.onSearch=function(e){var t=i.ins.state.params,n=i.getRowSelection();n&&!n.selectAll&&n.clearOnChange&&n.onChange([],[]),i.ins.setState({params:__assign(__assign(__assign({},t),e),{page:1})},function(){i.fetchList()})},this.onResetSearch=function(){var e=i.ins.state.params,t=i.getRowSelection();i.ins.searchFormRef&&i.ins.searchFormRef.current&&i.ins.searchFormRef.current.resetFields(),e.page=1,t&&t.onChange([],[]),i.ins.setState({params:e},function(){i.fetchList()})},this.onSettingChange=function(e){i.ins.setState({selectedColumnKeys:e})},this.onSettingSortEnd=function(e){var n=e.oldIndex,t=e.newIndex,s=i.ins.state.tableColumns;n!==t&&(e=s[n],(s=s.filter(function(e,t){return t!==n})).splice(t,0,e),i.ins.setState({tableColumns:s}))},this.onTableChange=function(e,t,n){var s;if(!isEmpty(n)||!isEmpty(t)){var r,o=__assign(__assign({},i.ins.state.params),{order:null===(s=null==n?void 0:n.order)||void 0===s?void 0:s.replace("end",""),sidx:null==n?void 0:n.field});for(r in t)o[r]=t[r].join(","),o.page=1;n=i.getRowSelection();n&&!n.selectAll&&n.clearOnChange&&n.onChange([],[]),i.ins.setState({params:o},function(){return i.fetchList()})}},this.onSelectChange=function(e,t){var n=i.getModeProps(),s=n.dataSource,r=n.rowKey,o=n.rowSelection,n=i.ins.state.selectAll;i.ins.state.selectAll&&(s=s.map(function(e){return e[r]}),s=union(n.exceptKeys||[],difference(s,e)),i.ins.setState({selectAll:!s.length||{exceptKeys:s}})),null!=o&&o.onChange?o.onChange(e,t):i.ins.setState({selectedRowKeys:e,selectedRows:t})},this.onPageChange=function(e,t){var n=i.ins.state.params,s=i.getRowSelection();s&&!s.selectAll&&s.clearOnChange&&s.onChange([],[]),i.ins.setState({params:__assign(__assign({},n),{page:e,limit:t})},function(){return i.fetchList()})},this.onDelete=function(t){void 0===t&&(t=[]);var e=i.getModeProps(),n=e.pagination,s=e.rowKey,r=n.total,o=i.ins.state.params,e=o.page,n=o.limit;r%n!=1||e!==Math.ceil(r/n)?((o=i.getRowSelection())&&(r=o.selectedRowKeys.filter(function(e){return!t.includes(e)}),n=o.selectedRows.filter(function(e){return!t.includes(e[s])}),o.onChange(r,n)),i.fetchList()):i.ins.setState({params:__assign(__assign({},i.ins.state.params),{page:e-t.length||1})},function(){return i.fetchList()})},this.ins=e};export default Util;
//# sourceMappingURL=util.js.map
