var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a};import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import intl from"@baifendian/adhere-util-intl";import Collapse from"./Collapse";var selectorPrefix="adhere-ui-playground-functionprops",FunctionProps=function(e){var t=e.data,i=void 0===t?[]:t,e=__rest(e,["data"]);return React.createElement(Collapse,__assign({},e),React.createElement("div",{className:selectorPrefix},React.createElement("table",{className:selectorPrefix+"-inner"},(i||[]).map(function(e,t){var a=e.name,l=e.desc,r=e.modifier,n=e.params,c=e.returnType,e=e.returnDesc;return React.createElement(React.Fragment,null,React.createElement("tr",{key:""+t,className:selectorPrefix+"-item"},React.createElement("td",{valign:"top",className:selectorPrefix+"-item-name"},React.createElement(ConditionalRender,{conditional:!!r},function(){return React.createElement("span",{className:selectorPrefix+"-modifier"},r||"public"," -"," ")}),React.createElement("span",{className:selectorPrefix+"-functionName"},a,"(",React.createElement("span",{className:selectorPrefix+"-highlight"},(n||[]).map(function(e){return e.name}).join(" , ")),")")),React.createElement("td",{valign:"top",className:selectorPrefix+"-item-info"},React.createElement("div",{className:selectorPrefix+"-item-desc"},l),React.createElement("dl",null,React.createElement("dt",{className:selectorPrefix+"-"},intl.v("参数说明"),"："),React.createElement("dd",null,React.createElement(ConditionalRender,{conditional:!!n&&0!==n.length},function(){return React.createElement("ul",{className:selectorPrefix+"-level1"},n.map(function(e,t){return React.createElement("li",{key:""+(t+1)},React.createElement("div",{style:{marginBottom:10}},React.createElement("span",{className:selectorPrefix+"-highlight"},e.name)," ","- ",e.desc||"-"),React.createElement("ul",{className:selectorPrefix+"-level2",style:{marginBottom:10}},React.createElement("li",null,intl.v("类型"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e.type||"-")),React.createElement("li",null,intl.v("默认值"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e.defaultVal||"-")),React.createElement("li",null,intl.v("是否必填"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e.required?intl.v("是"):intl.v("否")))))}))}))),React.createElement("dl",null,React.createElement("dt",null,intl.v("返回值"),"："),React.createElement("dd",null,React.createElement("ul",{className:selectorPrefix+"-level1"},React.createElement("li",null,intl.v("类型"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},c||"-")),React.createElement("li",null,intl.v("说明"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e||"-"))))))),React.createElement(ConditionalRender,{conditional:t!==i.length-1},function(){return React.createElement("div",{className:selectorPrefix+"-dividing"})}))}))))};export default FunctionProps;
//# sourceMappingURL=FunctionProps.js.map
