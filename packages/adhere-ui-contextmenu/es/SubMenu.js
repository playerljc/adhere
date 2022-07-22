var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import React from"react";import classNames from"classnames";import PropTypes from"prop-types";import MenuItem from"./MenuItem";import{ProviderContext}from"./ContextMenuContext";var selectorPrefix="adhere-ui-contextmenu-submenu",SubMenu=function(t){function e(e){e=t.call(this,e)||this;return e.renderInner=e.renderInner.bind(e),e}return __extends(e,t),e.prototype.getStyle=function(){return{width:this.config.width+"px",zIndex:199999}},e.prototype.renderItems=function(){var e=this.props.data;return(void 0===e?[]:e).map(function(e){return React.createElement(MenuItem,{key:e.id,data:e})})},e.prototype.renderInner=function(e){var t=e.config,r=this.props,e=r.className,r=r.style;return this.config=t,React.createElement("ul",{className:classNames(selectorPrefix,(e||"").split(/\s+/)),style:__assign(__assign({},r||{}),this.getStyle())},this.renderItems())},e.prototype.render=function(){return React.createElement(ProviderContext.Consumer,null,this.renderInner)},e}(React.PureComponent);SubMenu.defaultProps={data:[],className:"",style:{}},SubMenu.propTypes={data:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),icon:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),disabled:PropTypes.bool,separation:PropTypes.bool,attribute:PropTypes.object,children:PropTypes.array,className:PropTypes.string,style:PropTypes.object,subMenuClassName:PropTypes.string,subMenuStyle:PropTypes.object})),className:PropTypes.string,style:PropTypes.object};export default SubMenu;
//# sourceMappingURL=SubMenu.js.map
