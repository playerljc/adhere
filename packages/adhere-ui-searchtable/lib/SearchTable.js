"use strict";var __extends=function(){var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=exports.SearchTableContext=exports.selectorPrefix=void 0,require("antd")),classnames_1=__importDefault(require("classnames")),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),ColumnResizable_1=__importStar(require("./Extension/ColumnResizable")),ColumnSetting_1=__importDefault(require("./Extension/ColumnSetting")),ExportExcel_1=__importDefault(require("./Extension/ExportExcel")),ReloadTable_1=__importDefault(require("./Extension/ReloadTable")),TableCell_1=__importDefault(require("./Extension/TableComponents/TableCell")),TableRow_1=__importDefault(require("./Extension/TableComponents/TableRow")),TableDensitySetting_1=__importDefault(require("./Extension/TableDensitySetting")),Search_1=__importStar(require("./Search")),Util_1=require("./Util"),types_1=require("./types"),SearchTable=(exports.selectorPrefix="adhere-ui-search-table",exports.SearchTableContext=(0,react_1.createContext)(null),function(n){function i(e){var i=n.call(this,e)||this;return i.tableWrapRef=(0,react_1.createRef)(),i.components={header:{cell:ColumnResizable_1.SearchTableResizableTitle},body:{row:TableRow_1.default,cell:TableCell_1.default}},i.columnResizable=new ColumnResizable_1.default,i.columnObserver=null,i.rowConfigReducers=[],i.cellConfigReducers=[],i.tableRowComponentReducers=[],i.tableCellComponentReducers=[],i.onTableChange=function(n,r,o){var a=i.state.page,l=i.state.limit;return new Promise(function(t){var e;i.setState(((e={page:n.current,limit:n.pageSize})[i.getOrderFieldProp()]=o.field||i.getOrderFieldValue(),e[i.getOrderProp()]=o.order,e),function(){o.order?i.fetchData().then(function(e){return t(e)}):i.state.page===a&&i.state.limit===l||i.fetchData().then(function(e){return t(e)}),i.onSubTableChange(n,r,o)})})},i.onTableRow=function(e,t,n){return{record:t,rowIndex:n,columns:e,rowKey:i.getRowKey(),rowConfig:i.onRowConfigReducers({rowIndex:Number(n),record:t,columns:e})}},i.state={page:1,limit:i.getLimit(),expand:e.defaultExpandSearchCollapse,expandedRowKeys:(null==(e=null==(e=e.antdTableProps)?void 0:e.expandable)?void 0:e.expandedRowKeys)||[],scrollY:0},Object.assign(i.state,{columnSetting:i.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),tableDensity:i.getTableDensity()}),i.onClear=i.onClear.bind(i),i.onExpandedRowsChange=i.onExpandedRowsChange.bind(i),i.onBodyKeyup=i.onBodyKeyup.bind(i),i}return __extends(i,n),i.prototype.componentDidMount=function(){var e;null!=(e=n.prototype.componentDidMount)&&e.call(this),document.body.addEventListener("keyup",this.onBodyKeyup)},i.prototype.componentWillUnmount=function(){var e;null!=(e=n.prototype.componentWillUnmount)&&e.call(this),document.body.removeEventListener("keyup",this.onBodyKeyup)},i.prototype.componentWillReceiveProps=function(e){var t;n.prototype.componentWillReceiveProps.call(this,e),JSON.stringify(this.state.expandedRowKeys)!==JSON.stringify((null==(t=null==(t=e.antdTableProps)?void 0:t.expandable)?void 0:t.expandedRowKeys)||[])&&this.setState({expandedRowKeys:null==(t=null==(t=e.antdTableProps)?void 0:t.expandable)?void 0:t.expandedRowKeys}),this.columnSettingEffect(e)},i.prototype.componentDidUpdate=function(e,t,n){this.tableWrapRef.current&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e,t))},i.prototype.searchTableResizableEffectLayout=function(){this.columnObserver||(this.columnObserver=(0,ColumnResizable_1.SearchTableResizableObserver)(this))},i.prototype.fixedHeaderAutoTableEffectLayout=function(e,t){var n,r;this.props.fixedHeaderAutoTable&&(n=this.getData())&&n.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null==(t=(n=this.tableWrapRef.current).querySelector(".ant-table-header"))?void 0:t.offsetHeight)||0,r=(null==(r=n.querySelector(".ant-table-pagination"))?void 0:r.offsetHeight)||0,this.setState({scrollY:n.clientHeight-(t+(r?r+32:0))}))},i.prototype.columnSettingEffect=function(e){var t,n,r,o=this,a=this.state.columnSetting||[],l=this.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})});(null==a?void 0:a.length)!==l.length?this.setState({columnSetting:l}):(t=null==(t=null==a?void 0:a.map)?void 0:t.call(a,function(e){return e[o.getRowKey()]}),n=null==(n=null==l?void 0:l.map)?void 0:n.call(l,function(e){return e[o.getRowKey()]}),(null==t?void 0:t.toString())!==n.toString()&&(r=this.getRowKey()||"id",this.setState({columnSetting:null==l?void 0:l.map(function(t){var e=null==a?void 0:a.find(function(e){return e[r]===t[r]});return __assign(__assign({},t),{display:!e||e.display})})})))},i.prototype.onBodyKeyup=function(e){13===e.keyCode&&document.activeElement&&null!=(e=this.searchFormRef.current)&&e.contains(document.activeElement)&&this.search()},i.prototype.onSearchPanelCollapseBefore=function(){},i.prototype.onSearchPanelCollapseAfter=function(){},i.prototype.sortOrder=function(e){return this.state&&this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},i.prototype.onCellConfigReducers=function(e){var n=this,r=e.rowIndex,t=e.column,o=e.record,a=e.columns;return this.cellConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:r,record:o,columns:a,column:e.value}),e},{value:t}).value},i.prototype.onRowConfigReducers=function(e){var n=this,r=e.rowIndex,o=e.record,a=e.columns;return this.rowConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:r,record:o,columns:a,rowConfig:e.value}),e},{value:{}}).value},i.prototype.onExpandedRowsChange=function(r){var o=this;return new Promise(function(e){var t,n;o.setState({expandedRowKeys:r},function(){e()}),null!=(t=null==(t=null!=(t=o.props.antdTableProps)?t:{})?void 0:t.expandable)&&t.onExpandedRowsChange&&null!=(n=null==(t=null==(t=o.props.antdTableProps)?void 0:t.expandable)?void 0:t.onExpandedRowsChange)&&n.call(t,r)})},i.prototype.search=function(){var e=this;return new Promise(function(t){e.setState({page:1},function(){e.onSearch().then(function(e){return t(e)})})})},i.prototype.getTableDensity=function(){return types_1.TableDensity.DEFAULT},i.prototype.getTableColumnsAll=function(){var o=this,e=this.isShowNumber(),a=this.getColumns().map(function(e,t){function r(e){var n=e;return"$resizable"in e&&null!=e&&e.$resizable?n=o.columnResizable.searchTableResizableColumnItem(o,t,e):n.onHeaderCell=function(){return{column:e}},null!=n&&n.children&&Array.isArray(n.children)&&n.children.forEach(function(e,t){n.children[t]=r(e)}),n}var n={value:e};return n.value=r(e),n.value}).map(function(r){return __assign(__assign({},r),{onCell:function(e,t){var n=(0,Util_1.cloneDeep)(r);return{rowIndex:t,record:e,column:o.onCellConfigReducers({rowIndex:t,column:n,record:e,columns:a}),columns:a}}})});return e?__spreadArray([this.getTableColumnConfig()],a||[],!0):a},i.prototype.getTableColumns=function(){return this.getTableColumnsAll().filter(function(e){var t;return!("$hide"in e&&e.$hide)&&(!("$authorized"in e)||(null==(t=null==e?void 0:e.$authorized)?void 0:t.call(e)))})},i.prototype.getTableColumnConfig=function(){var r=this,e=this.getTableNumberColumnWidth(),o=null!=(t=this.getNumberGeneratorRule())?t:i.NUMBER_GENERATOR_RULE_ALONE,t=this.state,n=t.page,a=void 0===n?1:n,n=t.limit,l=void 0===n?this.getLimit():n;return __assign({title:adhere_util_intl_1.default.v("序号"),dataIndex:"_number",key:"_number",align:"center",width:e,render:function(e,t,n){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:o===i.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return r.renderTableNumberColumn((a-1)*l+(n+1),{value:e,record:t,index:n})}},function(){return r.renderTableNumberColumn(n+1,{value:e,record:t,index:n})})}},this.getTableNumberColumnProps&&null!=(t=this.getTableNumberColumnProps())?t:{})},i.prototype.getTableRowComponentReducers=function(){return this.tableRowComponentReducers},i.prototype.getTableCellComponentReducers=function(){return this.tableCellComponentReducers},i.prototype.getExportExcelColumns=function(e){var n=this;return e.filter(function(e){var t,e=e.dataIndex;return!["_number",(null==(t=null==n?void 0:n.getOptionsColumnDataIndex)?void 0:t.call(n))||"_options"].includes(e)}).map(function(e){return"children"in e&&Array.isArray(e.children)&&e.children.length?__assign(__assign({},e),{children:n.getExportExcelColumns(e.children||[])}):e})},i.prototype.getExportExcelData=function(){return this.getData()},i.prototype.getDataSource=function(){return this.getData()},i.prototype.renderTableNumberColumn=function(e,t){return react_1.default.createElement("span",null,e=void 0===e?"":e)},i.prototype.renderTableReload=function(){var e=this;return react_1.default.createElement(ReloadTable_1.default,{onReload:function(){return e.fetchData()},showLoading:this.showLoading()})},i.prototype.renderColumnSetting=function(){var e=this,t=__spreadArray([],this.state.columnSetting,!0);return t.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),react_1.default.createElement(ColumnSetting_1.default,{columns:t,onShowColumns:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:t})})}})},onReset:function(){e.setState(function(){return{columnSetting:e.getTableColumns().map(function(e,t){return __assign(__assign({},e),{display:!0,sort:t})})}})},onDisplayColumn:function(t,n){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:e.key===t.key?n:e.display})})}})},onSortEnd:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{sort:t.get(e.key)})})}})}})},i.prototype.renderTableDensitySetting=function(){var t=this;return react_1.default.createElement(TableDensitySetting_1.default,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},i.prototype.renderExportExcel=function(){var e=this;return react_1.default.createElement(ExportExcel_1.default,{title:this.props.title,getDataSource:function(){return e.getExportExcelData()},getColumns:function(){return e.getExportExcelColumns(e.getTableColumns())}})},i.prototype.renderSearchBarCollapseControl=function(){var e=this;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:this.state.expand,noMatch:function(){return react_1.default.createElement("a",{key:"expand",className:"".concat(exports.selectorPrefix,"-search-footer-item-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("展开")),react_1.default.createElement(icons_1.DownOutlined,null))}},function(){return react_1.default.createElement("a",{key:"hide",className:"".concat(exports.selectorPrefix,"-search-footer-item-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("收起")),react_1.default.createElement(icons_1.UpOutlined,null))})},i.prototype.renderSearchFormToolBar=function(){var e,t=this,n=this.props.isShowExpandSearch,n=[react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-search-footer-item"),type:"primary",key:"search",loading:this.showLoading(),icon:react_1.default.createElement(icons_1.SearchOutlined,null),onClick:function(){return t.search()}},adhere_util_intl_1.default.v("查询")),react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-search-footer-item"),key:"reset",onClick:this.onClear},adhere_util_intl_1.default.v("重置")),n&&this.renderSearchBarCollapseControl()].filter(function(e){return!!e}),n=this.renderSearchFormToolBarItems(n)||n;return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-search-form-tool-bar-default-panel")},null==(e=this.renderSearchFormToolBarDefaultPanel)?void 0:e.call(this)),!!n.length&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-search-form-tool-bar-items")},n.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(exports.selectorPrefix,"-search-form-tool-bar-item")},e)})))},i.prototype.renderSearchBarActions=function(){var e=this.renderSearchFooterItems([])||[];return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-search-footer-wrapper")},e.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(exports.selectorPrefix,"-search-footer-item")},e)}))},i.prototype.renderBody=function(){var n=this,e=this.props,t=e.antdTableProps,e=e.fixedHeaderAutoTable,r=this.state,o=r.columnSetting,a=void 0===o?[]:o,o=r.tableDensity,l=this.getTableColumns().map(function(e,t){return __assign(__assign({},a[t]),e)}).filter(function(e){return e.display}),r=(l.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),__assign(__assign({rowKey:this.getRowKey(),dataSource:this.getDataSource(),columns:l,onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection(),size:o,components:this.components,onRow:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.onTableRow.apply(n,__spreadArray([l],e,!1))}},null!=t?t:{}),{expandable:__assign(__assign({},(null!=t?t:{}).expandable),{expandedRowKeys:this.state.expandedRowKeys,onExpandedRowsChange:this.onExpandedRowsChange})}));return e&&(o=this.state.scrollY,t&&t.scroll?r.scroll.y=o:r.scroll={y:o}),this.tableRowComponentReducers=this.onTableRowComponentReducers(l),this.tableCellComponentReducers=this.onTableCellComponentReducers(l),react_1.default.createElement(antd_1.Table,__assign({},r))},i.prototype.renderInner=function(){var e,t=this.props.fixedTableSpaceBetween;return n.prototype.renderInner.call(this,this.tableWrapRef,(0,classnames_1.default)(((e={})["fixed-table-space-between"]=t,e)))},i.prototype.renderChildren=function(){return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-wrap")},n.prototype.render.call(this))},i.prototype.render=function(){return react_1.default.createElement(exports.SearchTableContext.Provider,{value:{context:this}},this.renderChildren())},i.displayName="SearchTable",i.NUMBER_GENERATOR_RULE_ALONE=Symbol(),i.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),i.ROW_SELECTION_NORMAL_MODE=Symbol(),i.ROW_SELECTION_CONTINUOUS_MODE=Symbol(),i}(Search_1.default));exports.defaultProps=__assign({antdTableProps:{},fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},Search_1.defaultProps),exports.propTypes=__assign({antdTableProps:prop_types_1.default.object,fixedHeaderAutoTable:prop_types_1.default.bool,fixedTableSpaceBetween:prop_types_1.default.bool},Search_1.propTypes),SearchTable.defaultProps=exports.defaultProps,SearchTable.propTypes=exports.propTypes,exports.default=SearchTable;
//# sourceMappingURL=SearchTable.js.map
