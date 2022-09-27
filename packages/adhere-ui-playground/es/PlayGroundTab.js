var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import APlayGround,{APlayGroundDefaultProps,APlayGroundPropTypes}from"./APlayGround";import Card from"./Card";import CodeTabPanel,{CodeTabPanelDefaultProps,CodeTabPanelPropTypes}from"./CodeTabPanel";var PlayGroundTab=function(r){function e(e){var t=r.call(this,e)||this;return Object.assign(t.state,{activeKey:e.active}),t}return __extends(e,r),e.prototype.componentWillReceiveProps=function(e){r.prototype.componentWillReceiveProps.call(this,e),this.setState({activeKey:e.active})},e.prototype.renderCodeView=function(){var t=this,e=this.state,r=e.expand,n=e.activeKey,e=this.isFirst,o=this.props,a=(o.cardProps,o.id,o.isActive,__rest(o,["cardProps","id","isActive"]));return React.createElement(ConditionalRender,{conditional:e,noMatch:function(){return React.createElement(Card,{style:{display:r?"":"none"}},React.createElement(CodeTabPanel,__assign({},a,{active:n,onChange:function(e){return t.setState({activeKey:e})}})))}},function(){return React.createElement(ConditionalRender,{conditional:!!r},function(){return React.createElement(Card,null,React.createElement(CodeTabPanel,__assign({},a,{active:n,onChange:function(e){return t.setState({activeKey:e})}})))})})},e.prototype.getClipboardText=function(){var e=this.props.config,t=this.state.activeKey,e=e.find(function(e){return e.key===t});return Promise.resolve(e?e.codeText:"")},e}(APlayGround),PlayGroundTabDefaultProps=__assign(__assign({},APlayGroundDefaultProps),CodeTabPanelDefaultProps),PlayGroundTabPropTypes=__assign(__assign({},APlayGroundPropTypes),CodeTabPanelPropTypes);PlayGroundTab.defaultProps=PlayGroundTabDefaultProps,PlayGroundTab.propTypes=PlayGroundTabPropTypes;export default PlayGroundTab;export{PlayGroundTabDefaultProps,PlayGroundTabPropTypes};
//# sourceMappingURL=PlayGroundTab.js.map
