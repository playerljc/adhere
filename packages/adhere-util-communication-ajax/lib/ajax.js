"use strict";var errorInfoHandler,warnInfoHandler,__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),adhere_ui_globalindicator_1=__importDefault(require("@baifendian/adhere-ui-globalindicator")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),trigger402=!1,notificationThrottlingTime=300,Ajax=function(){function e(e,t,n){this.baseURL=e||"",this.systemManagerBaseURL=t||"",this.config=null!=n?n:{}}return e.prototype.get=function(e){var n=this,a=(e.data,__rest(e,["data"])),r={},e=new Promise(function(e,t){e=(r=sendPrepare.call(n,__assign(__assign(__assign(__assign({},getDefaultConfig.call(n)),n.config),{method:"get"}),a),{resolve:e,reject:t})).xhr;e&&e.send(null)});return __assign(__assign({},r),{promise:e})},e.prototype.post=function(e){return complexRequest.call(this,"post",e)},e.prototype.path=function(e){return complexRequest.call(this,"path",e)},e.prototype.put=function(e){return complexRequest.call(this,"put",e)},e.prototype.delete=function(e){return complexRequest.call(this,"delete",e)},e.TIMEOUT=1e6,e.STATUS_SUCCESS_CODES=[200,201,202,203,204,205,206,207,208,226],e.STATUS_REDIRECT_CODES=[300,301,302,303,304,305,306,307,308],e.READY_STATE_UNSENT=0,e.READY_STATE_OPENED=1,e.READY_STATE_HEADERS_RECEIVED=2,e.READY_STATE_LOADING=3,e.READY_STATE_DONE=4,e.CONTENT_TYPE_APPLICATION_JSON="application/json",e.CONTENT_TYPE_MULTIPART_FORM_DATA="multipart/form-data",e.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED="application/x-www-form-urlencoded",e.CONTENT_TYPE_TEXT_XML="text/xml",e.CONTENT_TYPE_APPLICATION_XML="application/xml",e.CONTENT_TYPE_TEXT_PLAIN="text/plain",e}();function errorInfo(e,t){errorInfoHandler&&(clearTimeout(errorInfoHandler),errorInfoHandler=null),errorInfoHandler=setTimeout(function(){antd_1.notification.error({message:e,description:t})},notificationThrottlingTime)}function warnInfo(e,t){warnInfoHandler&&(clearTimeout(warnInfoHandler),warnInfoHandler=null),warnInfoHandler=setTimeout(function(){antd_1.notification.warning({message:e,description:t})},notificationThrottlingTime)}function createXHR(){return new XMLHttpRequest}function getDefaultConfig(){var t=this;return{timeout:Ajax.TIMEOUT,withCredentials:!0,onLoad:function(){},onLoadsStart:function(){},onLoadend:function(){},onProgress:function(){},onTimeout:function(){warnInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("请求超时"))},onAbort:function(){warnInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("请求终止"))},onError:function(){errorInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("请求发生错误"))},interceptor:function(e){switch(e.status){case 401:deal401.call(t);break;case 402:deal402.call(t);break;default:errorInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("已提出请求，但未收到任何回复"))}},mock:!1,loading:{show:!1,text:"",el:document.body,zIndex:19999,size:"default"},onBeforeResponse:function(){},dataKey:"data",messageKey:"message",codeKey:"code",codeSuccess:200,showWarn:!0,responseType:""}}function initXhrEvents(e){var t=e.xhr,n=e.events,a=e.reject,r=n.onTimeout,e=n.onLoadsStart,o=n.onProgress,i=n.onAbort,s=n.onError,d=n.onLoad,n=n.onLoadend;r&&t.addEventListener("timeout",function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(void 0,null!=e?e:{}),a.apply(void 0,null!=e?e:{})}),i&&t.addEventListener("abort",function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(void 0,null!=e?e:{}),a.apply(void 0,null!=e?e:{})}),s&&t.addEventListener("error",function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s.apply(void 0,null!=e?e:{}),a.apply(void 0,null!=e?e:{})}),e&&t.addEventListener("loadstart",e),o&&t.addEventListener("progress",o),d&&t.addEventListener("load",d),n&&t.addEventListener("loadend",n)}function resolveData(e){var t=e.show,n=e.data,a=e.indicator,e=e.xhr;return __assign({xhr:e,data:n},t?{hideIndicator:function(){return adhere_ui_globalindicator_1.default.hide(a)}}:{})}function onreadystatechange(e){var t,n,a=e.xhr,r=e.interceptor,o=e.loading,i=o.show,o=o.indicator,s=e.business,d=s.messageKey,l=s.codeKey,u=s.codeSuccess,s=s.showWarn,_=e.resolve,e=e.reject;a.readyState===Ajax.READY_STATE_DONE&&(200<=a.status&&a.status<300||304===a.status?-1!==(t=a.getResponseHeader("Content-type")).indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON)?(n=JSON.parse(a.responseText),s&&l in n&&n[l]!==u&&warnInfo(adhere_util_intl_1.default.v("提示"),n[d]),_(resolveData({show:i,data:n,indicator:o,xhr:a}))):[Ajax.CONTENT_TYPE_TEXT_XML,Ajax.CONTENT_TYPE_TEXT_XML].includes(t)?_(resolveData({show:i,data:a.responseXML,indicator:o,xhr:a})):_(resolveData({show:i,data:a.response,indicator:o,xhr:a})):(r({status:a.status,statusText:a.statusText,response:a.response,responseText:a.responseText}),e({status:a.status,statusText:a.statusText,response:a.response,responseText:a.responseText}),i&&o&&adhere_ui_globalindicator_1.default.hide(o)))}function isMultipartFormData(e){return e&&"form"in e&&"data"in e&&!adhere_util_1.default.isEmpty(e.form)&&!adhere_util_1.default.isEmpty(e.data)&&e.form instanceof HTMLFormElement}function sendPrepare(e,t){var n,a=e.method,r=e.path,o=e.headers,i=e.data,s=e.mock,d=e.loading,l=(e.onBeforeResponse,e.dataKey),l=void 0===l?"data":l,u=e.messageKey,u=void 0===u?"message":u,_=e.codeKey,_=void 0===_?"code":_,c=e.codeSuccess,c=void 0===c?200:c,f=e.showWarn,f=void 0===f||f,e=__rest(e,["method","path","headers","data","mock","loading","onBeforeResponse","dataKey","messageKey","codeKey","codeSuccess","showWarn"]),p=t.resolve,t=t.reject,T="".concat(adhere_util_intl_1.default.v("加载中"),"..."),h=d.show,g=void 0!==h&&h,h=d.text,E=d.el,E=void 0===E?document.body:E,m=d.zIndex,d=d.size;if(g&&(n=adhere_ui_globalindicator_1.default.show(E||document.body,(void 0===h?T:h)||T,void 0===m?19999:m,void 0===d?"default":d)),s)return setTimeout(function(){p(g?{data:r,hideIndicator:function(){adhere_ui_globalindicator_1.default.hide(n)}}:r)},200),{xhr:null,contentType:""};var E=this.baseURL,h=this.config,T=Object.assign(getDefaultConfig.call(this),h,e),m=T.timeout,d=T.withCredentials,s=T.responseType,h=T.interceptor,e=__rest(T,["timeout","withCredentials","responseType","interceptor"]),y=createXHR(),T=(y.open(a,"".concat(E,"/").concat(r),!0),y.timeout=m,y.withCredentials=d,y.responseType=s||"","");if(!adhere_util_1.default.isEmpty(o)&&adhere_util_1.default.isObject(o))for(var O in"Content-Type"in o||isMultipartFormData(i)||(o["Content-Type"]="".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8")),T=null!=(E=o["Content-Type"])?E:"",o)y.setRequestHeader(O,o[O]);else!adhere_util_1.default.isEmpty(i)&&adhere_util_1.default.isRef(i)&&"get"!==a&&(isMultipartFormData(i)?T=Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA:(T="".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8"),y.setRequestHeader("Content-Type","".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8"))));return initXhrEvents({xhr:y,events:e,reject:t}),y.onreadystatechange=onreadystatechange.bind(this,{xhr:y,interceptor:h,loading:{show:g,indicator:n},business:{dataKey:l,messageKey:u,codeKey:_,codeSuccess:c,showWarn:f},resolve:p,reject:t}),{xhr:y,contentType:T}}function getSendParams(e){var n,a=e.data,t=e.contentType,t=void 0===t?"":t,e=e.customSendJSONStringify;if(t.startsWith(Ajax.CONTENT_TYPE_APPLICATION_JSON)&&adhere_util_1.default.isRef(a))return e?JSON.stringify(a,e):JSON.stringify(a);if(t.startsWith(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED)&&adhere_util_1.default.isObject(a))return Array.from(Object.keys(a)).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(a[e]))}).join("&");if(adhere_util_1.default.isObject(a)&&isMultipartFormData(a))return n=new FormData(a.form),Array.from(Object.keys(a.data)).forEach(function(t){var e=a.data[t];e instanceof Function?n.append(t,e()):Array.isArray(e)?e.forEach(function(e){n.append(t,e)}):n.append(t,e)}),n;if(t.startsWith(Ajax.CONTENT_TYPE_TEXT_PLAIN)){if(adhere_util_1.default.isString(a))return a;if(adhere_util_1.default.isObject(a))return e?JSON.stringify(a,e):JSON.stringify(a)}return null==(t=null==a?void 0:a.toString)?void 0:t.call(a)}function complexRequest(n,a){var r=this,o={},e=new Promise(function(e,t){e=(o=sendPrepare.call(r,__assign(__assign(__assign(__assign({},getDefaultConfig.call(r)),r.config),{method:n}),a),{resolve:e,reject:t})).xhr,t=o.contentType;e&&e.send(getSendParams.call(r,{data:a.data,contentType:t,customSendJSONStringify:a.customSendJSONStringify}))});return __assign(__assign({},o),{promise:e})}function deal401(){if("undefined"!=typeof window){if(window.top&&window.top!==window&&window.top.postMessage("http_status_401","*"),trigger402)return!1;window.location.href=adhere_util_1.default.casUrl({baseUrl:this.systemManagerBaseURL,enterUrl:window.location.href,defaultLocal:"zh_CN"})}}function deal402(){if(trigger402=!0,"undefined"!=typeof window)return window.parent&&window.parent!==window?(window.parent.postMessage("http_status_402","*"),!1):void(window.location.href=adhere_util_1.default.casLogoutUrl({baseUrl:this.systemManagerBaseURL,enterUrl:window.location.href,params:"&code=402"}))}exports.default=Ajax;
//# sourceMappingURL=ajax.js.map
