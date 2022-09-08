import React,{useRef,useLayoutEffect}from"react";import classNames from"classnames";var selectorPrefix="adhere-ui-sliderscale",SliderScale=function(e){var a=e.className,t=void 0===a?"":a,c=e.style,s=void 0===c?{}:c,a=e.min,l=void 0===a?0:a,c=e.max,r=void 0===c?100:c,a=e.step,c=void 0===a?1:a,a=e.value,i=void 0===a?0:a,a=e.interval,m=void 0===a?5:a,n=e.onChange,e=useRef(null),o=useRef(null),u=useRef("");function f(e){e=e.target.value;o.current.value=e,u.current!==e&&(u.current=e,n&&n(e))}return useLayoutEffect(function(){o.current.value=""+i},[l,r,c,i,m]),React.createElement("div",{className:classNames(selectorPrefix,t||""),style:s||{},ref:e},React.createElement("div",{className:selectorPrefix+"-scale"},function(){for(var e=[],a=l;a<r&&r-1!==l;a++){var t=null,t=(a+1)%m==0?React.createElement("div",{key:a,className:selectorPrefix+"-scale-item "+selectorPrefix+"-scale-item-point"},React.createElement("span",{className:selectorPrefix+"-scale-item-value"},a+1)):a===l?React.createElement("div",{key:a,className:selectorPrefix+"-scale-item"},React.createElement("span",{className:selectorPrefix+"-scale-item-value"},l)):(a+1)%m!=0&&a===r-1?React.createElement("div",{key:a,className:selectorPrefix+"-scale-item"},React.createElement("span",{className:selectorPrefix+"-scale-item-value"},a+1)):React.createElement("div",{key:a,className:selectorPrefix+"-scale-item"});e.push(t)}var c=[];return l===r?c.push(React.createElement("div",{key:0,className:selectorPrefix+"-scale-item"},React.createElement("span",{className:selectorPrefix+"-scale-item-value"},"0"),React.createElement("span",{className:selectorPrefix+"-scale-item-value",style:{right:0,left:"auto"}},"$",r))):r-1===l&&c.push(React.createElement("div",{key:l,className:selectorPrefix+"-scale-item"},React.createElement("span",{className:selectorPrefix+"-scale-item-value"},l),React.createElement("span",{className:selectorPrefix+"-scale-item-value",style:{right:0,left:"auto"}},r))),c.concat(e)}()),React.createElement("input",{ref:o,className:selectorPrefix+"-range",type:"range",min:l,max:r,step:c,onMouseMove:function(e){f(e)},onTouchMove:function(e){f(e)}}))};export default SliderScale;
//# sourceMappingURL=sliderscale.js.map
