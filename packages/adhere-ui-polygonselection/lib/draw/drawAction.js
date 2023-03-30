"use strict";var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,s=1,n=arguments.length;s<n;s++)for(var i in e=arguments[s])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_emitter_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util-emitter"))),defaultStyle_1=__importDefault(require("../defaultStyle")),types_1=require("../types"),DrawAction=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.context=null,t.style=__assign({},defaultStyle_1.default),t.status=types_1.ActionStatus.UnStart,t}return __extends(t,e),t.prototype.destroy=function(){var t,e;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(t=(e=this.context).getCanvasEl(),e=e.getAssistCanvasEl(),t)&&e&&(t.style.cursor=e.style.cursor="default")},t.prototype.end=function(t){var e,s;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=(s=this.context).getCanvasEl(),s=s.getAssistCanvasEl(),e)&&s&&(e.style.cursor=s.style.cursor="default")},t.prototype.start=function(t){var e;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(e.style.cursor="url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3OTEzNjM1NDc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzMDgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4wMDIgODg3QzMwNC44OTIgODg3IDEzNyA3MTkuMTA4IDEzNyA1MTIuMDAyIDEzNyAzMDQuODkyIDMwNC44OTIgMTM3IDUxMi4wMDIgMTM3IDcxOS4xMDggMTM3IDg4NyAzMDQuODkyIDg4NyA1MTIuMDAyIDg4NyA3MTkuMTA4IDcxOS4xMDggODg3IDUxMi4wMDIgODg3ek01MTIgNzg3YzE1MS44NzggMCAyNzUtMTIzLjEyMiAyNzUtMjc1UzY2My44NzggMjM3IDUxMiAyMzcgMjM3IDM2MC4xMjIgMjM3IDUxMnMxMjMuMTIyIDI3NSAyNzUgMjc1eiIgZmlsbD0iIzFBQTVGRiIgcC1pZD0iNDMwOSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0yMjUgMGEyMjUgMjI1IDAgMSAwIDQ1MCAwIDIyNSAyMjUgMCAxIDAtNDUwIDBaIiBmaWxsPSIjMUFBNUZGIiBwLWlkPSI0MzEwIj48L3BhdGg+PC9zdmc+), auto")},t.prototype.setContext=function(t){this.context=t},t.prototype.getStatus=function(){return this.status},t}(adhere_util_emitter_1.default.Events);exports.default=DrawAction;
//# sourceMappingURL=DrawAction.js.map
