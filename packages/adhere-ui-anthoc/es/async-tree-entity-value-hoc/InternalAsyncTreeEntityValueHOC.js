var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};import{cloneElement,memo,useState}from"react";import useTreeEntityValueHOC from"../useTreeEntityValueHOC";var InternalAsyncTreeEntityValueHOC=memo(function(e){var n=useState([]),t=n[0],r=n[1],n=cloneElement(e.children,__assign(__assign({},null!=(n=null==(n=null==e?void 0:e.children)?void 0:n.props)?n:{}),{onDataSourceChange:function(e){r(e)}}));return useTreeEntityValueHOC(__assign(__assign({},e),{children:n,treeData:t}))}),AsyncTreeEntityValueHOC=InternalAsyncTreeEntityValueHOC;export default InternalAsyncTreeEntityValueHOC;
//# sourceMappingURL=InternalAsyncTreeEntityValueHOC.js.map