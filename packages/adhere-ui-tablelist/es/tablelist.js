import _Skeleton from"antd/es/skeleton";import _Button from"antd/es/button";import _Form from"antd/es/form";import _Table from"antd/es/table";import _Checkbox from"antd/es/checkbox";import _List from"antd/es/list";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.search.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.map.js";import{__assign,__extends,__rest}from"tslib";import classNames from"classnames";import{cloneDeep}from"lodash";import React from"react";import FormItemCreator from"@baifendian/adhere-ui-formitemcreator";import intl from"@baifendian/adhere-util-intl";import SortableTable from"./sortabletable";import{ToolbarReload,ToolbarSelectAll,ToolbarSetting}from"./tablelisttoolbar";import Util from"./util";var selectorPrefix="adhere-ui-tablelist",defaultRowKey="id",TableList=function(t){function e(e){var g=t.call(this,e)||this,e=(g.renderToolbar=function(){var e,t,o,r,a,n,l,s,i,c,m,u,d,f;if(g.props.toolbar)return e=(o=g.getModeProps()).dataSource,t=o.rowKey,o=o.pagination,r=(m=g.props.toolbar).className,a=m.title,n=m.total,l=m.selectAll,s=m.search,i=m.reload,c=m.setting,m=m.toolbarOptionRender,u=(d=g.state).selectedColumnKeys,d=d.tableColumns,f=g.getRowSelection(),React.createElement("div",{className:classNames(r,"".concat(selectorPrefix,"-toolbar"))},React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar-left")},a?React.createElement("span",{className:"".concat(selectorPrefix,"-toolbar-left-title")},a):null,n?React.createElement("span",{className:"".concat(selectorPrefix,"-toolbar-left-total")},!0===n?intl.vHtml("共 <em>{n}</em> 条",{n:o&&o.total}):n):null,l?React.createElement(ToolbarSelectAll,{selectAll:l,dataSource:e,rowSelection:f,rowKey:t,setSelectAll:function(e){return g.setState({selectAll:e})}}):null),React.createElement("div",{className:"".concat(selectorPrefix,"-toolbar-right")},m,s?React.createElement(FormItemCreator,{columns:g.getFormColumns(s||[],"default",!0)}):null,i?React.createElement(ToolbarReload,{reload:i,onSearch:g.onSearch}):null,c?React.createElement(ToolbarSetting,{setting:c,tableColumns:d,onSettingChange:g.onSettingChange,onSettingSortEnd:g.onSettingSortEnd,selectedColumnKeys:u}):null))},g.renderList=function(){var r,e,t,a,o,n;if(g.props.list)return o=g.getModeProps(),r=o.rowKey,e=o.pagination,t=o.loading,a=o.renderItem,o=__rest(o,["rowKey","pagination","loading","renderItem"]),n=g.getRowSelection(),React.createElement(_List,__assign({rowKey:r,pagination:g.getPagination(e),loading:g.getLoading(t),renderItem:function(t,e){var o="function"==typeof r?r(t):r;return React.createElement(_List.Item,null,React.createElement(React.Fragment,null,n?React.createElement(_Checkbox,{checked:n.selectedRowKeys.includes(t[o]),onChange:function(e){e.target.checked?(n.selectedRowKeys.push(t[o]),n.selectedRows.push(t),n.onChange(n.selectedRowKeys,n.selectedRows)):n.onChange(n.selectedRowKeys.filter(function(e){return e!==t[o]}),n.selectedRows.filter(function(e){return e[o]!==t[o]}))}}):null,a&&a(t,e)))}},o))},g.renderTable=function(){var t,e,o,r,a,n,l,s;if(g.props.table)return e=g.state,t=e.selectedColumnKeys,e=e.tableColumns,o=(l=g.getModeProps()).sortable,s=l.pagination,r=l.loading,a=l.dataSource,l.columns,n=l.rowKey,l.rowSelection,l=__rest(l,["sortable","pagination","loading","dataSource","columns","rowKey","rowSelection"]),s=__assign({pagination:g.getPagination(s),loading:g.getLoading(r),rowSelection:g.getRowSelection(),columns:e.filter(function(e){return t.includes(e.key)}),dataSource:a,onChange:g.onTableChange},l),o?React.createElement(SortableTable,__assign({ref:function(e){g.SortableTableRef=e},rowKey:n},s,{sortable:o})):React.createElement(_Table,__assign({rowKey:n},s))},new Util(g)),e=(g.getModeProps=e.getModeProps,g.getDefaultSelectedColumnKeys=e.getDefaultSelectedColumnKeys,g.getFormColumns=e.getFormColumns,g.getSortDataSource=e.getSortDataSource,g.getParams=e.getParams,g.getRowSelection=e.getRowSelection,g.getPagination=e.getPagination,g.getLoading=e.getLoading,g.getTableColumns=e.getTableColumns,g.fetchList=e.fetchList,g.onSearch=e.onSearch,g.onResetSearch=e.onResetSearch,g.onSettingChange=e.onSettingChange,g.onSettingSortEnd=e.onSettingSortEnd,g.onTableChange=e.onTableChange,g.searchFormRef=React.createRef(),g.getModeProps());return g.state={firstLoading:!0,loading:!1,selectedColumnKeys:g.props.table?g.getDefaultSelectedColumnKeys(g.props.table.columns):[],tableColumns:[],params:{page:1,limit:e&&e.pagination&&e.pagination.defaultPageSize||10}},g}return __extends(e,t),e.getDerivedStateFromProps=function(e,t){var o=(e[e.mode||"table"]||{}).dataSource;return!e.request&&null!=t&&t.firstLoading&&o||e.request&&null!=t&&t.firstLoading&&null!=t&&t.firstRequest&&o?{firstLoading:!1}:null},e.prototype.componentDidMount=function(){var e=this,t=this.getModeProps();this.props.request?this.setState({firstRequest:!0},function(){return e.fetchList()}):t.dataSource&&this.setState({firstLoading:!1}),this.setState({tableColumns:this.getTableColumns()})},e.prototype.shouldComponentUpdate=function(e,o){var t,r=e[e.mode||"table"]||{},a=this.getModeProps();return!o.selectAll||JSON.stringify(r.dataSource)===JSON.stringify(a.dataSource)||(a=r.dataSource,r=r.rowKey,t=void 0===r?defaultRowKey:r,r=(a||[]).map(function(e){return e["function"==typeof t?t(e):t]}).filter(function(e){var t;return!(null!=(t=null==(t=o.selectAll)?void 0:t.exceptKeys)&&t.includes(e))}),"table"===e.mode&&e.table&&e.table.rowSelection&&e.table.rowSelection.onChange?e.table.rowSelection.onChange(r,cloneDeep(a)):this.setState({selectedRowKeys:r,selectedRows:a}),!1)},e.prototype.renderSearch=function(){var e,t,o,r,a,n,l,s,i=this,c=this.props.search;if(c)return e=c.className,t=c.beforeContent,o=c.afterContent,r=c.optionRender,a=c.columns,n=c.searchText,l=c.resetText,s=void 0===(s=c.size)?"middle":s,c?React.createElement("div",{className:classNames(e,"".concat(selectorPrefix,"-search"))},t,React.createElement(_Form,{layout:"inline",ref:this.searchFormRef,className:classNames("".concat(selectorPrefix,"-search-form"),((e={})["".concat(selectorPrefix,"-search-form-havebefore")]=t,e["".concat(selectorPrefix,"-search-form-haveafter")]=o,e))},React.createElement("div",{className:"ant-form-search"},React.createElement(FormItemCreator,{columns:this.getFormColumns(a||[],s,c.hasOwnProperty("optionRender")&&!r)})),c.hasOwnProperty("optionRender")?r:React.createElement("div",{className:"ant-form-btngroup"},React.createElement(_Button,{onClick:function(){return i.onResetSearch()},size:s},l||intl.v("重置")),React.createElement(_Button,{type:"primary",onClick:function(){return i.onSearch()},size:s},n||intl.v("搜索")))),o):null},e.prototype.renderContent=function(){var e=this.props.mode;return React.createElement("div",{className:"".concat(selectorPrefix,"-content")},this.renderToolbar(),this.state.firstLoading?this.renderLoading():"list"===e?this.renderList():this.renderTable())},e.prototype.renderLoading=function(){return React.createElement(_Skeleton,{paragraph:{rows:10},title:!1})},e.prototype.render=function(){var t=this,e=this.props.className;return React.createElement("div",{className:classNames(selectorPrefix,e),ref:function(e){t.TableListRef=e}},this.renderSearch(),this.renderContent())},e}(React.PureComponent);TableList.defaultProps={mode:"table"};export default TableList;export{selectorPrefix};
//# sourceMappingURL=tablelist.js.map
