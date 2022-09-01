"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),prop_types_1=tslib_1.__importDefault(require("prop-types")),antd_1=require("antd"),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),suspense_1=tslib_1.__importDefault(require("./suspense")),SuspenseAsync=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!1},e}return tslib_1.__extends(e,t),e.prototype.showLoading=function(){return this.state.loading},e.prototype.renderInner=function(){var e=this.props,t=e.isEmpty,r=e.renderEmpty,n=e.children;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!t(),noMatch:function(){return r?r():react_1.default.createElement(antd_1.Empty,null)}},function(){return n})},e.prototype.reset=function(){var t=this;return new Promise(function(e){t.isFirst=!0,t.isFirstLoading=!1,t.fetchData().then(function(){return e()}).catch(function(){return e()})})},e.prototype.fetchData=function(){var n=this;return new Promise(function(e){var t,r;return n.props.fetchData?(n.setState({loading:!0}),null===(r=null===(r=null===(t=null===(r=null==n?void 0:n.props)||void 0===r?void 0:r.fetchData)||void 0===t?void 0:t.call(r))||void 0===r?void 0:r.then(function(){n.setState({loading:!1},function(){return e()})}))||void 0===r?void 0:r.catch(function(){n.setState({loading:!1},function(){return e()})})):(n.setState({loading:!1}),void e())})},e}(suspense_1.default);SuspenseAsync.defaultProps={},SuspenseAsync.propTypes={firstLoading:prop_types_1.default.node,isEmpty:prop_types_1.default.func.isRequired,renderEmpty:prop_types_1.default.func,fetchData:prop_types_1.default.func},exports.default=SuspenseAsync;
//# sourceMappingURL=async.js.map
