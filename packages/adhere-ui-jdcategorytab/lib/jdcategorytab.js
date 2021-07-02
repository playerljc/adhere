var __extends=this&&this.__extends||function(){var s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import IScroll from"iscroll/build/iscroll";import JdCategoryTabItem from"./item";import{JdCategoryContext as JdCategoryContext}from"./context";var selectorPrefix="adhere-ui-jdcategorytab",JdCategoryTab=function(t){function e(e){e=t.call(this,e)||this;return e.ease=IScroll.utils.ease,e.state={activeKey:e.props.activeKey},e}return __extends(e,t),e.prototype.componentDidMount=function(){this.initMenuScroll()},e.prototype.componentWillReceiveProps=function(e,t){e.activeKey!==this.state.activeKey&&this.setState({activeKey:e.activeKey})},e.prototype.componentDidUpdate=function(e,t,n){t.activeKey!==this.state.activeKey&&this.scrollTo(this.state.activeKey)},e.prototype.initMenuScroll=function(){this.scroll=new IScroll(this.menuEl,{mouseWheel:!0,click:!0}),this.menuEl.addEventListener("touchmove",function(e){e.preventDefault()})},e.prototype.findElByKey=function(t){var e=this.props.menuData.findIndex(function(e){return e.key===t});console.log("index",e);var n=Array.from(null===(n=this.menuInnerEl)||void 0===n?void 0:n.querySelectorAll("."+selectorPrefix+"-menu-item"));return n.length?n[e]:null},e.prototype.scrollTo=function(e,t,n){var s=this;void 0===t&&(t=250),n=n||this.ease.circular;var r=!0;(r=this.props.onBeforeChange?this.props.onBeforeChange(this.state.activeKey,e):r)&&(console.log(this.state.activeKey,e,t),this.scroll.scrollToElement(this.findElByKey(e),t,null,null,n),setTimeout(function(){console.log("setTimeout"),s.setState({activeKey:e},function(){console.log("setTimeoutEnd"),s.props.onChange&&s.props.onChange(e)})},t))},e.prototype.renderMenu=function(){var n=this,e=this.props,t=e.menuData,s=e.menuItemClassName,r=e.menuItemStyle,o=e.renderMenuItem,a=this.state.activeKey;return t.map(function(t){return o?React.createElement("li",{key:t.key,className:classNames(selectorPrefix+"-menu-item",a===t.key?"active":null,s.split(" ")),style:__assign({},r)},React.createElement("a",{onClick:function(e){n.scrollTo(t.key)}},o(t))):React.createElement("li",{key:t.key,className:classNames(selectorPrefix+"-menu-item",a===t.key?"active":null,s.split(" ")),style:__assign({},r)},React.createElement("a",{onClick:function(e){n.scrollTo(t.key)}},t.name))})},e.prototype.render=function(){var t=this,e=this.props,n=e.className,s=e.style,r=e.menuClassName,o=e.menuStyle,a=e.menuInnerClassName,i=e.menuInnerStyle,l=e.tabClassName,c=e.tabStyle,e=e.children;return React.createElement(JdCategoryContext.Provider,{value:{activeKey:this.state.activeKey}},React.createElement("div",{className:classNames(selectorPrefix,n.split(" ")),style:__assign({},s),ref:function(e){return t.el=e}},React.createElement("div",{ref:function(e){return t.menuEl=e},className:classNames(selectorPrefix+"-menu",r.split(" ")),style:__assign({},o)},React.createElement("ul",{ref:function(e){return t.menuInnerEl=e},className:classNames(selectorPrefix+"-menu-inner",a.split(" ")),style:__assign({},i)},this.renderMenu())),React.createElement("ul",{className:classNames(selectorPrefix+"-tab",l.split(" ")),style:__assign({},c)},e)))},e.Item=JdCategoryTabItem,e}(React.Component);JdCategoryTab.defaultProps={className:"",style:{},menuClassName:"",menuStyle:{},menuInnerClassName:"",menuInnerStyle:{},tabClassName:"",tabStyle:{},menuItemClassName:"",menuItemStyle:{},menuData:[],activeKey:"",renderMenuItem:void 0,onBeforeChange:function(){return!0},onChange:function(){}},JdCategoryTab.propTypes={className:PropTypes.string,style:PropTypes.object,menuClassName:PropTypes.string,menuStyle:PropTypes.object,menuInnerClassName:PropTypes.string,menuInnerStyle:PropTypes.object,tabClassName:PropTypes.string,tabStyle:PropTypes.object,menuItemClassName:PropTypes.string,menuItemStyle:PropTypes.object,menuData:PropTypes.arrayOf(PropTypes.shape({key:PropTypes.string,name:PropTypes.string,properties:PropTypes.object})),activeKey:PropTypes.string,renderMenuItem:PropTypes.func,onBeforeChange:PropTypes.func,onChange:PropTypes.func};export default JdCategoryTab;
//# sourceMappingURL=jdcategorytab.js.map
