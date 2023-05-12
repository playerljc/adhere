"use strict";var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),adhere_util_emitter_1=__importDefault(require("@baifendian/adhere-util-emitter")),defaultAnchorStyle_1=__importDefault(require("../defaultAnchorStyle")),types_1=require("../types"),ModifyAction=function(o){function t(t){var e=o.call(this)||this;return e.context=null,e.startPoint=null,e.startIndex=-1,e.data=null,e.status=types_1.ActionStatus.UnStart,e.EmitActions={CONTEXT:"CONTEXT"},e.anchorRadius=5,e.anchorLineWidth=2,e.moveStartPoint=null,e.canMove=!1,e.isMoved=!1,e.data=t,e.onContext=e.onContext.bind(e),e.onCanvasMousedown=e.onCanvasMousedown.bind(e),e.onCanvasMousemove=e.onCanvasMousemove.bind(e),e.onCanvasMouseup=e.onCanvasMouseup.bind(e),e.onCanvasIsModifyMousemove=e.onCanvasIsModifyMousemove.bind(e),e.onMoveMousedown=e.onMoveMousedown.bind(e),e.onMoveMousemove=e.onMoveMousemove.bind(e),e.onMoveMouseup=e.onMoveMouseup.bind(e),e.on(e.EmitActions.CONTEXT,e.onContext),e}return __extends(t,o),t.prototype.setAnchorCircleStyle=function(){var t;this.context&&(t=this.context.getCtx())&&(t.strokeStyle=defaultAnchorStyle_1.default.strokeStyle,t.fillStyle=defaultAnchorStyle_1.default.fillStyle,t.lineWidth=defaultAnchorStyle_1.default.lineWidth,t.globalAlpha=defaultAnchorStyle_1.default.globalAlpha)},t.prototype.setAnchorLineStyle=function(){var t;this.context&&(t=this.context.getCtx())&&(t.strokeStyle=defaultAnchorStyle_1.default.strokeStyle,t.lineWidth=defaultAnchorStyle_1.default.lineWidth,t.setLineDash(defaultAnchorStyle_1.default.lineDash),t.lineDashOffset=defaultAnchorStyle_1.default.lineDashOffset)},t.prototype.onContext=function(){this.drawAnchors()},t.prototype.onCanvasMousedown=function(t){var e;this.context&&(e=this.context.getCanvasEl())&&this.context.getCtx()&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),t=this.getPointInAnchor(t))&&(this.startPoint=t.point,this.startIndex=t.index,e.addEventListener("mousemove",this.onCanvasMousemove),e.addEventListener("mouseup",this.onCanvasMouseup))},t.prototype.onCanvasMousemove=function(t){var e;t.stopPropagation(),this.context&&(e=this.context.getCanvasEl())&&this.context.getCtx()&&this.startPoint&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.drawModify(t),this.trigger(types_1.ActionEvents.Modifying,{selectType:types_1.SelectType.Rectangle,actionType:types_1.ActionType.Draw,data:this.data}))},t.prototype.onCanvasMouseup=function(t){this.end(t),t.stopPropagation()},t.prototype.onCanvasIsModifyMousemove=function(t){var e,o;this.context&&(e=this.context.getCanvasEl(),o=this.context.getAssistCanvasEl(),e)&&o&&(this.startPoint||this.moveStartPoint||(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),(t=this.getPointInAnchor(t))?this.setResizeCursorByIndex(t.index):e.style.cursor=o.style.cursor="default"))},t.prototype.initMoveEvents=function(){var t,e=this.context;e&&(t=e.getCanvasEl(),e=e.getAssistCanvasEl(),t)&&e&&(t.addEventListener("mousedown",this.onMoveMousedown),t.addEventListener("mousemove",this.onMoveMousemove),e.addEventListener("mousemove",this.onMoveMousemove),e.addEventListener("mouseup",this.onMoveMouseup))},t.prototype.clearMoveEvents=function(){var t,e=this.context;e&&(t=e.getCanvasEl(),e=e.getAssistCanvasEl(),t)&&e&&(t.removeEventListener("mousedown",this.onMoveMousedown),t.removeEventListener("mousemove",this.onMoveMousemove),e.removeEventListener("mousemove",this.onMoveMousemove),e.removeEventListener("mouseup",this.onMoveMouseup))},t.prototype.onMoveMousedown=function(t){var e,o,n;t&&(e=this.context)&&(o=e.getCanvasEl(),n=e.getAssistCanvasEl(),o)&&n&&this.canMove&&(e.setFrontCanvas(n),this.moveStartPoint=adhere_util_1.default.clientToCtxPoint({event:t,rect:o.getBoundingClientRect()}),this.drawMoveGeometry())},t.prototype.onMoveMousemove=function(t){var e,o,n;t&&(n=this.context)&&(e=n.getCanvasEl(),o=n.getAssistCanvasEl(),e)&&o&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:e.getBoundingClientRect()}),this.moveStartPoint?(this.isMoved=!0,n.clearAssistDraw(),n=this.drawMoveGeometry(this.moveStartPoint,t),this.trigger(types_1.ActionEvents.Moving,{selectType:this.getSelectType(),actionType:types_1.ActionType.Move,data:n})):(this.canMove=this.isCanMove(t),n=o.style.cursor,e.style.cursor=o.style.cursor=this.canMove?"move":n))},t.prototype.onMoveMouseup=function(t){var e,o,n;t&&(e=this.context)&&(n=e.getCanvasEl(),o=e.getAssistCanvasEl(),n)&&o&&(this.canMove&&this.isMoved&&this.moveStartPoint?(e.setBackCanvas(o),n=adhere_util_1.default.clientToCtxPoint({event:t,rect:n.getBoundingClientRect()}),e.clearAssistDraw(),this.drawMove(this.moveStartPoint,n),this.canMove=!1,this.isMoved=!1,this.moveStartPoint=null,t.stopPropagation(),this.trigger(types_1.ActionEvents.MoveEnd,{selectType:this.getSelectType(),actionType:types_1.ActionType.Move,data:this.data})):(e.setBackCanvas(o),this.canMove=!1,this.isMoved=!1,this.moveStartPoint=null))},t.prototype.start=function(){var t,e,o;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=null==(e=null==(t=this.context)?void 0:t.getCanvasEl)?void 0:e.call(t),o=null==(o=null==t?void 0:t.getAssistCanvasEl)?void 0:o.call(t),e)&&o&&(e.style.cursor=o.style.cursor="default",this.trigger(types_1.ActionEvents.ModifyBeforeStart,{selectType:this.getSelectType(),actionType:types_1.ActionType.Modify}),e.addEventListener("mousedown",this.onCanvasMousedown),e.addEventListener("mousemove",this.onCanvasIsModifyMousemove),this.initMoveEvents(),this.status=types_1.ActionStatus.Running,this.trigger(types_1.ActionEvents.ModifyStart,{selectType:this.getSelectType(),actionType:types_1.ActionType.Modify}))},t.prototype.end=function(t){var e,o;t&&(o=this.context)&&(e=o.getCanvasEl(),o=o.getAssistCanvasEl(),e)&&o&&(e.style.cursor=o.style.cursor="default",e.removeEventListener("mousedown",this.onCanvasMousedown),e.removeEventListener("mousemove",this.onCanvasMousemove),e.removeEventListener("mouseup",this.onCanvasMouseup),e.removeEventListener("mousemove",this.onCanvasIsModifyMousemove),this.clearMoveEvents(),t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.drawModify(t),this.status=types_1.ActionStatus.End,this.startPoint=null,this.trigger(types_1.ActionEvents.ModifyEnd,{selectType:this.getSelectType(),actionType:types_1.ActionType.Modify,data:this.data}),e.style.cursor=o.style.cursor="default")},t.prototype.destroy=function(){var t,e,o=this.context;o&&(t=o.getCanvasEl(),e=o.getAssistCanvasEl(),t)&&e&&(t.style.cursor=e.style.cursor="default",this.remove(this.EmitActions.CONTEXT,this.onContext),t.removeEventListener("mousedown",this.onCanvasMousedown),t.removeEventListener("mousemove",this.onCanvasMousemove),t.removeEventListener("mouseup",this.onCanvasMouseup),t.removeEventListener("mousemove",this.onCanvasIsModifyMousemove),this.clearMoveEvents(),o.clearDraw(),o.drawHistoryData(),this.status=types_1.ActionStatus.Destroy,this.startPoint=null,this.trigger(types_1.ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:types_1.ActionType.Modify}),t.style.cursor=e.style.cursor="default")},t.prototype.setContext=function(t){this.context=t,this.trigger(this.EmitActions.CONTEXT)},t.prototype.getStatus=function(){return this.status},t}(adhere_util_emitter_1.default.Events);exports.default=ModifyAction;
//# sourceMappingURL=ModifyAction.js.map
