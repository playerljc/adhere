var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};import{Button}from"antd-mobile";import React,{useState}from"react";import{createFactory}from"../util";export default createFactory(function(r){var t=useState(!1),e=t[0],o=t[1];return React.createElement(Button,__assign({loading:e},r,{onClick:function(t){var n;r.onClick&&!e&&(o(!0),null!=(t=null==(n=null==(n=null==(t=r.onClick(t))?void 0:t.then)?void 0:n.call(t,function(){return o(!1)}))?void 0:n.catch))&&t.call(n,function(){return o(!1)})}}),r.children)},{});
//# sourceMappingURL=index.js.map
