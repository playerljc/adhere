var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])})(e,t)};return function(e,t){function s(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import IScroll from"iscroll/build/iscroll-probe";import StickupLayout from"@baifendian/adhere-ui-stickuplayout";var selectorPrefix="adhere-ui-cascadecompared",defaultCellWidth=120;function initTouch(){document.addEventListener("touchmove",function(e){e.preventDefault()},!!function(){var e=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(e){}return e}()&&{capture:!1,passive:!1})}initTouch();var CascadeCompared=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scrolls=[],e}return __extends(e,t),e.prototype.componentDidMount=function(){this.stickup.refresh(),this.initScroll()},e.prototype.componentDidUpdate=function(){this.stickup.refresh(),this.initScroll()},e.prototype.initScroll=function(){for(var s=this,r=this.el.querySelectorAll("."+selectorPrefix+"-autoWrap"),e=0;e<this.scrolls.length;e++)this.scrolls[e].destroy();this.scrolls=[];for(var a=this,e=0;e<r.length;e++)!function(e){var t=new IScroll(r[e],{probeType:3,eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});a.scrolls.push(t),t.on("scroll",function(){for(var e=0;e<s.scrolls.length;e++)s.scrolls[e]!==t&&s.scrolls[e].scrollTo(t.x,t.y)})}(e)},e.prototype.getFixedColumnConfig=function(e){var t=e.find(function(e){return e.isFixed});return t||(e.length?e[0]:null)},e.prototype.renderCell=function(e,t){return e.render?e.render(t[e.dataIndex],t):t[e.dataIndex]},e.prototype.renderIndicator=function(){var t=this,e=this.props,s=e.indicatorClassName,r=void 0===s?"":s,a=e.indicatorStyle,i=void 0===a?{}:a,o=e.indicatorFixedWrapClassName,l=void 0===o?"":o,n=e.indicatorFixedWrapStyle,s=void 0===n?{}:n,a=e.indicatorAutoWrapClassName,o=void 0===a?"":a,n=e.indicatorAutoWrapStyle,a=void 0===n?{}:n,n=e.indicator,e=n.columns,e=void 0===e?[]:e,n=n.dataSource,c=void 0===n?{}:n,p=this.getFixedColumnConfig(e);return React.createElement("div",{className:classNames(selectorPrefix+"-indicator",(r||"").split(/\s+/)),style:__assign({},i)},React.createElement("div",{className:classNames(selectorPrefix+"-fixedWrap",(l||"").split(/\s+/)),style:__assign(__assign({},s||{}),{width:(null==p?void 0:p.width)||defaultCellWidth})},React.createElement("div",{className:selectorPrefix+"-item"},React.createElement("div",{className:classNames(selectorPrefix+"-cell",(p.className||"").split(/\s+/)),style:__assign({},p.style||{})},this.renderCell(p,c)))),React.createElement("div",{className:classNames(selectorPrefix+"-autoWrap",(o||"").split(/\s+/)),style:__assign({},a||{})},React.createElement("div",{className:selectorPrefix+"-item"},e.filter(function(e){return e!==p}).map(function(e){return React.createElement("div",{key:e.dataIndex,className:classNames(selectorPrefix+"-cell",(e.className||"").split(/\s+/)),style:__assign(__assign({},e.style||{}),{width:(null==e?void 0:e.width)||defaultCellWidth})},t.renderCell(e,c))}))))},e.prototype.renderMasterGroupContent=function(e){var s=this,t=e.dataSource,r=void 0===t?[]:t,a=e.columns,i=void 0===a?[]:a,o=e.fixedWrapClassName,l=void 0===o?"":o,n=e.fixedWrapStyle,t=void 0===n?{}:n,a=e.autoWrapClassName,o=void 0===a?"":a,n=e.autoWrapStyle,a=void 0===n?{}:n,n=e.autoInnerClassName,n=void 0===n?"":n,e=e.autoInnerStyle,e=void 0===e?{}:e,c=this.getFixedColumnConfig(i);return React.createElement(React.Fragment,null,React.createElement("div",{className:classNames(selectorPrefix+"-fixedWrap",(l||"").split(/\s+/)),style:__assign(__assign({},t||{}),{width:(null==c?void 0:c.width)||defaultCellWidth})},r.map(function(e,t){return React.createElement("div",{key:t,className:selectorPrefix+"-item"},React.createElement("div",{className:classNames(selectorPrefix+"-cell",(c.className||"").split(/\s+/)),style:__assign({},c.style||{})},s.renderCell(c,e)))})),React.createElement("div",{className:classNames(selectorPrefix+"-autoWrap",(o||"").split(/\s+/)),style:__assign({},a||{})},React.createElement("div",{className:classNames(selectorPrefix+"-autoInner",(n||"").split(/\s+/)),style:__assign({},e)},r.map(function(t,e){return React.createElement("div",{key:e,className:selectorPrefix+"-item"},i.filter(function(e){return e!==c}).map(function(e){return React.createElement("div",{key:e.dataIndex,className:classNames(selectorPrefix+"-cell",(e.className||"").split(/\s+/)),style:__assign(__assign({},e.style||{}),{width:(null==e?void 0:e.width)||defaultCellWidth})},s.renderCell(e,t))}))}))))},e.prototype.renderMasterGroup=function(e,t){var s=e.title,r=void 0===s?null:s,a=e.className,s=void 0===a?"":a,a=e.style,a=void 0===a?{}:a;return React.createElement(StickupLayout.Item,{key:t,className:classNames((s||"").split(/\s+/)),style:__assign({},a||{}),title:r,content:this.renderMasterGroupContent(e)})},e.prototype.renderMaster=function(){var s=this,e=this.props,t=e.masterClassName,r=void 0===t?"":t,a=e.masterStyle,i=void 0===a?{}:a,o=e.masterInnerClassName,l=void 0===o?"":o,n=e.masterInnerStyle,c=void 0===n?{}:n,p=e.masterStickFixedClassName,t=void 0===p?"":p,a=e.masterStickFixedStyle,o=void 0===a?{}:a,n=e.masterStickInnerClassName,p=void 0===n?"":n,a=e.masterStickInnerStyle,n=void 0===a?{}:a,a=e.master,a=void 0===a?[]:a,e=e.onStickChange;return React.createElement("div",{className:classNames(selectorPrefix+"-master",(r||"").split(/\s+/)),style:__assign({},i||{})},React.createElement(StickupLayout,{ref:function(e){return s.stickup=e},className:classNames(selectorPrefix+"-master-inner",(l||"").split(/\s+/)),style:__assign({},c||{}),fixedClassName:classNames((t||"").split(/\s+/)),fixedStyle:__assign({},o||{}),innerClassName:classNames((p||"").split(/\s+/)),innerStyle:__assign({},n||{}),onChange:e},a.map(function(e,t){return s.renderMasterGroup(e,t)})))},e.prototype.scrollToByIndex=function(e,t){this.stickup.scrollToByIndex(e,t=void 0===t?300:t)},e.prototype.scrollToByHeaderEl=function(e,t){this.stickup.scrollToByHeaderEl(e,t=void 0===t?300:t)},e.prototype.scrollToByColumn=function(e){var t=this.scrolls[0],e=t.wrapper.querySelector("."+selectorPrefix+"-item ."+selectorPrefix+"-cell:nth-of-type("+e+")");t.scrollToElement(e)},e.prototype.render=function(){var t=this,e=this.props,s=e.className,s=void 0===s?"":s,e=e.style,e=void 0===e?{}:e;return React.createElement("div",{className:classNames(selectorPrefix,(s||"").split(/\s+/)),style:__assign({},e||{}),ref:function(e){return t.el=e}},this.renderIndicator(),this.renderMaster())},e}(React.Component);CascadeCompared.defaultProps={className:"",style:{},indicatorClassName:"",indicatorStyle:{},indicatorFixedWrapClassName:"",indicatorFixedWrapStyle:{},indicatorAutoWrapClassName:"",indicatorAutoWrapStyle:{},masterClassName:"",masterStyle:{},masterInnerClassName:"",masterInnerStyle:{},masterStickFixedClassName:"",masterStickFixedStyle:{},masterStickInnerClassName:"",masterStickInnerStyle:{},indicator:{columns:[],dataSource:[]},master:[],defaultCellWidth:defaultCellWidth},CascadeCompared.propTypes={className:PropTypes.string,style:PropTypes.object,indicatorClassName:PropTypes.string,indicatorStyle:PropTypes.object,indicatorFixedWrapClassName:PropTypes.string,indicatorFixedWrapStyle:PropTypes.object,indicatorAutoWrapClassName:PropTypes.string,indicatorAutoWrapStyle:PropTypes.object,masterClassName:PropTypes.string,masterStyle:PropTypes.object,masterInnerClassName:PropTypes.string,masterInnerStyle:PropTypes.object,masterStickFixedClassName:PropTypes.string,masterStickFixedStyle:PropTypes.object,masterStickInnerClassName:PropTypes.string,masterStickInnerStyle:PropTypes.object,indicator:PropTypes.shape({columns:PropTypes.arrayOf(PropTypes.shape({dataIndex:PropTypes.string.isRequired,isFixed:PropTypes.bool,width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),render:PropTypes.func,className:PropTypes.string,style:PropTypes.object})),dataSource:PropTypes.object.isRequired}).isRequired,master:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.node,columns:PropTypes.arrayOf(PropTypes.shape({dataIndex:PropTypes.string.isRequired,isFixed:PropTypes.bool,render:PropTypes.func,className:PropTypes.string,style:PropTypes.object})),dataSource:PropTypes.arrayOf(PropTypes.object).isRequired,className:PropTypes.string,style:PropTypes.object,fixedWrapClassName:PropTypes.string,fixedWrapStyle:PropTypes.object,autoWrapClassName:PropTypes.string,autoWrapStyle:PropTypes.object,autoInnerClassName:PropTypes.string,autoInnerStyle:PropTypes.object})).isRequired,onStickChange:PropTypes.func,defaultCellWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string])};export default CascadeCompared;
//# sourceMappingURL=cascadecompared.js.map
