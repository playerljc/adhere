import _Spin from"antd/es/spin";import _Skeleton from"antd/es/skeleton";var __extends=this&&this.__extends||function(){var s=function(t,e){return(s=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();import classNames from"classnames";import PropTypes from"prop-types";import React from"react";var selectorPrefix="adhere-ui-suspense",Suspense=function(e){function r(t){t=e.call(this,t)||this;return t.isFirst=!0,t.isFirstLoading=!1,t}return __extends(r,e),r.prototype.componentWillReceiveProps=function(t){t.reset&&(this.isFirst=!0,this.isFirstLoading=!1,this.forceUpdate())},r.prototype.componentDidMount=function(){var t;null!=(t=null==this?void 0:this.fetchData)&&t.call(this)},r.renderNormalFirstLoading=function(){for(var t=[],e=0;e<7;e++)t.push(React.createElement(_Skeleton,{key:e+1,loading:!0,active:!0,avatar:!0}));return React.createElement("div",{className:"".concat(selectorPrefix,"-loading")},t)},r.prototype.renderFirstLoading=function(){var t=this.props.firstLoading;return null!=t?t:r.renderNormalFirstLoading()},r.prototype.renderNormal=function(){var t,e,r=this.renderInner();return this.props.renderNormalLoading?null==(e=(t=this.props).renderNormalLoading)?void 0:e.call(t,{children:r,loading:this.showLoading()}):React.createElement(_Spin,{size:"large",spinning:this.showLoading()},r)},r.prototype.renderDispatch=function(){var t=this.showLoading();return this.isFirst&&!this.isFirstLoading&&t&&(this.isFirstLoading=!0),this.isFirst&&this.isFirstLoading&&!t&&(this.isFirst=!1,this.isFirstLoading=!1),this.isFirst?this.renderFirstLoading():this.renderNormal()},r.prototype.render=function(){var t;return React.createElement("div",{className:classNames(selectorPrefix,null!=(t=this.props.className)?t:""),style:null!=(t=this.props.style)?t:{}},this.renderDispatch())},r}(React.PureComponent);Suspense.defaultProps={className:"",style:{},reset:!1,firstLoading:null},Suspense.propTypes={className:PropTypes.string,style:PropTypes.object,reset:PropTypes.bool,firstLoading:PropTypes.node,renderNormalLoading:PropTypes.func};export default Suspense;
//# sourceMappingURL=suspense.js.map
