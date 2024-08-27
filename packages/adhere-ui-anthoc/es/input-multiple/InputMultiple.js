import _CloseOutlined from"@ant-design/icons/es/icons/CloseOutlined";import _PlusOutlined from"@ant-design/icons/es/icons/PlusOutlined";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var n,r=0,l=t.length;r<l;r++)!n&&r in t||((n=n||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))};import classNames from"classnames";import React,{useMemo,useState}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Hooks from"@baifendian/adhere-ui-hooks";import Space from"@baifendian/adhere-ui-space";import Intl from"@baifendian/adhere-util-intl";import Input from"../input";import Tag from"../tag";var selectorPrefix="adhere-ui-anthoc-input-multiple",usePropToState=Hooks.usePropToState,InputMultiple=function(e){var t=e.className,a=e.style,n=e.tagWrapperClassName,r=e.tagWrapperStyle,l=e.inputProps,o=e.tagProps,i=e.renderAdd,c=e.renderClear,u=e.direction,s=e.isCheckAll,p=e.options,m=e.value,f=e.onChange,e=useState(""),d=e[0],h=e[1],e=usePropToState(p),g=e[0],v=e[1],p=usePropToState(m),e=p[0],_=p[1],m=useMemo(function(){return null!=o?o:{}},[o]),y=useMemo(function(){return null!=u?u:"horizontal"},[u]),C=useMemo(function(){return!!s},[s]),p=useMemo(function(){return(null!=g?g:[]).map(function(e){return{value:e.value,children:e.label}})},[g]),P=useMemo(function(){return"vertical"===y?C?Tag.VerticalCheckAllCheckableTagGroup:Tag.VerticalCheckableTagGroup:"horizontal"===y&&C?Tag.HorizontalCheckAllCheckableTagGroup:Tag.HorizontalCheckableTagGroup},[y,C]);return React.createElement("div",{className:classNames(selectorPrefix,t),style:null!=a?a:{}},React.createElement(FlexLayout,{direction:"horizontal"},React.createElement(Space.Group,{direction:"horizontal",size:10},React.createElement(FlexLayout.Auto,null,React.createElement(Input,__assign({placeholder:Intl.v("请输入关键字"),showCount:!1,allowClear:!1},null!=l?l:{},{value:d,onChange:function(e){h(e.target.value)}}))),React.createElement(FlexLayout.Fixed,{fit:!0},React.createElement("div",{onClick:function(){var t=d.trim();t&&!(null!=g?g:[]).find(function(e){return e.value===t})&&v(function(e){return __spreadArray(__spreadArray([],null!=e?e:[],!0),[{label:d,value:d}],!1)})},className:"".concat(selectorPrefix,"-btn-wrapper")},null!=(t=null==i?void 0:i())?t:React.createElement(_PlusOutlined,{className:"".concat(selectorPrefix,"-btn")}))),React.createElement(FlexLayout.Fixed,{fit:!0},React.createElement("div",{onClick:function(){v([]),h("")},className:"".concat(selectorPrefix,"-btn-wrapper")},null!=(a=null==c?void 0:c())?a:React.createElement(_CloseOutlined,{className:"".concat(selectorPrefix,"-btn")}))))),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-tag-wrapper"),null!=n?n:""),style:null!=r?r:{}},React.createElement(P,__assign({mode:"multiple"},m,{wrap:!0,options:null!=p?p:[],value:e,onChange:function(e){_(e),null!=f&&f(e)}}))))};export default InputMultiple;
//# sourceMappingURL=InputMultiple.js.map
