import _Button from"antd/es/button";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}).apply(this,arguments)};import React,{useState}from"react";import{createFactory}from"../util";var SubmitButtonHOC=createFactory(function(r){var t=useState(!1),o=t[0],a=t[1];return React.createElement(_Button,__assign({loading:o},r,{onClick:function(t){var n;r.onClick&&!o&&(a(!0),null!=(t=null==(n=null==(n=null==(t=r.onClick(t))?void 0:t.then)?void 0:n.call(t,function(){return a(!1)}))?void 0:n.catch))&&t.call(n,function(){return a(!1)})}}),r.children)},{});SubmitButtonHOC.displayName="SubmitButton";export default SubmitButtonHOC;
//# sourceMappingURL=SubmitButton.js.map