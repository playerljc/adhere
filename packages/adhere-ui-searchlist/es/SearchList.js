import _List from"antd/es/list";import _Button from"antd/es/button";var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};import classNames from"classnames";import PropTypes from"prop-types";import React,{createContext,createRef}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import SearchTable from"@baifendian/adhere-ui-searchtable";import Intl from"@baifendian/adhere-util-intl";import ListDensitySetting from"./Extension/ListDensitySetting";var Search=SearchTable.Search,selectorPrefix="adhere-ui-searchtable",SearchListContext=createContext(null),SearchList=function(n){function e(e){var t=n.call(this,e)||this;return t.listWrapRef=createRef(),t.state={prePage:1,page:1,limit:t.getLimit(),expand:e.defaultExpandSearchCollapse},Object.assign(t.state,{listDensity:t.getListDensity()}),t.onClear=t.onClear.bind(t),t.onBodyKeyup=t.onBodyKeyup.bind(t),t}return __extends(e,n),e.prototype.componentDidMount=function(){var e;null!=(e=n.prototype.componentDidMount)&&e.call(this),document.body.addEventListener("keyup",this.onBodyKeyup)},e.prototype.componentWillUnmount=function(){var e;null!=(e=n.prototype.componentWillUnmount)&&e.call(this),document.body.removeEventListener("keyup",this.onBodyKeyup)},e.prototype.onBodyKeyup=function(e){13===e.keyCode&&this.search()},e.prototype.onSearchPanelCollapseBefore=function(){},e.prototype.onSearchPanelCollapseAfter=function(){},e.prototype.search=function(){var t=this;return new Promise(function(e){t.setState({page:1},function(){t.onSearch().then(function(){return e()})})})},e.prototype.getListDensity=function(){return"default"},e.prototype.renderTableDensitySetting=function(){var t=this;return React.createElement(ListDensitySetting,{density:this.state.listDensity,onChange:function(e){t.setState({listDensity:e})},onReset:function(e){t.setState({listDensity:e})}})},e.prototype.renderSearchToolBar=function(){var e=this,t=this.props.isShowExpandSearch,n=[React.createElement(_Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),type:"primary",key:"search",icon:React.createElement("i",{className:classNames("".concat(selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),onClick:function(){e.search()}},Intl.v("查询")),React.createElement(_Button,{className:"".concat(selectorPrefix,"-searchfooteritem"),key:"reset",onClick:this.onClear},Intl.v("重置"))],t=(t&&n.push(React.createElement(ConditionalRender,{conditional:this.state.expand,noMatch:function(){return React.createElement("a",{key:"expand",className:"".concat(selectorPrefix,"-searchfooteritem-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("展开")),React.createElement("i",{className:"iconfont iconup"}))}},function(){return React.createElement("a",{key:"hide",className:"".concat(selectorPrefix,"-searchfooteritem-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},React.createElement("span",null,Intl.v("关闭")),React.createElement("i",{className:"iconfont icondownarrow"}))})),this.renderSearchFooterItems(n)||__spreadArray([],n,!0));return React.createElement("div",{className:"".concat(selectorPrefix,"-searchfooterwrapper")},t.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(selectorPrefix,"-searchfooteritem")},e)}))},e.prototype.renderBody=function(){var n=this,e=this.props.antdListProps,t=this.state.listDensity,t=__assign({rowKey:this.getRowKey(),dataSource:this.getData(),pagination:this.getPagination(),renderItem:function(e,t){return n.renderItem(e,t)},header:this.renderListHeader(),size:t},null!=e?e:{});return React.createElement(_List,__assign({},t))},e.prototype.renderInner=function(){var e,t=this.props.fixedListSpaceBetween;return n.prototype.renderInner.call(this,this.listWrapRef,classNames(((e={}).fixedlistspacebetween=void 0===t||t,e)))},e.prototype.renderChildren=function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-wrap")},n.prototype.render.call(this))},e.prototype.render=function(){return React.createElement(SearchListContext.Provider,{value:{context:this}},this.renderChildren())},e.NUMBER_GENERATOR_RULE_ALONE=Symbol(),e.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),e}(Search),defaultProps={antdListProps:{},fixedSelectionHeaderAutoList:!0,fixedListSpaceBetween:!0},propTypes={antdListProps:PropTypes.object,fixedSelectionHeaderAutoList:PropTypes.bool,fixedListSpaceBetween:PropTypes.bool};SearchList.defaultProps=defaultProps,SearchList.propTypes=propTypes;export default SearchList;export{selectorPrefix,SearchListContext,defaultProps,propTypes};
//# sourceMappingURL=SearchList.js.map
