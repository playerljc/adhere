var __extends=this&&this.__extends||function(){var a=function(e,r){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,r){e.__proto__=r}:function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}))(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}a(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};import classNames from"classnames";import PropTypes from"prop-types";import React from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Suspense from"@baifendian/adhere-ui-suspense";import Intl from"@baifendian/adhere-util-intl";import{selectorPrefix}from"./SearchTable";var Fixed=FlexLayout.Fixed,Auto=FlexLayout.Auto,Search=function(r){function e(e){return r.call(this,e)||this}return __extends(e,r),e.getDerivedStateFromProps=function(e,r){return __assign(__assign({},r||{}),{prePage:null==r?void 0:r.page})},e.prototype.getPagination=function(){var t=this;return{onChange:function(e,r){t.setState({page:e,limit:r},function(){t.fetchData()})},onShowSizeChange:function(e,r){t.setState({page:e,limit:r},function(){t.fetchData()})},showTotal:function(e){return Intl.v("当前 {page}-{pageSize}/共 {total}条",{page:t.state.page,pageSize:t.state.limit,total:e})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,showQuickJumper:!0}},e.prototype.getLimit=function(){return 10},e.prototype.clearAll=function(){return Promise.all([this.clearSearch(),this.clearPaging()])},e.prototype.onClear=function(){var e=this;return this.clearAll().then(function(){return e.fetchData()})},e.prototype.renderInner=function(e,r){var t=this.props,a=t.style,o=t.bodyClassName,s=t.bodyStyle,i=t.searchClassName,n=t.searchStyle,c=t.fitBody,c=void 0===c||c,t=t.autoFixed,t=void 0===t||t,l=this.state.expand,l=void 0!==l&&l;return React.createElement(FlexLayout,{direction:"vertical",className:classNames(selectorPrefix,r),style:__assign({},a||{})},(!!this.renderSearchFormBefore&&!(null==(r=this.renderSearchFormBefore)||!r.call(this))||!!this.renderSearchForm&&!(null==(a=this.renderSearchForm)||!a.call(this))||!!this.renderSearchToolBar&&!(null==(r=this.renderSearchToolBar)||!r.call(this))||!!this.renderSearchFormAfter&&!(null==(a=this.renderSearchFormAfter)||!a.call(this)))&&React.createElement(Fixed,{className:classNames("".concat(selectorPrefix,"-searchwrapper"),i),style:__assign({},n||{})},!!this.renderSearchFormBefore&&!(null==(r=this.renderSearchFormBefore)||!r.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-form-before")},null==(a=this.renderSearchFormBefore)?void 0:a.call(this)),!!this.renderSearchForm&&!(null==(i=this.renderSearchForm)||!i.call(this))&&l&&React.createElement(Fixed,{className:classNames(((n={})["".concat(selectorPrefix,"-search-form")]=!0,n["".concat(selectorPrefix,"-search-form-expand")]=l,n))},this.renderSearchForm()),!!this.renderSearchToolBar&&!(null==(r=this.renderSearchToolBar)||!r.call(this))&&React.createElement(Fixed,{"data-title":this.props.title,className:classNames("".concat(selectorPrefix,"-search-tool-bar"),((a={})["".concat(selectorPrefix,"-search-form-expand")]=l,a))},this.renderSearchToolBar()),!!this.renderSearchFormAfter&&!(null==(i=this.renderSearchFormAfter)||!i.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-form-after")},null==(n=this.renderSearchFormAfter)?void 0:n.call(this))),!!this.renderSearchHeader&&!(null==(r=this.renderSearchHeader)||!r.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-header")},null==(l=this.renderSearchHeader)?void 0:l.call(this)),React.createElement(Auto,{style:__assign({},s||{}),className:classNames("".concat(selectorPrefix,"-autowrapper"),o,((a={}).autofixed=t,a)),fit:c,autoFixed:t},React.createElement("div",{ref:e,className:"".concat(selectorPrefix,"-tablewrapper")},this.renderBody())),!!this.renderSearchFooter&&!(null==(i=this.renderSearchFooter)||!i.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-footer")},null==(n=this.renderSearchFooter)?void 0:n.call(this)))},e}(Suspense),defaultProps={className:"",style:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitBody:!0,autoFixed:!0},propTypes={className:PropTypes.string,style:PropTypes.object,searchClassName:PropTypes.string,searchStyle:PropTypes.object,reset:PropTypes.bool,firstLoading:PropTypes.node,isShowExpandSearch:PropTypes.bool,defaultExpandSearchCollapse:PropTypes.bool,fitBody:PropTypes.bool,autoFixed:PropTypes.bool,title:PropTypes.string};Search.defaultProps=defaultProps,Search.propTypes=propTypes;export default Search;export{defaultProps,propTypes};
//# sourceMappingURL=Search.js.map
