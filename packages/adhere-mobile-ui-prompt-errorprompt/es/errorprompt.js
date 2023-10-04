import _CloseCircleFill from"antd-mobile-icons/es/CloseCircleFill";import _Modal from"antd-mobile/es/components/modal";import _Toast from"antd-mobile/es/components/toast";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};import React from"react";import Intl from"@baifendian/adhere-util-intl";var handler,selectorPrefix="adhere-mobile-error-prompt",openErrorMessage=function(e){return _Toast.show(__assign({content:Intl.v("系统异常"),maskClickable:!1,icon:"fail"},null!=e?e:{}))},openErrorDialog=function(e){var t=e.duration,t=void 0===t?3e3:t,e=__rest(e,["duration"]),o=_Modal.show(__assign(__assign({title:Intl.v("提示"),actions:[],closeOnMaskClick:!0},null!=e?e:{}),{content:React.createElement("div",{className:"".concat(selectorPrefix)},React.createElement("div",{className:"".concat(selectorPrefix,"-dialog-icon")},React.createElement(_CloseCircleFill,null)),React.createElement("div",{className:"".concat(selectorPrefix,"-dialog-content")},null!=(e=e.content)?e:Intl.v("系统异常")))}));return t&&(handler&&clearTimeout(handler),handler=setTimeout(function(){o.close()},t)),o};export{openErrorMessage,openErrorDialog};
//# sourceMappingURL=errorprompt.js.map
