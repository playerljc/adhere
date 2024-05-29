"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},tinycolor2_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("tinycolor2"))),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),defaultThemeMap=new Map([["adhere-color-primary",{value:"#2480ff"}],["adhere-color-text-base",{value:"#000",mapToken:new Map([["adhere-color-text",{alpha:"0.88"}],["adhere-color-text-secondary",{alpha:"0.65"}],["adhere-color-text-tertiary",{alpha:"0.45"}],["adhere-color-text-quaternary",{alpha:"0.25"}]])}],["adhere-color-bg-base",{value:"#fff"}],["adhere-color-border-base",{value:"#d9d9d9"}],["adhere-color-split-base",{value:"#f0f0f0"}],["adhere-font-size-base",{value:"14px",mapToken:new Map([["adhere-font-size-lg",{calc:"+ 2px"}],["adhere-font-size-sm",{calc:"- 2px"}],["adhere-font-size-xl",{calc:"+ 6px"}]])}],["adhere-z-index-max-base",{value:"1999"}],["adhere-border-radius-base",{value:"6px"}],["adhere-line-width",{value:"1px"}],["adhere-line-type",{value:"solid"}],["adhere-device-pixel-ratio",{value:window.devicePixelRatio}]]);function getValue(e,a){return null!=a&&a.isUseMedia&&"string"==typeof e&&e.endsWith("px")?e.split(/\s+/gim).map(function(e){var t;return e.endsWith("px")?(t=parseFloat(e.replace("px","")),adhere_util_1.default.pxToRem(t,null!=(t=a.designWidth)?t:192,a)):e}).join(" "):e}var init=function(e,n,c){void 0===n&&(n=document.documentElement);var i=document.documentElement,r={},u={},d=null!=e?e:{};Array.from(defaultThemeMap.keys()).forEach(function(a){var e,t=adhere_util_1.default.toCamelCase(a,"-"),l=adhere_util_1.default.toCamelCase(a,"-",!0),o=defaultThemeMap.get(a);Object.defineProperty(r,t,{set:function(e){var t,l=getValue(e,c),r=(n.style.setProperty("--".concat(a),"".concat(l)),i.style.getPropertyValue("--".concat(a))||i.style.setProperty("--".concat(a),"".concat(l)),(0,tinycolor2_1.default)(l));r.isValid()&&(e=r.toRgb(),n.style.setProperty("--".concat(a,"-rgb"),"".concat([e.r,e.g,e.b].join(","))),i.style.getPropertyValue("--".concat(a,"-rgb"))||i.style.setProperty("--".concat(a,"-rgb"),"".concat([e.r,e.g,e.b].join(",")))),null!=o&&o.mapToken&&null!=(e=null==(t=Array.from(null==(t=null==(e=null==o?void 0:o.mapToken)?void 0:e.keys)?void 0:t.call(e)))?void 0:t.forEach)&&e.call(t,function(e){var t,a=null==(a=null==(t=null==o?void 0:o.mapToken)?void 0:t.get)?void 0:a.call(t,e);null!=a&&a.alpha&&(r.setAlpha(Number.parseFloat(null==a?void 0:a.alpha)),n.style.setProperty("--".concat(e),r.toPercentageRgbString()),i.style.getPropertyValue("--".concat(e))||i.style.setProperty("--".concat(e),r.toPercentageRgbString())),a.calc&&(t=getValue(a.calc,c),n.style.setProperty("--".concat(e),"calc(".concat(l," ").concat(t,")")),i.style.getPropertyValue("--".concat(e))||i.style.setProperty("--".concat(e),"calc(".concat(l," ").concat(t,")")))})}}),u["set".concat(l)]=function(e){r[t]=e},u["get".concat(l)]=function(){return n.style.getPropertyValue("--".concat(a))},null!=(e=null==u?void 0:u["set".concat(l)])&&e.call(u,null!=(e=d[adhere_util_1.default.lowercaseInitial(l.substring(l.indexOf("Adhere")+"Adhere".length))])?e:null==(l=defaultThemeMap.get(a))?void 0:l.value)})};exports.default=init;
//# sourceMappingURL=index.js.map
