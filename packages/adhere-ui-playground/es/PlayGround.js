var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import APlayGround,{APlayGroundDefaultProps,APlayGroundPropTypes}from"./APlayGround";import Card from"./Card";import CodePanel,{CodePanelDefaultProps,CodePanelPropTypes}from"./CodePanel";var PlayGround=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.renderCodeView=function(){var e=this.state.expand,t=this.isFirst,r=this.props,n=(r.cardProps,r.id,r.isActive,__rest(r,["cardProps","id","isActive"]));return React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return React.createElement(Card,{style:{display:e?"":"none"}},React.createElement(CodePanel,__assign({},n)))}},function(){return React.createElement(ConditionalRender,{conditional:!!e},function(){return React.createElement(Card,null,React.createElement(CodePanel,__assign({},n)))})})},t.prototype.getClipboardText=function(){return Promise.resolve(this.props.codeText)},t}(APlayGround);PlayGround.defaultProps=__assign(__assign({},APlayGroundDefaultProps),CodePanelDefaultProps),PlayGround.propTypes=__assign(__assign({},APlayGroundPropTypes),CodePanelPropTypes);export default PlayGround;
//# sourceMappingURL=PlayGround.js.map
