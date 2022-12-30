"use strict";var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.APlayGroundPropTypes=exports.APlayGroundDefaultProps=void 0,__importDefault(require("classnames"))),copy_to_clipboard_1=__importDefault(require("copy-to-clipboard")),prop_types_1=__importDefault(require("prop-types")),react_1=__importDefault(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),Card_1=__importStar(require("./Card")),Message_1=__importDefault(require("./Message")),constant_1=__importDefault(require("./constant")),selectPrefix="adhere-ui-playground",APlayGround=function(t){function e(e){e=t.call(this,e)||this;return e.isFirst=!0,e.clipboardRef=react_1.default.createRef(),e.actionConfig=[e.renderClipboardAction,e.renderExpandAction],e.state={expand:e.props.expand,config:[],activeKey:""},e}return __extends(e,t),e.prototype.componentWillReceiveProps=function(e){this.setState({expand:e.expand})},e.prototype.componentWillUpdate=function(e,t,r){this.isFirst&&t.expand&&(this.isFirst=!1)},e.prototype.renderAction=function(){var t=this;return this.actionConfig.map(function(e){return e.call(t)})},e.prototype.renderClipboardAction=function(){var t=this;return react_1.default.createElement("div",{ref:this.clipboardRef,onClick:function(e){t.getClipboardText(e).then(function(e){copy_to_clipboard_1.default(e),Message_1.default.success(adhere_util_intl_1.default.v("复制成功"))})}},react_1.default.createElement("img",{title:adhere_util_intl_1.default.v("复制"),className:selectPrefix+"-action-btn",src:constant_1.default.CopyOutlined,alt:adhere_util_intl_1.default.v("复制")}))},e.prototype.renderExpandAction=function(){var e=this,t=this.state.expand;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t,noMatch:function(){return react_1.default.createElement("div",{onClick:function(){return e.setState({expand:!0})}},react_1.default.createElement("img",{title:adhere_util_intl_1.default.v("收起"),className:selectPrefix+"-action-btn",src:constant_1.default.DownSquareOutlined,alt:adhere_util_intl_1.default.v("收起")}))}},function(){return react_1.default.createElement("div",{onClick:function(){return e.setState({expand:!1})}},react_1.default.createElement("img",{title:adhere_util_intl_1.default.v("展开"),className:selectPrefix+"-action-btn",src:constant_1.default.UpSquareOutlined,alt:adhere_util_intl_1.default.v("展开")}))})},e.prototype.render=function(){var e=this.props,t=e.children,r=e.cardProps,n=e.isActive,e=e.id;return react_1.default.createElement("div",__assign({},{id:e},{className:classnames_1.default(selectPrefix,n?selectPrefix+"-active":"")}),react_1.default.createElement(Card_1.default,__assign({actions:this.renderAction()},r||{}),t),this.renderCodeView())},e}(react_1.default.PureComponent);exports.APlayGroundDefaultProps={codeText:"",id:"",cardProps:{},isActive:!1,expand:!1},exports.APlayGroundPropTypes={id:prop_types_1.default.string,cardProps:prop_types_1.default.shape(Card_1.cardPropTypes),isActive:prop_types_1.default.bool,expand:prop_types_1.default.bool},APlayGround.defaultProps=exports.APlayGroundDefaultProps,APlayGround.propTypes=exports.APlayGroundPropTypes,exports.default=APlayGround;
//# sourceMappingURL=APlayGround.js.map
