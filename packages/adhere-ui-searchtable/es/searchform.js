import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.split.js";import{__assign,__extends,__spreadArray}from"tslib";import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import SearchFormRow from"./searchformrow";var selectorPrefix="adhere-ui-searchform",SearchForm=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype.render=function(){var e=this.props,r=e.className,s=e.style,e=e.children;return React.createElement("table",{className:classNames.apply(void 0,__spreadArray([selectorPrefix],(r||"").split(/\s+/),!1)),style:__assign({},s||{})},e)},r.SearchFormRow=SearchFormRow,r}(React.Component);SearchForm.defaultProps={className:"",style:{}},SearchForm.propTypes={className:PropTypes.string,style:PropTypes.object};export default SearchForm;
//# sourceMappingURL=searchform.js.map
