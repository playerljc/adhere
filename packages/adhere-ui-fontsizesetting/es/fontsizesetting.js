import _Slider from"antd/es/slider";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};import classNames from"classnames";import omit from"omit.js";import React,{memo,useCallback,useEffect,useRef,useState}from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-ui-font-size-setting",FontSizeSetting=memo(function(e){var t=e.className,a=e.style,l=e.onChange,n=useState(e.value),s=n[0],c=n[1],n=useRef(null),r=useCallback(function(e){c(e),null!=l&&l(e)},[s]);return useEffect(function(){c(e.value)},[e.value]),React.createElement("div",{className:classNames(selectorPrefix,null!=t?t:""),style:null!=a?a:{},ref:n},React.createElement("div",{className:"".concat(selectorPrefix,"-range-wrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-separated-tool")},React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("小"))),React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("中"))),React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("大"))),React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("特大")))),React.createElement(_Slider,__assign({},omit(e,["className","style","value","onChange"]),{value:s,onChange:r}))))});export default FontSizeSetting;
//# sourceMappingURL=FontSizeSetting.js.map
