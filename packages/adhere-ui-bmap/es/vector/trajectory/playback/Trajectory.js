var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,o=0,e=arguments.length;o<e;o++)t+=arguments[o].length;for(var i=Array(t),r=0,o=0;o<e;o++)for(var s=arguments[o],a=0,n=s.length;a<n;a++,r++)i[r]=s[a];return i};import MathUtil from"@baifendian/adhere-util";import*as turf from"@turf/turf";import{TrajectoryStatus}from"../../types";var Trajectory=function(){function t(t){var o=t.context,e=t.id,i=t.coordinates,r=t.renderPosition,s=t.renderStep,a=t.renderCap,t=t.duration;this.id="",this.context=null,this.coordinates=[],this.duration=0,this.status=TrajectoryStatus.UnInit,this.boutTotal=0,this.bout=1,this.loopHeader=-1,this.loopPointEntitys=[],this.stepEntityIndexes=[],this.preLoopPixel=null,this.arrowMarker=null,this.context=o,this.id=e,this.coordinates=i,this.duration=t,this.renderPosition=r,this.renderStep=s,this.renderCap=a}return t.prototype.drawDefaultPosition=function(t,o){var e,i=this.context;!i||(e=i.getCtx())&&(i=i.pointToPixel({x:t.lng,y:t.lat}),e.beginPath(),e.strokeStyle="red",e.fillStyle="#fff",e.lineWidth=3,e.ellipse(i.x,i.y,6,6,45*Math.PI/180,0,2*Math.PI),e.stroke(),e.fill(),e.beginPath(),e.font="8px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#000",e.fillText(""+(o+1),i.x,i.y,10))},t.prototype.createDefaultCap=function(){var t;if(this.context)return t=new BMap.Icon("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMxNDU2MzQ2NjYxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxMzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc4OC40OCA1MTJMMzEyLjMyIDc4Ni45MjM1MlYyMzcuMDk2OTZ6IiBwLWlkPSI0MTM3IiBmaWxsPSIjRkZBNTAwIj48L3BhdGg+PC9zdmc+",new BMap.Size(16,16)),new BMap.Marker(new BMap.Point(90,90),{icon:t})},t.prototype.updateCap=function(t){var o,e,i=this,r=i.preLoopPixel,s=i.context,i=i.arrowMarker;s&&r&&i&&(s=s.pixelToPoint(t),o=t.x-r.x,e=t.y-r.y,Math.atan2(e,o),Math.PI,e=MathUtil.slopToAngle(r,t,"geographic"),i.setPosition(new BMap.Point(s.x,s.y)),i.setRotation(e))},t.prototype.drawPosition=function(){var e,i=this,t=this,r=t.renderPosition,o=t.coordinates,t=t.context;!t||(e=t.getCtx())&&o.forEach(function(t,o){r?r({ctx:e,coordinate:t}):i.drawDefaultPosition(t,o)})},t.prototype.drawTrajectory=function(){this.drawPosition(),this.prepareLoopData();for(var t=1;t<this.boutTotal;t++)this.loopBout(t);this.drawLastFrame(),this.finishDeal()},t.prototype.drawLastFrame=function(){var t=this,o=t.loopPointEntitys,e=t.context,i=t.renderStep;t.renderCap;!e||(t=e.getCtx())&&(o=o[o.length-1],e=e.pointToPixel({x:o.point.lng,y:o.point.lat}),t.beginPath(),i?i(t,e):(this.setDrawLoopStyle(),t.lineTo(e.x,e.y),t.stroke(),this.preLoopPixel=null),this.updateCap(e))},t.prototype.setDrawLoopStyle=function(){var t=this.context;!t||(t=t.getCtx())&&(t.strokeStyle="orange",t.lineWidth=3)},t.prototype.finishDeal=function(){var t=this.context;!t||(t=t.getMap())&&(-1!==this.loopHeader&&"undefined"!=typeof window&&window.cancelAnimationFrame(this.loopHeader),this.loopHeader=-1,this.bout=1,this.boutTotal=0,this.loopPointEntitys=[],this.stepEntityIndexes=[],this.preLoopPixel=null,this.arrowMarker&&t.removeOverlay(this.arrowMarker),this.arrowMarker=null)},t.prototype.loopBout=function(t){var o=this,e=o.context,i=o.loopPointEntitys,r=o.stepEntityIndexes,s=o.renderStep,a=o.renderCap;if(e){var n=e.getCtx();if(n)for(var u=e.getMap(),o=1===t?0:r[t-2],p=r[t-1],h=o;h<p;h++){var l=i[h].point,l=e.pointToPixel({x:l.lng,y:l.lat});this.preLoopPixel?this.updateCap(l):(this.arrowMarker=a?a():this.createDefaultCap(),u.addOverlay(this.arrowMarker)),s?s(n,l):this.preLoopPixel?(n.lineTo(l.x,l.y),n.stroke(),n.beginPath(),this.setDrawLoopStyle(),n.moveTo(l.x,l.y)):(n.beginPath(),this.setDrawLoopStyle(),n.moveTo(l.x,l.y),this.preLoopPixel=l)}}},t.prototype.loop=function(){var o=this;"undefined"!=typeof window&&(this.loopHeader=window.requestAnimationFrame(function(){var t;o.status===TrajectoryStatus.Pause?o.loop():(t=o.context)&&t.getCtx()&&(o.loopBout(o.bout),o.bout++,o.bout>=o.boutTotal?(o.drawLastFrame(),o.finishDeal(),o.status=TrajectoryStatus.End):o.loop())}))},t.prototype.prepareLoopData=function(){for(var e=this,t=this.duration,i=this.coordinates,r=[],o=(i.reduce(function(t,o,e){e=0===e?0:turf.convertLength(turf.distance(turf.point([i[e-1].lng,i[e-1].lat]),turf.point([o.lng,o.lat]),{units:"kilometers"}),"kilometers","meters");return r.push({point:o,distance:t+e,isStep:!1}),t+e},0),turf.lineString(i.map(function(t){return[t.lng,t.lat]}))),s=turf.convertLength(turf.length(o,{units:"kilometers"}),"kilometers","meters"),a=(this.boutTotal=60*t,s/this.boutTotal),n=[],u=0;u<this.boutTotal;u++){var p=(u+1)*a,h=turf.along(o,turf.convertLength(p,"meters","kilometers"),{units:"kilometers"});n.push({point:{lng:h.geometry.coordinates[0],lat:h.geometry.coordinates[1]},distance:p,isStep:!0})}this.loopPointEntitys=__spreadArrays(r,n),this.loopPointEntitys.sort(function(t,o){return t.distance>o.distance?1:t.distance<o.distance?-1:0}),this.stepEntityIndexes=[],this.loopPointEntitys.forEach(function(t,o){t.isStep&&e.stepEntityIndexes.push(o)})},t.prototype.init=function(){this.status===TrajectoryStatus.UnInit&&(this.drawPosition(),this.status=TrajectoryStatus.Init)},t.prototype.start=function(){var t=this.context;t&&t.getCtx()&&[TrajectoryStatus.Init,TrajectoryStatus.End,TrajectoryStatus.Pause].includes(this.status)&&([TrajectoryStatus.Pause,TrajectoryStatus.End].includes(this.status)&&(TrajectoryStatus.Pause===this.status&&this.finishDeal(),t.clear(),t.drawHistory()),this.status=TrajectoryStatus.Running,this.prepareLoopData(),this.loop())},t.prototype.pause=function(){this.status=TrajectoryStatus.Pause},t.prototype.resume=function(){this.status=TrajectoryStatus.Running},t.prototype.finish=function(){this.context&&![TrajectoryStatus.End,TrajectoryStatus.Destroy].includes(this.status)&&(this.finishDeal(),this.status=TrajectoryStatus.End)},t.prototype.destroy=function(){var t;this.status!==TrajectoryStatus.Destroy&&(t=this.context)&&(this.finishDeal(),t.clear(),this.status=TrajectoryStatus.Destroy,t.removeTrajectoryById(this.id))},t.prototype.getId=function(){return this.id},t.prototype.getStatus=function(){return this.status},t.prototype.drawHistory=function(){var t=this.status;if(TrajectoryStatus.Init===t?this.drawPosition():TrajectoryStatus.End===t&&this.drawTrajectory(),[TrajectoryStatus.Pause,TrajectoryStatus.Running].includes(t)){this.drawPosition();for(var o=1;o<this.bout;o++)this.loopBout(o)}},t}();export default Trajectory;
//# sourceMappingURL=Trajectory.js.map
