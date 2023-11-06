var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};import React,{memo,useMemo}from"react";import Intl from"@baifendian/adhere-util-intl";import Collapse from"./Collapse";import Table from"./Table";var selectPrefix="adhere-ui-playground-props",Props=memo(function(e){var t=e.data,t=void 0===t?[]:t,e=(e.children,__rest(e,["data","children"])),r=useMemo(function(){return[{title:Intl.v("参数"),key:"params",dataIndex:"params",width:"20%"},{title:Intl.v("说明"),key:"desc",dataIndex:"desc",width:"50%"},{title:Intl.v("类型"),key:"type",dataIndex:"type",width:"15%",render:function(e){return React.createElement("code",{className:"".concat(selectPrefix,"-highlight")},e)}},{title:Intl.v("默认值"),key:"defaultVal",dataIndex:"defaultVal",width:"15%",render:function(e){return React.createElement("code",null,e||"-")}}]},[]);return React.createElement(Collapse,__assign({},e),React.createElement("div",{className:selectPrefix},React.createElement(Table,{columns:r,dataSource:(t||[]).map(function(e,t){return __assign(__assign({},e),{id:"".concat(t+1)})}),rowKey:"id"})))});export default Props;
//# sourceMappingURL=Props.js.map
