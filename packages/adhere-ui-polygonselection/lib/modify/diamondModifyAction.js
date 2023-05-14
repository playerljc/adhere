"use strict";var __extends=function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__assign=function(){return(__assign=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var a in e=arguments[i])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__createBinding=Object.create?function(t,e,i,o){void 0===o&&(o=i);var a=Object.getOwnPropertyDescriptor(e,i);a&&("get"in a?e.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,o,a)}:function(t,e,i,o){t[o=void 0===o?i:o]=e[i]},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&__createBinding(e,t,i);return __setModuleDefault(e,t),e},__importDefault=function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),DiamondDrawAction_1=__importDefault(require("../draw/DiamondDrawAction")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),DiamondModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var e=null==(e=null==(e=null==this?void 0:this.data)?void 0:e.data)?void 0:e.data,i=e.leftTopPoint,o=e.width,e=e.height,a=o/2,n=e/2;this.rectangleAnchorPoints=[__assign({},i),{x:i.x+a,y:i.y},{x:i.x+o,y:i.y},{x:i.x+o,y:i.y+n},{x:i.x+o,y:i.y+e},{x:i.x+a,y:i.y+e},{x:i.x,y:i.y+e},{x:i.x,y:i.y+n}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var s=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.closePath(),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.moveTo(i.x,i.y),t.lineTo(i.x+o,i.y),t.lineTo(i.x+o,i.y+e),t.lineTo(i.x,i.y+e),t.lineTo(i.x,i.y),t.closePath(),t.stroke()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,i=-1,o=0;o<this.rectangleAnchorPoints.length;o++){var a=this.rectangleAnchorPoints[o],n=this.anchorRadius+this.anchorLineWidth;if(adhere_util_1.default.isPointInCircle(t,{center:a,radius:n})){e=a,i=o;break}}return e&&-1!==i?{point:e,index:i}:null},t.prototype.setResizeCursorByIndex=function(t){var e,i;this.context&&(e=this.context.getCanvasEl(),i=this.context.getAssistCanvasEl(),e)&&i&&(e.style.cursor=i.style.cursor=this.ResizeCursorMapping.get(t))},t.prototype.drawModify=function(t){var e,i=this.context,o=null==i?void 0:i.getCtx();i&&o&&this.data&&this.startPoint&&(o=i.getHistoryDataById(this.data.data.id))&&(e=this.indexToModifyHandlerMapping.get(this.startIndex))&&e.call(this,t)&&(this.data.data=o,i.clearDraw(),i.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,e){var i,o=this.context,a=null==o?void 0:o.getCtx();o&&a&&this.data&&(a=o.getHistoryDataById(this.data.data.id))&&(i=e.x-t.x,e=e.y-t.y,a.data.leftTopPoint.x+=i,a.data.leftTopPoint.y+=e,this.data.data=a,o.clearDraw(),o.drawHistoryData(),this.drawAnchors())},t.prototype.getSelectType=function(){return types_1.SelectType.Diamond},t.prototype.getBox=function(){var t,e=this.context,i=null==e?void 0:e.getCtx();return e&&i&&this.data&&(i=e.getHistoryDataById(this.data.data.id))?(i=(e=i.data).leftTopPoint,t=e.width,e=e.height,{leftTop:__assign({},i),rightTop:{x:i.x+t,y:i.y},rightBottom:{x:i.x+t,y:i.y+e},leftBottom:{x:i.x,y:i.y+e}}):null},t.prototype.modifyDataByLeftTop=function(t){var e=this.context,i=null==e?void 0:e.getCtx();return!(!(e&&i&&this.data&&this.startPoint)||!(i=e.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.x>e.rightTop.x||t.y>e.rightBottom.y||(i.data.leftTopPoint=t,i.data.width=e.rightTop.x-t.x,i.data.height=e.rightBottom.y-t.y,0))},t.prototype.modifyDataByCenterTop=function(t){var e,i=this.context,o=null==i?void 0:i.getCtx();return!(!(i&&o&&this.data&&this.startPoint)||!(o=i.getHistoryDataById(this.data.data.id))||(i=o.data.width,!(e=this.getBox()))||(t.y>e.leftBottom.y||(o.data.leftTopPoint={x:e.leftTop.x,y:t.y},o.data.width=i,o.data.height=e.rightBottom.y-t.y,0)))},t.prototype.modifyDataByRightTop=function(t){var e=this.context,i=null==e?void 0:e.getCtx();return!(!(e&&i&&this.data&&this.startPoint)||!(i=e.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.x<e.leftTop.x||t.y>e.leftBottom.y||(i.data.leftTopPoint={x:e.leftTop.x,y:t.y},i.data.width=t.x-e.leftTop.x,i.data.height=e.rightBottom.y-t.y,0))},t.prototype.modifyDataByRightCenter=function(t){var e,i,o=this.context,a=null==o?void 0:o.getCtx();return!(!(o&&a&&this.data&&this.startPoint)||!(a=o.getHistoryDataById(this.data.data.id))||(e=(o=a.data).leftTopPoint,o=o.height,!(i=this.getBox()))||(t.x<i.leftTop.x||(a.data.leftTopPoint=__assign({},e),a.data.width=t.x-i.leftTop.x,a.data.height=o,0)))},t.prototype.modifyDataByRightBottom=function(t){var e,i=this.context,o=null==i?void 0:i.getCtx();return!(!(i&&o&&this.data&&this.startPoint)||!(o=i.getHistoryDataById(this.data.data.id))||(i=o.data.leftTopPoint,!(e=this.getBox()))||(t.x<e.leftTop.x||t.y<e.leftTop.y||(o.data.leftTopPoint=__assign({},i),o.data.width=t.x-e.leftTop.x,o.data.height=t.y-e.leftTop.y,0)))},t.prototype.modifyDataByCenterBottom=function(t){var e,i,o=this.context,a=null==o?void 0:o.getCtx();return!(!(o&&a&&this.data&&this.startPoint)||!(a=o.getHistoryDataById(this.data.data.id))||(e=(o=a.data).leftTopPoint,o=o.width,!(i=this.getBox()))||(t.y<i.leftTop.y||(a.data.leftTopPoint=__assign({},e),a.data.width=o,a.data.height=t.y-i.leftTop.y,0)))},t.prototype.modifyDataByLeftBottom=function(t){var e,i=this.context,o=null==i?void 0:i.getCtx();return!(!(i&&o&&this.data&&this.startPoint)||!(o=i.getHistoryDataById(this.data.data.id))||(i=o.data.leftTopPoint,!(e=this.getBox()))||(t.x>e.rightBottom.x||t.y<e.rightTop.y||(o.data.leftTopPoint={x:t.x,y:i.y},o.data.width=e.rightBottom.x-t.x,o.data.height=t.y-e.rightTop.y,0)))},t.prototype.modifyDataByLeftCenter=function(t){var e,i,o=this.context,a=null==o?void 0:o.getCtx();return!(!(o&&a&&this.data&&this.startPoint)||!(a=o.getHistoryDataById(this.data.data.id))||(e=(o=a.data).leftTopPoint,o=o.height,!(i=this.getBox()))||(t.x>i.rightBottom.x||(a.data.leftTopPoint={x:t.x,y:e.y},a.data.width=i.rightBottom.x-t.x,a.data.height=o,0)))},t.prototype.isCanMove=function(t){var e,i,o,a,n,r;return!!this.data&&(e=(i=null==(i=null==(i=null==this?void 0:this.data)?void 0:i.data)?void 0:i.data).leftTopPoint,o=(r=i.width)/2,a=(i=i.height)/2,n=turf.point([t.x,t.y]),r=turf.polygon([[[e.x,e.y+a],[e.x+o,e.y],[e.x+r,e.y+a],[e.x+o,e.y+i],[e.x,e.y+a]]]),turf.booleanPointInPolygon(n,r))&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&DiamondDrawAction_1.default.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var i,o;return this.context&&this.data&&t&&e?((i=JSON.parse(JSON.stringify(this.data.data))).data=__assign(__assign({},i.data),{leftTopPoint:__assign({},i.data.leftTopPoint)}),o=e.x-t.x,e=e.y-t.y,i.data&&i.data.leftTopPoint&&(i.data.leftTopPoint.x+=o,i.data.leftTopPoint.y+=e,t=__assign(__assign({},this.moveGemStyle),i.style||{}),i.style.lineWidth=t.lineWidth,i.style.lineJoin=t.lineJoin,i.style.lineCap=t.lineCap,i.lineDash=t.lineDash,i.style.lineDashOffset=t.lineDashOffset,i.style.strokeStyle=t.strokeStyle,i.style.fillStyle=t.fillStyle,i.style.globalAlpha=null!=(o=t.globalAlpha)?o:1,DiamondDrawAction_1.default.draw(this.context.getAssistCtx(),i)),i):null},t.prototype.destroy=function(){this.startIndex=-1,e.prototype.destroy.call(this)},t}(ModifyAction_1.default);exports.default=DiamondModifyAction;
//# sourceMappingURL=DiamondModifyAction.js.map
