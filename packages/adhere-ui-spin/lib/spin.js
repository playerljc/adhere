"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),spin_js_1=require("spin.js"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),selectorPrefix="adhere-ui-spin",Spin=(0,react_1.memo)(function(e){function t(){u.current&&null!=(e=null==(t=u.current)?void 0:t.stop)&&e.call(t);var e=new Map([["small",.1],["default",.2],["large",.3]]).get(o),t=document.documentElement.style.getPropertyValue("--adhere-color-primary");u.current=new spin_js_1.Spinner({lines:4,length:0,width:52,radius:29,scale:e,corners:1,speed:2.1,rotate:19,animation:"spinner-line-fade-quick",direction:1,color:t,fadeColor:"transparent",top:"46%",left:"50%",shadow:"0 0 1px transparent",zIndex:i,className:"".concat(selectorPrefix,"-spinner"),position:"absolute"}).spin(l.current)}var r=e.spinning,n=void 0!==r&&r,r=e.text,a=void 0===r?"":r,r=e.zIndex,i=void 0===r?adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value:r,r=e.size,o=void 0===r?"default":r,u=(0,react_1.useRef)(null),l=(0,react_1.useRef)(null);return(0,ahooks_1.useMount)(function(){n&&t()}),(0,ahooks_1.useUpdateLayoutEffect)(function(){n&&t()},[o,n]),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:n},function(){return react_1.default.createElement("div",{className:selectorPrefix,style:{zIndex:i}},react_1.default.createElement("span",{ref:l,className:"".concat(selectorPrefix,"-dot")}),a&&react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-text")},a))})});exports.default=Spin;
//# sourceMappingURL=Spin.js.map
