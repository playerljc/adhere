var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};import classNames from"classnames";import copy from"copy-to-clipboard";import PropTypes from"prop-types";import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Intl from"@baifendian/adhere-util-intl";import Card,{cardPropTypes}from"./Card";import Message from"./Message";import Constant from"./constant";var selectPrefix="adhere-ui-playground",APlayGround=function(e){function t(t){t=e.call(this,t)||this;return t.isFirst=!0,t.clipboardRef=React.createRef(),t.actionConfig=[t.renderClipboardAction,t.renderExpandAction],t.state={expand:t.props.expand,config:[],activeKey:""},t}return __extends(t,e),t.prototype.componentWillReceiveProps=function(t){this.setState({expand:t.expand})},t.prototype.componentWillUpdate=function(t,e,n){this.isFirst&&e.expand&&(this.isFirst=!1)},t.prototype.renderAction=function(){var e=this;return this.actionConfig.map(function(t){return t.call(e)})},t.prototype.renderClipboardAction=function(){var e=this;return React.createElement("div",{ref:this.clipboardRef,onClick:function(t){e.getClipboardText(t).then(function(t){copy(t),Message.success(Intl.v("复制成功"))})}},React.createElement("img",{title:Intl.v("复制"),className:selectPrefix+"-action-btn",src:Constant.CopyOutlined,alt:Intl.v("复制")}))},t.prototype.renderExpandAction=function(){var t=this,e=this.state.expand;return React.createElement(ConditionalRender,{conditional:!!e,noMatch:function(){return React.createElement("div",{onClick:function(){return t.setState({expand:!0})}},React.createElement("img",{title:Intl.v("收起"),className:selectPrefix+"-action-btn",src:Constant.DownSquareOutlined,alt:Intl.v("收起")}))}},function(){return React.createElement("div",{onClick:function(){return t.setState({expand:!1})}},React.createElement("img",{title:Intl.v("展开"),className:selectPrefix+"-action-btn",src:Constant.UpSquareOutlined,alt:Intl.v("展开")}))})},t.prototype.render=function(){var t=this.props,e=t.children,n=t.cardProps,r=t.isActive,t=t.id;return React.createElement("div",__assign({},{id:t},{className:classNames(selectPrefix,r?selectPrefix+"-active":"")}),React.createElement(Card,__assign({actions:this.renderAction()},n||{}),e),this.renderCodeView())},t}(React.Component),APlayGroundDefaultProps={codeText:"",id:"",cardProps:{},isActive:!1,expand:!1},APlayGroundPropTypes={id:PropTypes.string,cardProps:PropTypes.shape(cardPropTypes),isActive:PropTypes.bool,expand:PropTypes.bool};APlayGround.defaultProps=APlayGroundDefaultProps,APlayGround.propTypes=APlayGroundPropTypes;export default APlayGround;export{APlayGroundDefaultProps,APlayGroundPropTypes};
//# sourceMappingURL=APlayGround.js.map
