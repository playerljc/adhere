"use strict";var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};return function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),classnames_1=__importDefault(require("classnames")),selectorPrefix="adhere-ui-sliderscale",SliderScale=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMousemove=function(e){t.touchEvent(e)},t.onTouchmove=function(e){t.touchEvent(e)},t}return __extends(t,e),t.prototype.componentDidMount=function(){var e;null!==(e=this.rangeEl)&&void 0!==e&&(e.value=this.props.value)},t.prototype.componentWillReceiveProps=function(e,t){var a;null!==(a=this.rangeEl)&&void 0!==a&&(a.value=e.value)},t.prototype.touchEvent=function(e){var t=e.target.value;null!==(e=this.rangeEl)&&void 0!==e&&(e.value=t),this.preValue!==t&&(this.preValue=t,(e=this.props.onChange)&&e(t))},t.prototype.renderScale=function(){for(var e=this.props,t=e.min,a=e.max,r=e.interval,s=[],l=t;l<a&&a-1!==t;l++){var n=null,n=(l+1)%r==0?react_1.default.createElement("div",{key:l,className:selectorPrefix+"-scale-item "+selectorPrefix+"-scale-item-point"},react_1.default.createElement("span",{className:selectorPrefix+"-scale-item-value"},l+1)):l===t?react_1.default.createElement("div",{key:l,className:selectorPrefix+"-scale-item"},react_1.default.createElement("span",{className:selectorPrefix+"-scale-item-value"},t)):(l+1)%r!=0&&l===a-1?react_1.default.createElement("div",{key:l,className:selectorPrefix+"-scale-item"},react_1.default.createElement("span",{className:selectorPrefix+"-scale-item-value"},l+1)):react_1.default.createElement("div",{key:l,className:selectorPrefix+"-scale-item"});s.push(n)}e=[];return t===a?e.push(react_1.default.createElement("div",{key:0,className:selectorPrefix+"-scale-item"},react_1.default.createElement("span",{className:selectorPrefix+"-scale-item-value"},"0"),react_1.default.createElement("span",{className:selectorPrefix+"-scale-item-value",style:{right:0,left:"auto"}},"$",a))):a-1===t&&e.push(react_1.default.createElement("div",{key:t,className:selectorPrefix+"-scale-item"},react_1.default.createElement("span",{className:selectorPrefix+"-scale-item-value"},t),react_1.default.createElement("span",{className:selectorPrefix+"-scale-item-value",style:{right:0,left:"auto"}},a))),e.concat(s)},t.prototype.render=function(){var t=this,e=this.props,a=e.className,r=e.style,s=this.props,l=s.min,e=s.max,s=s.step;return react_1.default.createElement("div",{className:classnames_1.default(selectorPrefix,a.split(/\s+/)),style:__assign({},r),ref:function(e){return t.el=e}},react_1.default.createElement("div",{className:selectorPrefix+"-scale"},this.renderScale()),react_1.default.createElement("input",{ref:function(e){return t.rangeEl=e},className:selectorPrefix+"-range",type:"range",min:l,max:e,step:s,onMouseMove:this.onMousemove,onTouchMove:this.onTouchmove}))},t}(react_1.default.Component);SliderScale.defaultProps={className:"",style:{},min:0,max:100,step:1,value:0,interval:5,onChange:function(){}},SliderScale.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,min:prop_types_1.default.number,max:prop_types_1.default.number,step:prop_types_1.default.number,value:prop_types_1.default.number,interval:prop_types_1.default.number,onChange:prop_types_1.default.func},exports.default=SliderScale;
//# sourceMappingURL=sliderscale.js.map
