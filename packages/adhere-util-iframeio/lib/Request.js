"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,s=1,o=arguments.length;s<o;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},uuid_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("uuid")),Request=function(){function t(t){var e;this.requestId=(0,uuid_1.v4)(),this.pathname="",this.headers={},this.statusCode=0,this.stateMessage="",this.body=null,this.pathname=t.pathname,this.headers=null!=(e=t.headers)?e:{},this.statusCode=t.statusCode||0,this.stateMessage=t.stateMessage||"",this.body=t.body}return t.prototype.getHeaders=function(){return __assign({},this.headers)},t.prototype.getBody=function(){return this.body},t.prototype.getStatusCode=function(){return this.statusCode},t.prototype.getStatusMessage=function(){return this.stateMessage},t.prototype.getPathname=function(){return this.pathname},t.prototype.getRequestId=function(){return this.requestId},t.prototype.setHeader=function(t,e){this.headers[t]=e},t.prototype.setBody=function(t){this.body=t},t.prototype.setStatusCode=function(t){this.statusCode=t},t.prototype.setStatusMessage=function(t){this.stateMessage=t},t.prototype.setPathname=function(t){this.pathname=t},t.prototype.setRequestId=function(t){this.requestId=t},t}();exports.default=Request;
//# sourceMappingURL=Request.js.map
