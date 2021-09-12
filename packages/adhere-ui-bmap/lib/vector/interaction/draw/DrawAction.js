var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)n.hasOwnProperty(s)&&(t[s]=n[s])})(t,n)};return function(t,n){function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,s=1,e=arguments.length;s<e;s++)for(var i in n=arguments[s])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};import Emitter from"@baifendian/adhere-util-emitter/lib/events";import{ActionStatus}from"../types";import DefaultStyle from"../DefaultStyle";var DrawAction=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.context=null,t.style=__assign({},DefaultStyle),t.status=ActionStatus.UnStart,t}return __extends(t,n),t.prototype.destroy=function(){var t,n;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(t=(n=this.context).getCanvasEl(),n=n.getAssistCanvasEl(),t&&n&&(t.style.cursor=n.style.cursor="default",this.context.enableMap()))},t.prototype.end=function(t){var n,s;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(n=(s=this.context).getCanvasEl(),s=s.getAssistCanvasEl(),n&&s&&(n.style.cursor=s.style.cursor="default",this.context.enableMap()))},t.prototype.start=function(t){this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&this.setCursor()},t.prototype.setCursor=function(){var t=this.context;!t||(t=t.getCanvasEl())&&(t.style.cursor="url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3OTEzNjM1NDc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzMDgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4wMDIgODg3QzMwNC44OTIgODg3IDEzNyA3MTkuMTA4IDEzNyA1MTIuMDAyIDEzNyAzMDQuODkyIDMwNC44OTIgMTM3IDUxMi4wMDIgMTM3IDcxOS4xMDggMTM3IDg4NyAzMDQuODkyIDg4NyA1MTIuMDAyIDg4NyA3MTkuMTA4IDcxOS4xMDggODg3IDUxMi4wMDIgODg3ek01MTIgNzg3YzE1MS44NzggMCAyNzUtMTIzLjEyMiAyNzUtMjc1UzY2My44NzggMjM3IDUxMiAyMzcgMjM3IDM2MC4xMjIgMjM3IDUxMnMxMjMuMTIyIDI3NSAyNzUgMjc1eiIgZmlsbD0iIzFBQTVGRiIgcC1pZD0iNDMwOSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0yMjUgMGEyMjUgMjI1IDAgMSAwIDQ1MCAwIDIyNSAyMjUgMCAxIDAtNDUwIDBaIiBmaWxsPSIjMUFBNUZGIiBwLWlkPSI0MzEwIj48L3BhdGg+PC9zdmc+), auto")},t.prototype.setContext=function(t){this.context=t},t.prototype.getStatus=function(){return this.status},t}(Emitter);export default DrawAction;
//# sourceMappingURL=DrawAction.js.map
