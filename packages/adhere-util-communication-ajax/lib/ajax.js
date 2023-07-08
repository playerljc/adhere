"use strict";var errorInfoHandler,warnInfoHandler,__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__spreadArray=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),adhere_ui_globalindicator_1=__importDefault(require("@baifendian/adhere-ui-globalindicator")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),trigger402=!1,notificationThrottlingTime=300,Ajax=function(){function e(e,t,n){this.baseURL=e||"",this.systemManagerBaseURL=t||"",this.config=null!=n?n:{}}return e.prototype.get=function(e){var n=this,a=(e.data,__rest(e,["data"])),r={},e=new Promise(function(e,t){e=(r=sendPrepare.call(n,__assign(__assign(__assign(__assign({},getDefaultConfig.call(n)),n.config),{method:"get"}),a),{resolve:e,reject:t})).xhr;e&&e.send(null)});return __assign(__assign({},r),{promise:e})},e.prototype.post=function(e){return complexRequest.call(this,"post",e)},e.prototype.path=function(e){return complexRequest.call(this,"path",e)},e.prototype.put=function(e){return complexRequest.call(this,"put",e)},e.prototype.delete=function(e){return complexRequest.call(this,"delete",e)},e.TIMEOUT=1e6,e.STATUS_SUCCESS_CODES=[200,201,202,203,204,205,206,207,208,226],e.STATUS_REDIRECT_CODES=[300,301,302,303,304,305,306,307,308],e.READY_STATE_UNSENT=0,e.READY_STATE_OPENED=1,e.READY_STATE_HEADERS_RECEIVED=2,e.READY_STATE_LOADING=3,e.READY_STATE_DONE=4,e.CONTENT_TYPE_APPLICATION_JSON="application/json",e.CONTENT_TYPE_MULTIPART_FORM_DATA="multipart/form-data",e.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED="application/x-www-form-urlencoded",e.CONTENT_TYPE_TEXT_XML="text/xml",e.CONTENT_TYPE_APPLICATION_XML="application/xml",e.CONTENT_TYPE_TEXT_PLAIN="text/plain",e}();function errorInfo(e,t){errorInfoHandler&&(clearTimeout(errorInfoHandler),errorInfoHandler=null),errorInfoHandler=setTimeout(function(){antd_1.notification.error({message:e,description:t})},notificationThrottlingTime)}function warnInfo(e,t){warnInfoHandler&&(clearTimeout(warnInfoHandler),warnInfoHandler=null),warnInfoHandler=setTimeout(function(){antd_1.notification.warning({message:e,description:t})},notificationThrottlingTime)}function createXHR(){return new XMLHttpRequest}function getDefaultConfig(){var t=this;return{timeout:Ajax.TIMEOUT,withCredentials:!0,onLoad:function(){},onLoadsStart:function(){},onLoadend:function(){},onProgress:function(){},onTimeout:function(){warnInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("请求超时"))},onAbort:function(){warnInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("请求终止"))},onError:function(){errorInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("请求发生错误"))},interceptor:function(e){switch(e.status){case 401:deal401.call(t);break;case 402:deal402.call(t);break;default:errorInfo(adhere_util_intl_1.default.v("提示"),adhere_util_intl_1.default.v("已提出请求，但未收到任何回复"))}},mock:!1,loading:{show:!1,text:"",el:document.body},onBeforeResponse:function(){},dataKey:"data",messageKey:"message",codeKey:"code",codeSuccess:200,showWarn:!0,responseType:""}}function initXhrEvents(e,t){var n=t.onTimeout,a=t.onLoadsStart,r=t.onProgress,o=t.onAbort,i=t.onError,s=t.onLoad,t=t.onLoadend;n&&e.addEventListener("timeout",n),a&&e.addEventListener("loadstart",a),r&&e.addEventListener("progress",r),o&&e.addEventListener("abort",o),i&&e.addEventListener("error",i),s&&e.addEventListener("load",s),t&&e.addEventListener("loadend",t)}function resolveData(e){var t=e.show,n=e.data,a=e.indicator,e=e.xhr;return __assign({xhr:e,data:n},t?{hideIndicator:function(){return adhere_ui_globalindicator_1.default.hide(a)}}:{})}function onreadystatechange(e){var t,n,a=e.xhr,r=e.interceptor,o=e.loading,i=o.show,o=o.indicator,s=e.business,d=s.messageKey,l=s.codeKey,u=s.codeSuccess,s=s.showWarn,_=e.resolve,e=e.reject;a.readyState===Ajax.READY_STATE_DONE&&(200<=a.status&&a.status<300||304===a.status?-1!==(t=a.getResponseHeader("Content-type")).indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON)?(n=JSON.parse(a.responseText),s&&l in n&&n[l]!==u&&warnInfo(adhere_util_intl_1.default.v("提示"),n[d]),_(resolveData({show:i,data:n,indicator:o,xhr:a}))):[Ajax.CONTENT_TYPE_TEXT_XML,Ajax.CONTENT_TYPE_TEXT_XML].includes(t)?_(resolveData({show:i,data:a.responseXML,indicator:o,xhr:a})):_(resolveData({show:i,data:a.response,indicator:o,xhr:a})):(r({status:a.status,statusText:a.statusText,response:a.response,responseText:a.responseText}),a.status&&e({status:a.status,statusText:a.statusText,response:a.response,responseText:a.responseText}),i&&o&&adhere_ui_globalindicator_1.default.hide(o)))}function isMultipartFormData(e){return e&&"form"in e&&"data"in e&&!adhere_util_1.default.isEmpty(e.form)&&!adhere_util_1.default.isEmpty(e.data)&&e.form instanceof HTMLFormElement}function sendPrepare(e,t){var n,a=e.method,r=e.path,o=e.headers,i=e.data,s=e.mock,d=e.loading,l=(e.onBeforeResponse,e.dataKey),l=void 0===l?"data":l,u=e.messageKey,u=void 0===u?"message":u,_=e.codeKey,_=void 0===_?"code":_,c=e.codeSuccess,c=void 0===c?200:c,f=e.showWarn,f=void 0===f||f,e=__rest(e,["method","path","headers","data","mock","loading","onBeforeResponse","dataKey","messageKey","codeKey","codeSuccess","showWarn"]),p=t.resolve,t=t.reject,T="".concat(adhere_util_intl_1.default.v("加载中"),"..."),h=d.show,E=void 0!==h&&h,h=d.text,d=d.el,d=void 0===d?document.body:d;if(E&&(n=adhere_ui_globalindicator_1.default.show(d||document.body,(void 0===h?T:h)||T)),s)return setTimeout(function(){p(E?{data:r,hideIndicator:function(){adhere_ui_globalindicator_1.default.hide(n)}}:r)},200),{xhr:null,contentType:""};var d=this.baseURL,h=this.config,T=Object.assign(getDefaultConfig.call(this),h,e),s=T.timeout,h=T.withCredentials,e=T.responseType,g=T.interceptor,T=__rest(T,["timeout","withCredentials","responseType","interceptor"]),m=createXHR(),d=(m.open(a,"".concat(d,"/").concat(r),!0),m.timeout=s,m.withCredentials=h,m.responseType=e||"","");if(!adhere_util_1.default.isEmpty(o)&&adhere_util_1.default.isObject(o))for(var y in"Content-Type"in o||isMultipartFormData(i)||(o["Content-Type"]="".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8")),d=null!=(s=o["Content-Type"])?s:"",o)m.setRequestHeader(y,o[y]);else!adhere_util_1.default.isEmpty(i)&&adhere_util_1.default.isRef(i)&&"get"!==a&&(isMultipartFormData(i)?d=Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA:(d="".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8"),m.setRequestHeader("Content-Type","".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8"))));return initXhrEvents(m,T),m.onreadystatechange=onreadystatechange.bind(this,{xhr:m,interceptor:g,loading:{show:E,indicator:n},business:{dataKey:l,messageKey:u,codeKey:_,codeSuccess:c,showWarn:f},resolve:p,reject:t}),{xhr:m,contentType:d}}function getSendParams(e){var a,r=e.data,e=e.contentType,e=void 0===e?"":e;if(e.startsWith(Ajax.CONTENT_TYPE_APPLICATION_JSON)&&adhere_util_1.default.isRef(r))return JSON.stringify(r);if(e.startsWith(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED)&&adhere_util_1.default.isObject(r))return Array.from(Object.keys(r)).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(r[e]))}).join("&");if(adhere_util_1.default.isObject(r)&&isMultipartFormData(r))return a=new FormData(r.form),Array.from(Object.keys(r.data)).forEach(function(e){var t=r.data[e],n=t,t=(t instanceof Function&&(n=t()),[e]),t=Array.isArray(n)?__spreadArray(__spreadArray([],t,!0),n,!0):__spreadArray(__spreadArray([],t,!0),[n],!1);a.append.apply(a,t)}),a;if(e.startsWith(Ajax.CONTENT_TYPE_TEXT_PLAIN)){if(adhere_util_1.default.isString(r))return r;if(adhere_util_1.default.isObject(r))return JSON.stringify(r)}return r.toString()}function complexRequest(n,a){var r=this,o={},e=new Promise(function(e,t){e=(o=sendPrepare.call(r,__assign(__assign(__assign(__assign({},getDefaultConfig.call(r)),r.config),{method:n}),a),{resolve:e,reject:t})).xhr,t=o.contentType;e&&e.send(getSendParams.call(r,{data:a.data,contentType:t}))});return __assign(__assign({},o),{promise:e})}function deal401(){if("undefined"!=typeof window){if(window.top&&window.top!==window&&window.top.postMessage("http_status_401","*"),trigger402)return!1;window.location.href=adhere_util_1.default.casUrl({baseUrl:this.systemManagerBaseURL,enterUrl:window.location.href})}}function deal402(){if(trigger402=!0,"undefined"!=typeof window)return window.parent&&window.parent!==window?(window.parent.postMessage("http_status_402","*"),!1):void(window.location.href=adhere_util_1.default.casLogoutUrl({baseUrl:this.systemManagerBaseURL,enterUrl:window.location.href,params:"&code=402"}))}exports.default=Ajax;
//# sourceMappingURL=ajax.js.map
