import _Table from"antd/es/table";import _Button from"antd/es/button";import"core-js/modules/es.array.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.sort.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import{__assign,__extends,__spreadArray}from"tslib";import React,{createRef}from"react";import PropTypes from"prop-types";import classNames from"classnames";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Suspense from"@baifendian/adhere-ui-suspense";import Intl from"@baifendian/adhere-util-intl";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import ColumnResizable,{SearchTableResizableTitle,SearchTableResizableObserver}from"./Extension/ColumnResizable";import ColumnSetting from"./Extension/ColumnSetting";import TableDensitySetting from"./Extension/TableDensitySetting";import{TableDensity}from"./types";var selectorPrefix="adhere-ui-searchtable",Fixed=FlexLayout.Fixed,Auto=FlexLayout.Auto,SearchTable=function(t){function s(e){var r=t.call(this,e)||this;return r.tableWrapRef=createRef(),r.components={header:{cell:SearchTableResizableTitle}},r.columnResizable=new ColumnResizable,r.columnObserver=null,r.onTableChange=function(e,t,a){var n;r.setState(((n={})[r.getOrderFieldProp()]=a.field,n[r.getOrderProp()]=a.order,n),function(){a.order&&(r.fetchData(),r.onSubTableChange(e,t,a))})},r.state={page:1,limit:10,expand:e.defaultExpandSearchCollapse,scrollY:0},r.state=__assign(__assign({},r.state),{columnSetting:r.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})}),tableDensity:r.getTableDensity()}),r.onClear=r.onClear.bind(r),r}return __extends(s,t),s.prototype.componentWillReceiveProps=function(e){t.prototype.componentWillReceiveProps.call(this,e),this.columnSettingEffect(e)},s.prototype.componentDidUpdate=function(e,t,a){this.tableWrapRef.current&&(this.searchTableResizableEffectLayout(),this.fixedHeaderAutoTableEffectLayout(e,t))},s.prototype.searchTableResizableEffectLayout=function(){this.columnObserver||(this.columnObserver=SearchTableResizableObserver(this))},s.prototype.fixedHeaderAutoTableEffectLayout=function(e,t){var a,n;!this.props.fixedHeaderAutoTable||(n=this.getData())&&n.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null===(n=(a=this.tableWrapRef.current).querySelector(".ant-table-header"))||void 0===n?void 0:n.offsetHeight)||0,n=(null===(n=a.querySelector(".ant-table-pagination"))||void 0===n?void 0:n.offsetHeight)||0,this.setState({scrollY:a.clientHeight-(t+(n?n+32:0))}))},s.prototype.columnSettingEffect=function(e){var t,a,n,r=this,i=this.state.columnSetting||[],o=this.getTableColumns().map(function(e,t){return __assign(__assign({},e),{sort:t,display:!0})});i.length===o?(t=i.map(function(e){return e[r.getRowKey()]}),a=o.map(function(e){return e[r.getRowKey()]}),t.toString()!==a.toString()&&(n=this.getRowKey()||"id",this.setState({columnSetting:o.map(function(t){var e=i.find(function(e){return e[n]===t[n]});return __assign(__assign({},t),{display:!e||e.display})})}))):this.setState({columnSetting:o})},s.prototype.renderTableNumberColumn=function(e,t){return void 0===e&&(e=""),React.createElement("span",null,e)},s.prototype.getPagination=function(){var a=this;return{onChange:function(e,t){a.setState({page:e,limit:t},function(){a.fetchData()})},onShowSizeChange:function(e,t){a.setState({page:e,limit:t},function(){a.fetchData()})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,showQuickJumper:!0,showTotal:function(e){return Intl.v("当前 {page}-{pageSize}/共 {total}条",{page:a.state.page,pageSize:a.state.limit,total:e})}}},s.prototype.onClear=function(){var e=this;this.setState({page:1,limit:10},function(){e.clear().then(function(){e.fetchData()})})},s.prototype.sortOrder=function(e){return this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},s.prototype.getTableDensity=function(){return TableDensity.DEFAULT},s.prototype.getTableColumns=function(){var n=this,e=this.isShowNumber(),t=this.getTableNumberColumnWidth(),a=this.getColumns().filter(function(e){return!("authorized"in e)||e.authorized()}).map(function(e,t){return"resizable"in e&&e.resizable?n.columnResizable.searchTableResizableColumnItem(n,t,e):e});if(e){var r=null!==(e=this.getNumberGeneratorRule())&&void 0!==e?e:s.NUMBER_GENERATOR_RULE_ALONE,e=this.state,i=e.page,o=e.limit;return[{title:Intl.v("序号"),dataIndex:"_number",key:"_number",align:"center",width:null!=t?t:80,render:function(e,t,a){return React.createElement(ConditionalRender,{conditional:r===s.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return n.renderTableNumberColumn((i-1)*o+(a+1),{value:e,record:t,index:a})}},function(){return n.renderTableNumberColumn(a+1,{value:e,record:t,index:a})})}}].concat(a)}return a},s.prototype.renderColumnSetting=function(){var e=this,t=__spreadArray([],this.state.columnSetting,!0);return t.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0}),React.createElement(ColumnSetting,{columns:t,onShowColumns:function(t){e.setState(function(e){return{columnSetting:e.columnSetting.map(function(e){return __assign(__assign({},e),{display:t})})}})},onReset:function(){e.setState(function(){return{columnSetting:e.getTableColumns().map(function(e,t){return __assign(__assign({},e),{display:!0,sort:t})})}})},onDisplayColumn:function(t,a){e.setState(function(e){return{columnSetting:e.columnSetting.map(function(e){return __assign(__assign({},e),{display:e.key===t.key?a:e.display})})}})},onSortEnd:function(t){e.setState(function(e){return{columnSetting:e.columnSetting.map(function(e){return __assign(__assign({},e),{sort:t.get(e.key)})})}})}})},s.prototype.renderTableDensitySetting=function(){var t=this;return React.createElement(TableDensitySetting,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},s.prototype.renderSearchFooter=function(){var e=this,t=this.props.isShowExpandSearch,a=[React.createElement(_Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),type:"primary",icon:React.createElement("img",{style:{width:16},src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMzk2MjEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg4MCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTQ4LjQ4IDgzMy45MmwtMTg1LjYtMTgzLjY4Yy0zLjg0LTMuODQtOC4zMi02LjQtMTMuNDQtNy42OEM4MDEuMjggNTgwLjQ4IDgzMiA1MDEuNzYgODMyIDQxNiA4MzIgMjIxLjQ0IDY3NC41NiA2NCA0ODAgNjQgMjg1LjQ0IDY0IDEyOCAyMjEuNDQgMTI4IDQxNiAxMjggNjEwLjU2IDI4NS40NCA3NjggNDgwIDc2OGM4NS43NiAwIDE2My44NC0zMC43MiAyMjUuMjgtODEuMjggMS45MiA0LjQ4IDQuNDggOC45NiA4LjMyIDEyLjhsMTg1LjYgMTgzLjY4YzE0LjA4IDEzLjQ0IDM1Ljg0IDEzLjQ0IDQ5LjkyIDBTOTYyLjU2IDg0Ny4zNiA5NDguNDggODMzLjkyek00ODAgNzA0QzMyMC42NCA3MDQgMTkyIDU3NS4zNiAxOTIgNDE2IDE5MiAyNTYuNjQgMzIwLjY0IDEyOCA0ODAgMTI4IDYzOS4zNiAxMjggNzY4IDI1Ni42NCA3NjggNDE2IDc2OCA1NzUuMzYgNjM5LjM2IDcwNCA0ODAgNzA0eiIgcC1pZD0iODgxIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+",alt:"search"}),onClick:function(){e.setState({page:1},function(){e.onSearch()})}},Intl.v("查询")),React.createElement(_Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),onClick:this.onClear},Intl.v("重置"))];t&&a.push(React.createElement(ConditionalRender,{conditional:this.state.expand,noMatch:function(){return React.createElement("a",{style:{display:"flex",alignItems:"center"},onClick:function(){e.setState({expand:!0})}},React.createElement("span",{style:{marginRight:5}},Intl.v("展开")),React.createElement("img",{style:{width:16},src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg==",alt:"up"}))}},function(){return React.createElement("a",{style:{display:"flex",alignItems:"center"},onClick:function(){e.setState({expand:!1})}},React.createElement("span",{style:{marginRight:5}},Intl.v("关闭")),React.createElement("img",{style:{width:16},src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+",alt:"down"}))}));a=this.renderSearchFooterItems(a)||__spreadArray([],a,!0);return React.createElement("div",{className:"".concat(selectorPrefix,"-searchfooterwrapper")},a.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(selectorPrefix,"-searchfooteritem")},e)}))},s.prototype.renderTable=function(){var e=this.props,t=e.antdTableProps,a=e.fixedHeaderAutoTable,n=this.state,r=n.columnSetting,e=n.tableDensity,n=this.getTableColumns().map(function(e,t){return __assign(__assign({},r[t]),e)}).filter(function(e){return e.display});n.sort(function(e,t){return e.sort>t.sort?1:e.sort<t.sort?-1:0});e=__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:n,onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection(),components:this.components,size:e},t||{});return a&&(a=this.state.scrollY,t&&t.scroll?e.scroll.y=a:e.scroll={y:a}),React.createElement(_Table,__assign({},e))},s.prototype.renderInner=function(){var e=this,t=this.props,a=t.className,n=t.style,r=t.tableClassName,i=t.tableStyle,o=t.searchClassName,s=t.searchStyle,l=t.fitSearch,c=t.fitTable,u=t.autoFixed,d=t.fixedTableSpaceBetween,t=this.state.expand;return React.createElement(FlexLayout,{direction:"vertical",className:classNames.apply(void 0,__spreadArray([selectorPrefix,d?"fixedtablespacebetween":""],(a||"").split(/\s+/),!1)),style:__assign({},n||{})},React.createElement(Fixed,{className:classNames.apply(void 0,__spreadArray(["".concat(selectorPrefix,"-searchwrapper")],(o||"").split(/\s+/),!1)),style:__assign({},s||{}),fit:l},React.createElement(FlexLayout,{direction:"vertical"},React.createElement(Fixed,null,React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return null}},function(){return e.renderSearchForm()})),React.createElement(Fixed,null,this.renderSearchFooter()))),React.createElement(ConditionalRender,{conditional:!!this.renderTableHeader},function(){return React.createElement(Fixed,null,e.renderTableHeader())}),React.createElement(Auto,{className:classNames.apply(void 0,__spreadArray(__spreadArray(["".concat(selectorPrefix,"-autowrapper")],(r||"").split(/\s+/),!1),[u?"autofixed":""],!1)),style:__assign({},i||{}),fit:c,autoFixed:u},React.createElement("div",{ref:this.tableWrapRef,className:"".concat(selectorPrefix,"-tablewrapper")},this.renderTable())),React.createElement(ConditionalRender,{conditional:!!this.renderTableFooter},function(){return React.createElement(Fixed,null,e.renderTableFooter())}))},s.prototype.render=function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},t.prototype.render.call(this))},s.NUMBER_GENERATOR_RULE_ALONE=Symbol(),s.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),s.ROW_SELECTION_NORMAL_MODE=Symbol(),s.ROW_SELECTION_CONTINUOUS_MODE=Symbol(),s}(Suspense),defaultProps={className:"",style:{},tableClassName:"",tableStyle:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,antdTableProps:{},isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitSearch:!0,fitTable:!0,autoFixed:!0,fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},propTypes={className:PropTypes.string,style:PropTypes.object,tableClassName:PropTypes.string,tableStyle:PropTypes.object,searchClassName:PropTypes.string,searchStyle:PropTypes.object,reset:PropTypes.bool,firstLoading:PropTypes.node,antdTableProps:PropTypes.object,isShowExpandSearch:PropTypes.bool,defaultExpandSearchCollapse:PropTypes.bool,fitSearch:PropTypes.bool,fitTable:PropTypes.bool,autoFixed:PropTypes.bool,fixedHeaderAutoTable:PropTypes.bool,fixedTableSpaceBetween:PropTypes.bool};SearchTable.defaultProps=defaultProps,SearchTable.propTypes=propTypes;export default SearchTable;export{selectorPrefix,defaultProps,propTypes};
//# sourceMappingURL=searchtable.js.map
