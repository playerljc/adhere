"use strict";var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayGroundTabPropTypes=exports.PlayGroundTabDefaultProps=void 0,__importDefault(require("classnames"))),qrcode_1=__importDefault(require("qrcode")),react_1=__importDefault(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),APlayGround_1=__importStar(require("./APlayGround")),APlayGround_2=require("./APlayGround"),Card_1=__importDefault(require("./Card")),CodeTabPanel_1=__importStar(require("./CodeTabPanel")),PlayGroundTabMobile=function(a){function e(e){var t=a.call(this,e)||this;return Object.assign(t.state,{activeKey:e.active,iframeCount:0}),t}return __extends(e,a),e.prototype.componentWillReceiveProps=function(e){a.prototype.componentWillReceiveProps.call(this,e),this.setState({activeKey:e.active,iframeCount:e.iframeCount})},e.prototype.renderAction=function(){var t=this;return this.actionConfig.slice(0,1).map(function(e){return e.call(t)})},e.prototype.renderCodeView=function(){var t=this,e=this.state.activeKey,a=this.isFirst,r=this.props,n=(r.cardProps,r.id,r.isActive,__rest(r,["cardProps","id","isActive"]));return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:a,noMatch:function(){return react_1.default.createElement(Card_1.default,null,react_1.default.createElement(CodeTabPanel_1.default,__assign({},n,{active:e,onChange:function(e){return t.setState({activeKey:e})}})))}},function(){return react_1.default.createElement(Card_1.default,null,react_1.default.createElement(CodeTabPanel_1.default,__assign({},n,{active:e,onChange:function(e){return t.setState({activeKey:e})}})))})},e.prototype.getClipboardText=function(){var e=this.props.config,t=this.state.activeKey,e=null==e?void 0:e.find(function(e){return e.key===t});return Promise.resolve(e?e.codeText:"")},e.prototype.render=function(){var t=this,e=this.props,a=e.cardProps,r=e.isActive,n=e.id,o=e.url,l=e.className,i=e.style,c=e.bodyClassName,s=e.bodyStyle,u=e.displayClassName,e=e.displayBodyStyle;return react_1.default.createElement("div",__assign({},{id:n},{className:(0,classnames_1.default)(APlayGround_2.selectPrefix,"".concat(APlayGround_2.selectPrefix,"-mobile"),null!=l?l:"",((n={})["".concat(APlayGround_2.selectPrefix,"-active")]=r,n)),style:null!=i?i:{}}),this.state.qrcode&&react_1.default.createElement("div",{className:"".concat(APlayGround_2.selectPrefix,"-mobile-display-qr-code-mask"),onClick:function(){console.log("click qr mask"),t.setState({qrcode:void 0})}}),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(APlayGround_2.selectPrefix,"-mobile-body"),null!=c?c:""),style:null!=s?s:{}},react_1.default.createElement(Card_1.default,__assign({actions:this.renderAction()},null!=a?a:{}),this.renderCodeView())),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(APlayGround_2.selectPrefix,"-mobile-display"),null!=u?u:""),style:null!=e?e:{}},react_1.default.createElement("div",{className:"".concat(APlayGround_2.selectPrefix,"-mobile-display-inner")},react_1.default.createElement("iframe",{src:o,key:this.state.iframeCount})),react_1.default.createElement("div",{className:"".concat(APlayGround_2.selectPrefix,"-mobile-display-actions")},react_1.default.createElement("div",{className:"".concat(APlayGround_2.selectPrefix,"-mobile-display-action"),onClick:function(){t.setState({iframeCount:t.state.iframeCount+1})}},react_1.default.createElement(icons_1.ReloadOutlined,null)),react_1.default.createElement("div",{className:"".concat(APlayGround_2.selectPrefix,"-mobile-display-action"),onClick:function(){qrcode_1.default.toDataURL(o).then(function(e){t.setState({qrcode:e})}).catch(function(e){console.error(e)})}},this.state.qrcode&&react_1.default.createElement("div",{className:"".concat(APlayGround_2.selectPrefix,"-mobile-display-qr-code")},react_1.default.createElement("img",{src:this.state.qrcode,alt:""})),react_1.default.createElement(icons_1.QrcodeOutlined,null)),react_1.default.createElement("div",{className:"".concat(APlayGround_2.selectPrefix,"-mobile-display-action"),onClick:function(){window.open(o)}},react_1.default.createElement(icons_1.FullscreenOutlined,null)))))},e}(APlayGround_1.default);exports.PlayGroundTabDefaultProps=__assign(__assign({url:""},APlayGround_1.APlayGroundDefaultProps),CodeTabPanel_1.CodeTabPanelDefaultProps),exports.PlayGroundTabPropTypes=__assign(__assign({},APlayGround_1.APlayGroundPropTypes),CodeTabPanel_1.CodeTabPanelPropTypes),PlayGroundTabMobile.defaultProps=exports.PlayGroundTabDefaultProps,PlayGroundTabMobile.propTypes=exports.PlayGroundTabPropTypes,exports.default=PlayGroundTabMobile;
//# sourceMappingURL=PlayGroundTabMobile.js.map