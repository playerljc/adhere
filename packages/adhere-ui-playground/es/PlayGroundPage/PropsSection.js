var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};import React,{memo}from"react";import Space from"@baifendian/adhere-ui-space";import Props from"../Props";import Section from"./Section";var PropsSection=memo(function(e){var t=e.title,r=e.extra,e=e.config;return React.createElement(Section,{title:t,extra:r},React.createElement(Space.Group,{direction:"vertical"},(e||[]).map(function(e,t){return React.createElement(Props,__assign({key:t+1},e))})))});PropsSection.displayName="PropsSection";export default PropsSection;
//# sourceMappingURL=PropsSection.js.map
