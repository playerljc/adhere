var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var o,n=0,a=r.length;n<a;n++)!o&&n in r||((o=o||Array.prototype.slice.call(r,0,n))[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))};import{Button,Modal}from"antd";import React,{memo,useCallback,useMemo}from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-ui-messagedialog",ModalDialog=function(e){var r=e.config,t=e.closeBtn,o=e.close,e=e.children,n=r.footer,a=void 0===n?[]:n,n=r.centered,n=void 0===n||n,r=__rest(r,["footer","centered"]);var l=useMemo(function(){r={key:"close",title:Intl.v("取消"),type:"default",onClick:function(){return null==o?void 0:o()}},Array.isArray(a)&&0===a.length&&(r.type="primary");var e,r=React.createElement(Button,__assign({},r),Intl.v("取消"));return a?e=t?Array.isArray(a)?__spreadArray(__spreadArray([],a,!0),[r],!1):[a,r]:a:t&&(e=r),e},[a,t]),i=useCallback(function(){return null==o?void 0:o()},[]);return React.createElement(Modal,__assign({},r,{footer:l,centered:n,wrapClassName:selectorPrefix,onCancel:i,open:!0}),e)};export default memo(ModalDialog);export{selectorPrefix};
//# sourceMappingURL=modal.js.map
