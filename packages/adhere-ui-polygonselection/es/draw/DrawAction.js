var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};import Emitter from"@baifendian/adhere-util-emitter";import defaultAnchorStyle from"../defaultAnchorStyle";import defaultMoveGemStyle from"../defaultMoveGemStyle";import defaultStyle from"../defaultStyle";import{ActionStatus}from"../types";var DrawAction=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.context=null,t.status=ActionStatus.UnStart,t.style=__assign({},defaultStyle),t.anchorStyle=__assign({},defaultAnchorStyle),t.moveGemStyle=__assign({},defaultMoveGemStyle),t}return __extends(t,e),t.prototype.getAnchorStyle=function(){return __assign({},this.anchorStyle)},t.prototype.getStyle=function(){return __assign({},this.style)},t.prototype.getMoveGemStyle=function(){return __assign({},this.moveGemStyle)},t.prototype.setAnchorStyle=function(t){this.anchorStyle=__assign(__assign({},defaultAnchorStyle),null!=t?t:{})},t.prototype.setStyle=function(t){this.style=__assign(__assign({},defaultStyle),null!=t?t:{})},t.prototype.setMoveGemStyle=function(t){this.moveGemStyle=__assign(__assign({},defaultMoveGemStyle),null!=t?t:{})},t.prototype.destroy=function(){var t,e,n;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(e=null==(e=null==(t=this.context)?void 0:t.getCanvasEl)?void 0:e.call(t),n=null==(n=null==t?void 0:t.getAssistCanvasEl)?void 0:n.call(t),e)&&n&&(e.style.cursor=n.style.cursor="default")},t.prototype.end=function(t){var e,n;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(e=null==(n=this.context)?void 0:n.getCanvasEl(),n=null==n?void 0:n.getAssistCanvasEl(),e)&&n&&(e.style.cursor=n.style.cursor="default")},t.prototype.start=function(t){var e;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(e.style.cursor="url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3OTEzNjM1NDc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzMDgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4wMDIgODg3QzMwNC44OTIgODg3IDEzNyA3MTkuMTA4IDEzNyA1MTIuMDAyIDEzNyAzMDQuODkyIDMwNC44OTIgMTM3IDUxMi4wMDIgMTM3IDcxOS4xMDggMTM3IDg4NyAzMDQuODkyIDg4NyA1MTIuMDAyIDg4NyA3MTkuMTA4IDcxOS4xMDggODg3IDUxMi4wMDIgODg3ek01MTIgNzg3YzE1MS44NzggMCAyNzUtMTIzLjEyMiAyNzUtMjc1UzY2My44NzggMjM3IDUxMiAyMzcgMjM3IDM2MC4xMjIgMjM3IDUxMnMxMjMuMTIyIDI3NSAyNzUgMjc1eiIgZmlsbD0iIzFBQTVGRiIgcC1pZD0iNDMwOSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0yMjUgMGEyMjUgMjI1IDAgMSAwIDQ1MCAwIDIyNSAyMjUgMCAxIDAtNDUwIDBaIiBmaWxsPSIjMUFBNUZGIiBwLWlkPSI0MzEwIj48L3BhdGg+PC9zdmc+), auto")},t.prototype.setContext=function(t){this.context=t},t.prototype.getStatus=function(){return this.status},t}(Emitter.Events);export default DrawAction;
//# sourceMappingURL=DrawAction.js.map
