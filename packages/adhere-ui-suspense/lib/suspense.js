"use strict";var __extends=function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),classnames_1=__importDefault(require("classnames")),prop_types_1=__importDefault(require("prop-types")),react_1=__importDefault(require("react")),adhere_ui_spin_1=__importDefault(require("@baifendian/adhere-ui-spin")),selectorPrefix="adhere-ui-suspense",Suspense=function(t){function r(e){e=t.call(this,e)||this;return e.isFirst=!0,e.isFirstLoading=!1,e}return __extends(r,t),r.prototype.componentWillReceiveProps=function(e){e.reset&&(this.isFirst=!0,this.isFirstLoading=!1,this.forceUpdate())},r.prototype.componentDidMount=function(){var e;null!=(e=null==this?void 0:this.fetchData)&&e.call(this)},r.renderNormalFirstLoading=function(){for(var e=[],t=0;t<7;t++)e.push(react_1.default.createElement(antd_1.Skeleton,{key:t+1,loading:!0,active:!0,avatar:!0}));return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-loading")},e)},r.prototype.renderFirstLoading=function(){var e=this.props.firstLoading;return null!=e?e:r.renderNormalFirstLoading()},r.prototype.renderNormal=function(){var e,t,r=this.renderInner();return this.props.renderNormalLoading?null==(t=(e=this.props).renderNormalLoading)?void 0:t.call(e,{children:r,loading:this.showLoading()}):react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(adhere_ui_spin_1.default,{size:"large",spinning:this.showLoading()}),r)},r.prototype.renderDispatch=function(){var e=this.showLoading();return this.isFirst&&!this.isFirstLoading&&e&&(this.isFirstLoading=!0),this.isFirst&&this.isFirstLoading&&!e&&(this.isFirst=!1,this.isFirstLoading=!1),this.isFirst?this.renderFirstLoading():this.renderNormal()},r.prototype.render=function(){var e;return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=(e=this.props.className)?e:""),style:null!=(e=this.props.style)?e:{}},this.renderDispatch())},r}(react_1.default.PureComponent);Suspense.defaultProps={className:"",style:{},reset:!1,firstLoading:null},Suspense.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,reset:prop_types_1.default.bool,firstLoading:prop_types_1.default.node,renderNormalLoading:prop_types_1.default.func},exports.default=Suspense;
//# sourceMappingURL=suspense.js.map
