"use strict";var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=exports.SearchTableContext=exports.selectorPrefix=void 0,require("antd")),classnames_1=__importDefault(require("classnames")),lodash_clonedeep_1=__importDefault(require("lodash.clonedeep")),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),ColumnResizable_1=__importStar(require("./Extension/ColumnResizable")),ColumnSetting_1=__importDefault(require("./Extension/ColumnSetting")),TableCell_1=__importDefault(require("./Extension/TableComponents/TableCell")),TableRow_1=__importDefault(require("./Extension/TableComponents/TableRow")),TableDensitySetting_1=__importDefault(require("./Extension/TableDensitySetting")),Search_1=__importStar(require("./Search")),types_1=require("./types"),SearchTable=(exports.selectorPrefix="adhere-ui-searchtable",exports.SearchTableContext=(0,react_1.createContext)(null),function(t){function s(e){var o=t.call(this,e)||this;return o.tableWrapRef=(0,react_1.createRef)(),o.components={header:{cell:ColumnResizable_1.SearchTableResizableTitle},body:{row:TableRow_1.default,cell:TableCell_1.default}},o.columnResizable=new ColumnResizable_1.default,o.columnObserver=null,o.rowConfigReducers=[],o.cellConfigReducers=[],o.tableRowComponentReducers=[],o.tableCellComponentReducers=[],o.onTableChange=function(e,t,n){var r;o.setState(((r={})[o.getOrderFieldProp()]=n.field||o.getOrderFieldValue(),r[o.getOrderProp()]=n.order,r),function(){n.order&&(o.fetchData(),o.onSubTableChange(e,t,n))})},o.state={page:1,limit:o.getLimit(),expand:e.defaultExpandSearchCollapse,scrollY:0},Object.assign(o.state,{columnSetting:o.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),tableDensity:o.getTableDensity()}),o.onClear=o.onClear.bind(o),o}return __extends(s,t),s.prototype.componentWillReceiveProps=function(e){t.prototype.componentWillReceiveProps.call(this,e),this.columnSettingEffect(e)},s.prototype.componentDidUpdate=function(e,t,n){this.tableWrapRef.current&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e,t))},s.prototype.searchTableResizableEffectLayout=function(){this.columnObserver||(this.columnObserver=(0,ColumnResizable_1.SearchTableResizableObserver)(this))},s.prototype.fixedHeaderAutoTableEffectLayout=function(e,t){var n,r;this.props.fixedHeaderAutoTable&&(n=this.getData())&&n.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null==(t=(n=this.tableWrapRef.current).querySelector(".ant-table-header"))?void 0:t.offsetHeight)||0,r=(null==(r=n.querySelector(".ant-table-pagination"))?void 0:r.offsetHeight)||0,this.setState({scrollY:n.clientHeight-(t+(r?r+32:0))}))},s.prototype.columnSettingEffect=function(e){var t,n,r,o=this,a=this.state.columnSetting||[],l=this.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})});(null==a?void 0:a.length)!==l.length?this.setState({columnSetting:l}):(t=null==(t=null==a?void 0:a.map)?void 0:t.call(a,function(e){return e[o.getRowKey()]}),n=null==(n=null==l?void 0:l.map)?void 0:n.call(l,function(e){return e[o.getRowKey()]}),(null==t?void 0:t.toString())!==n.toString()&&(r=this.getRowKey()||"id",this.setState({columnSetting:null==l?void 0:l.map(function(t){var e=null==a?void 0:a.find(function(e){return e[r]===t[r]});return __assign(__assign({},t),{display:!e||e.display})})})))},s.prototype.onSearchPanelCollapseBefore=function(){},s.prototype.onSearchPanelCollapseAfter=function(){},s.prototype.sortOrder=function(e){return this.state&&this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},s.prototype.onCellConfigReducers=function(e){var n=this,r=e.rowIndex,t=e.column,o=e.record,a=e.columns;return this.cellConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:r,record:o,columns:a,column:e.value}),e},{value:t}).value},s.prototype.onRowConfigReducers=function(e){var n=this,r=e.rowIndex,o=e.record,a=e.columns;return this.rowConfigReducers.reduce(function(e,t){return e.value=t.call(n,{rowIndex:r,record:o,columns:a,rowConfig:e.value}),e},{value:{}}).value},s.prototype.getTableDensity=function(){return types_1.TableDensity.DEFAULT},s.prototype.getTableColumns=function(){var r,o,e,a,l=this,t=this.isShowNumber(),n=this.getTableNumberColumnWidth(),i=this.getColumns().filter(function(e){var t;return!("$hide"in e&&!e.$hide)&&(!("$authorized"in e)||(null==(t=null==e?void 0:e.$authorized)?void 0:t.call(e)))}).map(function(e,t){function r(e){var n=e;return null!=(n="$resizable"in e&&null!=e&&e.$resizable?l.columnResizable.searchTableResizableColumnItem(l,t,e):n)&&n.children&&Array.isArray(n.children)&&n.children.forEach(function(e,t){n.children[t]=r(e)}),n}var n={value:e};return n.value=r(e),n.value}).map(function(r){return __assign(__assign({},r),{onCell:function(e,t){var n=(0,lodash_clonedeep_1.default)(r);return{rowIndex:t,record:e,column:l.onCellConfigReducers({rowIndex:t,column:n,record:e,columns:i}),columns:i}}})});return t?(r=null!=(t=this.getNumberGeneratorRule())?t:s.NUMBER_GENERATOR_RULE_ALONE,e=(t=this.state).page,o=void 0===e?0:e,e=t.limit,a=void 0===e?10:e,[__assign(__assign({},this.getTableNumberColumnProps&&this.getTableNumberColumnProps()||{}),{title:adhere_util_intl_1.default.v("序号"),dataIndex:"_number",key:"_number",align:"center",width:null!=n?n:80,render:function(e,t,n){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:r===s.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return l.renderTableNumberColumn((o-1)*a+(n+1),{value:e,record:t,index:n})}},function(){return l.renderTableNumberColumn(n+1,{value:e,record:t,index:n})})}})].concat(i)):i},s.prototype.getTableRowComponentReducers=function(){return this.tableRowComponentReducers},s.prototype.getTableCellComponentReducers=function(){return this.tableCellComponentReducers},s.prototype.renderTableNumberColumn=function(e,t){return react_1.default.createElement("span",null,e=void 0===e?"":e)},s.prototype.renderColumnSetting=function(){var e=this,t=__spreadArray([],this.state.columnSetting,!0);return t.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),react_1.default.createElement(ColumnSetting_1.default,{columns:t,onShowColumns:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:t})})}})},onReset:function(){e.setState(function(){return{columnSetting:e.getTableColumns().map(function(e,t){return __assign(__assign({},e),{display:!0,sort:t})})}})},onDisplayColumn:function(t,n){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:e.key===t.key?n:e.display})})}})},onSortEnd:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{sort:t.get(e.key)})})}})}})},s.prototype.renderTableDensitySetting=function(){var t=this;return react_1.default.createElement(TableDensitySetting_1.default,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},s.prototype.renderSearchToolBar=function(){var e=this,t=this.props.isShowExpandSearch,n=[react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),type:"primary",key:"search",icon:react_1.default.createElement("i",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),onClick:function(){e.setState({page:1},function(){e.onSearch()})}},adhere_util_intl_1.default.v("查询")),react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),key:"reset",onClick:this.onClear},adhere_util_intl_1.default.v("重置"))],t=(t&&n.push(react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:this.state.expand,noMatch:function(){return react_1.default.createElement("a",{key:"expand",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("展开")),react_1.default.createElement("i",{className:"iconfont iconup"}))}},function(){return react_1.default.createElement("a",{key:"hide",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("关闭")),react_1.default.createElement("i",{className:"iconfont icondownarrow"}))})),this.renderSearchFooterItems(n)||__spreadArray([],n,!0));return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-searchfooterwrapper")},t.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(exports.selectorPrefix,"-searchfooteritem")},e)}))},s.prototype.renderBody=function(){var n=this,e=this.props,t=e.antdTableProps,e=e.fixedHeaderAutoTable,r=this.state,o=r.columnSetting,a=void 0===o?[]:o,o=r.tableDensity,l=this.getTableColumns().map(function(e,t){return __assign(__assign({},a[t]),e)}).filter(function(e){return e.display}),r=(l.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:l,onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection(),size:o,components:this.components,onRow:function(e,t){return{record:e,rowIndex:t,columns:l,rowKey:n.getRowKey(),rowConfig:n.onRowConfigReducers({rowIndex:Number(t),record:e,columns:l})}}},t||{}));return e&&(o=this.state.scrollY,t&&t.scroll?r.scroll.y=o:r.scroll={y:o}),this.tableRowComponentReducers=this.onTableRowComponentReducers(l),this.tableCellComponentReducers=this.onTableCellComponentReducers(l),react_1.default.createElement(antd_1.Table,__assign({},r))},s.prototype.renderInner=function(){var e=this.props.fixedTableSpaceBetween;return t.prototype.renderInner.call(this,this.tableWrapRef,e?"fixedtablespacebetween":"")},s.prototype.renderChildren=function(){return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-wrap")},t.prototype.render.call(this))},s.prototype.render=function(){return react_1.default.createElement(exports.SearchTableContext.Provider,{value:{context:this}},this.renderChildren())},s.NUMBER_GENERATOR_RULE_ALONE=Symbol(),s.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),s.ROW_SELECTION_NORMAL_MODE=Symbol(),s.ROW_SELECTION_CONTINUOUS_MODE=Symbol(),s}(Search_1.default));exports.defaultProps=__assign({antdTableProps:{},fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},Search_1.defaultProps),exports.propTypes=__assign({antdTableProps:prop_types_1.default.object,fixedHeaderAutoTable:prop_types_1.default.bool,fixedTableSpaceBetween:prop_types_1.default.bool},Search_1.propTypes),SearchTable.defaultProps=exports.defaultProps,SearchTable.propTypes=exports.propTypes,exports.default=SearchTable;
//# sourceMappingURL=SearchTable.js.map
