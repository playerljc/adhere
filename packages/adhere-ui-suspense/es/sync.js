import _Empty from"antd/es/empty";import _typeof from"@babel/runtime/helpers/typeof";var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();import PropTypes from"prop-types";import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Util from"@baifendian/adhere-util";import Suspense from"./suspense";var SuspenseSync=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0},t.isLoading=!0,t}return __extends(t,e),t.prototype.componentWillReceiveProps=function(t){var e=this,n=this.props.data;this.isLoading&&this.isDataDirty(n,t.data)&&this.setState({loading:!1},function(){e.isLoading=!1})},t.prototype.isDataDirty=function(t,n){return _typeof(t)!==_typeof(n)||(Util.isObject(t)&&Util.isObject(n)?!Object.is(t,n):!(!Util.isArray(t)||!Util.isArray(n))&&(t.length!==n.length||t.some(function(t,e){return!Object.is(t,n[e])})))},t.prototype.reset=function(){var e=this;return new Promise(function(t){e.isFirst=!0,e.isFirstLoading=!1,e.isLoading=!0,e.setState({loading:!0},function(){return t()})})},t.prototype.showLoading=function(){return this.state.loading},t.prototype.renderInner=function(){var t=this.props,e=t.isEmpty,n=t.renderEmpty,r=t.children;return React.createElement(ConditionalRender,{conditional:!e(),noMatch:function(){return n?n():React.createElement(_Empty,null)}},function(){return r})},t.prototype.fetchData=function(){},t}(Suspense);SuspenseSync.defaultProps={},SuspenseSync.propTypes={firstLoading:PropTypes.node,isEmpty:PropTypes.func.isRequired,renderEmpty:PropTypes.func};export default SuspenseSync;
//# sourceMappingURL=sync.js.map
