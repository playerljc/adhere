var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n};import{notification as notification}from"antd";import Util from"@baifendian/adhere-util";import intl from"@baifendian/adhere-util-intl";import GlobalIndicator from"@baifendian/adhere-ui-globalindicator";var trigger402=!1;function errorInfo(e,t){notification.error({message:e,description:t})}function warnInfo(e,t){notification.warn({message:e,description:t})}function createXHR(){return new XMLHttpRequest}function getDefaultConfig(){var t=this;return{timeout:Ajax.TIMEOUT,withCredentials:!0,onLoad:function(){},onLoadsStart:function(){},onLoadend:function(){},onProgress:function(){},onTimeout:function(){warnInfo(intl.v("提示"),intl.v("请求超时"))},onAbort:function(){warnInfo(intl.v("提示"),intl.v("请求终止"))},onError:function(){errorInfo(intl.v("提示"),intl.v("请求发生错误"))},interceptor:function(e){switch(e.status){case 401:deal401.call(t);break;case 402:deal402.call(t)}},loading:{show:!1,text:"",el:document.body}}}function initXhrEvents(e,t){var n=t.onTimeout,o=t.onLoadsStart,a=t.onProgress,r=t.onAbort,i=t.onError,s=t.onLoad,t=t.onLoadend;n&&e.addEventListener("timeout",n),o&&e.addEventListener("loadstart",o),a&&e.addEventListener("progress",a),r&&e.addEventListener("abort",r),i&&e.addEventListener("error",i),s&&e.addEventListener("load",s),t&&e.addEventListener("loadend",t)}function resolveData(e){var t=e.show,n=e.data,o=e.indicator;return t?{data:n,hideIndicator:function(){GlobalIndicator.hide(o)}}:n}function onreadystatechange(e){var t=e.xhr,n=e.interceptor,o=e.loading,a=o.show,r=o.indicator,i=e.business,s=i.messageKey,c=i.codeKey,d=i.codeSuccess,l=i.showWarn,T=e.resolve,f=e.reject,u=t.status,_=t.readyState,p=t.statusText,o=t.response,i=t.responseText;_===Ajax.READY_STATE_DONE&&(200<=u&&u<300||304===u?-1!==(e=t.getResponseHeader("Content-type")).indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON)?(_=JSON.parse(t.responseText),l&&_[c]!==d&&warnInfo(intl.v("提示"),_[s]),T(resolveData({show:a,data:_,indicator:r}))):[Ajax.CONTENT_TYPE_TEXT_XML,Ajax.CONTENT_TYPE_TEXT_XML].includes(e)?T(resolveData({show:a,data:t.responseXML,indicator:r})):T(resolveData({show:a,data:t.response,indicator:r})):(errorInfo(intl.v("提示"),intl.v("已提出请求，但未收到任何回复")),n({status:u,statusText:p,response:o,responseText:i}),u&&f({status:u,statusText:p,response:o,responseText:i}),a&&r&&GlobalIndicator.hide(r)))}function sendPrepare(e,t){var n,o=t.resolve,a=t.reject,r=e.method,i=e.path,s=e.headers,c=e.data,d=e.mock,l=e.loading,T=(e.onBeforeResponse,e.dataKey),f=void 0===T?"data":T,u=e.messageKey,_=void 0===u?"message":u,p=e.codeKey,E=void 0===p?"code":p,t=e.codeSuccess,T=void 0===t?200:t,u=e.showWarn,p=void 0===u||u,t=__rest(e,["method","path","headers","data","mock","loading","onBeforeResponse","dataKey","messageKey","codeKey","codeSuccess","showWarn"]),u=intl.v("加载中")+"...",e=l.show,h=void 0!==e&&e,e=l.text,e=void 0===e?u:e,l=l.el,l=void 0===l?document.body:l;if(h&&(n=GlobalIndicator.show(l||document.body,e||u)),d)return setTimeout(function(){o(h?{data:i,hideIndicator:function(){GlobalIndicator.hide(n)}}:i)},200),{xhr:null,contentType:""};var l=this.baseURL,e=this.config,u=Object.assign(getDefaultConfig.call(this),e,t),d=u.timeout,e=u.withCredentials,t=u.interceptor,u=__rest(u,["timeout","withCredentials","interceptor"]),O=createXHR();O.open(r,l+"/"+i,!0),O.timeout=d,O.withCredentials=e;e="";if(!Util.isEmpty(s)&&Util.isObject(s))for(var g in"Content-type"in s||"get"===r||(s["Content-Type"]=Ajax.CONTENT_TYPE_APPLICATION_JSON+";charset=utf-8",e=s["Content-Type"],console.log("设置了header，但是没有设置Content-Type",Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA)),s)O.setRequestHeader(g,s[g]);else!Util.isEmpty(c)&&Util.isRef(c)&&"get"!==r&&("form"in c&&"data"in c&&!Util.isEmpty(c.form)&&!Util.isEmpty(c.data)&&c.form instanceof HTMLFormElement?(console.log("有formData不需要设置Content-Type"),e=Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA):(console.log("默认设置Content-Type",Ajax.CONTENT_TYPE_APPLICATION_JSON+";charset=utf-8"),e=Ajax.CONTENT_TYPE_APPLICATION_JSON+";charset=utf-8",O.setRequestHeader("Content-Type",Ajax.CONTENT_TYPE_APPLICATION_JSON+";charset=utf-8")));return initXhrEvents(O,u),O.onreadystatechange=onreadystatechange.bind(this,{xhr:O,interceptor:t,loading:{show:h,indicator:n},business:{dataKey:f,messageKey:_,codeKey:E,codeSuccess:T,showWarn:p},resolve:o,reject:a}),{xhr:O,contentType:e}}function getSendParams(e){var t=e.data,e=(e=e.contentType)||"";if(console.log("getSendParams",t,e),0===e.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON)&&Util.isRef(t))return console.log("数据需要被转换成JSON字符串",JSON.stringify(t)),JSON.stringify(t);if(0===e.indexOf(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED)&&Util.isObject(t))return console.log("application/x-www-form-urlencoded转换",JSON.stringify(t)),Array.from(Object.keys(t)).map(function(e){return encodeURIComponent(e+"="+t[e])}).join("&");if(0===e.indexOf(Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA)&&Util.isObject(t)){console.log("multipart/form-data转换"),console.log("form",t.form);var n=new FormData(t.form);return Array.from(Object.keys(t.data)).forEach(function(e){n.append(e,t.data[e]),console.log(e,t.data[e])}),n}}function complexRequest(n,o){var a=this;return new Promise(function(e,t){e=sendPrepare.call(a,__assign(__assign(__assign({},getDefaultConfig.call(a)),{method:n}),o),{resolve:e,reject:t}),t=e.xhr,e=e.contentType;t&&t.send(getSendParams.call(a,{data:o.data,contentType:e}))})}function deal401(){if(window.top&&window.top!==window&&window.top.postMessage("http_status_401","*"),trigger402)return!1;window.location.href=Util.casUrl({baseUrl:this.systemManagerBaseURL,enterUrl:window.location.href})}function deal402(){if(trigger402=!0,window.parent&&window.parent!==window)return window.parent.postMessage("http_status_402","*"),!1;window.location.href=Util.casLogoutUrl({baseUrl:this.systemManagerBaseUrl,enterUrl:window.location.href,params:"&code=402"})}var Ajax=function(){function e(e,t,n){this.baseURL=e||"",this.systemManagerBaseURL=t||"",this.config=n||{}}return e.prototype.get=function(e){var n=this,o=(e.data,__rest(e,["data"]));return new Promise(function(e,t){t=sendPrepare.call(n,__assign(__assign(__assign({},getDefaultConfig.call(n)),{method:"get"}),o),{resolve:e,reject:t}).xhr;t&&t.send(null)})},e.prototype.post=function(e){return complexRequest.call(this,"post",e)},e.prototype.path=function(e){return complexRequest.call(this,"path",e)},e.prototype.put=function(e){return complexRequest.call(this,"put",e)},e.prototype.delete=function(e){return complexRequest.call(this,"delete",e)},e.TIMEOUT=1e6,e.STATUS_SUCCESS_CODES=[200,201,202,203,204,205,206,207,208,226],e.STATUS_REDIRECT_CODES=[300,301,302,303,304,305,306,307,308],e.READY_STATE_UNSENT=0,e.READY_STATE_OPENED=1,e.READY_STATE_HEADERS_RECEIVED=2,e.READY_STATE_LOADING=3,e.READY_STATE_DONE=4,e.CONTENT_TYPE_APPLICATION_JSON="application/json",e.CONTENT_TYPE_MULTIPART_FORM_DATA="multipart/form-data",e.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED="application/x-www-form-urlencoded",e.CONTENT_TYPE_TEXT_XML="text/xml",e.CONTENT_TYPE_APPLICATION_XML="application/xml",e.CONTENT_TYPE_TEXT_PLAIN="text/plain",e}();export default Ajax;
//# sourceMappingURL=ajax.js.map
