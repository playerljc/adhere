import _Empty from"antd/es/empty";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import{__extends}from"tslib";import React from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Suspense from"./suspense";var SuspenseSync=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!0},e.isLoading=!0,e}return __extends(e,t),e.prototype.componentWillReceiveProps=function(e){var t=this,n=this.props.data;this.isLoading&&JSON.stringify(e.data||[])!==JSON.stringify(n||[])&&this.setState({loading:!1},function(){t.isLoading=!1})},e.prototype.reset=function(){var t=this;return new Promise(function(e){t.isFirst=!0,t.isFirstLoading=!1,t.isLoading=!0,t.setState({loading:!0},function(){return e()})})},e.prototype.showLoading=function(){return this.state.loading},e.prototype.renderInner=function(){var e=this.props,t=e.isEmpty,n=e.renderEmpty,r=e.children;return React.createElement(ConditionalRender,{conditional:!t(),noMatch:function(){return n?n():React.createElement(_Empty,null)}},function(){return r})},e.prototype.fetchData=function(){},e}(Suspense);SuspenseSync.defaultProps={},SuspenseSync.propTypes={firstLoading:PropTypes.node,data:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,isEmpty:PropTypes.func.isRequired,renderEmpty:PropTypes.func};export default SuspenseSync;
//# sourceMappingURL=sync.js.map