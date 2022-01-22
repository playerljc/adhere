var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();import MathUtil from"@baifendian/adhere-util";import Emitter from"@baifendian/adhere-util-emitter";import{ActionStatus,ActionEvents,ActionType}from"../types";import defaultAnchorStyle from"../DefaultAnchorStyle";var ModifyAction=function(o){function t(t){var e=o.call(this)||this;return e.context=null,e.data=null,e.status=ActionStatus.UnStart,e.EmitActions={CONTEXT:"CONTEXT"},e.anchorRadius=5,e.anchorLineWidth=2,e.startPoint=null,e.startIndex=-1,e.moveStartPoint=null,e.canMove=!0,e.isMoved=!1,e.data=t,e.onContext=e.onContext.bind(e),e.onCanvasMousedown=e.onCanvasMousedown.bind(e),e.onCanvasMousemove=e.onCanvasMousemove.bind(e),e.onCanvasMouseup=e.onCanvasMouseup.bind(e),e.onCanvasIsModifyMousemove=e.onCanvasIsModifyMousemove.bind(e),e.onMoveMousedown=e.onMoveMousedown.bind(e),e.onMoveMousemove=e.onMoveMousemove.bind(e),e.onMoveMouseup=e.onMoveMouseup.bind(e),e.on(e.EmitActions.CONTEXT,e.onContext),e}return __extends(t,o),t.prototype.setAnchorCircleStyle=function(){var t;!this.context||(t=this.context.getCtx())&&(t.strokeStyle=defaultAnchorStyle.strokeStyle,t.fillStyle=defaultAnchorStyle.fillStyle,t.lineWidth=defaultAnchorStyle.lineWidth)},t.prototype.setAnchorLineStyle=function(){var t;!this.context||(t=this.context.getCtx())&&(t.strokeStyle=defaultAnchorStyle.strokeStyle,t.lineWidth=defaultAnchorStyle.lineWidth,t.setLineDash(defaultAnchorStyle.lineDash),t.lineDashOffset=defaultAnchorStyle.lineDashOffset)},t.prototype.onContext=function(){this.drawAnchors()},t.prototype.onCanvasMousedown=function(t){var e,o;console.log("onCanvasMousedown"),!this.context||(e=this.context.getCanvasEl())&&this.context.getCtx()&&(o=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),(o=this.getPointInAnchor(o))&&(this.startPoint=o.point,this.startIndex=o.index,e.addEventListener("mousemove",this.onCanvasMousemove),e.addEventListener("mouseup",this.onCanvasMouseup),t.stopPropagation()))},t.prototype.onCanvasMousemove=function(t){var e;console.log("onCanvasMousemove"),!this.context||(e=this.context.getCanvasEl())&&this.context.getCtx()&&this.startPoint&&(e=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.drawModify(e),t.stopPropagation())},t.prototype.onCanvasMouseup=function(t){console.log("onCanvasMouseup"),this.end(t),t.stopPropagation()},t.prototype.onCanvasIsModifyMousemove=function(t){var e,o,n,s;this.context&&(e=this.context.getCanvasEl(),o=this.context.getAssistCanvasEl(),e&&o&&(this.startPoint||this.moveStartPoint||(n=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),(s=this.getPointInAnchor(n))?(this.canMove=!1,this.setResizeCursorByIndex(s.index)):(this.canMove=this.isCanMove(n),this.canMove?e.style.cursor=o.style.cursor="move":e.style.cursor=o.style.cursor="default"),t.stopPropagation())))},t.prototype.initMoveEvents=function(){var t,e=this.context;e&&(t=e.getCanvasEl(),e=e.getAssistCanvasEl(),t&&e&&t.addEventListener("mousedown",this.onMoveMousedown))},t.prototype.clearMoveEvents=function(){var t,e=this.context;e&&(t=e.getCanvasEl(),e=e.getAssistCanvasEl(),t&&e&&(t.removeEventListener("mousedown",this.onMoveMousedown),t.removeEventListener("mousemove",this.onMoveMousemove),e.removeEventListener("mousemove",this.onMoveMousemove),e.removeEventListener("mouseup",this.onMoveMouseup)))},t.prototype.onMoveMousedown=function(t){var e,o,n;console.log("onMoveMousedown"),!t||(e=this.context)&&(o=e.getCanvasEl(),n=e.getAssistCanvasEl(),o&&n&&this.canMove&&(e.setFrontCanvas(n),this.moveStartPoint=MathUtil.clientToCtxPoint({event:t,rect:o.getBoundingClientRect()}),this.drawMoveGeometry(),o.addEventListener("mousemove",this.onMoveMousemove),n.addEventListener("mousemove",this.onMoveMousemove),n.addEventListener("mouseup",this.onMoveMouseup),null!=t&&t.stopPropagation()))},t.prototype.onMoveMousemove=function(t){if(console.log("onMoveMousemove"),t){var e=this.context;if(e){var o=e.getCanvasEl(),n=e.getAssistCanvasEl();if(o&&n){o=MathUtil.clientToCtxPoint({event:t,rect:o.getBoundingClientRect()});if(this.moveStartPoint)return this.isMoved=!0,e.clearAssistDraw(),this.drawMoveGeometry(this.moveStartPoint,o),void(null!=t&&t.stopPropagation());null!=t&&t.stopPropagation()}}}},t.prototype.onMoveMouseup=function(t){console.log("onMoveMouseup"),this.endMove(t)},t.prototype.start=function(){var t,e;console.log("start"),this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(t=(e=this.context).getCanvasEl(),e=e.getAssistCanvasEl(),t&&e&&(t.style.cursor=e.style.cursor="default",this.trigger(ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:ActionType.Modify}),t.addEventListener("mousedown",this.onCanvasMousedown),t.addEventListener("mousemove",this.onCanvasIsModifyMousemove),this.initMoveEvents(),this.status=ActionStatus.Running,this.trigger(ActionEvents.Start,{selectType:this.getSelectType(),actionType:ActionType.Modify})))},t.prototype.end=function(t){var e,o;!t||(o=this.context)&&(e=o.getCanvasEl(),o=o.getAssistCanvasEl(),e&&o&&(e.style.cursor=o.style.cursor="default",e.removeEventListener("mousedown",this.onCanvasMousedown),e.removeEventListener("mousemove",this.onCanvasMousemove),e.removeEventListener("mouseup",this.onCanvasMouseup),e.removeEventListener("mousemove",this.onCanvasIsModifyMousemove),this.clearMoveEvents(),t=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.drawModify(t),this.status=ActionStatus.End,this.startPoint=null,this.startPoint=null,this.startIndex=-1,this.moveStartPoint=null,this.canMove=!0,this.isMoved=!1,this.trigger(ActionEvents.End,{selectType:this.getSelectType(),actionType:ActionType.Modify,data:t}),e.style.cursor=o.style.cursor="default",null!==(o=null==this?void 0:this.context)&&void 0!==o&&o.enableMap()))},t.prototype.endMove=function(t){if(console.log("onMoveMouseup"),t){var e=this.context;if(e){var o=e.getCanvasEl(),n=e.getAssistCanvasEl();if(o&&n){var t=MathUtil.clientToCtxPoint({event:t,rect:o.getBoundingClientRect()});if(!this.canMove||!this.isMoved||!this.moveStartPoint)return e.setBackCanvas(n),this.canMove=!0,this.isMoved=!1,this.moveStartPoint=null,this.startPoint=null,this.startIndex=-1,o.removeEventListener("mousedown",this.onCanvasMousedown),o.removeEventListener("mousemove",this.onCanvasMousemove),o.removeEventListener("mouseup",this.onCanvasMouseup),o.removeEventListener("mousemove",this.onCanvasIsModifyMousemove),this.clearMoveEvents(),this.status=ActionStatus.End,void this.trigger(ActionEvents.End,{selectType:this.getSelectType(),actionType:ActionType.Modify,data:t});e.setBackCanvas(n),e.clearAssistDraw(),this.drawMove(this.moveStartPoint,t),this.canMove=!0,this.isMoved=!1,this.moveStartPoint=null,this.startPoint=null,this.startIndex=-1,o.removeEventListener("mousedown",this.onCanvasMousedown),o.removeEventListener("mousemove",this.onCanvasMousemove),o.removeEventListener("mouseup",this.onCanvasMouseup),o.removeEventListener("mousemove",this.onCanvasIsModifyMousemove),this.clearMoveEvents(),this.status=ActionStatus.End,this.trigger(ActionEvents.End,{selectType:this.getSelectType(),actionType:ActionType.Modify,data:t}),null!==(t=null==this?void 0:this.context)&&void 0!==t&&t.enableMap()}}}},t.prototype.destroy=function(){var t,e,o=this.context;o&&(t=o.getCanvasEl(),e=o.getAssistCanvasEl(),t&&e&&(t.style.cursor=e.style.cursor="default",this.remove(this.EmitActions.CONTEXT,this.onContext),t.removeEventListener("mousedown",this.onCanvasMousedown),t.removeEventListener("mousemove",this.onCanvasMousemove),t.removeEventListener("mouseup",this.onCanvasMouseup),t.removeEventListener("mousemove",this.onCanvasIsModifyMousemove),this.clearMoveEvents(),o.clearDraw(),o.drawHistoryData(),this.status=ActionStatus.Destroy,this.startPoint=null,this.startIndex=-1,this.moveStartPoint=null,this.canMove=!0,this.isMoved=!1,this.trigger(ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:ActionType.Modify}),t.style.cursor=e.style.cursor="default",null!==(e=null==this?void 0:this.context)&&void 0!==e&&e.enableMap()))},t.prototype.setContext=function(t){this.context=t,this.trigger(this.EmitActions.CONTEXT)},t.prototype.getStatus=function(){return this.status},t}(Emitter.Events);export default ModifyAction;
//# sourceMappingURL=ModifyAction.js.map
