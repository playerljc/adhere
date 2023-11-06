import _Empty from"antd/es/empty";var __extends=this&&this.__extends||function(){var r=function(t,n){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,n){t.__proto__=n}:function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}))(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();import PropTypes from"prop-types";import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Suspense from"./Suspense";var SuspenseAsync=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={loading:!1},t}return __extends(t,n),t.prototype.showLoading=function(){return this.state.loading},t.prototype.renderInner=function(){var t=this.props,n=t.isEmpty,e=t.renderEmpty,r=t.children;return React.createElement(ConditionalRender,{conditional:!n(),noMatch:function(){return e?e():React.createElement(_Empty,null)}},function(){return r})},t.prototype.reset=function(){var t=this;return new Promise(function(n){t.isFirst=!0,t.isFirstLoading=!1,t.fetchData().then(function(t){return n(t)}).catch(function(){return n(null)})})},t.prototype.fetchData=function(){var r=this;return new Promise(function(e){r.props.fetchData?r.setState({loading:!0},function(){var t,n;null!=(n=null==(t=null==(t=null==(n=null==r?void 0:r.props)?void 0:n.fetchData)?void 0:t.call(n))?void 0:t.then(function(t){r.setState({loading:!1},function(){return e(t)})}))&&n.catch(function(){r.setState({loading:!1},function(){return e(null)})})}):(r.setState({loading:!1}),e(null))})},t}(Suspense);SuspenseAsync.defaultProps={},SuspenseAsync.propTypes={firstLoading:PropTypes.node,isEmpty:PropTypes.func.isRequired,renderEmpty:PropTypes.func,fetchData:PropTypes.func};export default SuspenseAsync;
//# sourceMappingURL=Async.js.map
