var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]]);return a};import React,{memo}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import intl from"@baifendian/adhere-util-intl";import Collapse from"./Collapse";var selectorPrefix="adhere-ui-playground-functionprops",FunctionProps=function(e){var t=e.data,i=void 0===t?[]:t,t=__rest(e,["data"]);return React.createElement(Collapse,__assign({},t),React.createElement("div",{className:selectorPrefix},React.createElement("table",{className:"".concat(selectorPrefix,"-inner")},(i||[]).map(function(e,t){var a=e.name,c=e.desc,n=e.modifier,l=e.params,r=e.returnType,e=e.returnDesc;return React.createElement(React.Fragment,null,React.createElement("tr",{key:"".concat(t),className:"".concat(selectorPrefix,"-item")},React.createElement("td",{valign:"top",className:"".concat(selectorPrefix,"-item-name")},React.createElement(ConditionalRender,{conditional:!!n},function(){return React.createElement("span",{className:"".concat(selectorPrefix,"-modifier")},n||"public"," -"," ")}),React.createElement("span",{className:"".concat(selectorPrefix,"-functionName")},a,"(",React.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},(l||[]).map(function(e){return e.name}).join(" , ")),")")),React.createElement("td",{valign:"top",className:"".concat(selectorPrefix,"-item-info")},React.createElement("div",{className:"".concat(selectorPrefix,"-item-desc")},c),React.createElement("dl",null,React.createElement("dt",{className:"".concat(selectorPrefix,"-")},intl.v("参数说明"),"："),React.createElement("dd",null,React.createElement(ConditionalRender,{conditional:!!l&&0!==l.length},function(){return React.createElement("ul",{className:"".concat(selectorPrefix,"-level1")},l.map(function(e,t){return React.createElement("li",{key:"".concat(t+1)},React.createElement("div",{style:{marginBottom:10}},React.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.name)," ","- ",e.desc||"-"),React.createElement("ul",{className:"".concat(selectorPrefix,"-level2"),style:{marginBottom:10}},React.createElement("li",null,intl.v("类型"),React.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),React.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.type||"-")),React.createElement("li",null,intl.v("默认值"),React.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),React.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.defaultVal||"-")),React.createElement("li",null,intl.v("是否必填"),React.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),React.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e.required?intl.v("是"):intl.v("否")))))}))}))),React.createElement("dl",null,React.createElement("dt",null,intl.v("返回值"),"："),React.createElement("dd",null,React.createElement("ul",{className:"".concat(selectorPrefix,"-level1")},React.createElement("li",null,intl.v("类型"),React.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),React.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},r||"-")),React.createElement("li",null,intl.v("说明"),React.createElement("span",{className:"".concat(selectorPrefix,"-split")},"-"),React.createElement("span",{className:"".concat(selectorPrefix,"-highlight")},e||"-"))))))),React.createElement(ConditionalRender,{conditional:t!==i.length-1},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-dividing")})}))}))))};export default memo(FunctionProps);
//# sourceMappingURL=FunctionProps.js.map
