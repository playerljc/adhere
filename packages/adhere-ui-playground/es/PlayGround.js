var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Card from"./Card";import CodePanel,{CodePanelPropTypes,CodePanelDefaultProps}from"./CodePanel";import APlayGround,{APlayGroundDefaultProps,APlayGroundPropTypes}from"./APlayGround";var PlayGround=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.renderCodeView=function(){var e=this.state.expand,t=this.isFirst,n=this.props,r=(n.cardProps,n.id,n.isActive,__rest(n,["cardProps","id","isActive"]));return React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return React.createElement(Card,{style:{display:e?"":"none"}},React.createElement(CodePanel,__assign({},r)))}},function(){return React.createElement(ConditionalRender,{conditional:e},function(){return React.createElement(Card,null,React.createElement(CodePanel,__assign({},r)))})})},t}(APlayGround);PlayGround.defaultProps=__assign(__assign({},APlayGroundDefaultProps),CodePanelDefaultProps),PlayGround.propTypes=__assign(__assign({},APlayGroundPropTypes),CodePanelPropTypes);export default PlayGround;
//# sourceMappingURL=PlayGround.js.map
