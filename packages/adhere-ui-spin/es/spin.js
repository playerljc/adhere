import{useMount,useUpdateLayoutEffect}from"ahooks";import React,{memo,useRef}from"react";import{Spinner}from"spin.js";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Resource from"@baifendian/adhere-util-resource";var selectorPrefix="adhere-ui-spin",Spin=memo(function(e){function t(){c.current&&null!=(e=null==(t=c.current)?void 0:t.stop)&&e.call(t);var e=new Map([["small",.1],["default",.2],["large",.3]]).get(i),t=document.documentElement.style.getPropertyValue("--adhere-color-primary");c.current=new Spinner({lines:4,length:0,width:52,radius:29,scale:e,corners:1,speed:2.1,rotate:19,animation:"spinner-line-fade-quick",direction:1,color:t,fadeColor:"transparent",top:"46%",left:"50%",shadow:"0 0 1px transparent",zIndex:a,className:"".concat(selectorPrefix,"-spinner"),position:"absolute"}).spin(l.current)}var n=e.spinning,r=void 0!==n&&n,n=e.text,o=void 0===n?"":n,n=e.zIndex,a=void 0===n?Resource.Dict.value.ResourceNormalMaxZIndex.value:n,n=e.size,i=void 0===n?"default":n,c=useRef(null),l=useRef(null);return useMount(function(){r&&t()}),useUpdateLayoutEffect(function(){r&&t()},[i,r]),React.createElement(ConditionalRender,{conditional:r},function(){return React.createElement("div",{className:selectorPrefix,style:{zIndex:a}},React.createElement("span",{ref:l,className:"".concat(selectorPrefix,"-dot")}),o&&React.createElement("div",{className:"".concat(selectorPrefix,"-text")},o))})});export default Spin;
//# sourceMappingURL=Spin.js.map
