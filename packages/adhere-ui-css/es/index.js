import tinyColor from"tinycolor2";import Util from"@baifendian/adhere-util";var defaultThemeMap=new Map([["adhere-color-primary",{value:"#2480ff"}],["adhere-color-text-base",{value:"#000",mapToken:new Map([["adhere-color-text",{alpha:"0.88"}],["adhere-color-text-secondary",{alpha:"0.65"}],["adhere-color-text-tertiary",{alpha:"0.45"}],["adhere-color-text-quaternary",{alpha:"0.25"}]])}],["adhere-color-bg-base",{value:"#fff"}],["adhere-color-border-base",{value:"#d9d9d9"}],["adhere-color-split-base",{value:"#f0f0f0"}],["adhere-font-size-base",{value:"14px",mapToken:new Map([["adhere-font-size-lg",{calc:" + 2px"}],["adhere-font-size-sm",{calc:"- 2px"}],["adhere-font-size-xl",{calc:"+ 6px"}]])}],["adhere-z-index-max-base",{value:"1999"}],["adhere-border-radius-base",{value:"6px"}],["adhere-line-width",{value:"1px"}],["adhere-line-type",{value:"solid"}],["adhere-device-pixel-ratio",{value:window.devicePixelRatio}]]),init=function(e,c){void 0===c&&(c=document.documentElement);var o={},r={},d=null!=e?e:{};Array.from(defaultThemeMap.keys()).forEach(function(a){var e,t=Util.toCamelCase(a,"-"),l=Util.toCamelCase(a,"-",!0),n=defaultThemeMap.get(a);Object.defineProperty(o,t,{set:function(l){c.style.setProperty("--".concat(a),l),document.documentElement.style.getPropertyValue("--".concat(a))||document.documentElement.style.setProperty("--".concat(a),l);var e,t,o=tinyColor(l);o.isValid()&&(t=o.toRgb(),c.style.setProperty("--".concat(a,"-rgb"),"".concat([t.r,t.g,t.b].join(","))),document.documentElement.style.getPropertyValue("--".concat(a,"-rgb"))||document.documentElement.style.setProperty("--".concat(a,"-rgb"),"".concat([t.r,t.g,t.b].join(",")))),null!=n&&n.mapToken&&null!=(t=null==(e=Array.from(null==(e=null==(t=null==n?void 0:n.mapToken)?void 0:t.keys)?void 0:e.call(t)))?void 0:e.forEach)&&t.call(e,function(e){var t,a=null==(a=null==(t=null==n?void 0:n.mapToken)?void 0:t.get)?void 0:a.call(t,e);null!=a&&a.alpha&&(o.setAlpha(Number.parseFloat(null==a?void 0:a.alpha)),c.style.setProperty("--".concat(e),o.toPercentageRgbString()),document.documentElement.style.getPropertyValue("--".concat(e))||document.documentElement.style.setProperty("--".concat(e),o.toPercentageRgbString())),a.calc&&(c.style.setProperty("--".concat(e),"calc(".concat(l," ").concat(a.calc,")")),document.documentElement.style.getPropertyValue("--".concat(e))||document.documentElement.style.setProperty("--".concat(e),"calc(".concat(l," ").concat(a.calc,")")))})}}),r["set".concat(l)]=function(e){o[t]=e},r["get".concat(l)]=function(){return c.style.getPropertyValue("--".concat(a))},null!=(e=null==r?void 0:r["set".concat(l)])&&e.call(r,null!=(e=d[Util.lowercaseInitial(l.substring(l.indexOf("Adhere")+"Adhere".length))])?e:null==(l=defaultThemeMap.get(a))?void 0:l.value)})};export default init;
//# sourceMappingURL=index.js.map
