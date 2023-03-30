var __extends=this&&this.__extends||function(){var i=function(t,o){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,o){t.__proto__=o}:function(t,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}))(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function a(){this.constructor=t}i(t,o),t.prototype=null===o?Object.create(o):(a.prototype=o.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var o,a=1,i=arguments.length;a<i;a++)for(var e in o=arguments[a])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t}).apply(this,arguments)};import MathUtil from"@baifendian/adhere-util";import*as turf from"@turf/turf";import defaultMoveGemStyle from"../defaultMoveGemStyle";import DiamondDrawAction from"../draw/DiamondDrawAction";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";var DiamondModifyAction=function(o){function t(t){t=o.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,o),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var o=null==(o=null==(o=null==this?void 0:this.data)?void 0:o.data)?void 0:o.data,a=o.leftTopPoint,i=o.width,o=o.height,e=i/2,n=o/2;this.rectangleAnchorPoints=[__assign({},a),{x:a.x+e,y:a.y},{x:a.x+i,y:a.y},{x:a.x+i,y:a.y+n},{x:a.x+i,y:a.y+o},{x:a.x+e,y:a.y+o},{x:a.x,y:a.y+o},{x:a.x,y:a.y+n}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var s=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.moveTo(a.x,a.y),t.lineTo(a.x+i,a.y),t.lineTo(a.x+i,a.y+o),t.lineTo(a.x,a.y+o),t.lineTo(a.x,a.y),t.stroke()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var o=null,a=-1,i=0;i<this.rectangleAnchorPoints.length;i++){var e=this.rectangleAnchorPoints[i],n=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:e,radius:n})){o=e,a=i;break}}return o&&-1!==a?{point:o,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var o,a;this.context&&(o=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),o)&&a&&(o.style.cursor=a.style.cursor=this.ResizeCursorMapping.get(t))},t.prototype.drawModify=function(t){var o,a=this.context,i=null==a?void 0:a.getCtx();a&&i&&this.data&&this.startPoint&&(i=a.getHistoryDataById(this.data.data.id))&&(o=this.indexToModifyHandlerMapping.get(this.startIndex))&&o.call(this,t)&&(this.data.data=i,a.clearDraw(),a.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,o){var a,i=this.context,e=null==i?void 0:i.getCtx();i&&e&&this.data&&(e=i.getHistoryDataById(this.data.data.id))&&(a=o.x-t.x,o=o.y-t.y,e.data.leftTopPoint.x+=a,e.data.leftTopPoint.y+=o,this.data.data=e,i.clearDraw(),i.drawHistoryData(),this.drawAnchors())},t.prototype.getSelectType=function(){return SelectType.Diamond},t.prototype.getBox=function(){var t,o=this.context,a=null==o?void 0:o.getCtx();return o&&a&&this.data&&(a=o.getHistoryDataById(this.data.data.id))?(a=(o=a.data).leftTopPoint,t=o.width,o=o.height,{leftTop:__assign({},a),rightTop:{x:a.x+t,y:a.y},rightBottom:{x:a.x+t,y:a.y+o},leftBottom:{x:a.x,y:a.y+o}}):null},t.prototype.modifyDataByLeftTop=function(t){var o=this.context,a=null==o?void 0:o.getCtx();return!(!(o&&a&&this.data&&this.startPoint)||!(a=o.getHistoryDataById(this.data.data.id))||!(o=this.getBox())||t.x>o.rightTop.x||t.y>o.rightBottom.y||(a.data.leftTopPoint=t,a.data.width=o.rightTop.x-t.x,a.data.height=o.rightBottom.y-t.y,0))},t.prototype.modifyDataByCenterTop=function(t){var o,a=this.context,i=null==a?void 0:a.getCtx();return!(!(a&&i&&this.data&&this.startPoint)||!(i=a.getHistoryDataById(this.data.data.id))||(a=i.data.width,!(o=this.getBox()))||(t.y>o.leftBottom.y||(i.data.leftTopPoint={x:o.leftTop.x,y:t.y},i.data.width=a,i.data.height=o.rightBottom.y-t.y,0)))},t.prototype.modifyDataByRightTop=function(t){var o=this.context,a=null==o?void 0:o.getCtx();return!(!(o&&a&&this.data&&this.startPoint)||!(a=o.getHistoryDataById(this.data.data.id))||!(o=this.getBox())||t.x<o.leftTop.x||t.y>o.leftBottom.y||(a.data.leftTopPoint={x:o.leftTop.x,y:t.y},a.data.width=t.x-o.leftTop.x,a.data.height=o.rightBottom.y-t.y,0))},t.prototype.modifyDataByRightCenter=function(t){var o,a,i=this.context,e=null==i?void 0:i.getCtx();return!(!(i&&e&&this.data&&this.startPoint)||!(e=i.getHistoryDataById(this.data.data.id))||(o=(i=e.data).leftTopPoint,i=i.height,!(a=this.getBox()))||(t.x<a.leftTop.x||(e.data.leftTopPoint=__assign({},o),e.data.width=t.x-a.leftTop.x,e.data.height=i,0)))},t.prototype.modifyDataByRightBottom=function(t){var o,a=this.context,i=null==a?void 0:a.getCtx();return!(!(a&&i&&this.data&&this.startPoint)||!(i=a.getHistoryDataById(this.data.data.id))||(a=i.data.leftTopPoint,!(o=this.getBox()))||(t.x<o.leftTop.x||t.y<o.leftTop.y||(i.data.leftTopPoint=__assign({},a),i.data.width=t.x-o.leftTop.x,i.data.height=t.y-o.leftTop.y,0)))},t.prototype.modifyDataByCenterBottom=function(t){var o,a,i=this.context,e=null==i?void 0:i.getCtx();return!(!(i&&e&&this.data&&this.startPoint)||!(e=i.getHistoryDataById(this.data.data.id))||(o=(i=e.data).leftTopPoint,i=i.width,!(a=this.getBox()))||(t.y<a.leftTop.y||(e.data.leftTopPoint=__assign({},o),e.data.width=i,e.data.height=t.y-a.leftTop.y,0)))},t.prototype.modifyDataByLeftBottom=function(t){var o,a=this.context,i=null==a?void 0:a.getCtx();return!(!(a&&i&&this.data&&this.startPoint)||!(i=a.getHistoryDataById(this.data.data.id))||(a=i.data.leftTopPoint,!(o=this.getBox()))||(t.x>o.rightBottom.x||t.y<o.rightTop.y||(i.data.leftTopPoint={x:t.x,y:a.y},i.data.width=o.rightBottom.x-t.x,i.data.height=t.y-o.rightTop.y,0)))},t.prototype.modifyDataByLeftCenter=function(t){var o,a,i=this.context,e=null==i?void 0:i.getCtx();return!(!(i&&e&&this.data&&this.startPoint)||!(e=i.getHistoryDataById(this.data.data.id))||(o=(i=e.data).leftTopPoint,i=i.height,!(a=this.getBox()))||(t.x>a.rightBottom.x||(e.data.leftTopPoint={x:t.x,y:o.y},e.data.width=a.rightBottom.x-t.x,e.data.height=i,0)))},t.prototype.isCanMove=function(t){var o,a,i,e,n,r;return!!this.data&&(o=(a=null==(a=null==(a=null==this?void 0:this.data)?void 0:a.data)?void 0:a.data).leftTopPoint,i=(r=a.width)/2,e=(a=a.height)/2,n=turf.point([t.x,t.y]),r=turf.polygon([[[o.x,o.y+e],[o.x+i,o.y],[o.x+r,o.y+e],[o.x+i,o.y+a],[o.x,o.y+e]]]),turf.booleanPointInPolygon(n,r))&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&DiamondDrawAction.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,o){var a,i;this.context&&this.data&&t&&o&&((a=__assign({},this.data.data)).data=__assign(__assign({},a.data),{leftTopPoint:__assign({},a.data.leftTopPoint)}),i=o.x-t.x,o=o.y-t.y,a.data)&&a.data.leftTopPoint&&(a.data.leftTopPoint.x+=i,a.data.leftTopPoint.y+=o,a.style&&(a.style.globalAlpha=defaultMoveGemStyle.globalAlpha,a.style.strokeStyle=defaultMoveGemStyle.strokeStyle,a.style.lineWidth=defaultMoveGemStyle.lineWidth,a.style.lineDash=defaultMoveGemStyle.lineDash,a.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),DiamondDrawAction.draw(this.context.getAssistCtx(),a))},t.prototype.destroy=function(){this.startIndex=-1,o.prototype.destroy.call(this)},t}(ModifyAction);export default DiamondModifyAction;
//# sourceMappingURL=DiamondModifyAction.js.map
