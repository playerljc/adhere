var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import Response from"../Response";import Request from"../Request";import{ERROR_MESSAGE}from"../Constent";var Fetch=function(){function e(e,t){this.source=e,this.origin=t}return e.prototype.send=function(i,a,e,t){var u=this;return new Promise(function(s,n){function r(e){var t=new Response(e.data);t.setRequestId(e.data.requestId),e.origin===a&&e.source===i&&o.getRequestId()===t.getRequestId()&&(u.source.removeEventListener("message",r),(500!==t.getStatusCode()?s:n)(t))}var o=new Request({pathname:e,headers:__assign(__assign({},(null==t?void 0:t.headers)||{}),{origin:u.origin,referer:u.source instanceof Window?u.source.location.href:""}),statusCode:0,stateMessage:ERROR_MESSAGE,body:null==t?void 0:t.data});u.source.addEventListener("message",r),i.postMessage(o,a)})},e.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.send.apply(this,e)},e.prototype.put=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.send.apply(this,e)},e.prototype.delete=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.send.apply(this,e)},e}();export default Fetch;
//# sourceMappingURL=index.js.map
