var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import React from"react";import ReactDOM from"react-dom";import classNames from"classnames";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import SubMenu from"./SubMenu";import{ProviderContext}from"./ContextMenuContext";var selectorPrefix="adhere-ui-contextmenu-menuitem",MenuItem=function(t){function e(e){var a=t.call(this,e)||this;return a.onClick=function(e){e.stopPropagation();var t=a.props.data,n=t.id,r=t.attribute,o=t.children,e=t.disabled,t=a.config.handler;if(e||0<o.length)return!1;t&&(t(n,r),ReactDOM.unmountComponentAtNode(a.el))},a.renderInner=a.renderInner.bind(a),a}return __extends(e,t),e.prototype.renderIcon=function(){var e=this.props.data.icon;return React.createElement(ConditionalRender,{conditional:"string"==typeof e,noMatch:function(){return React.createElement("span",{className:classNames(selectorPrefix+"-icon")},e)}},function(){return React.createElement("span",{className:classNames(selectorPrefix+"-icon",e)})})},e.prototype.renderName=function(){var e=this.props.data.name;return React.createElement("span",{className:selectorPrefix+"-name"},e)},e.prototype.renderMore=function(){var e=this.props.data.children;return React.createElement(ConditionalRender,{conditional:0!==e.length},function(){return React.createElement("span",{className:selectorPrefix+"-more fa fa-caret-right"})})},e.prototype.renderSubMenu=function(){var e=this.props.data,t=e.children,n=e.subMenuClassName,r=e.subMenuStyle;return React.createElement(ConditionalRender,{conditional:0!==t.length},function(){return React.createElement(SubMenu,{data:t,className:n,style:r})})},e.prototype.renderInner=function(e){var t=this,n=e.config,r=e.el,o=this.props.data,a=o.separation,e=o.disabled,s=void 0!==e&&e,i=o.className,c=o.style;return this.config=n,this.el=r,React.createElement(ConditionalRender,{conditional:!a,noMatch:function(){return React.createElement("li",{className:selectorPrefix+"-separation"})}},function(){return React.createElement("li",{className:classNames(selectorPrefix,s?"disabled":"",(i||"").split(" ")),style:__assign({},c||{}),onClick:t.onClick},t.renderIcon(),t.renderName(),t.renderMore(),t.renderSubMenu())})},e.prototype.render=function(){return React.createElement(ProviderContext.Consumer,null,this.renderInner)},e}(React.PureComponent);MenuItem.propTypes={data:PropTypes.shape({name:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),icon:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),disabled:PropTypes.bool,separation:PropTypes.bool,attribute:PropTypes.object,children:PropTypes.array,className:PropTypes.string,style:PropTypes.object,subMenuClassName:PropTypes.string,subMenuStyle:PropTypes.object})};export default MenuItem;
//# sourceMappingURL=MenuItem.js.map
