var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)};import{useUpdateLayoutEffect}from"ahooks";import React,{forwardRef,memo,useImperativeHandle,useMemo,useRef,useState}from"react";import Suspense from"@baifendian/adhere-ui-suspense";import Util from"@baifendian/adhere-util";import Dict from"./dict";var ComponentCache=new Map,FunctionComponent=function(l){return function(n,e){var t=n.children,o=n.firstLoading,r=n.isEmpty,i=n.renderEmpty,a=n.args,u=n.isUseMemo,n=useState(),c=n[0],s=n[1],m=useRef(),n=useMemo(function(){var n={};return o&&(n.firstLoading=o),i&&(n.renderEmpty=i),r&&(n.isEmpty=r),n},[o,i,r]);useUpdateLayoutEffect(function(){var n,e;null!=(e=null==(n=null==m?void 0:m.current)?void 0:n.fetchData)&&e.call(n)},a||[]),useImperativeHandle(e,function(){return{reload:function(){var n,e;return null==(e=null==(n=null==m?void 0:m.current)?void 0:n.fetchData)?void 0:e.call(n)},reset:function(){return m.current.reset()}}});return React.createElement(Suspense.ASync,__assign({ref:m,fetchData:function(){Dict.handlers[l].isUseMemo=u||!1;var n=(n=Dict.value[l]).value.apply(n,a||[]);return n.then?n.then(function(n){return s(n),n}):(s(n),Promise.resolve(n))}},n,{isEmpty:function(){return null==c||(null==r?void 0:r(c))}}),null==t?void 0:t(c))}},PromiseComponent=function(c){return function(n,e){var t=n.children,o=n.firstLoading,r=n.isEmpty,i=n.renderEmpty,n=useState(),a=n[0],u=n[1],n=useMemo(function(){var n={};return o&&(n.firstLoading=o),i&&(n.renderEmpty=i),r&&(n.isEmpty=r),n},[o,i,r]);return React.createElement(Suspense.ASync,__assign({ref:e,fetchData:function(){return Dict.value[c].value.then(function(n){return u(n),n})}},n,{isEmpty:function(){return null==a||(null==r?void 0:r(a))}}),null==t?void 0:t(a))}},NoPromiseComponent=function(r){return function(n){var e=n.children,t=n.isEmpty,n=n.renderEmpty,o=Dict.value[r].value;return null==o||null!=t&&t(o)?null==n?void 0:n():null==e?void 0:e(o)}},ComponentMap=new Map([["Function",function(n){return ComponentCache.has("Function_".concat(n))||ComponentCache.set("Function_".concat(n),memo(forwardRef(FunctionComponent(n)))),ComponentCache.get("Function_".concat(n))}],["Promise",function(n){return ComponentCache.has("Promise_".concat(n))||ComponentCache.set("Promise_".concat(n),memo(forwardRef(PromiseComponent(n)))),ComponentCache.get("Promise_".concat(n))}],["NotPromise",function(n){return ComponentCache.has("NotPromise_".concat(n))||ComponentCache.set("NotPromise_".concat(n),memo(NoPromiseComponent(n))),ComponentCache.get("NotPromise_".concat(n))}]]),Component=function(r){return function(n,e){var t=Dict.value[r].value,o=Util.isFunction(t)?null==(o=ComponentMap.get("Function"))?void 0:o(r):t.then?null==(o=ComponentMap.get("Promise"))?void 0:o(r):null==(t=ComponentMap.get("NotPromise"))?void 0:t(r);return o?React.createElement(o,__assign({ref:e},n)):null}};function set(n){DictReactComponents[n]||(DictReactComponents[n]=memo(forwardRef(Component(n))))}var DictReactComponents={};export default DictReactComponents;export{set};
//# sourceMappingURL=react.js.map
