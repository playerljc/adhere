import _message from"antd/es/message";import _Modal from"antd/es/modal";var handler,__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)},__rest=this&&this.__rest||function(r,e){var t={};for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]]);return t};import Intl from"@baifendian/adhere-util-intl";var openErrorDialog=function(r){var e=r.duration,e=void 0===e?3e3:e,r=__rest(r,["duration"]),t=_Modal.error(__assign({title:Intl.v("提示"),content:Intl.v("系统异常"),mask:!1,maskClosable:!0,footer:null},null!=r?r:{}));return e&&(handler&&clearTimeout(handler),handler=setTimeout(function(){t.destroy()},e)),t},openErrorMessage=function(r,e,t){return _message.error(r||Intl.v("系统异常"),e,t)};export{openErrorDialog,openErrorMessage};
//# sourceMappingURL=ErrorPrompt.js.map