"use strict";var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayGroundTabPropTypes=exports.PlayGroundTabDefaultProps=void 0;var react_1=__importDefault(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),Card_1=__importDefault(require("./Card")),CodeTabPanel_1=__importStar(require("./CodeTabPanel")),APlayGround_1=__importStar(require("./APlayGround")),PlayGroundTab=function(r){function e(e){var t=r.call(this,e)||this;return t.state=__assign(__assign({},t.state),{activeKey:e.active}),t}return __extends(e,r),e.prototype.componentWillReceiveProps=function(e){r.prototype.componentWillReceiveProps.call(this,e),this.setState({activeKey:e.active})},e.prototype.renderCodeView=function(){var t=this,e=this.state.expand,r=this.isFirst,n=this.props,a=(n.cardProps,n.id,n.isActive,__rest(n,["cardProps","id","isActive"]));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:r,noMatch:function(){return react_1.default.createElement(Card_1.default,{style:{display:e?"":"none"}},react_1.default.createElement(CodeTabPanel_1.default,__assign({},a,{active:t.state.activeKey,onChange:function(e){return t.setState({activeKey:e})}})))}},function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:e},function(){return react_1.default.createElement(Card_1.default,null,react_1.default.createElement(CodeTabPanel_1.default,__assign({},a,{active:t.state.activeKey,onChange:function(e){return t.setState({activeKey:e})}})))})})},e.prototype.getClipboardText=function(){var e=this.props.config,t=this.state.activeKey;return Promise.resolve(null===(e=e.find(function(e){return e.key===t}))||void 0===e?void 0:e.codeText)},e}(APlayGround_1.default);exports.PlayGroundTabDefaultProps=__assign(__assign({},APlayGround_1.APlayGroundDefaultProps),CodeTabPanel_1.CodeTabPanelDefaultProps),exports.PlayGroundTabPropTypes=__assign(__assign({},APlayGround_1.APlayGroundPropTypes),CodeTabPanel_1.CodeTabPanelPropTypes),PlayGroundTab.defaultProps=exports.PlayGroundTabDefaultProps,PlayGroundTab.propTypes=exports.PlayGroundTabPropTypes,exports.default=PlayGroundTab;
//# sourceMappingURL=PlayGroundTab.js.map
