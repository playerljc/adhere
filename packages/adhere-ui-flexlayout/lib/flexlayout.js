"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0;var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),prop_types_1=tslib_1.__importDefault(require("prop-types")),classnames_1=tslib_1.__importDefault(require("classnames")),context_1=require("./context");exports.selectorPrefix="adhere-ui-flexlayout";var FlexLayout=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,r=e.direction,s=e.children,e=e.style;return react_1.default.createElement(context_1.FlexContext.Provider,{value:{direction:r}},react_1.default.createElement("div",{className:classnames_1.default.apply(void 0,tslib_1.__spreadArray([exports.selectorPrefix,"".concat(exports.selectorPrefix,"-").concat(r)],(t||"").split(/\s+/),!1)),style:tslib_1.__assign({},e)},s))},t.Context=context_1.FlexContext,t.selectorPrefix=exports.selectorPrefix,t}(react_1.default.Component);FlexLayout.defaultProps={direction:"vertical",className:"",style:{}},FlexLayout.propTypes={direction:prop_types_1.default.oneOf(["vertical","horizontal"]),className:prop_types_1.default.string,style:prop_types_1.default.object},exports.default=FlexLayout;
//# sourceMappingURL=flexlayout.js.map
