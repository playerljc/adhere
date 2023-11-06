var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,n){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};import React,{memo,useEffect,useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import PlayGround from"./PlayGround";import PlayGroundMulti from"./PlayGroundMulti";import PlayGroundTab from"./PlayGroundTab";import PlayGroundTabMobile from"./PlayGroundTabMobile";import Constant from"./constant";var selectPrefix="adhere-ui-playground-code-box",CodeBoxPanel=memo(function(c){var e=c.columnCount,a=void 0===e?1:e,e=c.config,i=void 0===e?[]:e,n=c.title,e=c.isShowExpandAllBtn,e=void 0===e||e,t=useState(""),l=t[0],r=t[1],t=useState(c.expandAll),d=t[0],o=t[1],u=useRef(!1),t=Array.from({length:a}).fill(void 0),s=new Map([["PlayGroundMulti",function(e,n){var t=c.config,r=t[n],a=r.renderWrap,o=r.renderChildren,r=(r.type,__rest(r,["renderWrap","renderChildren","type"])),i=React.createElement(PlayGroundMulti,__assign({},r,{isActive:l===r.id,expand:d}),React.createElement(ConditionalRender,{conditional:!!o},function(){return null==o?void 0:o(e,n,t)}));return React.createElement(ConditionalRender,{conditional:!!a,noMatch:function(){return i}},function(){return null==a?void 0:a(e,n,t,i)})}],["PlayGround",function(e,n){var t=i[n],r=t.renderWrap,a=t.renderChildren,t=(t.type,__rest(t,["renderWrap","renderChildren","type"])),o=React.createElement(PlayGround,__assign({},t,{isActive:l===t.id,expand:d}),React.createElement(ConditionalRender,{conditional:!!a},function(){return null==a?void 0:a(e,n,i)}));return React.createElement(ConditionalRender,{conditional:!!r,noMatch:function(){return o}},function(){return null==r?void 0:r(e,n,i,o)})}],["PlayGroundTab",function(e,n){var t=i[n],r=t.renderWrap,a=t.renderChildren,t=(t.type,__rest(t,["renderWrap","renderChildren","type"])),o=React.createElement(PlayGroundTab,__assign({},t,{isActive:l===t.id,expand:d}),React.createElement(ConditionalRender,{conditional:!!a},function(){return null==a?void 0:a(e,n,i)}));return React.createElement(ConditionalRender,{conditional:!!r,noMatch:function(){return o}},function(){return null==r?void 0:r(e,n,i,o)})}],["PlayGroundTabMobile",function(e,n){var t=i[n],r=t.renderWrap,t=(t.type,__rest(t,["renderWrap","type"])),a=React.createElement(PlayGroundTabMobile,__assign({},t,{isActive:l===t.id,expand:d}));return React.createElement(ConditionalRender,{conditional:!!r,noMatch:function(){return a}},function(){return null==r?void 0:r(e,n,i,a)})}]]);return useEffect(function(){if("undefined"!=typeof window)return window.addEventListener("hashchange",e),function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",e)};function e(){var e=window.location.hash.substring(1);r(e)}},[]),useEffect(function(){o(c.expandAll)},[c.expandAll]),useEffect(function(){u.current=!1},[d]),React.createElement("div",{className:selectPrefix},React.createElement("div",{className:"".concat(selectPrefix,"-header")},React.createElement(ConditionalRender,{conditional:!!n},function(){return React.createElement("div",{className:"".concat(selectPrefix,"-header-title")},n)}),React.createElement("div",{className:"".concat(selectPrefix,"-header-extra")},React.createElement(ConditionalRender,{conditional:e},function(){return React.createElement(ConditionalRender,{conditional:d,noMatch:function(){return React.createElement("img",{className:"".concat(selectPrefix,"-expand-code"),src:Constant.ExpandCodeAll,alt:"",onClick:function(){u.current||(u.current=!0,o(!0))}})}},function(){return React.createElement("img",{className:"".concat(selectPrefix,"-expand-code"),src:Constant.CloseCodeAll,alt:"",onClick:function(){u.current||(u.current=!0,o(!1))}})})}),React.createElement(ConditionalRender,{conditional:!!c.extra},function(){return c.extra}))),React.createElement("div",{className:"".concat(selectPrefix,"-main")},t.map(function(e,r){return React.createElement("div",{className:"".concat(selectPrefix,"-column"),key:"".concat(r)},i.map(function(e,n){var t;return n%a===r?React.createElement("div",{className:"".concat(selectPrefix,"-item"),key:e.id},null==(t=null==(t=null==s?void 0:s.get)?void 0:t.call(s,e.type))?void 0:t(r,n)):null}))})))});export default CodeBoxPanel;
//# sourceMappingURL=CodeBoxPanel.js.map
