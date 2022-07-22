"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),classnames_1=__importDefault(require("classnames")),context_1=require("./context"),selectorPrefix="adhere-ui-flexlayout-auto",Auto=function(e){function t(t){t=e.call(this,t)||this;return t.renderInner=t.renderInner.bind(t),t}return __extends(t,e),t.prototype.getEl=function(){var t;return null===(t=null==this?void 0:this.ref)||void 0===t?void 0:t.current},t.prototype.renderInner=function(t){var e=t.direction;this.direction=e;var r=this.props,o=r.children,n=r.autoFixed,t=r.className,e=void 0===t?"":t,t=r.style,r=r.fit;return react_1.default.createElement("div",{ref:this.ref,className:classnames_1.default(selectorPrefix,n?selectorPrefix+"-autoFixed":"",r?selectorPrefix+"-fit":"",e.split(/\s+/)),style:__assign({},t)},o)},t.prototype.render=function(){return react_1.default.createElement(context_1.FlexContext.Consumer,null,this.renderInner)},t}(react_1.default.Component);Auto.defaultProps={autoFixed:!0,fit:!0,className:"",style:{}},Auto.propTypes={autoFixed:prop_types_1.default.bool,fit:prop_types_1.default.bool,className:prop_types_1.default.string,style:prop_types_1.default.object},exports.default=Auto;
//# sourceMappingURL=auto.js.map
