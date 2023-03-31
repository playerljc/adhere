var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};import{Button,List}from"antd";import classNames from"classnames";import PropTypes from"prop-types";import React,{createContext,createRef}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import SearchTable from"@baifendian/adhere-ui-searchtable";import{TableDensity}from"@baifendian/adhere-ui-searchtable/es/types";import Intl from"@baifendian/adhere-util-intl";var Search=SearchTable.Search,TableDensitySetting=SearchTable.TableDensitySetting,selectorPrefix="adhere-ui-searchtable",SearchListContext=createContext(null),SearchList=function(r){function e(e){var t=r.call(this,e)||this;return t.listWrapRef=createRef(),t.state={prePage:1,page:1,limit:t.getLimit(),expand:e.defaultExpandSearchCollapse},Object.assign(t.state,{tableDensity:t.getTableDensity()}),t.onClear=t.onClear.bind(t),t}return __extends(e,r),e.prototype.onSearchPanelCollapseBefore=function(){},e.prototype.onSearchPanelCollapseAfter=function(){},e.prototype.getTableDensity=function(){return TableDensity.DEFAULT},e.prototype.renderTableDensitySetting=function(){var t=this;return React.createElement(TableDensitySetting,{density:this.state.tableDensity,onChange:function(e){t.setState({tableDensity:e})},onReset:function(){t.setState({tableDensity:t.getTableDensity()})}})},e.prototype.renderSearchToolBar=function(){var e=this,t=this.props.isShowExpandSearch,r=[React.createElement(Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),type:"primary",key:"search",icon:React.createElement("i",{className:classNames("".concat(selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),onClick:function(){e.setState({page:1},function(){e.onSearch()})}},Intl.v("查询")),React.createElement(Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),key:"reset",onClick:this.onClear},Intl.v("重置"))],t=(t&&r.push(React.createElement(ConditionalRender,{conditional:this.state.expand,noMatch:function(){return React.createElement("a",{key:"expand",className:"".concat(selectorPrefix,"-searchfooteritem-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("展开")),React.createElement("i",{className:"iconfont iconup"}))}},function(){return React.createElement("a",{key:"hide",className:"".concat(selectorPrefix,"-searchfooteritem-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("关闭")),React.createElement("i",{className:"iconfont icondownarrow"}))})),this.renderSearchFooterItems(r)||__spreadArray([],r,!0));return React.createElement("div",{className:"".concat(selectorPrefix,"-searchfooterwrapper")},t.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(selectorPrefix,"-searchfooteritem")},e)}))},e.prototype.renderBody=function(){var r=this,e=this.props.antdListProps,t=this.state.tableDensity,t=__assign({rowKey:this.getRowKey(),dataSource:this.getData(),pagination:this.getPagination(),renderItem:function(e,t){return r.renderItem(e,t)},header:this.renderListHeader(),size:t},e||{});return React.createElement(List,__assign({},t))},e.prototype.renderInner=function(){return r.prototype.renderInner.call(this,this.listWrapRef,"")},e.prototype.renderChildren=function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},r.prototype.render.call(this))},e.prototype.render=function(){return React.createElement(SearchListContext.Provider,{value:{context:this}},this.renderChildren())},e.NUMBER_GENERATOR_RULE_ALONE=Symbol(),e.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),e}(Search),defaultProps={listTableProps:{}},propTypes={listTableProps:PropTypes.object};SearchList.defaultProps=defaultProps,SearchList.propTypes=propTypes;export default SearchList;export{selectorPrefix,SearchListContext,defaultProps,propTypes};
//# sourceMappingURL=SearchList.js.map
