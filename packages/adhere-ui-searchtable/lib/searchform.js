"use strict";require("core-js/modules/es.object.define-property.js");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");var _tslib=require("tslib"),_react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_classnames=_interopRequireDefault(require("classnames")),_searchformrow=_interopRequireDefault(require("./searchformrow")),selectorPrefix="adhere-ui-searchform",SearchForm=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return(0,_tslib.__extends)(r,e),r.prototype.render=function(){var e=this.props,r=e.className,s=e.style,e=e.children;return _react.default.createElement("table",{className:_classnames.default.apply(void 0,(0,_tslib.__spreadArray)([selectorPrefix],(r||"").split(/\s+/),!1)),style:(0,_tslib.__assign)({},s||{})},e)},r.SearchFormRow=_searchformrow.default,r}(_react.default.Component);SearchForm.defaultProps={className:"",style:{}},SearchForm.propTypes={className:_propTypes.default.string,style:_propTypes.default.object};var _default=SearchForm;exports.default=_default;
//# sourceMappingURL=searchform.js.map
