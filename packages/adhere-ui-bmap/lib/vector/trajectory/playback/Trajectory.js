"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(t,e,i,o){void 0===o&&(o=i),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,o){t[o=void 0===o?i:o]=e[i]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.hasOwnProperty.call(t,i)&&__createBinding(e,t,i);return __setModuleDefault(e,t),e},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;for(var o=Array(t),r=0,e=0;e<i;e++)for(var s=arguments[e],a=0,n=s.length;a<n;a++,r++)o[r]=s[a];return o},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var turf=__importStar(require("@turf/turf")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),types_1=require("../../types"),Trajectory=function(){function t(t){var e=t.context,i=t.id,o=t.coordinates,r=t.renderPosition,s=t.renderStep,a=t.renderCap,t=t.duration;this.id="",this.context=null,this.coordinates=[],this.duration=0,this.status=types_1.TrajectoryStatus.UnInit,this.boutTotal=0,this.bout=1,this.loopHeader=-1,this.loopPointEntitys=[],this.stepEntityIndexes=[],this.preLoopPixel=null,this.arrowMarker=null,this.context=e,this.id=i,this.coordinates=o,this.duration=t,this.renderPosition=r,this.renderStep=s,this.renderCap=a}return t.prototype.drawDefaultPosition=function(t,e){var i,o=this.context;!o||(i=o.getCtx())&&(t=o.pointToPixel({x:t.lng,y:t.lat}),i.beginPath(),i.strokeStyle="red",i.fillStyle="#fff",i.lineWidth=3,i.ellipse(t.x,t.y,6,6,45*Math.PI/180,0,2*Math.PI),i.stroke(),i.fill(),i.beginPath(),i.font="8px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#000",i.fillText(""+(e+1),t.x,t.y,10))},t.prototype.createDefaultCap=function(){if(this.context){var t=new BMap.Icon("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMxNDU2MzQ2NjYxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxMzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc4OC40OCA1MTJMMzEyLjMyIDc4Ni45MjM1MlYyMzcuMDk2OTZ6IiBwLWlkPSI0MTM3IiBmaWxsPSIjRkZBNTAwIj48L3BhdGg+PC9zdmc+",new BMap.Size(16,16));return new BMap.Marker(new BMap.Point(90,90),{icon:t})}},t.prototype.updateCap=function(t){var e,i=this,o=i.preLoopPixel,r=i.context,s=i.arrowMarker;r&&o&&s&&(e=r.pixelToPoint(t),i=t.x-o.x,r=t.y-o.y,Math.atan2(r,i),Math.PI,t=adhere_util_1.default.slopToAngle(o,t,"geographic"),s.setPosition(new BMap.Point(e.x,e.y)),s.setRotation(t))},t.prototype.drawPosition=function(){var i,o=this,t=this,r=t.renderPosition,e=t.coordinates,t=t.context;!t||(i=t.getCtx())&&e.forEach(function(t,e){r?r({ctx:i,coordinate:t}):o.drawDefaultPosition(t,e)})},t.prototype.drawTrajectory=function(){this.drawPosition(),this.prepareLoopData();for(var t=1;t<this.boutTotal;t++)this.loopBout(t);this.drawLastFrame(),this.finishDeal()},t.prototype.drawLastFrame=function(){var t,e=this.loopPointEntitys,i=this.context,o=this.renderStep;this.renderCap;!i||(t=i.getCtx())&&(e=e[e.length-1],e=i.pointToPixel({x:e.point.lng,y:e.point.lat}),t.beginPath(),o?o(t,e):(this.setDrawLoopStyle(),t.lineTo(e.x,e.y),t.stroke(),this.preLoopPixel=null),this.updateCap(e))},t.prototype.setDrawLoopStyle=function(){var t=this.context;!t||(t=t.getCtx())&&(t.strokeStyle="orange",t.lineWidth=3)},t.prototype.finishDeal=function(){var t=this.context;!t||(t=t.getMap())&&(-1!==this.loopHeader&&"undefined"!=typeof window&&window.cancelAnimationFrame(this.loopHeader),this.loopHeader=-1,this.bout=1,this.boutTotal=0,this.loopPointEntitys=[],this.stepEntityIndexes=[],this.preLoopPixel=null,this.arrowMarker&&t.removeOverlay(this.arrowMarker),this.arrowMarker=null)},t.prototype.loopBout=function(t){var e=this,i=e.context,o=e.loopPointEntitys,r=e.stepEntityIndexes,s=e.renderStep,a=e.renderCap;if(i){var n=i.getCtx();if(n)for(var u=i.getMap(),e=1===t?0:r[t-2],p=r[t-1],l=e;l<p;l++){var h=o[l].point,h=i.pointToPixel({x:h.lng,y:h.lat});this.preLoopPixel?this.updateCap(h):(this.arrowMarker=a?a():this.createDefaultCap(),u.addOverlay(this.arrowMarker)),s?s(n,h):this.preLoopPixel?(n.lineTo(h.x,h.y),n.stroke(),n.beginPath(),this.setDrawLoopStyle(),n.moveTo(h.x,h.y)):(n.beginPath(),this.setDrawLoopStyle(),n.moveTo(h.x,h.y),this.preLoopPixel=h)}}},t.prototype.loop=function(){var e=this;"undefined"!=typeof window&&(this.loopHeader=window.requestAnimationFrame(function(){var t;e.status!==types_1.TrajectoryStatus.Pause?(t=e.context)&&t.getCtx()&&(e.loopBout(e.bout),e.bout++,e.bout>=e.boutTotal?(e.drawLastFrame(),e.finishDeal(),e.status=types_1.TrajectoryStatus.End):e.loop()):e.loop()}))},t.prototype.prepareLoopData=function(){var i=this,t=this.duration,o=this.coordinates,r=[];o.reduce(function(t,e,i){i=0===i?0:turf.convertLength(turf.distance(turf.point([o[i-1].lng,o[i-1].lat]),turf.point([e.lng,e.lat]),{units:"kilometers"}),"kilometers","meters");return r.push({point:e,distance:t+i,isStep:!1}),t+i},0);var e=turf.lineString(o.map(function(t){return[t.lng,t.lat]})),s=turf.convertLength(turf.length(e,{units:"kilometers"}),"kilometers","meters");this.boutTotal=60*t;for(var a=s/this.boutTotal,n=[],u=0;u<this.boutTotal;u++){var p=(u+1)*a,l=turf.along(e,turf.convertLength(p,"meters","kilometers"),{units:"kilometers"});n.push({point:{lng:l.geometry.coordinates[0],lat:l.geometry.coordinates[1]},distance:p,isStep:!0})}this.loopPointEntitys=__spreadArrays(r,n),this.loopPointEntitys.sort(function(t,e){return t.distance>e.distance?1:t.distance<e.distance?-1:0}),this.stepEntityIndexes=[],this.loopPointEntitys.forEach(function(t,e){t.isStep&&i.stepEntityIndexes.push(e)})},t.prototype.init=function(){this.status===types_1.TrajectoryStatus.UnInit&&(this.drawPosition(),this.status=types_1.TrajectoryStatus.Init)},t.prototype.start=function(){var t=this.context;t&&t.getCtx()&&[types_1.TrajectoryStatus.Init,types_1.TrajectoryStatus.End,types_1.TrajectoryStatus.Pause].includes(this.status)&&([types_1.TrajectoryStatus.Pause,types_1.TrajectoryStatus.End].includes(this.status)&&(types_1.TrajectoryStatus.Pause===this.status&&this.finishDeal(),t.clear(),t.drawHistory()),this.status=types_1.TrajectoryStatus.Running,this.prepareLoopData(),this.loop())},t.prototype.pause=function(){this.status=types_1.TrajectoryStatus.Pause},t.prototype.resume=function(){this.status=types_1.TrajectoryStatus.Running},t.prototype.finish=function(){this.context&&([types_1.TrajectoryStatus.End,types_1.TrajectoryStatus.Destroy].includes(this.status)||(this.finishDeal(),this.status=types_1.TrajectoryStatus.End))},t.prototype.destroy=function(){var t;this.status===types_1.TrajectoryStatus.Destroy||(t=this.context)&&(this.finishDeal(),t.clear(),this.status=types_1.TrajectoryStatus.Destroy,t.removeTrajectoryById(this.id))},t.prototype.getId=function(){return this.id},t.prototype.getStatus=function(){return this.status},t.prototype.drawHistory=function(){var t=this.status;if(types_1.TrajectoryStatus.Init===t?this.drawPosition():types_1.TrajectoryStatus.End===t&&this.drawTrajectory(),[types_1.TrajectoryStatus.Pause,types_1.TrajectoryStatus.Running].includes(t)){this.drawPosition();for(var e=1;e<this.bout;e++)this.loopBout(e)}},t}();exports.default=Trajectory;
//# sourceMappingURL=Trajectory.js.map
