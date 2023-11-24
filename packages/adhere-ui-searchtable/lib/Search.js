"use strict";var __extends=function(){var a=function(e,r){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,r){e.__proto__=r}:function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}))(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}a(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,a){void 0===a&&(a=t);var l=Object.getOwnPropertyDescriptor(r,t);l&&("get"in l?r.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,a,l)}:function(e,r,t,a){e[a=void 0===a?t:a]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=void 0,__importDefault(require("classnames"))),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),adhere_ui_suspense_1=__importDefault(require("@baifendian/adhere-ui-suspense")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),SearchTable_1=require("./SearchTable"),Fixed=adhere_ui_flexlayout_1.default.Fixed,Auto=adhere_ui_flexlayout_1.default.Auto,Search=function(r){function e(e){e=r.call(this,e)||this;return e.searchFormRef=(0,react_1.createRef)(),e}return __extends(e,r),e.getDerivedStateFromProps=function(e,r){return __assign(__assign({},null!=r?r:{}),{prePage:null==r?void 0:r.page})},e.prototype.getPagination=function(){var r=this,e=this.getLimit(),t=[10,20,50,100];return t.includes(e)||t.push(e),{showTotal:function(e){return adhere_util_intl_1.default.v("当前 {page}-{pageSize}/共 {total}条",{page:r.state.page,pageSize:r.state.limit,total:e})},total:this.getTotal(),current:this.state.page,pageSize:this.state.limit,pageSizeOptions:t.sort(function(e,r){return e-r}),showQuickJumper:!0,showSizeChanger:!0}},e.prototype.getLimit=function(){return 10},e.prototype.clearAll=function(){return Promise.all([this.clearSearch(),this.clearPaging()])},e.prototype.onClear=function(){var e=this;return this.clearAll().then(function(){return e.fetchData()})},e.prototype.renderInner=function(e,r){var t=this.props,a=t.style,l=t.bodyClassName,o=t.bodyStyle,s=t.searchClassName,c=t.searchStyle,i=t.fitBody,i=void 0===i||i,t=t.autoFixed,t=void 0===t||t,n=this.state.expand,n=void 0!==n&&n;return react_1.default.createElement(adhere_ui_flexlayout_1.default,{direction:"vertical",className:(0,classnames_1.default)(SearchTable_1.selectorPrefix,null!=r?r:""),style:__assign({},null!=a?a:{})},(!!this.renderSearchFormBefore&&!(null==(r=this.renderSearchFormBefore)||!r.call(this))||!!this.renderSearchForm&&!(null==(a=this.renderSearchForm)||!a.call(this))||!!this.renderSearchToolBar&&!(null==(r=this.renderSearchToolBar)||!r.call(this))||!!this.renderSearchFormAfter&&!(null==(a=this.renderSearchFormAfter)||!a.call(this)))&&react_1.default.createElement(Fixed,{className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-search-wrapper"),s),style:__assign({},null!=c?c:{})},!!this.renderSearchFormBefore&&!(null==(r=this.renderSearchFormBefore)||!r.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-form-before")},null==(a=this.renderSearchFormBefore)?void 0:a.call(this)),!!this.renderSearchForm&&!(null==(s=this.renderSearchForm)||!s.call(this))&&n&&react_1.default.createElement(Fixed,{ref:this.searchFormRef,className:(0,classnames_1.default)(((c={})["".concat(SearchTable_1.selectorPrefix,"-search-form")]=!0,c["".concat(SearchTable_1.selectorPrefix,"-search-form-expand")]=n,c))},this.renderSearchForm()),!!this.renderSearchForm&&!(null==(r=this.renderSearchForm)||!r.call(this))&&!!this.renderSearchFormToolBar&&!(null==(a=this.renderSearchFormToolBar)||!a.call(this))&&react_1.default.createElement(Fixed,{className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-search-form-tool-bar"))},this.renderSearchFormToolBar()),!!this.renderSearchToolBar&&!(null==(s=this.renderSearchToolBar)||!s.call(this))&&react_1.default.createElement(Fixed,{"data-title":this.props.title,className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-search-tool-bar"),((c={})["".concat(SearchTable_1.selectorPrefix,"-search-form-expand")]=n,c))},this.renderSearchToolBar()),!!this.renderSearchFormAfter&&!(null==(r=this.renderSearchFormAfter)||!r.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-form-after")},null==(a=this.renderSearchFormAfter)?void 0:a.call(this))),!!this.renderSearchHeader&&!(null==(s=this.renderSearchHeader)||!s.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-header")},null==(n=this.renderSearchHeader)?void 0:n.call(this)),react_1.default.createElement(Auto,{style:__assign({},null!=o?o:{}),className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-auto-wrapper"),l,((c={}).autofixed=t,c)),fit:i,autoFixed:t},react_1.default.createElement("div",{ref:e,className:"".concat(SearchTable_1.selectorPrefix,"-table-wrapper")},this.renderBody())),!!this.renderSearchFooter&&!(null==(r=this.renderSearchFooter)||!r.call(this))&&react_1.default.createElement(Fixed,{className:"".concat(SearchTable_1.selectorPrefix,"-search-footer")},null==(a=this.renderSearchFooter)?void 0:a.call(this)))},e.displayName="Search",e}(adhere_ui_suspense_1.default);exports.defaultProps={className:"",style:{},searchClassName:"",searchStyle:{},isFirst:!0,isFirstLoading:null,isShowExpandSearch:!0,defaultExpandSearchCollapse:!0,fitBody:!0,autoFixed:!0},exports.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,searchClassName:prop_types_1.default.string,searchStyle:prop_types_1.default.object,reset:prop_types_1.default.bool,firstLoading:prop_types_1.default.node,isShowExpandSearch:prop_types_1.default.bool,defaultExpandSearchCollapse:prop_types_1.default.bool,fitBody:prop_types_1.default.bool,autoFixed:prop_types_1.default.bool,title:prop_types_1.default.string},Search.defaultProps=exports.defaultProps,Search.propTypes=exports.propTypes,exports.default=Search;
//# sourceMappingURL=Search.js.map
