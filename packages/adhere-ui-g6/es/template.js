var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};import classNames from"classnames";import PropTypes from"prop-types";import React from"react";var selectorPrefix="adhere-ui-template",Template=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillReceiveProps=function(t,e){},e.prototype.render=function(){var e=this,t=this.props,r=t.className,o=t.style;t.children;return React.createElement("div",{className:classNames(selectorPrefix,r.split(/\s+/)),style:__assign({},o),ref:function(t){return e.el=t}})},e}(React.Component);Template.defaultProps={className:"",style:{}},Template.propTypes={className:PropTypes.string,style:PropTypes.object};export default Template;
//# sourceMappingURL=template.js.map
