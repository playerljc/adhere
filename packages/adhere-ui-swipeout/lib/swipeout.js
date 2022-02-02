"use strict";var __extends=this&&this.__extends||function(){var s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),classnames_1=__importDefault(require("classnames")),swiper_1=__importDefault(require("swiper")),selectorPrefix="adhere-ui-swipeout",SwipeOut=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ref=react_1.default.createRef(),e.swiper=null,e.map=new Map([[[!0,!0].toString(),1],[[!1,!1].toString(),1],[[!0,!1].toString(),0],[[!1,!0].toString(),2]]),e}return __extends(e,t),e.prototype.componentDidMount=function(){this.createSwiper()},e.prototype.componentWillReceiveProps=function(e){this.props.direction!==e.direction&&this.swiper.changeDirection(e.direction),this.props.beforeShow===e.beforeShow&&this.props.afterShow===e.afterShow||this.slide(e)},e.prototype.slide=function(e){var t=e.beforeShow,r=e.afterShow,e=e.duration;this.swiper.slideTo(this.map.get([t,r].toString()),e)},e.prototype.createSwiper=function(){var e=this;this.swiper&&this.swiper.destroy();var t=this.props,r=t.beforeShow,t=t.afterShow;console.log("beforeShow-afterShow",r,t,[r,t].toString());t=this.map.get([r,t].toString());console.log("initialSlide",t),this.swiper=new swiper_1.default(this.ref.current,{init:!1,initialSlide:t,direction:this.props.direction,slidesPerView:"auto",centeredSlides:!1,spaceBetween:0}),this.swiper.on("init",function(){e.trigger("onInit")}),this.swiper.on("slideChangeTransitionStart",function(){e.trigger("onSlideChangeTransitionStart",e.swiper.activeIndex)}),this.swiper.on("slideChangeTransitionEnd",function(){e.trigger("onSlideChangeTransitionEnd",e.swiper.activeIndex)}),this.swiper.init()},e.prototype.trigger=function(e,t){this.props[e]&&this.props[e](t)},e.prototype.render=function(){var e=this.props,t=e.className,r=e.style,s=e.contentClassName,i=e.contentStyle,o=e.beforeClassName,n=e.beforeStyle,a=e.afterClassName,p=e.afterStyle,l=e.before,f=e.after,e=e.children;return react_1.default.createElement("div",{className:classnames_1.default(selectorPrefix,"swiper-container",t.split(/\s+/)),style:__assign({},r),ref:this.ref},react_1.default.createElement("div",{className:"swiper-wrapper"},react_1.default.createElement("div",{className:classnames_1.default("swiper-slide",selectorPrefix+"-before",o.split(/\s+/)),style:__assign({},n)},l()),react_1.default.createElement("div",{className:classnames_1.default("swiper-slide",selectorPrefix+"-content",s.split(/\s+/)),style:__assign({},i)},e),react_1.default.createElement("div",{className:classnames_1.default("swiper-slide",selectorPrefix+"-after",a.split(/\s+/)),style:__assign({},p)},f())))},e}(react_1.default.Component);SwipeOut.defaultProps={className:"",style:{},beforeClassName:"",beforeStyle:{},afterClassName:"",afterStyle:{},contentClassName:"",contentStyle:{},beforeShow:!1,afterShow:!1,direction:"horizontal",duration:0,before:function(){return null},after:function(){return null}},SwipeOut.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,beforeClassName:prop_types_1.default.string,beforeStyle:prop_types_1.default.object,afterClassName:prop_types_1.default.string,afterStyle:prop_types_1.default.object,contentClassName:prop_types_1.default.string,contentStyle:prop_types_1.default.object,beforeShow:prop_types_1.default.bool,afterShow:prop_types_1.default.bool,direction:prop_types_1.default.string,duration:prop_types_1.default.number,before:prop_types_1.default.func,after:prop_types_1.default.func,onInit:prop_types_1.default.func,slideChangeTransitionStart:prop_types_1.default.func,slideChangeTransitionEnd:prop_types_1.default.func},exports.default=SwipeOut;
//# sourceMappingURL=swipeout.js.map
