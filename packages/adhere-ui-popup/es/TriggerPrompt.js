var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(r){for(var t,e=1,o=arguments.length;e<o;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}).apply(this,arguments)},__rest=this&&this.__rest||function(r,t){var e={};for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]]);return e};import{forwardRef}from"react";import React from"react";import Intl from"@baifendian/adhere-util-intl";import Trigger from"./Trigger";var TriggerPrompt=forwardRef(function(r,t){var e=r.onSubmit,o=r.okText,r=__rest(r,["onSubmit","okText"]);return React.createElement(Trigger,__assign({ref:t},r,{actions:[{key:"submit",color:"primary",children:null!=o?o:Intl.v("确定"),onClick:function(){var r;return null!=(r=null==e?void 0:e())?r:Promise.resolve()}}]}))});TriggerPrompt.displayName="TriggerPrompt";export default TriggerPrompt;
//# sourceMappingURL=TriggerPrompt.js.map
