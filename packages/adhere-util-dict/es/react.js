var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};import{useUpdateLayoutEffect}from"ahooks";import React,{forwardRef,useState}from"react";import Suspense from"@baifendian/adhere-ui-suspense";import Util from"@baifendian/adhere-util";import Dict from"./dict";var ComponentMap=new Map([["Function",function(l){return forwardRef(function(t,e){function n(){Dict.handlers[l].isUseMemo=s||!1;var t=(t=Dict.value[l]).value.apply(t,u||[]);return t.then?t.then(function(t){return f(t),t}):(f(t),Promise.resolve(t))}var r=t.children,i=t.firstLoading,o=t.isEmpty,a=t.renderEmpty,u=t.args,s=t.isUseMemo,t=useState(),c=t[0],f=t[1],t={};i&&(t.firstLoading=i),a&&(t.renderEmpty=a),o&&(t.isEmpty=o);return useUpdateLayoutEffect(function(){n()},u||[]),React.createElement(Suspense.ASync,__assign({ref:e,fetchData:n},t,{isEmpty:function(){return null==c||(null==o?void 0:o(c))}}),null==r?void 0:r(c))})}],["NotPromise",function(e){return function(t){t=t.children;return null==t?void 0:t(Dict.value[e].value)}}],["Promise",function(s){return forwardRef(function(t,e){var n=t.children,r=t.firstLoading,i=t.isEmpty,t=t.renderEmpty,o=useState(),a=o[0],u=o[1],o={};r&&(o.firstLoading=r),t&&(o.renderEmpty=t),i&&(o.isEmpty=i);return React.createElement(Suspense.ASync,__assign({ref:e,fetchData:function(){return Dict.value[s].value.then(function(t){return u(t),t})}},o,{isEmpty:function(){return null==a||(null==i?void 0:i(a))}}),null==n?void 0:n(a))})}]]);function set(i){DictReactComponents[i]||(DictReactComponents[i]=forwardRef(function(t,e){var n=Dict.value[i].value,r=Util.isFunction(n)?null==(r=ComponentMap.get("Function"))?void 0:r(i):n.then?null==(r=ComponentMap.get("Promise"))?void 0:r(i):null==(n=ComponentMap.get("NotPromise"))?void 0:n(i);return r?React.createElement(r,__assign({ref:e},t)):null}))}var DictReactComponents={};export default DictReactComponents;export{set};
//# sourceMappingURL=react.js.map
