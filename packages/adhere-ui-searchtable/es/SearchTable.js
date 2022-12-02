import _Table from"antd/es/table";import _Button from"antd/es/button";import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.sort.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import{__assign,__extends,__spreadArray}from"tslib";import classNames from"classnames";import PropTypes from"prop-types";import React,{createRef}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Suspense from"@baifendian/adhere-ui-suspense";import Intl from"@baifendian/adhere-util-intl";import ColumnResizable,{SearchTableResizableObserver,SearchTableResizableTitle}from"./Extension/ColumnResizable";import ColumnSetting from"./Extension/ColumnSetting";import TableDensitySetting from"./Extension/TableDensitySetting";import{TableDensity}from"./types";var selectorPrefix="adhere-ui-searchtable",Fixed=FlexLayout.Fixed,Auto=FlexLayout.Auto,SearchTable=function(t){function l(e){var r=t.call(this,e)||this;return r.tableWrapRef=createRef(),r.components={header:{cell:SearchTableResizableTitle}},r.columnResizable=new ColumnResizable,r.columnObserver=null,r.onTableChange=function(e,t,n){var a;r.setState(((a={})[r.getOrderFieldProp()]=n.field||r.getOrderFieldValue(),a[r.getOrderProp()]=n.order||r.getOrderPropValue(),a),function(){n.order&&(r.fetchData(),r.onSubTableChange(e,t,n))})},r.state={page:1,limit:r.getLimit(),expand:e.defaultExpandSearchCollapse,scrollY:0},Object.assign(r.state,{columnSetting:r.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),tableDensity:r.getTableDensity()}),r.onClear=r.onClear.bind(r),r}return __extends(l,t),l.prototype.componentWillReceiveProps=function(e){t.prototype.componentWillReceiveProps.call(this,e),this.columnSettingEffect(e)},l.prototype.componentDidUpdate=function(e,t,n){this.tableWrapRef.current&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e,t))},l.prototype.searchTableResizableEffectLayout=function(){this.columnObserver||(this.columnObserver=SearchTableResizableObserver(this))},l.prototype.fixedHeaderAutoTableEffectLayout=function(e,t){var n,a;this.props.fixedHeaderAutoTable&&(n=this.getData())&&n.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null==(t=(n=this.tableWrapRef.current).querySelector(".ant-table-header"))?void 0:t.offsetHeight)||0,a=(null==(a=n.querySelector(".ant-table-pagination"))?void 0:a.offsetHeight)||0,this.setState({scrollY:n.clientHeight-(t+(a?a+32:0))}))},l.prototype.columnSettingEffect=function(e){var t,n,a,r=this,o=this.state.columnSetting||[],i=this.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})});(null==o?void 0:o.length)!==i.length?this.setState({columnSetting:i}):(t=null==(t=null==o?void 0:o.map)?void 0:t.call(o,function(e){return e[r.getRowKey()]}),n=null==(n=null==i?void 0:i.map)?void 0:n.call(i,function(e){return e[r.getRowKey()]}),(null==t?void 0:t.toString())!==n.toString()&&(a=this.getRowKey()||"id",this.setState({columnSetting:null==i?void 0:i.map(function(t){var e=null==o?void 0:o.find(function(e){return e[a]===t[a]});return __assign(__assign({},t),{display:!e||e.display})})})))},l.prototype.onSearchPanelCollapseBefore=function(){},l.prototype.onSearchPanelCollapseAfter=function(){},l.prototype.onClear=function(){var t=this;return new Promise(function(e){t.setState({page:1,limit:t.getLimit()},function(){t.clear().then(function(){t.fetchData(),e()})})})},l.prototype.sortOrder=function(e){return this.state&&this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},l.prototype.getLimit=function(){return 10},l.prototype.getPagination=function(){var n=this;return{onChange:function(e,t){n.setState({page:e,limit:t},function(){n.fetchData()})},onShowSizeChange:function(e,t){n.setState({page:e,limit:t},function(){n.fetchData()})},showTotal:function(e){return Intl.v("当前 {page}-{pageSize}/共 {total}条",{page:n.state.page,pageSize:n.state.limit,total:e})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,showQuickJumper:!0}},l.prototype.getTableDensity=function(){return TableDensity.DEFAULT},l.prototype.getTableColumns=function(){var a,r,e,o,i=this,t=this.isShowNumber(),n=this.getTableNumberColumnWidth(),s=this.getColumns().filter(function(e){var t;return!("$hide"in e&&!e.$hide)&&(!("$authorized"in e)||(null==(t=null==e?void 0:e.$authorized)?void 0:t.call(e)))}).map(function(e,t){return"$resizable"in e&&null!=e&&e.$resizable?i.columnResizable.searchTableResizableColumnItem(i,t,e):e});return t?(a=null!=(t=this.getNumberGeneratorRule())?t:l.NUMBER_GENERATOR_RULE_ALONE,e=(t=this.state).page,r=void 0===e?0:e,e=t.limit,o=void 0===e?10:e,[__assign(__assign({},this.getTableNumberColumnProps&&this.getTableNumberColumnProps()||{}),{title:Intl.v("序号"),dataIndex:"_number",key:"_number",align:"center",width:null!=n?n:80,render:function(e,t,n){return React.createElement(ConditionalRender,{conditional:a===l.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return i.renderTableNumberColumn((r-1)*o+(n+1),{value:e,record:t,index:n})}},function(){return i.renderTableNumberColumn(n+1,{value:e,record:t,index:n})})}})].concat(s)):s},l.prototype.renderTableNumberColumn=function(e,t){return React.createElement("span",null,e=void 0===e?"":e)},l.prototype.renderColumnSetting=function(){var e=this,t=__spreadArray([],this.state.columnSetting,!0);return t.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),React.createElement(ColumnSetting,{columns:t,onShowColumns:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:t})})}})},onReset:function(){e.setState(function(){return{columnSetting:e.getTableColumns().map(function(e,t){return __assign(__assign({},e),{display:!0,sort:t})})}})},onDisplayColumn:function(t,n){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{display:e.key===t.key?n:e.display})})}})},onSortEnd:function(t){e.setState(function(e){return{columnSetting:null==(e=e.columnSetting||[])?void 0:e.map(function(e){return __assign(__assign({},e),{sort:t.get(e.key)})})}})}})},l.prototype.renderTableDensitySetting=function(){var t=this;return React.createElement(TableDensitySetting,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},l.prototype.renderSearchFooter=function(){var e=this,t=this.props.isShowExpandSearch,n=[React.createElement(_Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),type:"primary",key:"search",icon:React.createElement("i",{className:classNames("".concat(selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),onClick:function(){e.setState({page:1},function(){e.onSearch()})}},Intl.v("查询")),React.createElement(_Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),key:"reset",onClick:this.onClear},Intl.v("重置"))],t=(t&&n.push(React.createElement(ConditionalRender,{conditional:this.state.expand,noMatch:function(){return React.createElement("a",{key:"expand",className:"".concat(selectorPrefix,"-searchfooteritem-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("展开")),React.createElement("i",{className:"iconfont iconup"}))}},function(){return React.createElement("a",{key:"hide",className:"".concat(selectorPrefix,"-searchfooteritem-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("关闭")),React.createElement("i",{className:"iconfont icondownarrow"}))})),this.renderSearchFooterItems(n)||__spreadArray([],n,!0));return React.createElement("div",{className:"".concat(selectorPrefix,"-searchfooterwrapper")},t.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(selectorPrefix,"-searchfooteritem")},e)}))},l.prototype.renderTable=function(){var e=this.props,t=e.antdTableProps,e=e.fixedHeaderAutoTable,n=this.state,a=n.columnSetting,r=void 0===a?[]:a,a=n.tableDensity,n=this.getTableColumns().map(function(e,t){return __assign(__assign({},r[t]),e)}).filter(function(e){return e.display}),n=(n.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:n,onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection(),components:this.components,size:a},t||{}));return e&&(a=this.state.scrollY,t&&t.scroll?n.scroll.y=a:n.scroll={y:a}),React.createElement(_Table,__assign({},n))},l.prototype.renderInner=function(){var e=this,t=this.props,n=t.className,a=t.style,r=t.tableClassName,o=t.tableStyle,i=t.searchClassName,s=t.searchStyle,l=t.fitSearch,c=t.fitTable,u=t.autoFixed,t=t.fixedTableSpaceBetween,p=this.state.expand,p=void 0!==p&&p;return React.createElement(FlexLayout,{direction:"vertical",className:classNames(selectorPrefix,t?"fixedtablespacebetween":"",n||""),style:__assign({},a||{})},React.createElement(Fixed,{className:classNames("".concat(selectorPrefix,"-searchwrapper"),i||""),style:__assign({},s||{}),fit:l},React.createElement(FlexLayout,{direction:"vertical"},React.createElement(ConditionalRender,{conditional:!!this.renderSearchFormBefore},function(){return React.createElement(Fixed,null,e.renderSearchFormBefore())}),React.createElement(Fixed,null,React.createElement(ConditionalRender,{conditional:p,noMatch:function(){return null}},function(){return e.renderSearchForm()})),React.createElement(Fixed,null,this.renderSearchFooter()),React.createElement(ConditionalRender,{conditional:!!this.renderSearchFormAfter},function(){return React.createElement(Fixed,null,e.renderSearchFormAfter())}))),React.createElement(ConditionalRender,{conditional:!!this.renderTableHeader},function(){return React.createElement(Fixed,null,e.renderTableHeader())}),React.createElement(Auto,{className:classNames("".concat(selectorPrefix,"-autowrapper"),r||"",u?"autofixed":""),style:__assign({},o||{}),fit:c,autoFixed:u},React.createElement("div",{ref:this.tableWrapRef,className:"".concat(selectorPrefix,"-tablewrapper")},this.renderTable())),React.createElement(ConditionalRender,{conditional:!!this.renderTableFooter},function(){return React.createElement(Fixed,null,e.renderTableFooter())}))},l.prototype.render=function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},t.prototype.render.call(this))},l.NUMBER_GENERATOR_RULE_ALONE=Symbol(),l.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),l.ROW_SELECTION_NORMAL_MODE=Symbol(),l.ROW_SELECTION_CONTINUOUS_MODE=Symbol(),l}(Suspense),defaultProps={className:"",style:{},tableClassName:"",tableStyle:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,antdTableProps:{},isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitSearch:!0,fitTable:!0,autoFixed:!0,fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},propTypes={className:PropTypes.string,style:PropTypes.object,tableClassName:PropTypes.string,tableStyle:PropTypes.object,searchClassName:PropTypes.string,searchStyle:PropTypes.object,reset:PropTypes.bool,firstLoading:PropTypes.node,antdTableProps:PropTypes.object,isShowExpandSearch:PropTypes.bool,defaultExpandSearchCollapse:PropTypes.bool,fitSearch:PropTypes.bool,fitTable:PropTypes.bool,autoFixed:PropTypes.bool,fixedHeaderAutoTable:PropTypes.bool,fixedTableSpaceBetween:PropTypes.bool};SearchTable.defaultProps=defaultProps,SearchTable.propTypes=propTypes;export default SearchTable;export{selectorPrefix,defaultProps,propTypes};
//# sourceMappingURL=SearchTable.js.map
