import _Empty from"antd/es/empty";var __extends=this&&this.__extends||function(){var o=function(t,n){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,n){t.__proto__=n}:function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}))(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();import PropTypes from"prop-types";import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Suspense from"./Suspense";var SuspenseSync=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={loading:!0},t.isLoading=!0,t}return __extends(t,n),t.prototype.componentWillReceiveProps=function(t){var n=this,e=this.props.data;this.isLoading&&this.isDataDirty(e,t.data)&&this.setState({loading:!1},function(){n.isLoading=!1})},t.prototype.isDataDirty=function(t,n){return!Object.is(t,n)},t.prototype.reset=function(){var n=this;return new Promise(function(t){n.isFirst=!0,n.isFirstLoading=!1,n.isLoading=!0,n.setState({loading:!0},function(){return t()})})},t.prototype.showLoading=function(){return this.state.loading},t.prototype.renderInner=function(){var t=this.props,n=t.isEmpty,e=t.renderEmpty,o=t.children;return React.createElement(ConditionalRender,{conditional:!n(),noMatch:function(){return e?e():React.createElement(_Empty,null)}},function(){return o})},t.prototype.fetchData=function(){},t.displayName="SuspenseSync",t}(Suspense);SuspenseSync.defaultProps={},SuspenseSync.propTypes={firstLoading:PropTypes.node,isEmpty:PropTypes.func.isRequired,renderEmpty:PropTypes.func,data:PropTypes.object};export default SuspenseSync;
//# sourceMappingURL=Sync.js.map
