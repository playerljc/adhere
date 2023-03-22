"use strict";var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayGroundTabPropTypes=exports.PlayGroundTabDefaultProps=void 0,__importDefault(require("react"))),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),APlayGround_1=__importStar(require("./APlayGround")),Card_1=__importDefault(require("./Card")),CodeTabPanel_1=__importStar(require("./CodeTabPanel")),PlayGroundTab=function(r){function e(e){var t=r.call(this,e)||this;return Object.assign(t.state,{activeKey:e.active}),t}return __extends(e,r),e.prototype.componentWillReceiveProps=function(e){r.prototype.componentWillReceiveProps.call(this,e),this.setState({activeKey:e.active})},e.prototype.renderCodeView=function(){var t=this,e=this.state,r=e.expand,n=e.activeKey,e=this.isFirst,o=this.props,a=(o.cardProps,o.id,o.isActive,__rest(o,["cardProps","id","isActive"]));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:e,noMatch:function(){return react_1.default.createElement(Card_1.default,{style:{display:r?"":"none"}},react_1.default.createElement(CodeTabPanel_1.default,__assign({},a,{active:n,onChange:function(e){return t.setState({activeKey:e})}})))}},function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r},function(){return react_1.default.createElement(Card_1.default,null,react_1.default.createElement(CodeTabPanel_1.default,__assign({},a,{active:n,onChange:function(e){return t.setState({activeKey:e})}})))})})},e.prototype.getClipboardText=function(){var e=this.props.config,t=this.state.activeKey,e=null==e?void 0:e.find(function(e){return e.key===t});return Promise.resolve(e?e.codeText:"")},e}(APlayGround_1.default);exports.PlayGroundTabDefaultProps=__assign(__assign({},APlayGround_1.APlayGroundDefaultProps),CodeTabPanel_1.CodeTabPanelDefaultProps),exports.PlayGroundTabPropTypes=__assign(__assign({},APlayGround_1.APlayGroundPropTypes),CodeTabPanel_1.CodeTabPanelPropTypes),PlayGroundTab.defaultProps=exports.PlayGroundTabDefaultProps,PlayGroundTab.propTypes=exports.PlayGroundTabPropTypes,exports.default=PlayGroundTab;
//# sourceMappingURL=PlayGroundTab.js.map
