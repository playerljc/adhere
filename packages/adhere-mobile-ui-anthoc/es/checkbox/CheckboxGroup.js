var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};import{Checkbox,Space}from"antd-mobile";import classNames from"classnames";import React from"react";var InternalCheckbox=function(e){var t=e.options,a=e.spaceProps,r=e.spaceClassName,n=e.spaceStyle,e=__rest(e,["options","spaceProps","spaceClassName","spaceStyle"]);return React.createElement(Checkbox.Group,__assign({},e),React.createElement(Space,__assign({className:classNames(null!=r?r:""),style:null!=n?n:{},direction:"vertical",block:!0},null!=a?a:{}),null==(e=null==t?void 0:t.map)?void 0:e.call(t,function(e){return React.createElement(Checkbox,__assign({key:e.value,block:!0},e))})))};export default InternalCheckbox;
//# sourceMappingURL=CheckboxGroup.js.map