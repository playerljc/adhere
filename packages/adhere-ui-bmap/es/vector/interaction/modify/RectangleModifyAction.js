var __extends=this&&this.__extends||function(){var a=function(t,o){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function i(){this.constructor=t}a(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var o,i=1,a=arguments.length;i<a;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t}).apply(this,arguments)};import MathUtil from"@baifendian/adhere-util";import*as turf from"@turf/turf";import defaultMoveGemStyle from"../DefaultMoveGemStyle";import RectangleDrawAction from"../draw/RectangleDrawAction";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";var RectangleModifyAction=function(o){function t(t){t=o.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,o),t.prototype.setCursor=function(){throw new Error("Method not implemented.")},t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var o=RectangleDrawAction.transformOriginToReal(this.context,null==(o=null==(o=null==this?void 0:this.data)?void 0:o.data)?void 0:o.data),i=o.leftTopPoint,a=o.width,o=o.height,e=a/2,n=o/2;this.rectangleAnchorPoints=[__assign({},i),{x:i.x+e,y:i.y},{x:i.x+a,y:i.y},{x:i.x+a,y:i.y+n},{x:i.x+a,y:i.y+o},{x:i.x+e,y:i.y+o},{x:i.x,y:i.y+o},{x:i.x,y:i.y+n}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var s=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var o=null,i=-1,a=0;a<this.rectangleAnchorPoints.length;a++){var e=this.rectangleAnchorPoints[a],n=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:e,radius:n})){o=e,i=a;break}}return o&&-1!==i?{point:o,index:i}:null},t.prototype.setResizeCursorByIndex=function(t){var o,i;this.context&&(o=this.context.getCanvasEl(),i=this.context.getAssistCanvasEl(),o&&i&&(o.style.cursor=i.style.cursor=this.ResizeCursorMapping.get(t)))},t.prototype.drawModify=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();i&&a&&this.data&&this.startPoint&&(a=i.getHistoryDataById(this.data.data.id))&&(o=this.indexToModifyHandlerMapping.get(this.startIndex))&&o.call(this,t)&&(this.data.data=__assign({},a),i.clearDraw(),i.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,o){var i,a=this.context,e=null==a?void 0:a.getCtx();a&&e&&this.data&&((e=a.getHistoryDataById(this.data.data.id))&&(t=a.pixelToPoint(t),i=(o=a.pixelToPoint(o)).x-t.x,o=o.y-t.y,e.data.leftTopPoint.x+=i,e.data.leftTopPoint.y+=o,this.data.data=__assign({},e),a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Rectangle},t.prototype.getBox=function(){var t,o=this.context,i=null==o?void 0:o.getCtx();return o&&i&&this.data&&(i=o.getHistoryDataById(this.data.data.id))?(i=(o=RectangleDrawAction.transformOriginToReal(o,i.data)).leftTopPoint,t=o.width,o=o.height,{leftTop:__assign({},i),rightTop:{x:i.x+t,y:i.y},rightBottom:{x:i.x+t,y:i.y+o},leftBottom:{x:i.x,y:i.y+o}}):null},t.prototype.modifyDataByLeftTop=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&(!!(a=i.getHistoryDataById(this.data.data.id))&&(!!(o=this.getBox())&&(!(t.x>o.rightTop.x||t.y>o.rightBottom.y)&&(a.data.leftTopPoint=i.pixelToPoint(t),a.data.width=i.distanceToActual(o.rightTop.x-t.x),a.data.height=i.distanceToActual(o.rightBottom.y-t.y),!0))))},t.prototype.modifyDataByCenterTop=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&(!!(a=i.getHistoryDataById(this.data.data.id))&&(!!(o=this.getBox())&&(!(t.y>o.leftBottom.y)&&(a.data.leftTopPoint=i.pixelToPoint({x:o.leftTop.x,y:t.y}),a.data.height=i.distanceToActual(o.rightBottom.y-t.y),!0))))},t.prototype.modifyDataByRightTop=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&(!!(a=i.getHistoryDataById(this.data.data.id))&&(!!(o=this.getBox())&&(!(t.x<o.leftTop.x||t.y>o.leftBottom.y)&&(a.data.leftTopPoint=i.pixelToPoint({x:o.leftTop.x,y:t.y}),a.data.width=i.distanceToActual(t.x-o.leftTop.x),a.data.height=i.distanceToActual(o.rightBottom.y-t.y),!0))))},t.prototype.modifyDataByRightCenter=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&(!!(a=i.getHistoryDataById(this.data.data.id))&&(!!(o=this.getBox())&&(!(t.x<o.leftTop.x)&&(a.data.width=i.distanceToActual(t.x-o.leftTop.x),!0))))},t.prototype.modifyDataByRightBottom=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&(!!(a=i.getHistoryDataById(this.data.data.id))&&(!!(o=this.getBox())&&(!(t.x<o.leftTop.x||t.y<o.leftTop.y)&&(a.data.width=i.distanceToActual(t.x-o.leftTop.x),a.data.height=i.distanceToActual(t.y-o.leftTop.y),!0))))},t.prototype.modifyDataByCenterBottom=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&(!!(a=i.getHistoryDataById(this.data.data.id))&&(!!(o=this.getBox())&&(!(t.y<o.leftTop.y)&&(a.data.height=i.distanceToActual(t.y-o.leftTop.y),!0))))},t.prototype.modifyDataByLeftBottom=function(t){var o,i,a=this.context,e=null==a?void 0:a.getCtx();return!!(a&&e&&this.data&&this.startPoint)&&(!!(e=a.getHistoryDataById(this.data.data.id))&&(o=e.data.leftTopPoint,o=a.pointToPixel(o),!!(i=this.getBox())&&(!(t.x>i.rightBottom.x||t.y<i.rightTop.y)&&(e.data.leftTopPoint=a.pixelToPoint({x:t.x,y:o.y}),e.data.width=a.distanceToActual(i.rightBottom.x-t.x),e.data.height=a.distanceToActual(t.y-i.rightTop.y),!0))))},t.prototype.modifyDataByLeftCenter=function(t){var o,i,a=this.context,e=null==a?void 0:a.getCtx();return!!(a&&e&&this.data&&this.startPoint)&&(!!(e=a.getHistoryDataById(this.data.data.id))&&(o=e.data.leftTopPoint,o=a.pointToPixel(o),!!(i=this.getBox())&&(!(t.x>i.rightBottom.x)&&(e.data.leftTopPoint=a.pixelToPoint({x:t.x,y:o.y}),e.data.width=a.distanceToActual(i.rightBottom.x-t.x),!0))))},t.prototype.isCanMove=function(t){var o,i,a,e;return!!this.data&&(o=(i=RectangleDrawAction.transformOriginToReal(this.context,null==(i=null==(i=null==this?void 0:this.data)?void 0:i.data)?void 0:i.data)).leftTopPoint,e=i.width,i=i.height,a=turf.point([t.x,t.y]),e=turf.polygon([[[o.x,o.y],[o.x+e,o.y],[o.x+e,o.y+i],[o.x,o.y+i],[o.x,o.y]]]),turf.booleanPointInPolygon(a,e)&&!this.getPointInAnchor(t))},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&RectangleDrawAction.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,o){var i,a;this.context&&this.data&&t&&o&&((i=__assign({},this.data.data)).data=__assign(__assign({},i.data),{leftTopPoint:__assign({},i.data.leftTopPoint)}),t=this.context.pixelToPoint(t),a=(o=this.context.pixelToPoint(o)).x-t.x,o=o.y-t.y,i.data&&i.data.leftTopPoint&&(i.data.leftTopPoint.x+=a,i.data.leftTopPoint.y+=o,i.style&&(i.style.globalAlpha=defaultMoveGemStyle.globalAlpha,i.style.strokeStyle=defaultMoveGemStyle.strokeStyle,i.style.lineWidth=defaultMoveGemStyle.lineWidth,i.style.lineDash=defaultMoveGemStyle.lineDash,i.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),RectangleDrawAction.draw(this.context,this.context.getAssistCtx(),i)))},t.prototype.destroy=function(){this.startIndex=-1,o.prototype.destroy.call(this)},t}(ModifyAction);export default RectangleModifyAction;
//# sourceMappingURL=RectangleModifyAction.js.map
