import _Button from"antd/es/button";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++)for(var t in a=arguments[r])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{forwardRef,memo,useCallback,useRef}from"react";import MessageDialog from"@baifendian/adhere-ui-messagedialog";import Intl from"@baifendian/adhere-util-intl";import CroppingCore from"./CroppingCore";var selectorPrefix="adhere-ui-polygonselection-cropping",Cropping=function(e,a){var r=e.className,n=e.style,t=e.maskClassName,l=e.maskStyle,o=e.mask,s=e.value,i=e.onChange,c=e.modalProps,m=e.coreProps,p=useRef(null),e=useCallback(function(){return React.createElement("div",{className:"".concat(classNames("".concat(selectorPrefix,"-mask"),null!=t?t:"")),style:null!=l?l:{},onClick:function(){var r=MessageDialog.Modal({config:__assign({title:Intl.v("编辑"),width:1024,maskClosable:!1,footer:[React.createElement(_Button,{key:"submit",type:"primary",title:Intl.v("保存"),onClick:function(){var e,a;p.current&&(a=null==(a=null==(e=null==p?void 0:p.current)?void 0:e.save)?void 0:a.call(e),i)&&(i(a),r.close())}},Intl.v("保存"))]},null!=c?c:{}),children:React.createElement(CroppingCore,__assign({ref:p},m))})}},o||Intl.v("编辑"))},[t,l,o,s,i]),u=useCallback(function(){return s?React.createElement("img",{src:s,alt:""}):null},[s]);return React.createElement("div",{className:classNames(selectorPrefix,null!=r?r:""),style:null!=n?n:{}},e(),u())},CroppingHOC=memo(forwardRef(Cropping));CroppingHOC.CroppingCore=CroppingCore;export default CroppingHOC;
//# sourceMappingURL=index.js.map
