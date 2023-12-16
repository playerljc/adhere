import _Slider from"antd/es/slider";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};import classNames from"classnames";import omit from"omit.js";import React,{memo,useCallback,useEffect,useRef,useState}from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-ui-font-size-setting",FontSizeSetting=memo(function(t){var e=t.className,a=t.style,l=t.onChange,n=useState(null!=(n=t.value)?n:0),s=n[0],c=n[1],n=useRef(null),r=useCallback(function(e){c(e),null!=l&&l(e)},[s]);return useEffect(function(){var e;c(null!=(e=t.value)?e:0)},[t.value]),React.createElement("div",{className:classNames(selectorPrefix,null!=e?e:""),style:null!=a?a:{},ref:n},React.createElement("div",{className:"".concat(selectorPrefix,"-range-wrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-separated-tool")},React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("小"))),React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("中"))),React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("大"))),React.createElement("div",{className:"".concat(selectorPrefix,"-separated")},React.createElement("span",null,Intl.v("特大")))),React.createElement(_Slider,__assign({},omit(t,["className","style","value","onChange"]),{value:s,onChange:r}))))});FontSizeSetting.displayName="FontSizeSetting";export default FontSizeSetting;
//# sourceMappingURL=FontSizeSetting.js.map
