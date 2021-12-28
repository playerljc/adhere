"use strict";var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),classnames_1=__importDefault(require("classnames")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),selectorPrefix="adhere-ui-playground-table",Table=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.renderHeader=function(){var e=this.props.columns;return react_1.default.createElement("thead",null,react_1.default.createElement("tr",{className:selectorPrefix+"-header"},e.map(function(e){var t=e.className,r=e.style,a=e.align,l={key:e.key};return e.width&&(l.width=e.width),react_1.default.createElement("th",__assign({},l,{className:classnames_1.default(selectorPrefix+"-header-column",(t||"").split(" ")),style:__assign({textAlign:a||"left"},r)}),e.title||"-")})))},t.prototype.renderBody=function(){var e=this.props,t=e.columns,r=e.dataSource,a=e.rowKey;return react_1.default.createElement("tbody",null,r.map(function(s,o){return react_1.default.createElement("tr",{className:selectorPrefix+"-row",key:s[a]},t.map(function(e,t){var r=e.dataIndex,a=e.render,l=e.align,n=e.valign;return react_1.default.createElement("td",{className:selectorPrefix+"-cell",key:e.key,valign:n||"top",style:{textAlign:l||"left"}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a,noMatch:function(){return s[r]||"-"}},function(){return a(s[r],s,o,t)}))}))}))},t.prototype.render=function(){var e=this.props,t=e.className,r=e.style,a=e.tableClassName,e=e.tableStyle;return react_1.default.createElement("div",{className:classnames_1.default(""+selectorPrefix,t.split(" ")),style:__assign({},r)},react_1.default.createElement("table",{className:classnames_1.default(selectorPrefix+"-inner",a.split(" ")),style:__assign({},e)},this.renderHeader(),this.renderBody()))},t}(react_1.default.Component);Table.defaultProps={className:"",style:{},tableClassName:"",tableStyle:{},columns:[],dataSource:[]},Table.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,tableClassName:prop_types_1.default.string,tableStyle:prop_types_1.default.object,columns:prop_types_1.default.arrayOf(prop_types_1.default.shape({key:prop_types_1.default.string,dataIndex:prop_types_1.default.string,title:prop_types_1.default.oneOfType([prop_types_1.default.node,prop_types_1.default.string]),width:prop_types_1.default.string,align:prop_types_1.default.oneOf(["left","right","center"]),valign:prop_types_1.default.oneOf(["top","middle","bottom"]),render:prop_types_1.default.func,className:prop_types_1.default.string,style:prop_types_1.default.object})),dataSource:prop_types_1.default.arrayOf(prop_types_1.default.object),rowKey:prop_types_1.default.string},exports.default=Table;
//# sourceMappingURL=Table.js.map
