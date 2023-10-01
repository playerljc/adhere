var __extends=this&&this.__extends||function(){var a=function(e,r){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,r){e.__proto__=r}:function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}))(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}a(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)};import classNames from"classnames";import PropTypes from"prop-types";import React,{createRef}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Suspense from"@baifendian/adhere-ui-suspense";import Intl from"@baifendian/adhere-util-intl";import{selectorPrefix}from"./SearchTable";var Fixed=FlexLayout.Fixed,Auto=FlexLayout.Auto,Search=function(r){function e(e){e=r.call(this,e)||this;return e.searchFormRef=createRef(),e}return __extends(e,r),e.getDerivedStateFromProps=function(e,r){return __assign(__assign({},null!=r?r:{}),{prePage:null==r?void 0:r.page})},e.prototype.getPagination=function(){var r=this,e=this.getLimit(),t=[10,20,50,100];return t.includes(e)||t.push(e),{showTotal:function(e){return Intl.v("当前 {page}-{pageSize}/共 {total}条",{page:r.state.page,pageSize:r.state.limit,total:e})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,pageSizeOptions:t.sort(function(e,r){return e-r}),showQuickJumper:!0,showSizeChanger:!0}},e.prototype.getLimit=function(){return 10},e.prototype.clearAll=function(){return Promise.all([this.clearSearch(),this.clearPaging()])},e.prototype.onClear=function(){var e=this;return this.clearAll().then(function(){return e.fetchData()})},e.prototype.renderInner=function(e,r){var t=this.props,a=t.style,s=t.bodyClassName,o=t.bodyStyle,l=t.searchClassName,c=t.searchStyle,i=t.fitBody,i=void 0===i||i,t=t.autoFixed,t=void 0===t||t,n=this.state.expand,n=void 0!==n&&n;return React.createElement(FlexLayout,{direction:"vertical",className:classNames(selectorPrefix,null!=r?r:""),style:__assign({},null!=a?a:{})},(!!this.renderSearchFormBefore&&!(null==(r=this.renderSearchFormBefore)||!r.call(this))||!!this.renderSearchForm&&!(null==(a=this.renderSearchForm)||!a.call(this))||!!this.renderSearchToolBar&&!(null==(r=this.renderSearchToolBar)||!r.call(this))||!!this.renderSearchFormAfter&&!(null==(a=this.renderSearchFormAfter)||!a.call(this)))&&React.createElement(Fixed,{className:classNames("".concat(selectorPrefix,"-search-wrapper"),l),style:__assign({},null!=c?c:{})},!!this.renderSearchFormBefore&&!(null==(r=this.renderSearchFormBefore)||!r.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-form-before")},null==(a=this.renderSearchFormBefore)?void 0:a.call(this)),!!this.renderSearchForm&&!(null==(l=this.renderSearchForm)||!l.call(this))&&n&&React.createElement(Fixed,{ref:this.searchFormRef,className:classNames(((c={})["".concat(selectorPrefix,"-search-form")]=!0,c["".concat(selectorPrefix,"-search-form-expand")]=n,c))},this.renderSearchForm()),!!this.renderSearchForm&&!(null==(r=this.renderSearchForm)||!r.call(this))&&!!this.renderSearchFormToolBar&&!(null==(a=this.renderSearchFormToolBar)||!a.call(this))&&React.createElement(Fixed,{className:classNames("".concat(selectorPrefix,"-search-form-tool-bar"))},this.renderSearchFormToolBar()),!!this.renderSearchToolBar&&!(null==(l=this.renderSearchToolBar)||!l.call(this))&&React.createElement(Fixed,{"data-title":this.props.title,className:classNames("".concat(selectorPrefix,"-search-tool-bar"),((c={})["".concat(selectorPrefix,"-search-form-expand")]=n,c))},this.renderSearchToolBar()),!!this.renderSearchFormAfter&&!(null==(r=this.renderSearchFormAfter)||!r.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-form-after")},null==(a=this.renderSearchFormAfter)?void 0:a.call(this))),!!this.renderSearchHeader&&!(null==(l=this.renderSearchHeader)||!l.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-header")},null==(n=this.renderSearchHeader)?void 0:n.call(this)),React.createElement(Auto,{style:__assign({},null!=o?o:{}),className:classNames("".concat(selectorPrefix,"-auto-wrapper"),s,((c={}).autofixed=t,c)),fit:i,autoFixed:t},React.createElement("div",{ref:e,className:"".concat(selectorPrefix,"-table-wrapper")},this.renderBody())),!!this.renderSearchFooter&&!(null==(r=this.renderSearchFooter)||!r.call(this))&&React.createElement(Fixed,{className:"".concat(selectorPrefix,"-search-footer")},null==(a=this.renderSearchFooter)?void 0:a.call(this)))},e}(Suspense),defaultProps={className:"",style:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitBody:!0,autoFixed:!0},propTypes={className:PropTypes.string,style:PropTypes.object,searchClassName:PropTypes.string,searchStyle:PropTypes.object,reset:PropTypes.bool,firstLoading:PropTypes.node,isShowExpandSearch:PropTypes.bool,defaultExpandSearchCollapse:PropTypes.bool,fitBody:PropTypes.bool,autoFixed:PropTypes.bool,title:PropTypes.string};Search.defaultProps=defaultProps,Search.propTypes=propTypes;export default Search;export{defaultProps,propTypes};
//# sourceMappingURL=Search.js.map
