"use strict";var __extends=function(){var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=exports.SearchTableContext=exports.selectorPrefix=void 0,require("antd")),classnames_1=__importDefault(require("classnames")),lodash_clonedeep_1=__importDefault(require("lodash.clonedeep")),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),ColumnResizable_1=__importStar(require("./Extension/ColumnResizable")),ColumnSetting_1=__importDefault(require("./Extension/ColumnSetting")),ExportExcel_1=__importDefault(require("./Extension/ExportExcel")),TableCell_1=__importDefault(require("./Extension/TableComponents/TableCell")),TableRow_1=__importDefault(require("./Extension/TableComponents/TableRow")),TableDensitySetting_1=__importDefault(require("./Extension/TableDensitySetting")),Search_1=__importStar(require("./Search")),types_1=require("./types"),SearchTable=(exports.selectorPrefix="adhere-ui-searchtable",exports.SearchTableContext=(0,react_1.createContext)(null),function(n){function i(e){var l=this;return(l=n.call(this,e)||this).tableWrapRef=(0,react_1.createRef)(),l.components={header:{cell:ColumnResizable_1.SearchTableResizableTitle},body:{row:TableRow_1.default,cell:TableCell_1.default}},l.columnResizable=new ColumnResizable_1.default,l.columnObserver=null,l.rowConfigReducers=[],l.cellConfigReducers=[],l.tableRowComponentReducers=[],l.tableCellComponentReducers=[],l.onTableChange=function(e,t,n){var r,o=l.state.page,a=l.state.limit;l.setState(((r={page:e.current,limit:e.pageSize})[l.getOrderFieldProp()]=n.field||l.getOrderFieldValue(),r[l.getOrderProp()]=n.order,r),function(){!n.order&&l.state.page===o&&l.state.limit===a||l.fetchData(),l.onSubTableChange(e,t,n)})},l.state={page:1,limit:l.getLimit(),expand:e.defaultExpandSearchCollapse,expandedRowKeys:(null==(e=null==(e=e.antdTableProps)?void 0:e.expandable)?void 0:e.expandedRowKeys)||[],scrollY:0},Object.assign(l.state,{columnSetting:l.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),tableDensity:l.getTableDensity()}),l.onClear=l.onClear.bind(l),l.onExpandedRowsChange=l.onExpandedRowsChange.bind(l),l.onBodyKeyup=l.onBodyKeyup.bind(l),l}return __extends(i,n),i.prototype.componentDidMount=function(){var e;null!=(e=n.prototype.componentDidMount)&&e.call(this),document.body.addEventListener("keyup",this.onBodyKeyup)},i.prototype.componentWillUnmount=function(){var e;null!=(e=n.prototype.componentWillUnmount)&&e.call(this),document.body.removeEventListener("keyup",this.onBodyKeyup)},i.prototype.componentWillReceiveProps=function(e){var t;n.prototype.componentWillReceiveProps.call(this,e),JSON.stringify(this.state.expandedRowKeys)!==JSON.stringify((null==(t=null==(t=e.antdTableProps)?void 0:t.expandable)?void 0:t.expandedRowKeys)||[])&&this.setState({expandedRowKeys:null==(t=null==(t=e.antdTableProps)?void 0:t.expandable)?void 0:t.expandedRowKeys}),this.columnSettingEffect(e)},i.prototype.componentDidUpdate=function(e,t,n){this.tableWrapRef.current&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e,t))},i.prototype.searchTableResizableEffectLayout=function(){this.columnObserver||(this.columnObserver=(0,ColumnResizable_1.SearchTableResizableObserver)(this))},i.prototype.fixedHeaderAutoTableEffectLayout=function(e,t){var n,r;this.props.fixedHeaderAutoTable&&(n=this.getData())&&n.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null==(t=(n=this.tableWrapRef.current).querySelector(".ant-table-header"))?void 0:t.offsetHeight)||0,r=(null==(r=n.querySelector(".ant-table-pagination"))?void 0:r.offsetHeight)||0,this.setState({scrollY:n.clientHeight-(t+(r?r+32:0))}))},i.prototype.columnSettingEffect=function(e){var t,n,r,o=this,a=this.state.columnSetting||[],l=this.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})});(null==a?void 0:a.length)!==l.length?this.setState({columnSetting:l}):(t=null==(t=null==a?void 0:a.map)?void 0:t.call(a,function(e){return e[o.getRowKey()]}),n=null==(n=null==l?void 0:l.map)?void 0:n.call(l,function(e){return e[o.getRowKey()]}),(null==t?void 0:t.toString())!==n.toString()&&(r=this.getRowKey()||"id",this.setState({columnSetting:null==l?void 0:l.map(function(t){var e=null==a?void 0:a.find(function(e){return e[r]===t[r]});return __assign(__assign({},t),{display:!e||e.display})})})))},i.prototype.onBodyKeyup=function(e){13===e.keyCode&&document.activeElement&&null!=(e=this.searchFormRef.current)&&e.contains(document.activeElement)&&this.search()},i.prototype.onSearchPanelCollapseBefore=function(){},i.prototype.onSearchPanelCollapseAfter=function(){},i.prototype.sortOrder=function(e){return this.state&&this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},i.prototype.onCellConfigReducers=function(e){var n=this,r=e.rowIndex,t=e.column,o=e.record,a=e.columns;return this.cellConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:r,record:o,columns:a,column:e.value}),e},{value:t}).value},i.prototype.onRowConfigReducers=function(e){var n=this,r=e.rowIndex,o=e.record,a=e.columns;return this.rowConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:r,record:o,columns:a,rowConfig:e.value}),e},{value:{}}).value},i.prototype.onExpandedRowsChange=function(r){var o=this;return new Promise(function(e){var t,n;o.setState({expandedRowKeys:r},function(){e()}),null!=(t=null==(t=null!=(t=o.props.antdTableProps)?t:{})?void 0:t.expandable)&&t.onExpandedRowsChange&&null!=(n=null==(t=null==(t=o.props.antdTableProps)?void 0:t.expandable)?void 0:t.onExpandedRowsChange)&&n.call(t,r)})},i.prototype.search=function(){var t=this;return new Promise(function(e){t.setState({page:1},function(){t.onSearch().then(function(){return e()})})})},i.prototype.getTableDensity=function(){return types_1.TableDensity.DEFAULT},i.prototype.getTableColumnsAll=function(){var o=this,e=this.isShowNumber(),a=this.getColumns().map(function(e,t){var n={value:e};return n.value=function n(e){var r=e;return"$resizable"in e&&null!=e&&e.$resizable?r=o.columnResizable.searchTableResizableColumnItem(o,t,e):r.onHeaderCell=function(){return{column:e}},null!=r&&r.children&&Array.isArray(r.children)&&r.children.forEach(function(e,t){r.children[t]=n(e)}),r}(e),n.value}).map(function(r){return __assign(__assign({},r),{onCell:function(e,t){var n=(0,lodash_clonedeep_1.default)(r);return{rowIndex:t,record:e,column:o.onCellConfigReducers({rowIndex:t,column:n,record:e,columns:a}),columns:a}}})});return e?__spreadArray([this.getTableColumnConfig()],a||[],!0):a},i.prototype.getTableColumns=function(){return this.getTableColumnsAll().filter(function(e){var t;return!("$hide"in e&&e.$hide)&&(!("$authorized"in e)||(null==(t=null==e?void 0:e.$authorized)?void 0:t.call(e)))})},i.prototype.getTableColumnConfig=function(){var r=this,e=this.getTableNumberColumnWidth(),o=null!=(t=this.getNumberGeneratorRule())?t:i.NUMBER_GENERATOR_RULE_ALONE,t=this.state,n=t.page,a=void 0===n?1:n,n=t.limit,l=void 0===n?this.getLimit():n;return __assign(__assign({},this.getTableNumberColumnProps&&null!=(t=this.getTableNumberColumnProps())?t:{}),{title:adhere_util_intl_1.default.v("序号"),dataIndex:"_number",key:"_number",align:"center",width:e,render:function(e,t,n){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:o===i.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return r.renderTableNumberColumn((a-1)*l+(n+1),{value:e,record:t,index:n})}},function(){return r.renderTableNumberColumn(n+1,{value:e,record:t,index:n})})}})},i.prototype.getTableRowComponentReducers=function(){return this.tableRowComponentReducers},i.prototype.getTableCellComponentReducers=function(){return this.tableCellComponentReducers},i.prototype.renderTableNumberColumn=function(e,t){return react_1.default.createElement("span",null,e=void 0===e?"":e)},i.prototype.renderColumnSetting=function(){var e=this,t=__spreadArray([],this.state.columnSetting,!0);return t.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),react_1.default.createElement(ColumnSetting_1.default,{columns:t,onShowColumns:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:t})})}})},onReset:function(){e.setState(function(){return{columnSetting:e.getTableColumns().map(function(e,t){return __assign(__assign({},e),{display:!0,sort:t})})}})},onDisplayColumn:function(t,n){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:e.key===t.key?n:e.display})})}})},onSortEnd:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{sort:t.get(e.key)})})}})}})},i.prototype.getExportExcelColumns=function(e){var n=this;return e.filter(function(e){var t,e=e.dataIndex;return!["_number",(null==(t=null==n?void 0:n.getOptionsColumnDataIndex)?void 0:t.call(n))||"_options"].includes(e)}).map(function(e){return"children"in e&&Array.isArray(e.children)&&e.children.length?__assign(__assign({},e),{children:n.getExportExcelColumns(e.children||[])}):e})},i.prototype.getExportExcelData=function(){return this.getData()},i.prototype.renderExportExcel=function(){var e=this;return react_1.default.createElement(ExportExcel_1.default,{title:this.props.title,getDataSource:function(){return e.getExportExcelData()},getColumns:function(){return e.getExportExcelColumns(e.getTableColumns())}})},i.prototype.renderTableDensitySetting=function(){var t=this;return react_1.default.createElement(TableDensitySetting_1.default,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},i.prototype.renderSearchToolBar=function(){var e=this,t=this.props.isShowExpandSearch,n=[react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),type:"primary",key:"search",icon:react_1.default.createElement("i",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),onClick:function(){return e.search()}},adhere_util_intl_1.default.v("查询")),react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),key:"reset",onClick:this.onClear},adhere_util_intl_1.default.v("重置"))],t=(t&&n.push(react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:this.state.expand,noMatch:function(){return react_1.default.createElement("a",{key:"expand",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("展开")),react_1.default.createElement("i",{className:"iconfont iconup"}))}},function(){return react_1.default.createElement("a",{key:"hide",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("关闭")),react_1.default.createElement("i",{className:"iconfont icondownarrow"}))})),this.renderSearchFooterItems(n)||__spreadArray([],n,!0));return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-searchfooterwrapper")},t.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(exports.selectorPrefix,"-searchfooteritem")},e)}))},i.prototype.renderBody=function(){var n=this,e=this.props,t=e.antdTableProps,e=e.fixedHeaderAutoTable,r=this.state,o=r.columnSetting,a=void 0===o?[]:o,o=r.tableDensity,l=this.getTableColumns().map(function(e,t){return __assign(__assign({},a[t]),e)}).filter(function(e){return e.display}),r=(l.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),__assign(__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:l,onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection(),size:o,components:this.components,onRow:function(e,t){return{record:e,rowIndex:t,columns:l,rowKey:n.getRowKey(),rowConfig:n.onRowConfigReducers({rowIndex:Number(t),record:e,columns:l})}}},null!=t?t:{}),{expandable:__assign(__assign({},(null!=t?t:{}).expandable),{expandedRowKeys:this.state.expandedRowKeys,onExpandedRowsChange:this.onExpandedRowsChange})}));return e&&(o=this.state.scrollY,t&&t.scroll?r.scroll.y=o:r.scroll={y:o}),this.tableRowComponentReducers=this.onTableRowComponentReducers(l),this.tableCellComponentReducers=this.onTableCellComponentReducers(l),react_1.default.createElement(antd_1.Table,__assign({},r))},i.prototype.renderInner=function(){var e,t=this.props.fixedTableSpaceBetween;return n.prototype.renderInner.call(this,this.tableWrapRef,(0,classnames_1.default)(((e={}).fixedtablespacebetween=t,e)))},i.prototype.renderChildren=function(){return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-wrap")},n.prototype.render.call(this))},i.prototype.render=function(){return react_1.default.createElement(exports.SearchTableContext.Provider,{value:{context:this}},this.renderChildren())},i.NUMBER_GENERATOR_RULE_ALONE=Symbol(),i.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),i.ROW_SELECTION_NORMAL_MODE=Symbol(),i.ROW_SELECTION_CONTINUOUS_MODE=Symbol(),i}(Search_1.default));exports.defaultProps=__assign({antdTableProps:{},fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},Search_1.defaultProps),exports.propTypes=__assign({antdTableProps:prop_types_1.default.object,fixedHeaderAutoTable:prop_types_1.default.bool,fixedTableSpaceBetween:prop_types_1.default.bool},Search_1.propTypes),SearchTable.defaultProps=exports.defaultProps,SearchTable.propTypes=exports.propTypes,exports.default=SearchTable;
//# sourceMappingURL=SearchTable.js.map
