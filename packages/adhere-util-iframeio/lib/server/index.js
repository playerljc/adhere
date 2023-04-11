"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),Constent_1=require("../Constent"),Context_1=__importDefault(require("../Context")),Request_1=__importDefault(require("../Request")),Response_1=__importDefault(require("../Response")),compose_1=__importDefault(require("./compose")),Server=function(){function e(e,t,s){void 0===e&&(e=[]),this.whitelist=[],this.middleWareQueue=[],this.whitelist=e,this.source=t,this.sourceOrigin=s,this.onMessage=this.onMessage.bind(this)}return e.prototype.onMessage=function(e){try{var t=JSON.parse(e.data);this.whitelist.includes(e.origin)&&e.source&&!adhere_util_1.default.isEmpty(t)&&adhere_util_1.default.isObject(t)&&"requestId"in t&&!adhere_util_1.default.isEmpty(t.requestId)&&this.service(e,t)}catch(e){console.warn(e)}},e.prototype.middleWareQueueReduce=function(e){return(0,compose_1.default)(this.middleWareQueue)(e)},e.prototype.service=function(s,e){var r,t=new Request_1.default(e);t.setRequestId(e.requestId),t.setStatusCode(200),t.setStatusMessage(Constent_1.OK_MESSAGE),this.middleWareQueue.length&&(r=new Context_1.default({request:t,response:new Response_1.default({requestId:t.getRequestId(),statusCode:0,stateMessage:Constent_1.ERROR_MESSAGE,headers:{pathname:t.getPathname(),date:(new Date).toString(),origin:this.sourceOrigin,referer:this.source instanceof Window?this.source.location.href:""},body:null})}),this.middleWareQueueReduce(r).then(function(){var e,t;null!=(t=null==(e=null==s?void 0:s.source)?void 0:e.postMessage)&&t.call(e,JSON.stringify(r.response),s.origin)}))},e.prototype.start=function(){var t=this;return new Promise(function(e){t.source.addEventListener("message",t.onMessage),e()})},e.prototype.close=function(){var t=this;return new Promise(function(e){t.source.removeEventListener("message",t.onMessage),e()})},e.prototype.use=function(e){var t;return Array.isArray(e)?(t=this.middleWareQueue).push.apply(t,e):this.middleWareQueue.push(e),this},e}();exports.default=Server;
//# sourceMappingURL=index.js.map
