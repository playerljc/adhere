var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};import React from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import intl from"@baifendian/adhere-util-intl";import Collapse from"./Collapse";var selectorPrefix="adhere-ui-playground-functionprops",InferPropsInner=function(){},InferType=function(){},FunctionProps=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.render=function(){var e=this.props,s=e.data,e=__rest(e,["data"]);return React.createElement(Collapse,__assign({},e),React.createElement("div",{className:selectorPrefix},React.createElement("table",{className:selectorPrefix+"-inner"},s.map(function(e,t){var r=e.name,a=e.desc,n=e.modifier,l=e.params,c=e.returnType,e=e.returnDesc;return React.createElement(React.Fragment,null,React.createElement("tr",{key:""+t,className:selectorPrefix+"-item"},React.createElement("td",{valign:"top",className:selectorPrefix+"-item-name"},React.createElement(ConditionalRender,{conditional:!!n},function(){return React.createElement("span",{className:selectorPrefix+"-modifier"},n||"public"," -"," ")}),React.createElement("span",{className:selectorPrefix+"-functionName"},r,"(",React.createElement("span",{className:selectorPrefix+"-highlight"},(l||[]).map(function(e){return e.name}).join(" , ")),")")),React.createElement("td",{valign:"top",className:selectorPrefix+"-item-info"},React.createElement("div",{className:selectorPrefix+"-item-desc"},a),React.createElement("dl",null,React.createElement("dt",{className:selectorPrefix+"-"},intl.v("参数说明"),"："),React.createElement("dd",null,React.createElement(ConditionalRender,{conditional:!!l&&0!==l.length},function(){return React.createElement("ul",{className:selectorPrefix+"-level1"},l.map(function(e,t){return React.createElement("li",{key:""+(t+1)},React.createElement("div",{style:{marginBottom:10}},React.createElement("span",{className:selectorPrefix+"-highlight"},e.name)," ","- ",e.desc||"-"),React.createElement("ul",{className:selectorPrefix+"-level2",style:{marginBottom:10}},React.createElement("li",null,intl.v("类型"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e.type||"-")),React.createElement("li",null,intl.v("默认值"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e.defaultVal||"-")),React.createElement("li",null,intl.v("是否必填"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e.required?intl.v("是"):intl.v("否")))))}))}))),React.createElement("dl",null,React.createElement("dt",null,intl.v("返回值"),"："),React.createElement("dd",null,React.createElement("ul",{className:selectorPrefix+"-level1"},React.createElement("li",null,intl.v("类型"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},c||"-")),React.createElement("li",null,intl.v("说明"),React.createElement("span",{className:selectorPrefix+"-split"},"-"),React.createElement("span",{className:selectorPrefix+"-highlight"},e||"-"))))))),React.createElement(ConditionalRender,{conditional:t!==s.length-1},function(){return React.createElement("div",{className:selectorPrefix+"-dividing"})}))}))))},t}(React.Component);FunctionProps.defaultProps=__assign(__assign({},Collapse.defaultProps),{data:[]}),FunctionProps.propTypes=__assign(__assign({},Collapse.propTypes),{data:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string,desc:PropTypes.string,modifier:PropTypes.oneOf(["static","public","private","protected"]),params:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string,desc:PropTypes.string,type:PropTypes.string,defaultVal:PropTypes.string,required:PropTypes.oneOfType([PropTypes.bool,PropTypes.string])})),returnType:PropTypes.string,returnDesc:PropTypes.string}))});export default FunctionProps;
//# sourceMappingURL=FunctionProps.js.map
