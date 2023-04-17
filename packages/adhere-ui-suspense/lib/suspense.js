"use strict";var __extends=function(){var s=function(t,e){return(s=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__importDefault=function(t){return t&&t.__esModule?t:{default:t}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),classnames_1=__importDefault(require("classnames")),prop_types_1=__importDefault(require("prop-types")),react_1=__importDefault(require("react")),selectorPrefix="adhere-ui-suspense",Suspense=function(e){function r(t){t=e.call(this,t)||this;return t.isFirst=!0,t.isFirstLoading=!1,t}return __extends(r,e),r.prototype.componentWillReceiveProps=function(t){t.reset&&(this.isFirst=!0,this.isFirstLoading=!1,this.forceUpdate())},r.prototype.componentDidMount=function(){var t;null!=(t=null==this?void 0:this.fetchData)&&t.call(this)},r.renderNormalFirstLoading=function(){for(var t=[],e=0;e<7;e++)t.push(react_1.default.createElement(antd_1.Skeleton,{key:e+1,loading:!0,active:!0,avatar:!0}));return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-loading")},t)},r.prototype.renderFirstLoading=function(){var t=this.props.firstLoading;return null!=t?t:r.renderNormalFirstLoading()},r.prototype.renderNormal=function(){return react_1.default.createElement(antd_1.Spin,{size:"large",spinning:this.showLoading()},this.renderInner())},r.prototype.renderDispatch=function(){var t=this.showLoading();return this.isFirst&&!this.isFirstLoading&&t&&(this.isFirstLoading=!0),this.isFirst&&this.isFirstLoading&&!t&&(this.isFirst=!1,this.isFirstLoading=!1),this.isFirst?this.renderFirstLoading():this.renderNormal()},r.prototype.render=function(){return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,this.props.className||""),style:this.props.style||{}},this.renderDispatch())},r}(react_1.default.PureComponent);Suspense.defaultProps={className:"",style:{},reset:!1,firstLoading:null},Suspense.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,reset:prop_types_1.default.bool,firstLoading:prop_types_1.default.node},exports.default=Suspense;
//# sourceMappingURL=suspense.js.map
