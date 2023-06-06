"use strict";var __extends=function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=void 0,__importDefault(require("classnames"))),prop_types_1=__importDefault(require("prop-types")),react_1=__importDefault(require("react")),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),adhere_ui_suspense_1=__importDefault(require("@baifendian/adhere-ui-suspense")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),SearchTable_1=require("./SearchTable"),Fixed=adhere_ui_flexlayout_1.default.Fixed,Auto=adhere_ui_flexlayout_1.default.Auto,Search=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.getDerivedStateFromProps=function(e,t){return __assign(__assign({},null!=t?t:{}),{prePage:null==t?void 0:t.page})},e.prototype.getPagination=function(){var r=this;return{onChange:function(e,t){r.setState({page:e,limit:t},function(){r.fetchData()})},onShowSizeChange:function(e,t){r.setState({page:e,limit:t},function(){r.fetchData()})},showTotal:function(e){return adhere_util_intl_1.default.v("当前 {page}-{pageSize}/共 {total}条",{page:r.state.page,pageSize:r.state.limit,total:e})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,showQuickJumper:!0}},e.prototype.getLimit=function(){return 10},e.prototype.clearAll=function(){return Promise.all([this.clearSearch(),this.clearPaging()])},e.prototype.onClear=function(){var e=this;return this.clearAll().then(function(){return e.fetchData()})},e.prototype.renderInner=function(e,t){var r=this.props,a=r.style,l=r.bodyClassName,o=r.bodyStyle,s=r.searchClassName,i=r.searchStyle,c=r.fitBody,c=void 0===c||c,r=r.autoFixed,r=void 0===r||r,n=this.state.expand,n=void 0!==n&&n;return react_1.default.createElement(adhere_ui_flexlayout_1.default,{direction:"vertical",className:(0,classnames_1.default)(SearchTable_1.selectorPrefix,t),style:__assign({},null!=a?a:{})},(!!this.renderSearchFormBefore&&!(null==(t=this.renderSearchFormBefore)||!t.call(this))||!!this.renderSearchForm&&!(null==(a=this.renderSearchForm)||!a.call(this))||!!this.renderSearchToolBar&&!(null==(t=this.renderSearchToolBar)||!t.call(this))||!!this.renderSearchFormAfter&&!(null==(a=this.renderSearchFormAfter)||!a.call(this)))&&react_1.default.createElement(Fixed,{className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-searchwrapper"),s),style:__assign({},null!=i?i:{})},!!this.renderSearchFormBefore&&!(null==(t=this.renderSearchFormBefore)||!t.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-form-before")},null==(a=this.renderSearchFormBefore)?void 0:a.call(this)),!!this.renderSearchForm&&!(null==(s=this.renderSearchForm)||!s.call(this))&&n&&react_1.default.createElement(Fixed,{className:(0,classnames_1.default)(((i={})["".concat(SearchTable_1.selectorPrefix,"-search-form")]=!0,i["".concat(SearchTable_1.selectorPrefix,"-search-form-expand")]=n,i))},this.renderSearchForm()),!!this.renderSearchToolBar&&!(null==(t=this.renderSearchToolBar)||!t.call(this))&&react_1.default.createElement(Fixed,{"data-title":this.props.title,className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-search-tool-bar"),((a={})["".concat(SearchTable_1.selectorPrefix,"-search-form-expand")]=n,a))},this.renderSearchToolBar()),!!this.renderSearchFormAfter&&!(null==(s=this.renderSearchFormAfter)||!s.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-form-after")},null==(i=this.renderSearchFormAfter)?void 0:i.call(this))),!!this.renderSearchHeader&&!(null==(t=this.renderSearchHeader)||!t.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-header")},null==(n=this.renderSearchHeader)?void 0:n.call(this)),react_1.default.createElement(Auto,{style:__assign({},null!=o?o:{}),className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-autowrapper"),l,((a={}).autofixed=r,a)),fit:c,autoFixed:r},react_1.default.createElement("div",{ref:e,className:"".concat(SearchTable_1.selectorPrefix,"-tablewrapper")},this.renderBody())),!!this.renderSearchFooter&&!(null==(s=this.renderSearchFooter)||!s.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-footer")},null==(i=this.renderSearchFooter)?void 0:i.call(this)))},e}(adhere_ui_suspense_1.default);exports.defaultProps={className:"",style:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitBody:!0,autoFixed:!0},exports.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,searchClassName:prop_types_1.default.string,searchStyle:prop_types_1.default.object,reset:prop_types_1.default.bool,firstLoading:prop_types_1.default.node,isShowExpandSearch:prop_types_1.default.bool,defaultExpandSearchCollapse:prop_types_1.default.bool,fitBody:prop_types_1.default.bool,autoFixed:prop_types_1.default.bool,title:prop_types_1.default.string},Search.defaultProps=exports.defaultProps,Search.propTypes=exports.propTypes,exports.default=Search;
//# sourceMappingURL=Search.js.map
