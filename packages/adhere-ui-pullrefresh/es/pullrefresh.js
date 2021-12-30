var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var o=arguments[t],s=0,l=o.length;s<l;s++,i++)n[i]=o[s];return n};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import moment from"moment";import Intl from"@baifendian/adhere-util-intl";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Resource from"@baifendian/adhere-util-resource";import Util from"@baifendian/adhere-util";var selectorPrefix="adhere-ui-pullrefresh",defaultImg="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==",PullRefresh=function(t){function e(e){e=t.call(this,e)||this;return e.state={isCan:!1,preUpdateTime:moment().valueOf()},e.isTop=!0,e.el=null,e.scrollEl=null,e.iconEl=null,e.triggerInnerEl=null,e.maskEl=null,e.pullHeight=200,e.isDownPull=!1,e.refreshHeight=0,e.elRef=React.createRef(),e.scrollElRef=React.createRef(),e.iconElRef=React.createRef(),e.refreshElRef=React.createRef(),e.triggerInnerElRef=React.createRef(),e.onTouchStart=e.onTouchStart.bind(e),e.onTouchMove=e.onTouchMove.bind(e),e.onTouchEnd=e.onTouchEnd.bind(e),e.onScroll=e.onScroll.bind(e),e.renderMask(),e}return __extends(e,t),e.prototype.componentDidMount=function(){this.el=this.elRef.current,this.iconEl=this.iconElRef.current,this.scrollEl=this.scrollElRef.current,this.triggerInnerEl=this.triggerInnerElRef.current,this.pullHeight=this.getPullHeight(),this.refreshHeight=this.el.clientHeight,this.addEvents()},e.prototype.componentWillReceiveProps=function(e,t){"updateTime"in e&&e.updateTime!==this.props.updateTime&&this.setState({preUpdateTime:e.updateTime})},e.prototype.getPullHeight=function(){var e=this.props.pullHeight;return e<=0?200:e>this.scrollEl.clientHeight?this.scrollEl.clientHeight:e},e.prototype.renderMask=function(){this.maskEl=document.querySelector("."+selectorPrefix+"-mask"),this.maskEl||(this.maskEl=document.createElement("div"),this.maskEl.className=selectorPrefix+"-mask",document.body.appendChild(this.maskEl))},e.prototype.addEvents=function(){this.scrollEl.addEventListener("touchstart",this.onTouchStart),this.scrollEl.addEventListener("mousedown",this.onTouchStart),this.scrollEl.addEventListener("scroll",this.onScroll)},e.prototype.removeEvents=function(){this.scrollEl.removeEventListener("mousemove",this.onTouchMove),this.scrollEl.removeEventListener("mouseup",this.onTouchEnd),this.scrollEl.removeEventListener("touchmove",this.onTouchMove),this.scrollEl.removeEventListener("touchend",this.onTouchEnd)},e.prototype.onTouchStart=function(e){this.trigger("onPullStart"),this.startPageY=(e.changedTouches?e.changedTouches[0]:e).pageY;e=this.scrollEl;e.addEventListener("touchmove",this.onTouchMove),e.addEventListener("mousemove",this.onTouchMove),e.addEventListener("touchend",this.onTouchEnd),e.addEventListener("mouseup",this.onTouchEnd)},e.prototype.onTouchMove=function(e){var t=this;this.scrollEl.style.overflow="hidden";var r=(e.changedTouches?e.changedTouches[0]:e).pageY-this.startPageY,n=Math.abs(r);0<r?(e.preventDefault(),this.isDownPull=!0,n<this.pullHeight?(this.translateY(this.scrollEl,n+"px",0),this.translateY(this.el,"calc(-100% + "+n+"px)",0),n>=this.refreshHeight+80?(console.log("3.具备刷新条件"),this.rotateIcon(this.iconEl,0,150),this.setState({isCan:!0},function(){t.trigger("onPullCanRefresh")})):(this.rotateIcon(this.iconEl,180,150),this.setState({isCan:!1})),this.el.style.display="flex"):(this.translateY(this.scrollEl,this.pullHeight+"px",0),this.translateY(this.el,"calc(-100% + "+this.pullHeight+"px)",0),this.rotateIcon(this.iconEl,0,150),console.log("4.拉动到了底部"),this.setState({isCan:!0},function(){t.trigger("onPullBottom")}))):this.isDownPull?(e.preventDefault(),this.translateY(this.scrollEl,"0px",0),this.translateY(this.el,"calc(-100% + 0px)",0),this.rotateIcon(this.iconEl,180,0)):this.clear.call(this)},e.prototype.onTouchEnd=function(e){var t=this,r=(e.changedTouches?e.changedTouches[0]:e).pageY-this.startPageY,e=Math.abs(r);0<r?!(e<this.pullHeight)||e>=this.refreshHeight+80?t.refresh():(console.log("2.没有具备刷新条件弹回"),t.trigger("onPullRebound"),t.reset()):t.clear()},e.prototype.onScroll=function(e){var t=this;0===e.target.scrollTop?(t.isTop=!0,t.scrollEl.addEventListener("touchstart",this.onTouchStart),t.scrollEl.addEventListener("mousedown",this.onTouchStart)):t.isTop&&(t.isTop=!1,t.scrollEl.removeEventListener("touchstart",this.onTouchStart),t.scrollEl.removeEventListener("mousedown",this.onTouchStart))},e.prototype.translateY=function(e,t,r){e.style.transition=e.style.webkitTransition="transform "+(r=void 0===r?0:r)+"ms ease",e.style.transform=e.style.webkitTransform="translate3d(0,"+t+",0)"},e.prototype.rotateIcon=function(e,t,r){e.style.transition=e.style.webkitTransition="transform "+(r=void 0===r?0:r)+"ms linear",e.style.transform=e.style.webkitTransform="rotate("+t+"deg)"},e.prototype.clear=function(){var e;this.removeEvents(),this.isDownPull=!1,this.isTop=!0,this.el.style.display="flex",this.refreshElRef.current.style.display="none",null!==(e=this.triggerInnerEl)&&void 0!==e&&(e.style.display="flex"),this.rotateIcon(this.iconEl,180,0),this.scrollEl.style.overflowY="auto",this.maskEl.style.display="none"},e.prototype.trigger=function(e,t){this.props[e]&&this.props[e](t)},e.prototype.refresh=function(){var t=this;this.maskEl.style.display="block",this.removeEvents(),t.scrollEl.addEventListener("transitionend",function e(){t.triggerInnerEl.style.display="none",t.refreshElRef.current.style.display="block",t.trigger("onPullRefresh",t),t.scrollEl.removeEventListener("transitionend",e),t.setState({preUpdateTime:moment().valueOf()})}),t.translateY(t.scrollEl,t.refreshHeight+"px",500),t.translateY(t.el,"calc(-100% + "+t.refreshHeight+"px)",500),t.rotateIcon(t.iconEl,180,300)},e.prototype.reset=function(){var r=this;r.clear(),r.scrollEl.addEventListener("transitionend",function e(){var t;r.scrollEl.removeEventListener("transitionend",e),null!==(t=r.triggerInnerEl)&&void 0!==t&&(t.style.display="flex")}),r.translateY(r.scrollEl,"0px",200),r.translateY(r.el,"calc(-100% + 0px)",200)},e.prototype.resetUpdateTime=function(t){var r=this;return new Promise(function(e){r.setState({preUpdateTime:t||moment().valueOf()},function(){return e()})})},e.prototype.getUpdateTime=function(){return this.state.preUpdateTime},e.prototype.renderLoadingAnimation=function(){var e=this,t=this.props.renderLoadingAnimation;return React.createElement(ConditionalRender,{conditional:!!t},function(){return React.createElement(ConditionalRender,{conditional:Util.isString(t),noMatch:function(){return React.createElement("div",{className:selectorPrefix+"-trigger-refresh",ref:e.refreshElRef},t())}},function(){return React.createElement("div",{className:classNames.apply(void 0,__spreadArrays([selectorPrefix+"-trigger-refresh"],t.split(" "))),ref:e.refreshElRef},React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))})})},e.prototype.renderIcon=function(){var e=this,t=this.props.renderIcon;return React.createElement(ConditionalRender,{conditional:!!t,noMatch:function(){return React.createElement("div",{className:selectorPrefix+"-trigger-icon"},React.createElement("img",{className:selectorPrefix+"-trigger-icon-inner",src:defaultImg,alt:"",ref:e.iconElRef}))}},function(){return React.createElement("div",{className:selectorPrefix+"-trigger-icon"},React.createElement("div",{className:selectorPrefix+"-trigger-icon-inner",ref:e.iconElRef},t()))})},e.prototype.renderLabel=function(){var e=this.props,t=e.renderLabel,r=e.renderCanLabel,e=this.state.isCan;return React.createElement("p",{className:selectorPrefix+"-trigger-label"},React.createElement(ConditionalRender,{conditional:e,noMatch:function(){return t()}},function(){return r()}))},e.prototype.renderUpdateTime=function(){var e=this.props,t=e.isShowUpdateTime,r=e.updateTimeFormat,n=this.state.preUpdateTime;return React.createElement(ConditionalRender,{conditional:t},function(){return React.createElement("p",{className:selectorPrefix+"-trigger-update"},Intl.v("更新时间"),"：",React.createElement("span",{className:selectorPrefix+"-trigger-update-label"},moment(n).format(r)))})},e.prototype.render=function(){var e=this.props,t=e.className,r=e.style,n=e.scrollClassName,i=e.scrollStyle,e=e.children;return React.createElement("div",{className:classNames.apply(void 0,__spreadArrays([selectorPrefix],t.split(" "))),style:__assign({},r)},React.createElement("div",{className:classNames.apply(void 0,__spreadArrays([selectorPrefix+"-scroll"],n.split(" "))),style:__assign({},i),ref:this.scrollElRef},e),React.createElement("div",{className:selectorPrefix+"-trigger",ref:this.elRef},React.createElement("div",{className:selectorPrefix+"-trigger-inner",ref:this.triggerInnerElRef},this.renderIcon(),this.renderLabel(),this.renderUpdateTime()),this.renderLoadingAnimation()))},e}(React.Component);PullRefresh.defaultProps={className:"",style:{},scrollClassName:"",scrollStyle:{},pullHeight:200,renderLabel:function(){return Intl.v("下拉刷新")},renderCanLabel:function(){return Intl.v("松开刷新")},renderLoadingAnimation:"la-ball-circus la-dark",isShowUpdateTime:!0,updateTime:moment().valueOf(),updateTimeFormat:Resource.Dict.value.ResourceMomentFormatFull.value},PullRefresh.propTypes={className:PropTypes.string,style:PropTypes.object,scrollClassName:PropTypes.string,scrollStyle:PropTypes.object,pullHeight:PropTypes.number,renderIcon:PropTypes.func,renderLabel:PropTypes.func,renderCanLabel:PropTypes.func,renderLoadingAnimation:PropTypes.oneOfType([PropTypes.string,PropTypes.func]),isShowUpdateTime:PropTypes.bool,updateTime:PropTypes.number,updateTimeFormat:PropTypes.string,onPullStart:PropTypes.func,onPullCanRefresh:PropTypes.func,onPullRefresh:PropTypes.func,onPullBottom:PropTypes.func,onPullRebound:PropTypes.func};export default PullRefresh;
//# sourceMappingURL=pullrefresh.js.map