var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import PlayGroundExt from"component-playground";import copy from"copy-to-clipboard";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Intl from"@baifendian/adhere-util-intl";import Card from"./Card";import Message from"./Message";import Constant from"./constant";var selectPrefix="adhere-ui-playground",PlayGround=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={expand:e.props.expand},e.actionConfig=[e.renderClipboardAction,e.renderExpandAction],e}return __extends(e,t),e.prototype.componentWillReceiveProps=function(e){this.setState({expand:e.expand})},e.prototype.renderAction=function(){var t=this;return this.actionConfig.map(function(e){return e.call(t)})},e.prototype.renderClipboardAction=function(){var e=this.props.codeText;return React.createElement("div",{onClick:function(){copy(e),Message.success(Intl.v("复制成功"))}},React.createElement("img",{title:Intl.v("复制"),className:selectPrefix+"-action-btn",src:Constant.CopyOutlined,alt:Intl.v("复制")}))},e.prototype.renderExpandAction=function(){var e=this,t=this.state.expand;return React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return React.createElement("div",{onClick:function(){e.setState({expand:!0})}},React.createElement("img",{title:Intl.v("收起"),className:selectPrefix+"-action-btn",src:Constant.DownSquareOutlined,alt:Intl.v("收起")}))}},function(){return React.createElement("div",{onClick:function(){e.setState({expand:!1})}},React.createElement("img",{title:Intl.v("展开"),className:selectPrefix+"-action-btn",src:Constant.UpSquareOutlined,alt:Intl.v("展开")}))})},e.prototype.renderCodeView=function(){var e=this,t=this.state.expand;return React.createElement(ConditionalRender,{conditional:t},function(){return React.createElement(Card,null,React.createElement(PlayGroundExt,__assign({},e.props,{collapsableCode:!1,initiallyExpanded:!1,es6Console:!1})))})},e.prototype.render=function(){var e=this.props.children;return React.createElement("div",{className:selectPrefix},React.createElement(Card,{actions:this.renderAction()},e),this.renderCodeView())},e}(React.Component);PlayGround.defaultProps={docClass:null,codeText:"",collapsableCode:!0,initiallyExpanded:!0,es6Console:!0,propDescriptionMap:null,scope:{React:React},expand:!1},PlayGround.propTypes={docClass:PropTypes.func,codeText:PropTypes.string,collapsableCode:PropTypes.bool,initiallyExpanded:PropTypes.bool,es6Console:PropTypes.bool,propDescriptionMap:PropTypes.object,scope:PropTypes.object,expand:PropTypes.bool};export default PlayGround;
//# sourceMappingURL=PlayGround.js.map
