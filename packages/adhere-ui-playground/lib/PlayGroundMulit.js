var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import PlaygroundExt from"component-playground";import copy from"copy-to-clipboard";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Intl from"@baifendian/adhere-util-intl";import Card from"./Card";import Message from"./Message";import Constant from"./constant";var selectPrefix="adhere-ui-playground-mulit",PlayGroundMulit=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={expand:e.props.expand},e.actionConfig=[e.renderClipboardAction,e.renderExpandAction],e}return __extends(e,t),e.prototype.componentWillReceiveProps=function(e){this.setState({expand:e.expand})},e.prototype.renderAction=function(){var t=this;return this.actionConfig.map(function(e){return e.call(t)})},e.prototype.renderClipboardAction=function(){var t=this;return React.createElement("div",{onClick:function(){var e=t.props.config;copy(e.map(function(e){return e.codeText}).join("\r\n")),Message.success(Intl.v("复制成功"))}},React.createElement("img",{title:Intl.v("复制"),className:selectPrefix+"-action-btn",src:Constant.CopyOutlined,alt:Intl.v("复制")}))},e.prototype.renderExpandAction=function(){var e=this,t=this.state.expand;return React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return React.createElement("div",{onClick:function(){e.setState({expand:!0})}},React.createElement("img",{title:Intl.v("收起"),className:selectPrefix+"-action-btn",src:Constant.DownSquareOutlined,alt:Intl.v("收起")}))}},function(){return React.createElement("div",{onClick:function(){e.setState({expand:!1})}},React.createElement("img",{title:Intl.v("展开"),className:selectPrefix+"-action-btn",src:Constant.UpSquareOutlined,alt:Intl.v("展开")}))})},e.prototype.renderCodeView=function(e,t){var n={docClass:null,propDescriptionMap:null,scope:{React:React},expand:!1,collapsableCode:!1,initiallyExpanded:!1,es6Console:!1};return React.createElement("div",{key:""+t,className:selectPrefix+"-codeviewwrap"},React.createElement("div",{className:selectPrefix+"-codeviewwrap-title"},e.title),React.createElement("div",{className:selectPrefix+"-codeviewwrap-inner"},React.createElement(PlaygroundExt,__assign({},n,e))))},e.prototype.render=function(){var n=this,e=this.props,t=e.config,r=e.children,e=this.state.expand;return React.createElement("div",{className:classNames(selectPrefix)},React.createElement(Card,{actions:this.renderAction()},r),React.createElement(ConditionalRender,{conditional:e},function(){return React.createElement(Card,null,(t||[]).map(function(e,t){return n.renderCodeView(e,t)}))}))},e}(React.Component);PlayGroundMulit.defaultProps={config:[],expand:!1},PlayGroundMulit.propTypes={config:PropTypes.arrayOf(PropTypes.shape({codeText:PropTypes.string,title:PropTypes.oneOfType([PropTypes.object,PropTypes.string])})),expand:PropTypes.bool};export default PlayGroundMulit;
//# sourceMappingURL=PlayGroundMulit.js.map
