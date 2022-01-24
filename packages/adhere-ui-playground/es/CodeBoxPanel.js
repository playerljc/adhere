var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,n){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]]);return r};import React,{memo,useEffect,useRef,useState}from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import{APlayGroundPropTypes}from"./APlayGround";import PlayGround from"./PlayGround";import PlayGroundTab,{PlayGroundTabPropTypes}from"./PlayGroundTab";import PlayGroundMulit,{PlayGroundMulitPropTypes}from"./PlayGroundMulit";import Constant from"./constant";var selectPrefix="adhere-ui-playground-code-box";function CodeBoxPanel(l){var e=useState(""),c=e[0],n=e[1],e=useState(l.expandAll),d=e[0],r=e[1],t=useRef(!1),o=l.columnCount,a=l.config,e=[];null!=o&&(e.length=o),e.fill(void 0);var i=new Map([["PlayGroundMulit",function(e,n){var r=l.config,t=r[n],o=t.renderWrap,a=t.renderChildren,t=(t.type,__rest(t,["renderWrap","renderChildren","type"])),i=React.createElement(PlayGroundMulit,__assign({},t,{isActive:c===t.id,expand:d}),React.createElement(ConditionalRender,{conditional:!!a},function(){return a(e,n,r)}));return React.createElement(ConditionalRender,{conditional:!!o,noMatch:function(){return i}},function(){return o(e,n,r,i)})}],["PlayGround",function(e,n){var r=l.config,t=r[n],o=t.renderWrap,a=t.renderChildren,t=(t.type,__rest(t,["renderWrap","renderChildren","type"])),i=React.createElement(PlayGround,__assign({},t,{isActive:c===t.id,expand:d}),React.createElement(ConditionalRender,{conditional:!!a},function(){return a(e,n,r)}));return React.createElement(ConditionalRender,{conditional:!!o,noMatch:function(){return i}},function(){return o(e,n,r,i)})}],["PlayGroundTab",function(e,n){var r=l.config,t=r[n],o=t.renderWrap,a=t.renderChildren,t=(t.type,__rest(t,["renderWrap","renderChildren","type"])),i=React.createElement(PlayGroundTab,__assign({},t,{isActive:c===t.id,expand:d}),React.createElement(ConditionalRender,{conditional:!!a},function(){return a(e,n,r)}));return React.createElement(ConditionalRender,{conditional:!!o,noMatch:function(){return i}},function(){return o(e,n,r,i)})}]]);return useEffect(function(){function e(){var e=window.location.hash.substring(1);n(e)}return window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}},[]),useEffect(function(){r(l.expandAll)},[l.expandAll]),useEffect(function(){t.current=!1},[d]),React.createElement("div",{className:selectPrefix},React.createElement("div",{className:selectPrefix+"-header"},React.createElement(ConditionalRender,{conditional:!!l.title},function(){return React.createElement("div",{className:selectPrefix+"-header-title"},l.title)}),React.createElement("div",{className:selectPrefix+"-header-extra"},React.createElement(ConditionalRender,{conditional:l.isShowExpandAllBtn},function(){return React.createElement(ConditionalRender,{conditional:d,noMatch:function(){return React.createElement("img",{className:selectPrefix+"-expand-code",src:Constant.ExpandCodeAll,alt:"",onClick:function(){t.current||(t.current=!0,r(!0))}})}},function(){return React.createElement("img",{className:selectPrefix+"-expand-code",src:Constant.CloseCodeAll,alt:"",onClick:function(){t.current||(t.current=!0,r(!1))}})})}),React.createElement(ConditionalRender,{conditional:!!l.extra},function(){return l.extra}))),React.createElement("div",{className:selectPrefix+"-main"},e.map(function(e,r){return React.createElement("div",{className:selectPrefix+"-column"},a.map(function(e,n){return n%o===r?React.createElement("div",{className:selectPrefix+"-item",key:e.id},i.get(e.type)(r,n)):null}))})))}CodeBoxPanel.defaultProps={title:"",extra:null,isShowExpandAllBtn:!0,columnCount:1,expandAll:!1,config:[]},CodeBoxPanel.propTypes={title:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),extra:PropTypes.node,isShowExpandAllBtn:PropTypes.bool,columnCount:PropTypes.number,expandAll:PropTypes.bool,config:PropTypes.arrayOf(PropTypes.oneOfType([__assign(__assign({},PlayGroundMulitPropTypes),{type:PropTypes.string,renderWrap:PropTypes.func,renderChildren:PropTypes.func}),__assign(__assign({},APlayGroundPropTypes),{type:PropTypes.string,renderWrap:PropTypes.func,renderChildren:PropTypes.func}),__assign(__assign({},PlayGroundTabPropTypes),{type:PropTypes.string,renderWrap:PropTypes.func,renderChildren:PropTypes.func})]))};export default memo(CodeBoxPanel);
//# sourceMappingURL=CodeBoxPanel.js.map