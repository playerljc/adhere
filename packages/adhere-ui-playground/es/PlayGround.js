var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};import classNames from"classnames";import React from"react";import PropTypes from"prop-types";import PlayGroundExt from"component-playground";import copy from"copy-to-clipboard";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Intl from"@baifendian/adhere-util-intl";import Card,{cardPropTypes}from"./Card";import Message from"./Message";import Constant from"./constant";var selectPrefix="adhere-ui-playground",PlayGround=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={expand:e.props.expand},e.actionConfig=[e.renderClipboardAction,e.renderExpandAction],e}return __extends(e,t),e.prototype.componentWillReceiveProps=function(e){this.setState({expand:e.expand})},e.prototype.renderAction=function(){var t=this;return this.actionConfig.map(function(e){return e.call(t)})},e.prototype.renderClipboardAction=function(){var e=this.props.codeText;return React.createElement("div",{onClick:function(){copy(e),Message.success(Intl.v("复制成功"))}},React.createElement("img",{title:Intl.v("复制"),className:selectPrefix+"-action-btn",src:Constant.CopyOutlined,alt:Intl.v("复制")}))},e.prototype.renderExpandAction=function(){var e=this,t=this.state.expand;return React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return React.createElement("div",{onClick:function(){e.setState({expand:!0})}},React.createElement("img",{title:Intl.v("收起"),className:selectPrefix+"-action-btn",src:Constant.DownSquareOutlined,alt:Intl.v("收起")}))}},function(){return React.createElement("div",{onClick:function(){e.setState({expand:!1})}},React.createElement("img",{title:Intl.v("展开"),className:selectPrefix+"-action-btn",src:Constant.UpSquareOutlined,alt:Intl.v("展开")}))})},e.prototype.renderCodeView=function(){var e=this.state.expand,t=this.props,n=(t.cardProps,__rest(t,["cardProps"]));return React.createElement(ConditionalRender,{conditional:e},function(){return React.createElement(Card,null,React.createElement(PlayGroundExt,__assign({docClass:null,propDescriptionMap:null,scope:{React:React},collapsableCode:!1,initiallyExpanded:!1,es6Console:!1},n)))})},e.prototype.render=function(){var e=this.props,t=e.children,n=e.cardProps,r=e.isActive,o=e.id,e={};return o&&(e.id=o),React.createElement("div",__assign({},e,{className:classNames(selectPrefix,r?selectPrefix+"-active":"")}),React.createElement(Card,__assign({actions:this.renderAction()},n||{}),t),this.renderCodeView())},e}(React.Component),PlayGroundDefaultProps={id:void 0,codeText:"",expand:!1,cardProps:null,isActive:!1},PlayGroundPropTypes={id:PropTypes.string,codeText:PropTypes.string,expand:PropTypes.bool,cardProps:PropTypes.shape(cardPropTypes),isActive:PropTypes.bool};PlayGround.defaultProps=PlayGroundDefaultProps,PlayGround.propTypes=PlayGroundPropTypes;export default PlayGround;export{PlayGroundDefaultProps,PlayGroundPropTypes};
//# sourceMappingURL=PlayGround.js.map
