"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),prop_types_1=tslib_1.__importDefault(require("prop-types")),antd_1=require("antd"),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),suspense_1=tslib_1.__importDefault(require("./suspense")),SuspenseSync=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!0},e.isLoading=!0,e}return tslib_1.__extends(e,t),e.prototype.componentWillReceiveProps=function(e){var t=this,r=this.props.data;this.isLoading&&JSON.stringify(e.data||[])!==JSON.stringify(r||[])&&this.setState({loading:!1},function(){t.isLoading=!1})},e.prototype.reset=function(){var t=this;return new Promise(function(e){t.isFirst=!0,t.isFirstLoading=!1,t.isLoading=!0,t.setState({loading:!0},function(){return e()})})},e.prototype.showLoading=function(){return this.state.loading},e.prototype.renderInner=function(){var e=this.props,t=e.isEmpty,r=e.renderEmpty,n=e.children;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!t(),noMatch:function(){return r?r():react_1.default.createElement(antd_1.Empty,null)}},function(){return n})},e.prototype.fetchData=function(){},e}(suspense_1.default);SuspenseSync.defaultProps={},SuspenseSync.propTypes={firstLoading:prop_types_1.default.node,data:prop_types_1.default.oneOfType([prop_types_1.default.object,prop_types_1.default.array]).isRequired,isEmpty:prop_types_1.default.func.isRequired,renderEmpty:prop_types_1.default.func},exports.default=SuspenseSync;
//# sourceMappingURL=sync.js.map