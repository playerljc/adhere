"use strict";var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),classnames_1=__importDefault(require("classnames")),prop_types_1=__importDefault(require("prop-types")),MenuItem_1=__importDefault(require("./MenuItem")),ContextMenuContext_1=require("./ContextMenuContext"),selectorPrefix="adhere-ui-contextmenu-submenu",SubMenu=function(t){function e(e){e=t.call(this,e)||this;return e.renderInner=e.renderInner.bind(e),e}return __extends(e,t),e.prototype.getStyle=function(){return{width:this.config.width+"px",zIndex:199999}},e.prototype.renderItems=function(){var e=this.props.data;return(void 0===e?[]:e).map(function(e){return react_1.default.createElement(MenuItem_1.default,{key:e.id,data:e})})},e.prototype.renderInner=function(e){var t=e.config,r=this.props,e=r.className,r=r.style;return this.config=t,react_1.default.createElement("ul",{className:classnames_1.default(selectorPrefix,(e||"").split(/\s+/)),style:__assign(__assign({},r||{}),this.getStyle())},this.renderItems())},e.prototype.render=function(){return react_1.default.createElement(ContextMenuContext_1.ProviderContext.Consumer,null,this.renderInner)},e}(react_1.default.PureComponent);SubMenu.defaultProps={data:[],className:"",style:{}},SubMenu.propTypes={data:prop_types_1.default.arrayOf(prop_types_1.default.shape({name:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.node]),icon:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.node]),disabled:prop_types_1.default.bool,separation:prop_types_1.default.bool,attribute:prop_types_1.default.object,children:prop_types_1.default.array,className:prop_types_1.default.string,style:prop_types_1.default.object,subMenuClassName:prop_types_1.default.string,subMenuStyle:prop_types_1.default.object})),className:prop_types_1.default.string,style:prop_types_1.default.object},exports.default=SubMenu;
//# sourceMappingURL=SubMenu.js.map
