"use strict";var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),classnames_1=__importDefault(require("classnames")),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),FlexContext=adhere_ui_flexlayout_1.default.Context,flexlayoutSelectorPrefix=adhere_ui_flexlayout_1.default.selectorPrefix,selectorPrefix="adhere-ui-splitlayout";function toPoint(e){return e.replace("%","")/100}var SplitLayout=function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.situation=new Map([[flexlayoutSelectorPrefix+"-fixed_"+flexlayoutSelectorPrefix+"-auto",!0],[flexlayoutSelectorPrefix+"-auto_"+flexlayoutSelectorPrefix+"-fixed",!0]]),r.directionProp={horizontal:{page:"pageX",dimension:"width",offset:"offsetWidth"},vertical:{page:"pageY",dimension:"height",offset:"offsetHeight"}},r.isEnter=!1,r.isOut=!1,r.isDown=!1,r.isMove=!1,r.startVal=0,r.changeVal=0,r.changeBaseVal=0,r.fixedValue=0,r.maxDimension=0,r.onMouseenter=function(e){console.log("mouseenter");var t=r.el,o=r.props.onCanDrag;t.classList.add(selectorPrefix+"-"+r.getResizeClass()),r.isOut=!1,r.isEnter=!0,o&&o(e)},r.onMousedown=function(e){console.log("mousedown");var t=r.el,o=r.fixedEl,n=r.props.onDragStarted;t.classList.remove(selectorPrefix+"-"+r.getResizeClass()),r.isEnter&&(r.isDown=!0,r.startVal=e[r.getProps().page],r.fixedValue=o[r.getProps().offset],n&&n(e))},r.onMouseup=function(e){var t;console.log("mouseup"),r.el.classList.add(selectorPrefix+"-"+r.getResizeClass()),r.isDown&&(t=r.props.onDragFinished,r.isDown=!1,r.isMove=!1,r.isEnter=!r.isOut,r.startVal=0,r.changeBaseVal+=r.changeVal,t&&t(e))},r.onMouseleave=function(e){var t;console.log("onMouseleave"),r.isDown&&(t=r.props.onDragFinished,r.isDown=!1,r.isMove=!1,r.isEnter=!1,r.startVal=0,r.changeBaseVal+=r.changeVal,t&&t(e))},r.onMousemove=function(e){var t,o,n,s,i=r.props.onChange;console.log(r.isEnter,r.isDown),r.isEnter&&r.isDown&&(r.isMove=!0,s=e[r.getProps().page],r.changeVal=s-r.startVal,t="prev"===r.getFixedElPosition()?r.fixedValue+r.changeVal:r.fixedValue-r.changeVal,o=void 0,n=r.getMaxSize(),s=r.getMinSize(),n<=t||t<=s?n<=t?o=n:t<=s&&(o=s):o=t,r.fixedEl.style[r.getProps().dimension]=o+"px",i&&i(e))},r.onMouseout=function(e){var t;console.log("onMouseout"),r.isOut=!0,r.isDown||(r.isEnter=!1,(t=r.props.onChange)&&t(e))},r.renderInner=function(e){var t=e.direction;console.log("renderInner-direction",t),r.direction=t;var o=r.props,e=o.className,o=o.style;return react_1.default.createElement("div",{ref:function(e){return r.el=e},style:__assign({},o),className:classnames_1.default(selectorPrefix,selectorPrefix+"-"+t,e.split(/\s+/))})},r}return __extends(t,e),t.prototype.componentDidMount=function(){var e;this.checked()&&(this.fixedEl=this.getFixedEl(),this.autoEl=this.getAutoEl(),this.containerEl=this.el.parentElement,null!==(e=this.containerEl)&&void 0!==e&&e.classList.add(selectorPrefix+"-noSelect"),this.initEvents())},t.prototype.componentDidUpdate=function(){this.checked()&&(this.isEnter=!1,this.isOut=!1,this.isDown=!1,this.isMove=!1,this.startVal=0,this.changeVal=0,this.changeBaseVal=0,this.fixedValue=0,this.maxDimension=0,this.fixedEl=this.getFixedEl(),this.autoEl=this.getAutoEl(),this.initEvents())},t.prototype.checked=function(){var e=this.el,o=e.previousElementSibling,n=e.nextElementSibling;return Array.from(this.situation.keys()).some(function(e){var t=e.split("_"),e=t[0],t=t[1];return o.classList.contains(e)&&n.classList.contains(t)})},t.prototype.getFixedEl=function(){var e=this.el,t=e.previousElementSibling,e=e.nextElementSibling;return t.classList.contains(flexlayoutSelectorPrefix+"-fixed")?t:e},t.prototype.getAutoEl=function(){var e=this.el,t=e.previousElementSibling,e=e.nextElementSibling;return t.classList.contains(flexlayoutSelectorPrefix+"-auto")?t:e},t.prototype.getFixedElPosition=function(){return this.el.previousElementSibling.classList.contains(flexlayoutSelectorPrefix+"-fixed")?"prev":"next"},t.prototype.getMaxDimension=function(){if(this.maxDimension)return this.maxDimension;var e=this.getFixedEl(),t=this.getAutoEl(),o=this.getProps().offset;return this.maxDimension=e[o]+t[o],this.maxDimension},t.prototype.getResizeClass=function(){return"vertical"===this.direction?"rowResize":"colResize"},t.prototype.getProps=function(){return this.directionProp[this.direction]},t.prototype.getMaxSize=function(){var e=this.props.maxSize,t=0,o=this.getMaxDimension();return"string"==typeof e?t=o*toPoint(e):"number"==typeof e&&(t=e),o<t?o:t},t.prototype.getMinSize=function(){var e=this.props.minSize,t=0,o=this.getMaxDimension(),n=this.getProps().offset,n=this.el[n];return"string"==typeof e?t=o*toPoint(e):"number"==typeof e&&(t=e),t<n?n:t},t.prototype.initEvents=function(){var e=this.fixedEl,t=this.autoEl,o=this.containerEl,n=this.el;this.el.removeEventListener("mouseenter",this.onMouseenter),this.el.addEventListener("mouseenter",this.onMouseenter),this.el.removeEventListener("mousedown",this.onMousedown),this.el.addEventListener("mousedown",this.onMousedown),e.removeEventListener("mousemove",this.onMousemove),n.removeEventListener("mousemove",this.onMousemove),t.removeEventListener("mousemove",this.onMousemove),e.addEventListener("mousemove",this.onMousemove),n.addEventListener("mousemove",this.onMousemove),t.addEventListener("mousemove",this.onMousemove),e.removeEventListener("mouseout",this.onMouseout),n.removeEventListener("mouseout",this.onMouseout),t.removeEventListener("mouseout",this.onMouseout),e.addEventListener("mouseout",this.onMouseout),n.addEventListener("mouseout",this.onMouseout),t.addEventListener("mouseout",this.onMouseout),e.removeEventListener("mouseup",this.onMouseup),n.removeEventListener("mouseup",this.onMouseup),t.removeEventListener("mouseup",this.onMouseup),e.addEventListener("mouseup",this.onMouseup),n.addEventListener("mouseup",this.onMouseup),t.addEventListener("mouseup",this.onMouseup),o.removeEventListener("mouseleave",this.onMouseleave),o.addEventListener("mouseleave",this.onMouseleave)},t.prototype.render=function(){return react_1.default.createElement(FlexContext.Consumer,null,this.renderInner)},t}(react_1.default.Component);SplitLayout.defaultProps={onCanDrag:function(){},onDragStarted:function(){},onDragFinished:function(){},onOut:function(){},onChange:function(){},maxSize:"100%",minSize:10,className:"",style:{}},SplitLayout.propTypes={onCanDrag:prop_types_1.default.func,onDragStarted:prop_types_1.default.func,onDragFinished:prop_types_1.default.func,onOut:prop_types_1.default.func,onChange:prop_types_1.default.func,maxSize:prop_types_1.default.oneOfType([prop_types_1.default.number,prop_types_1.default.string]),minSize:prop_types_1.default.oneOfType([prop_types_1.default.number,prop_types_1.default.string]),className:prop_types_1.default.string,style:prop_types_1.default.object},exports.default=SplitLayout;
//# sourceMappingURL=splitlayout.js.map
