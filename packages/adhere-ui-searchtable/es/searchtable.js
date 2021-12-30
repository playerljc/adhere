var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};return function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<a;t++)for(var n=arguments[t],o=0,l=n.length;o<l;o++,i++)r[i]=n[o];return r};import React,{createRef}from"react";import PropTypes from"prop-types";import classNames from"classnames";import{Table,Button}from"antd";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Suspense from"@baifendian/adhere-ui-suspense";import Intl from"@baifendian/adhere-util-intl";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import SearchForm from"./searchform";var selectorPrefix="adhere-ui-searchtable",Fixed=FlexLayout.Fixed,Auto=FlexLayout.Auto,SearchTable=function(t){function l(e){var i=t.call(this,e)||this;return i.tableWrapRef=createRef(),i.onTableChange=function(e,t,a){var r;i.setState(((r={})[i.getOrderFieldProp()]=a.field,r[i.getOrderProp()]=a.order,r),function(){a.order&&(i.fetchData(),i.onSubTableChange(e,t,a))})},i.state={page:1,limit:10,expand:e.defaultExpandSearchCollapse,scrollY:0},i.onClear=i.onClear.bind(i),i}return __extends(l,t),l.prototype.componentDidUpdate=function(e,t,a){var r,i;this.tableWrapRef.current&&(!this.props.fixedHeaderAutoTable||(i=this.getData())&&i.length&&(0===t.scrollY&&0===this.state.scrollY||t.scrollY!==this.state.scrollY||t.expand!==this.state.expand)&&(t=(null===(i=(r=this.tableWrapRef.current).querySelector(".ant-table-header"))||void 0===i?void 0:i.offsetHeight)||0,i=(null===(i=r.querySelector(".ant-table-pagination"))||void 0===i?void 0:i.offsetHeight)||0,this.setState({scrollY:r.clientHeight-(t+(i?i+32:0))})))},l.prototype.renderTableNumberColumn=function(e,t){return void 0===e&&(e=""),React.createElement("span",null,e)},l.prototype.getPagination=function(){var a=this;return{onChange:function(e,t){a.setState({page:e,limit:t},function(){a.fetchData()})},onShowSizeChange:function(e,t){a.setState({page:e,limit:t},function(){a.fetchData()})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,showQuickJumper:!0,showTotal:function(e){return Intl.v("当前 {page}-{pageSize}/共 {total}条",{page:a.state.page,pageSize:a.state.limit,total:e})}}},l.prototype.onClear=function(){var e=this;this.setState({page:1,limit:10},function(){e.clear().then(function(){e.fetchData()})})},l.prototype.sortOrder=function(e){return this.state[this.getOrderFieldProp()]===e?this.state[this.getOrderProp()]:""},l.prototype.getTableColumns=function(){var r=this,e=this.isShowNumber(),t=this.getTableNumberColumnWidth(),a=this.getColumns().filter(function(e){return!("authorized"in e)||e.authorized()});if(e){var i=null!==(e=this.getNumberGeneratorRule())&&void 0!==e?e:l.NUMBER_GENERATOR_RULE_ALONE,e=this.state,n=e.page,o=e.limit;return[{title:Intl.v("序号"),dataIndex:"number",key:"number",align:"center",width:null!=t?t:80,render:function(e,t,a){return React.createElement(ConditionalRender,{conditional:i===l.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return r.renderTableNumberColumn((n-1)*o+(a+1),{record:e,index:a})}},function(){return r.renderTableNumberColumn(a+1,{record:e,index:a})})}}].concat(a)}return a},l.prototype.renderSearchFooter=function(){var e=this,t=this.props.isShowExpandSearch,a=[React.createElement(Button,{className:selectorPrefix+"-searchfooteritem",type:"primary",icon:React.createElement("img",{style:{width:16},src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMzk2MjEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg4MCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTQ4LjQ4IDgzMy45MmwtMTg1LjYtMTgzLjY4Yy0zLjg0LTMuODQtOC4zMi02LjQtMTMuNDQtNy42OEM4MDEuMjggNTgwLjQ4IDgzMiA1MDEuNzYgODMyIDQxNiA4MzIgMjIxLjQ0IDY3NC41NiA2NCA0ODAgNjQgMjg1LjQ0IDY0IDEyOCAyMjEuNDQgMTI4IDQxNiAxMjggNjEwLjU2IDI4NS40NCA3NjggNDgwIDc2OGM4NS43NiAwIDE2My44NC0zMC43MiAyMjUuMjgtODEuMjggMS45MiA0LjQ4IDQuNDggOC45NiA4LjMyIDEyLjhsMTg1LjYgMTgzLjY4YzE0LjA4IDEzLjQ0IDM1Ljg0IDEzLjQ0IDQ5LjkyIDBTOTYyLjU2IDg0Ny4zNiA5NDguNDggODMzLjkyek00ODAgNzA0QzMyMC42NCA3MDQgMTkyIDU3NS4zNiAxOTIgNDE2IDE5MiAyNTYuNjQgMzIwLjY0IDEyOCA0ODAgMTI4IDYzOS4zNiAxMjggNzY4IDI1Ni42NCA3NjggNDE2IDc2OCA1NzUuMzYgNjM5LjM2IDcwNCA0ODAgNzA0eiIgcC1pZD0iODgxIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+",alt:"search"}),onClick:function(){e.setState({page:1},function(){e.onSearch()})}},Intl.v("查询")),React.createElement(Button,{className:selectorPrefix+"-searchfooteritem",onClick:this.onClear},Intl.v("重置"))];t&&a.push(React.createElement(ConditionalRender,{conditional:this.state.expand,noMatch:function(){return React.createElement("a",{style:{display:"flex",alignItems:"center"},onClick:function(){e.setState({expand:!0})}},React.createElement("span",{style:{marginRight:5}},Intl.v("展开")),React.createElement("img",{style:{width:16},src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg==",alt:"up"}))}},function(){return React.createElement("a",{style:{display:"flex",alignItems:"center"},onClick:function(){e.setState({expand:!1})}},React.createElement("span",{style:{marginRight:5}},Intl.v("关闭")),React.createElement("img",{style:{width:16},src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+",alt:"down"}))}));a=this.renderSearchFooterItems(a)||__spreadArrays(a);return React.createElement("div",{className:selectorPrefix+"-searchfooterwrapper"},a.map(function(e){return React.createElement("div",{className:selectorPrefix+"-searchfooteritem"},e)}))},l.prototype.renderTable=function(){var e=this.props,t=e.antdTableProps,a=e.fixedHeaderAutoTable,e=__assign({rowKey:this.getRowKey(),dataSource:this.getData(),columns:this.getTableColumns(),onChange:this.onTableChange,pagination:this.getPagination(),rowSelection:this.getRowSelection()},t||{});return a&&(a=this.state.scrollY,t&&t.scroll?e.scroll.y=a:e.scroll={y:a}),React.createElement(Table,__assign({},e))},l.prototype.renderInner=function(){var e=this,t=this.props,a=t.className,r=t.style,i=t.tableClassName,n=t.tableStyle,o=t.searchClassName,l=t.searchStyle,s=t.fitSearch,c=t.fitTable,d=t.autoFixed,u=t.fixedTableSpaceBetween,t=this.state.expand;return React.createElement(FlexLayout,{direction:"vertical",className:classNames.apply(void 0,__spreadArrays([selectorPrefix,u?"fixedtablespacebetween":""],(a||"").split(" "))),style:__assign({},r||{})},React.createElement(Fixed,{className:classNames.apply(void 0,__spreadArrays([selectorPrefix+"-searchwrapper"],(o||"").split(" "))),style:__assign({},l||{}),fit:s},React.createElement(FlexLayout,null,React.createElement(Fixed,null,React.createElement(ConditionalRender,{conditional:t,noMatch:null},function(){return e.renderSearchForm()})),React.createElement(Fixed,null,this.renderSearchFooter()))),React.createElement(ConditionalRender,{conditional:!!this.renderTableHeader},function(){return React.createElement(Fixed,null,e.renderTableHeader())}),React.createElement(Auto,{className:classNames.apply(void 0,__spreadArrays([selectorPrefix+"-autowrapper"],(i||"").split(" "),[d?"autofixed":""])),style:__assign({},n||{}),fit:c,autoFixed:d},React.createElement("div",{ref:this.tableWrapRef,className:selectorPrefix+"-tablewrapper"},this.renderTable())),React.createElement(ConditionalRender,{conditional:!!this.renderTableFooter},function(){return React.createElement(Fixed,null,e.renderTableFooter())}))},l.prototype.render=function(){return React.createElement("div",{className:selectorPrefix+"-wrap"},t.prototype.render.call(this))},l.SearchForm=SearchForm,l.NUMBER_GENERATOR_RULE_ALONE=Symbol(),l.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),l}(Suspense);SearchTable.defaultProps={className:"",style:{},tableClassName:"",tableStyle:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,antdTableProps:{},isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitSearch:!0,fitTable:!0,autoFixed:!0,fixedHeaderAutoTable:!1,fixedTableSpaceBetween:!1},SearchTable.propTypes={className:PropTypes.string,style:PropTypes.object,tableClassName:PropTypes.string,tableStyle:PropTypes.object,searchClassName:PropTypes.string,searchStyle:PropTypes.object,reset:PropTypes.bool,firstLoading:PropTypes.node,antdTableProps:PropTypes.object,isShowExpandSearch:PropTypes.bool,defaultExpandSearchCollapse:PropTypes.bool,fitSearch:PropTypes.bool,fitTable:PropTypes.bool,autoFixed:PropTypes.bool,fixedHeaderAutoTable:PropTypes.bool,fixedTableSpaceBetween:PropTypes.bool};export default SearchTable;
//# sourceMappingURL=searchtable.js.map