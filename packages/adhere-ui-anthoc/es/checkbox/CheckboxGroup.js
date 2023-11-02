var __spreadArray=this&&this.__spreadArray||function(e,r,a){if(a||2===arguments.length)for(var t,l=0,o=r.length;l<o;l++)!t&&l in r||((t=t||Array.prototype.slice.call(r,0,l))[l]=r[l]);return e.concat(t||Array.prototype.slice.call(r))};import{useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{memo,useState}from"react";import Space from"../space";import Checkbox from"./Checkbox";var selectorPrefix="adhere-ui-ant-hoc-checkbox-group-ext",CheckboxGroupExt=function(e){var r=e.className,a=e.style,t=e.direction,l=e.options,o=e.onChange,c=e.value,n=e.children,u=e.defaultValue,e=e.disabled,i=void 0!==e&&e,e=useState(c||u),s=e[0],d=e[1];function p(e,r){var a;e.target.checked?(a=__spreadArray(__spreadArray([],null!=s?s:[],!0),[r],!1),d(a),null!=o&&o(a,!0,[r])):(a=(null!=s?s:[]).filter(function(e){return e!==r}),d(a),null!=o&&o(a,!1,[r]))}return useUpdateEffect(function(){d(c)},[c]),React.createElement("div",{className:classNames(selectorPrefix,null!=r?r:""),style:null!=a?a:{}},n&&n(p),!n&&React.createElement(Space,{direction:null!=t?t:"horizontal"},null==(u=null==l?void 0:l.map)?void 0:u.call(l,function(e,r){var a=e.value,t=e.disabled,e=e.label;return React.createElement(Checkbox,{key:a,value:s,disabled:null!=t?t:i,checked:(null!=s?s:[]).includes(a),onChange:function(e){return p(e,a)}},e)})))};export default memo(CheckboxGroupExt);
//# sourceMappingURL=CheckboxGroup.js.map
