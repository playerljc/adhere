var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};import React,{memo,useEffect,useState}from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import CodePanel,{CodePanelPropTypes}from"./CodePanel";import SimpleTabs from"./SimpleTabs";var selectPrefix="adhere-ui-playground-code-tab-panel",TabPanel=SimpleTabs.TabPanel,CodeTabPanel=function(e){var t=e.config,n=void 0===t?[]:t,a=e.onChange,t=useState(e.active),r=t[0],o=t[1];return useEffect(function(){return o(e.active)},[e.active]),React.createElement("div",{className:selectPrefix},React.createElement(SimpleTabs,{activeKey:r,onChange:function(e){o(e),a&&a(e)}},(n||[]).map(function(e){var t=e.key,n=e.title,a=__rest(e,["key","title"]);return React.createElement(TabPanel,{title:n,key:t,index:t},React.createElement(ConditionalRender,{conditional:r===t},function(){return React.createElement(CodePanel,__assign({},a))}))})))},CodeTabPanelDefaultProps={active:"",config:[]},CodeTabPanelPropTypes={active:PropTypes.string,config:PropTypes.arrayOf(PropTypes.shape(__assign(__assign({},CodePanelPropTypes),{key:PropTypes.string,title:PropTypes.oneOfType([PropTypes.string,PropTypes.node])}))),onChange:PropTypes.func};export default memo(CodeTabPanel);export{CodeTabPanelDefaultProps,CodeTabPanelPropTypes};
//# sourceMappingURL=CodeTabPanel.js.map
