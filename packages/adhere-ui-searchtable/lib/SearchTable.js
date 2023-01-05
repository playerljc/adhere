"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.reduce.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.array.sort.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.symbol.description.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=exports.SearchTableContext=exports.selectorPrefix=void 0;var tslib_1=require("tslib"),antd_1=require("antd"),classnames_1=tslib_1.__importDefault(require("classnames")),lodash_clonedeep_1=tslib_1.__importDefault(require("lodash.clonedeep")),prop_types_1=tslib_1.__importDefault(require("prop-types")),react_1=tslib_1.__importStar(require("react")),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_flexlayout_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-flexlayout")),adhere_ui_suspense_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-suspense")),adhere_util_intl_1=tslib_1.__importDefault(require("@baifendian/adhere-util-intl")),ColumnResizable_1=tslib_1.__importStar(require("./Extension/ColumnResizable")),ColumnSetting_1=tslib_1.__importDefault(require("./Extension/ColumnSetting")),TableCell_1=tslib_1.__importDefault(require("./Extension/TableComponents/TableCell")),TableRow_1=tslib_1.__importDefault(require("./Extension/TableComponents/TableRow")),TableDensitySetting_1=tslib_1.__importDefault(require("./Extension/TableDensitySetting")),types_1=require("./types"),Fixed=(exports.selectorPrefix="adhere-ui-searchtable",adhere_ui_flexlayout_1.default.Fixed),Auto=adhere_ui_flexlayout_1.default.Auto,SearchTable=(exports.SearchTableContext=(0,react_1.createContext)(null),function(t){function s(e){var n=t.call(this,e)||this;return n.tableWrapRef=(0,react_1.createRef)(),n.components={header:{cell:ColumnResizable_1.SearchTableResizableTitle},body:{row:TableRow_1.default,cell:TableCell_1.default}},n.columnResizable=new ColumnResizable_1.default,n.columnObserver=null,n.rowConfigReducers=[],n.cellConfigReducers=[],n.tableRowComponentReducers=[],n.tableCellComponentReducers=[],n.onTableChange=function(e,t,r){var a;n.setState(((a={})[n.getOrderFieldProp()]=r.field||n.getOrderFieldValue(),a[n.getOrderProp()]=r.order,a),function(){r.order&&(n.fetchData(),n.onSubTableChange(e,t,r))})},n.state={page:1,limit:n.getLimit(),expand:e.defaultExpandSearchCollapse,scrollY:0},Object.assign(n.state,{columnSetting:n.getTableColumns().map(function(e,t){return tslib_1.__assign(tslib_1.__assign({},e),{sort:t,display:!0})}),tableDensity:n.getTableDensity()}),n.onClear=n.onClear.bind(n),n}return tslib_1.__extends(s,t),s.prototype.componentWillReceiveProps=function(e){t.prototype.componentWillReceiveProps.call(this,e),this.columnSettingEffect(e)},s.prototype.componentDidUpdate=function(e,t,r){this.tableWrapRef.current&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e,t))},s.prototype.searchTableResizableEffectLayout=function(){this.columnObserver||(this.columnObserver=(0,ColumnResizable_1.SearchTableResizableObserver)(this))},s.prototype.fixedHeaderAutoTableEffectLayout=function(e,t){var r,a;this.props.fixedHeaderAutoTable&&(r=this.getData())&&r.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null==(t=(r=this.tableWrapRef.current).querySelector(".ant-table-header"))?void 0:t.offsetHeight)||0,a=(null==(a=r.querySelector(".ant-table-pagination"))?void 0:a.offsetHeight)||0,this.setState({scrollY:r.clientHeight-(t+(a?a+32:0))}))},s.prototype.columnSettingEffect=function(e){var t,r,a,n=this,o=this.state.columnSetting||[],l=this.getTableColumns().map(function(e,t){return tslib_1.__assign(tslib_1.__assign({},e),{sort:t,display:!0})});(null==o?void 0:o.length)!==l.length?this.setState({columnSetting:l}):(t=null==(t=null==o?void 0:o.map)?void 0:t.call(o,function(e){return e[n.getRowKey()]}),r=null==(r=null==l?void 0:l.map)?void 0:r.call(l,function(e){return e[n.getRowKey()]}),(null==t?void 0:t.toString())!==r.toString()&&(a=this.getRowKey()||"id",this.setState({columnSetting:null==l?void 0:l.map(function(t){var e=null==o?void 0:o.find(function(e){return e[a]===t[a]});return tslib_1.__assign(tslib_1.__assign({},t),{display:!e||e.display})})})))},s.prototype.onSearchPanelCollapseBefore=function(){},s.prototype.onSearchPanelCollapseAfter=function(){},s.prototype.onClear=function(){var t=this;return new Promise(function(e){t.setState({page:1,limit:t.getLimit()},function(){t.clear().then(function(){t.fetchData(),e()})})})},s.prototype.sortOrder=function(e){return this.state&&this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},s.prototype.onCellConfigReducers=function(e){var r=this,a=e.rowIndex,t=e.column,n=e.record,o=e.columns;return this.cellConfigReducers.reduce(function(e,t){return e.value=t.call(r,{rowIndex:a,record:n,columns:o,column:e.value}),e},{value:t}).value},s.prototype.onRowConfigReducers=function(e){var r=this,a=e.rowIndex,n=e.record,o=e.columns;return this.rowConfigReducers.reduce(function(e,t){return e.value=t.call(r,{rowIndex:a,record:n,columns:o,rowConfig:e.value}),e},{value:{}}).value},s.prototype.getLimit=function(){return 10},s.prototype.getPagination=function(){var r=this;return{onChange:function(e,t){r.setState({page:e,limit:t},function(){r.fetchData()})},onShowSizeChange:function(e,t){r.setState({page:e,limit:t},function(){r.fetchData()})},showTotal:function(e){return adhere_util_intl_1.default.v("当前 {page}-{pageSize}/共 {total}条",{page:r.state.page,pageSize:r.state.limit,total:e})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,showQuickJumper:!0}},s.prototype.getTableDensity=function(){return types_1.TableDensity.DEFAULT},s.prototype.getTableColumns=function(){var a,n,e,o,l=this,t=this.isShowNumber(),r=this.getTableNumberColumnWidth(),i=this.getColumns().filter(function(e){var t;return!("$hide"in e&&!e.$hide)&&(!("$authorized"in e)||(null==(t=null==e?void 0:e.$authorized)?void 0:t.call(e)))}).map(function(e,t){var r={value:e};return r.value=function r(e){var a=e;return null!=(a="$resizable"in e&&null!=e&&e.$resizable?l.columnResizable.searchTableResizableColumnItem(l,t,e):a)&&a.children&&Array.isArray(a.children)&&a.children.forEach(function(e,t){a.children[t]=r(e)}),a}(e),r.value}).map(function(a,e){return tslib_1.__assign(tslib_1.__assign({},a),{onCell:function(e,t){var r=(0,lodash_clonedeep_1.default)(a);return{rowIndex:t,record:e,column:l.onCellConfigReducers({rowIndex:t,column:r,record:e,columns:i}),columns:i}}})});return t?(a=null!=(t=this.getNumberGeneratorRule())?t:s.NUMBER_GENERATOR_RULE_ALONE,e=(t=this.state).page,n=void 0===e?0:e,e=t.limit,o=void 0===e?10:e,[tslib_1.__assign(tslib_1.__assign({},this.getTableNumberColumnProps&&this.getTableNumberColumnProps()||{}),{title:adhere_util_intl_1.default.v("序号"),dataIndex:"_number",key:"_number",align:"center",width:null!=r?r:80,render:function(e,t,r){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:a===s.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return l.renderTableNumberColumn((n-1)*o+(r+1),{value:e,record:t,index:r})}},function(){return l.renderTableNumberColumn(r+1,{value:e,record:t,index:r})})}})].concat(i)):i},s.prototype.getTableRowComponentReducers=function(){return this.tableRowComponentReducers},s.prototype.getTableCellComponentReducers=function(){return this.tableCellComponentReducers},s.prototype.renderTableNumberColumn=function(e,t){return react_1.default.createElement("span",null,e=void 0===e?"":e)},s.prototype.renderColumnSetting=function(){var e=this,t=tslib_1.__spreadArray([],this.state.columnSetting,!0);return t.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),react_1.default.createElement(ColumnSetting_1.default,{columns:t,onShowColumns:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return tslib_1.__assign(tslib_1.__assign({},e),{display:t})})}})},onReset:function(){e.setState(function(){return{columnSetting:e.getTableColumns().map(function(e,t){return tslib_1.__assign(tslib_1.__assign({},e),{display:!0,sort:t})})}})},onDisplayColumn:function(t,r){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return tslib_1.__assign(tslib_1.__assign({},e),{display:e.key===t.key?r:e.display})})}})},onSortEnd:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return tslib_1.__assign(tslib_1.__assign({},e),{sort:t.get(e.key)})})}})}})},s.prototype.renderTableDensitySetting=function(){var t=this;return react_1.default.createElement(TableDensitySetting_1.default,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},s.prototype.renderSearchFooter=function(){var e=this,t=this.props.isShowExpandSearch,r=[react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),type:"primary",key:"search",icon:react_1.default.createElement("i",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),onClick:function(){e.setState({page:1},function(){e.onSearch()})}},adhere_util_intl_1.default.v("查询")),react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),key:"reset",onClick:this.onClear},adhere_util_intl_1.default.v("重置"))],t=(t&&r.push(react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:this.state.expand,noMatch:function(){return react_1.default.createElement("a",{key:"expand",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("展开")),react_1.default.createElement("i",{className:"iconfont iconup"}))}},function(){return react_1.default.createElement("a",{key:"hide",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("关闭")),react_1.default.createElement("i",{className:"iconfont icondownarrow"}))})),this.renderSearchFooterItems(r)||tslib_1.__spreadArray([],r,!0));return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-searchfooterwrapper")},t.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(exports.selectorPrefix,"-searchfooteritem")},e)}))},s.prototype.renderTable=function(){var r=this,e=this.props,t=e.antdTableProps,e=e.fixedHeaderAutoTable,a=this.state,n=a.columnSetting,o=void 0===n?[]:n,n=a.tableDensity,l=this.getTableColumns().map(function(e,t){return tslib_1.__assign(tslib_1.__assign({},o[t]),e)}).filter(function(e){return e.display}),a=(l.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),tslib_1.__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:l,onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection(),size:n,components:this.components,onRow:function(e,t){return{record:e,rowIndex:t,columns:l,rowKey:r.getRowKey(),rowConfig:r.onRowConfigReducers({rowIndex:Number(t),record:e,columns:l})}}},t||{}));return e&&(n=this.state.scrollY,t&&t.scroll?a.scroll.y=n:a.scroll={y:n}),this.tableRowComponentReducers=this.onTableRowComponentReducers(l),this.tableCellComponentReducers=this.onTableCellComponentReducers(l),react_1.default.createElement(antd_1.Table,tslib_1.__assign({},a))},s.prototype.renderInner=function(){var e=this,t=this.props,r=t.className,a=t.style,n=t.tableClassName,o=t.tableStyle,l=t.searchClassName,i=t.searchStyle,s=t.fitSearch,u=t.fitTable,c=t.autoFixed,t=t.fixedTableSpaceBetween,d=this.state.expand,d=void 0!==d&&d;return react_1.default.createElement(adhere_ui_flexlayout_1.default,{direction:"vertical",className:(0,classnames_1.default)(exports.selectorPrefix,t?"fixedtablespacebetween":"",r||""),style:tslib_1.__assign({},a||{})},react_1.default.createElement(Fixed,{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-searchwrapper"),l||""),style:tslib_1.__assign({},i||{}),fit:s},react_1.default.createElement(adhere_ui_flexlayout_1.default,{direction:"vertical"},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!this.renderSearchFormBefore},function(){return react_1.default.createElement(Fixed,null,e.renderSearchFormBefore())}),react_1.default.createElement(Fixed,null,react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:d,noMatch:function(){return null}},function(){return e.renderSearchForm()})),react_1.default.createElement(Fixed,null,this.renderSearchFooter()),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!this.renderSearchFormAfter},function(){return react_1.default.createElement(Fixed,null,e.renderSearchFormAfter())}))),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!this.renderTableHeader},function(){return react_1.default.createElement(Fixed,null,e.renderTableHeader())}),react_1.default.createElement(Auto,{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-autowrapper"),n||"",c?"autofixed":""),style:tslib_1.__assign({},o||{}),fit:u,autoFixed:c},react_1.default.createElement("div",{ref:this.tableWrapRef,className:"".concat(exports.selectorPrefix,"-tablewrapper")},this.renderTable())),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!this.renderTableFooter},function(){return react_1.default.createElement(Fixed,null,e.renderTableFooter())}))},s.prototype.renderChildren=function(){return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-wrap")},t.prototype.render.call(this))},s.prototype.render=function(){return react_1.default.createElement(exports.SearchTableContext.Provider,{value:{context:this}},this.renderChildren())},s.NUMBER_GENERATOR_RULE_ALONE=Symbol(),s.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),s.ROW_SELECTION_NORMAL_MODE=Symbol(),s.ROW_SELECTION_CONTINUOUS_MODE=Symbol(),s}(adhere_ui_suspense_1.default));exports.defaultProps={className:"",style:{},tableClassName:"",tableStyle:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,antdTableProps:{},isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitSearch:!0,fitTable:!0,autoFixed:!0,fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},exports.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,tableClassName:prop_types_1.default.string,tableStyle:prop_types_1.default.object,searchClassName:prop_types_1.default.string,searchStyle:prop_types_1.default.object,reset:prop_types_1.default.bool,firstLoading:prop_types_1.default.node,antdTableProps:prop_types_1.default.object,isShowExpandSearch:prop_types_1.default.bool,defaultExpandSearchCollapse:prop_types_1.default.bool,fitSearch:prop_types_1.default.bool,fitTable:prop_types_1.default.bool,autoFixed:prop_types_1.default.bool,fixedHeaderAutoTable:prop_types_1.default.bool,fixedTableSpaceBetween:prop_types_1.default.bool},SearchTable.defaultProps=exports.defaultProps,SearchTable.propTypes=exports.propTypes,exports.default=SearchTable;
//# sourceMappingURL=SearchTable.js.map
