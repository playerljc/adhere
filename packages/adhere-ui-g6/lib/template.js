var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";var selectorPrefix="adhere-ui-template",Template=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillReceiveProps=function(t,e){},e.prototype.render=function(){var e=this,t=this.props,r=t.className,n=t.style;t.children;return React.createElement("div",{className:classNames(selectorPrefix,r.split(" ")),style:__assign({},n),ref:function(t){return e.el=t}})},e}(React.Component);Template.defaultProps={className:"",style:{}},Template.propTypes={className:PropTypes.string,style:PropTypes.object};export default Template;
//# sourceMappingURL=template.js.map