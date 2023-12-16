import _Table from"antd/es/table";import _SearchOutlined from"@ant-design/icons/es/icons/SearchOutlined";import _Button from"antd/es/button";import _UpOutlined from"@ant-design/icons/es/icons/UpOutlined";import _DownOutlined from"@ant-design/icons/es/icons/DownOutlined";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,a=t.length;r<a;r++)!o&&r in t||((o=o||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};import classNames from"classnames";import cloneDeep from"lodash.clonedeep";import PropTypes from"prop-types";import React,{createContext,createRef}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Intl from"@baifendian/adhere-util-intl";import ColumnResizable,{SearchTableResizableObserver,SearchTableResizableTitle}from"./Extension/ColumnResizable";import ColumnSetting from"./Extension/ColumnSetting";import ExportExcel from"./Extension/ExportExcel";import ReloadTable from"./Extension/ReloadTable";import TableCell from"./Extension/TableComponents/TableCell";import TableRow from"./Extension/TableComponents/TableRow";import TableDensitySetting from"./Extension/TableDensitySetting";import Search,{defaultProps as searchDefaultProps,propTypes as searchPropTypes}from"./Search";import{TableDensity}from"./types";var selectorPrefix="adhere-ui-search-table",SearchTableContext=createContext(null),SearchTable=function(n){function i(e){var l=n.call(this,e)||this;return l.tableWrapRef=createRef(),l.components={header:{cell:SearchTableResizableTitle},body:{row:TableRow,cell:TableCell}},l.columnResizable=new ColumnResizable,l.columnObserver=null,l.rowConfigReducers=[],l.cellConfigReducers=[],l.tableRowComponentReducers=[],l.tableCellComponentReducers=[],l.onTableChange=function(e,t,n){var o,r=l.state.page,a=l.state.limit;l.setState(((o={page:e.current,limit:e.pageSize})[l.getOrderFieldProp()]=n.field||l.getOrderFieldValue(),o[l.getOrderProp()]=n.order,o),function(){!n.order&&l.state.page===r&&l.state.limit===a||l.fetchData(),l.onSubTableChange(e,t,n)})},l.state={page:1,limit:l.getLimit(),expand:e.defaultExpandSearchCollapse,expandedRowKeys:(null==(e=null==(e=e.antdTableProps)?void 0:e.expandable)?void 0:e.expandedRowKeys)||[],scrollY:0},Object.assign(l.state,{columnSetting:l.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),tableDensity:l.getTableDensity()}),l.onClear=l.onClear.bind(l),l.onExpandedRowsChange=l.onExpandedRowsChange.bind(l),l.onBodyKeyup=l.onBodyKeyup.bind(l),l}return __extends(i,n),i.prototype.componentDidMount=function(){var e;null!=(e=n.prototype.componentDidMount)&&e.call(this),document.body.addEventListener("keyup",this.onBodyKeyup)},i.prototype.componentWillUnmount=function(){var e;null!=(e=n.prototype.componentWillUnmount)&&e.call(this),document.body.removeEventListener("keyup",this.onBodyKeyup)},i.prototype.componentWillReceiveProps=function(e){var t;n.prototype.componentWillReceiveProps.call(this,e),JSON.stringify(this.state.expandedRowKeys)!==JSON.stringify((null==(t=null==(t=e.antdTableProps)?void 0:t.expandable)?void 0:t.expandedRowKeys)||[])&&this.setState({expandedRowKeys:null==(t=null==(t=e.antdTableProps)?void 0:t.expandable)?void 0:t.expandedRowKeys}),this.columnSettingEffect(e)},i.prototype.componentDidUpdate=function(e,t,n){this.tableWrapRef.current&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e,t))},i.prototype.searchTableResizableEffectLayout=function(){this.columnObserver||(this.columnObserver=SearchTableResizableObserver(this))},i.prototype.fixedHeaderAutoTableEffectLayout=function(e,t){var n,o;this.props.fixedHeaderAutoTable&&(n=this.getData())&&n.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null==(t=(n=this.tableWrapRef.current).querySelector(".ant-table-header"))?void 0:t.offsetHeight)||0,o=(null==(o=n.querySelector(".ant-table-pagination"))?void 0:o.offsetHeight)||0,this.setState({scrollY:n.clientHeight-(t+(o?o+32:0))}))},i.prototype.columnSettingEffect=function(e){var t,n,o,r=this,a=this.state.columnSetting||[],l=this.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})});(null==a?void 0:a.length)!==l.length?this.setState({columnSetting:l}):(t=null==(t=null==a?void 0:a.map)?void 0:t.call(a,function(e){return e[r.getRowKey()]}),n=null==(n=null==l?void 0:l.map)?void 0:n.call(l,function(e){return e[r.getRowKey()]}),(null==t?void 0:t.toString())!==n.toString()&&(o=this.getRowKey()||"id",this.setState({columnSetting:null==l?void 0:l.map(function(t){var e=null==a?void 0:a.find(function(e){return e[o]===t[o]});return __assign(__assign({},t),{display:!e||e.display})})})))},i.prototype.onBodyKeyup=function(e){13===e.keyCode&&document.activeElement&&null!=(e=this.searchFormRef.current)&&e.contains(document.activeElement)&&this.search()},i.prototype.onSearchPanelCollapseBefore=function(){},i.prototype.onSearchPanelCollapseAfter=function(){},i.prototype.sortOrder=function(e){return this.state&&this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},i.prototype.onCellConfigReducers=function(e){var n=this,o=e.rowIndex,t=e.column,r=e.record,a=e.columns;return this.cellConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:o,record:r,columns:a,column:e.value}),e},{value:t}).value},i.prototype.onRowConfigReducers=function(e){var n=this,o=e.rowIndex,r=e.record,a=e.columns;return this.rowConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:o,record:r,columns:a,rowConfig:e.value}),e},{value:{}}).value},i.prototype.onExpandedRowsChange=function(o){var r=this;return new Promise(function(e){var t,n;r.setState({expandedRowKeys:o},function(){e()}),null!=(t=null==(t=null!=(t=r.props.antdTableProps)?t:{})?void 0:t.expandable)&&t.onExpandedRowsChange&&null!=(n=null==(t=null==(t=r.props.antdTableProps)?void 0:t.expandable)?void 0:t.onExpandedRowsChange)&&n.call(t,o)})},i.prototype.search=function(){var t=this;return new Promise(function(e){t.setState({page:1},function(){t.onSearch().then(function(){return e()})})})},i.prototype.getTableDensity=function(){return TableDensity.DEFAULT},i.prototype.getTableColumnsAll=function(){var r=this,e=this.isShowNumber(),a=this.getColumns().map(function(e,t){var n={value:e};return n.value=function n(e){var o=e;return"$resizable"in e&&null!=e&&e.$resizable?o=r.columnResizable.searchTableResizableColumnItem(r,t,e):o.onHeaderCell=function(){return{column:e}},null!=o&&o.children&&Array.isArray(o.children)&&o.children.forEach(function(e,t){o.children[t]=n(e)}),o}(e),n.value}).map(function(o){return __assign(__assign({},o),{onCell:function(e,t){var n=cloneDeep(o);return{rowIndex:t,record:e,column:r.onCellConfigReducers({rowIndex:t,column:n,record:e,columns:a}),columns:a}}})});return e?__spreadArray([this.getTableColumnConfig()],a||[],!0):a},i.prototype.getTableColumns=function(){return this.getTableColumnsAll().filter(function(e){var t;return!("$hide"in e&&e.$hide)&&(!("$authorized"in e)||(null==(t=null==e?void 0:e.$authorized)?void 0:t.call(e)))})},i.prototype.getTableColumnConfig=function(){var o=this,e=this.getTableNumberColumnWidth(),r=null!=(t=this.getNumberGeneratorRule())?t:i.NUMBER_GENERATOR_RULE_ALONE,t=this.state,n=t.page,a=void 0===n?1:n,n=t.limit,l=void 0===n?this.getLimit():n;return __assign(__assign({},this.getTableNumberColumnProps&&null!=(t=this.getTableNumberColumnProps())?t:{}),{title:Intl.v("序号"),dataIndex:"_number",key:"_number",align:"center",width:e,render:function(e,t,n){return React.createElement(ConditionalRender,{conditional:r===i.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return o.renderTableNumberColumn((a-1)*l+(n+1),{value:e,record:t,index:n})}},function(){return o.renderTableNumberColumn(n+1,{value:e,record:t,index:n})})}})},i.prototype.getTableRowComponentReducers=function(){return this.tableRowComponentReducers},i.prototype.getTableCellComponentReducers=function(){return this.tableCellComponentReducers},i.prototype.getExportExcelColumns=function(e){var n=this;return e.filter(function(e){var t,e=e.dataIndex;return!["_number",(null==(t=null==n?void 0:n.getOptionsColumnDataIndex)?void 0:t.call(n))||"_options"].includes(e)}).map(function(e){return"children"in e&&Array.isArray(e.children)&&e.children.length?__assign(__assign({},e),{children:n.getExportExcelColumns(e.children||[])}):e})},i.prototype.getExportExcelData=function(){return this.getData()},i.prototype.renderTableNumberColumn=function(e,t){return React.createElement("span",null,e=void 0===e?"":e)},i.prototype.renderTableReload=function(){var e=this;return React.createElement(ReloadTable,{onReload:function(){return e.fetchData()},showLoading:this.showLoading()})},i.prototype.renderColumnSetting=function(){var e=this,t=__spreadArray([],this.state.columnSetting,!0);return t.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),React.createElement(ColumnSetting,{columns:t,onShowColumns:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:t})})}})},onReset:function(){e.setState(function(){return{columnSetting:e.getTableColumns().map(function(e,t){return __assign(__assign({},e),{display:!0,sort:t})})}})},onDisplayColumn:function(t,n){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:e.key===t.key?n:e.display})})}})},onSortEnd:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{sort:t.get(e.key)})})}})}})},i.prototype.renderTableDensitySetting=function(){var t=this;return React.createElement(TableDensitySetting,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},i.prototype.renderExportExcel=function(){var e=this;return React.createElement(ExportExcel,{title:this.props.title,getDataSource:function(){return e.getExportExcelData()},getColumns:function(){return e.getExportExcelColumns(e.getTableColumns())}})},i.prototype.renderSearchBarCollapseControl=function(){var e=this;return React.createElement(ConditionalRender,{conditional:this.state.expand,noMatch:function(){return React.createElement("a",{key:"expand",className:"".concat(selectorPrefix,"-search-footer-item-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("展开")),React.createElement(_DownOutlined,null))}},function(){return React.createElement("a",{key:"hide",className:"".concat(selectorPrefix,"-search-footer-item-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("收起")),React.createElement(_UpOutlined,null))})},i.prototype.renderSearchFormToolBar=function(){var e,t=this,n=this.props.isShowExpandSearch,n=[React.createElement(_Button,{className:"".concat(selectorPrefix,"-search-footer-item"),type:"primary",key:"search",loading:this.showLoading(),icon:React.createElement(_SearchOutlined,null),onClick:function(){return t.search()}},Intl.v("查询")),React.createElement(_Button,{className:"".concat(selectorPrefix,"-search-footer-item"),key:"reset",onClick:this.onClear},Intl.v("重置")),n&&this.renderSearchBarCollapseControl()].filter(function(e){return!!e}),n=this.renderSearchFormToolBarItems(n)||n;return React.createElement(React.Fragment,null,React.createElement("div",{className:"".concat(selectorPrefix,"-search-form-tool-bar-default-panel")},null==(e=this.renderSearchFormToolBarDefaultPanel)?void 0:e.call(this)),!!n.length&&React.createElement("div",{className:"".concat(selectorPrefix,"-search-form-tool-bar-items")},n.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(selectorPrefix,"-search-form-tool-bar-item")},e)})))},i.prototype.renderSearchToolBar=function(){var e=this.renderSearchFooterItems([])||[];return React.createElement("div",{className:"".concat(selectorPrefix,"-search-footer-wrapper")},e.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(selectorPrefix,"-search-footer-item")},e)}))},i.prototype.renderBody=function(){var n=this,e=this.props,t=e.antdTableProps,e=e.fixedHeaderAutoTable,o=this.state,r=o.columnSetting,a=void 0===r?[]:r,r=o.tableDensity,l=this.getTableColumns().map(function(e,t){return __assign(__assign({},a[t]),e)}).filter(function(e){return e.display}),o=(l.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),__assign(__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:l,onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection(),size:r,components:this.components,onRow:function(e,t){return{record:e,rowIndex:t,columns:l,rowKey:n.getRowKey(),rowConfig:n.onRowConfigReducers({rowIndex:Number(t),record:e,columns:l})}}},null!=t?t:{}),{expandable:__assign(__assign({},(null!=t?t:{}).expandable),{expandedRowKeys:this.state.expandedRowKeys,onExpandedRowsChange:this.onExpandedRowsChange})}));return e&&(r=this.state.scrollY,t&&t.scroll?o.scroll.y=r:o.scroll={y:r}),this.tableRowComponentReducers=this.onTableRowComponentReducers(l),this.tableCellComponentReducers=this.onTableCellComponentReducers(l),React.createElement(_Table,__assign({},o))},i.prototype.renderInner=function(){var e,t=this.props.fixedTableSpaceBetween;return n.prototype.renderInner.call(this,this.tableWrapRef,classNames(((e={})["fixed-table-space-between"]=t,e)))},i.prototype.renderChildren=function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},n.prototype.render.call(this))},i.prototype.render=function(){return React.createElement(SearchTableContext.Provider,{value:{context:this}},this.renderChildren())},i.displayName="SearchTable",i.NUMBER_GENERATOR_RULE_ALONE=Symbol(),i.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),i.ROW_SELECTION_NORMAL_MODE=Symbol(),i.ROW_SELECTION_CONTINUOUS_MODE=Symbol(),i}(Search),defaultProps=__assign({antdTableProps:{},fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},searchDefaultProps),propTypes=__assign({antdTableProps:PropTypes.object,fixedHeaderAutoTable:PropTypes.bool,fixedTableSpaceBetween:PropTypes.bool},searchPropTypes);SearchTable.defaultProps=defaultProps,SearchTable.propTypes=propTypes;export default SearchTable;export{selectorPrefix,SearchTableContext,defaultProps,propTypes};
//# sourceMappingURL=SearchTable.js.map
