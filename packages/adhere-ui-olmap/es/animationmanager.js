var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};import algebra from"algebra.js";import{fromLonLat}from"ol/proj.js";import{v1}from"uuid";import Util from"./util";var AnimationManager=function(){function AnimationManager(t,n){this.runing=!1,this.vectorSource=t,this.animationMap=[],this.preAnimations=[],this.config=n}return AnimationManager.prototype.isRun=function(){return this.runing},AnimationManager.prototype.getPoints=function(locations){console.log("locations",locations);var distance=0,addPoints=[];this.animationMap=[];for(var i=locations.length-1;1<=i;i--){var startPoint=fromLonLat(locations[i]),endPoint=fromLonLat(locations[i-1]),xDistance=Math.abs(startPoint[0]-endPoint[0]);distance+=xDistance}var speed=Math.floor(distance/(80*locations.length));0===speed&&(speed=.01),this.animationMap[0]=locations.length-1;for(var i=locations.length-1;1<=i;i--){var startPoint=fromLonLat(locations[i]),endPoint=fromLonLat(locations[i-1]),xDirection=startPoint[0]<endPoint[0]?"->":"<-",yDirection=startPoint[1]<endPoint[1]?"->":"<-";if(startPoint[0]!==endPoint[0]||startPoint[1]!==endPoint[1]){if(startPoint[0]===endPoint[0]&&startPoint[1]!==endPoint[1]){var xdistance=Math.abs(startPoint[1]-endPoint[1]),interval=Math.floor(xdistance/speed);0<xdistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=startPoint[0],y=void 0;"->"===yDirection?y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]+j*speed:"<-"===yDirection&&(y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]-j*speed),addPoints.push([x,y])}}else if(startPoint[0]!==endPoint[0]&&startPoint[1]===endPoint[1]){var xDistance=Math.abs(startPoint[0]-endPoint[0]),interval=Math.floor(xDistance/speed);0<xDistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=void 0,y=startPoint[1];"->"===xDirection?xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]+j*speed:"<-"===xDirection&&(xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]-j*speed),addPoints.push([x,y])}}else for(var time=150,xDistance=Math.abs(startPoint[0]-endPoint[0]),speed=xDistance/time,interval=Math.floor(xDistance/speed),Equation=(0<xDistance%speed&&(interval+=1),algebra.Equation),x1=algebra.parse(startPoint[1]+"="+startPoint[0]+"k+b"),answer1=x1.solveFor("k"),x2=algebra.parse(endPoint[1]+"="+endPoint[0]+"k+b"),answer2=x2.solveFor("k"),eq=new Equation(answer1,answer2),answerX=eq.solveFor("b"),eq=x1.eval({b:answerX}),answerY=eq.solveFor("k"),b=eval(answerX.toString()),k=eval(answerY.toString()),j=1;j<=interval;j++){var x=void 0,y=void 0;"->"===xDirection?y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]+j*speed,k*x+b):"<-"===xDirection&&(y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]-j*speed,k*x+b)),addPoints.push([x,y])}this.animationMap[addPoints.length-1]=i-1}}return addPoints},AnimationManager.prototype.run=function(t,n){var e=this;if(!t||this.runing)return!1;this.runing=!0,this.pointsMapIndex=n;n=t.values();this.loopTask(n).then(function(){e.runing=!1,console.log("finish")})},AnimationManager.prototype.loopTask=function(i){var o=this;return new Promise(function(t,n){var e=i.next();e.done?t():(e=e.value,e=o.getPoints(e),o.runTask(e).then(function(){o.loopTask(i).then(function(){t()})}).catch(function(t){n(t)}))})},AnimationManager.prototype.runTask=function(c){var t=this;return this.preActiveId="",new Promise(function(a){var r=t;if(!c.length)return a(),!1;var s=0;t.pref=null,t.lines=[],t.handler=null,r.handler=requestAnimationFrame(function t(){if(s===c.length)return r.stopTask(),r.preAnimations&&(r.preAnimations.forEach(function(t){r.vectorSource.removeFeature(t)}),r.preAnimations=[]),a(),!1;r.pref&&r.vectorSource.removeFeature(r.pref);var n,e=c[s],i=0,o=(0!==s&&(n=Util.drawLine({points:[c[s-1],c[s]],width:r.config.lineWidth,color:r.config.lineColor}),r.vectorSource.addFeature(n),r.lines.push(n),n=c[s-1],o=e[0]-n[0],n=e[1]-n[1],i=Math.atan2(n,o)),!r.animationMap[s]&&0!==r.animationMap[s]||(r.preActiveId&&(n=r.vectorSource.getFeatureById(r.preActiveId),r.vectorSource.removeFeature(n),r.preActiveId=""),(o=r.pointsMapIndex[r.animationMap[s]])&&(n="active_"+o.id,o=Util.drawImagePoint(__assign(__assign({},o),{id:n,src:r.config.pointImg,zIndex:o.zIndex+10})),r.vectorSource.addFeature(o),r.preActiveId=n)),Util.drawImagePoint({id:v1(),pos:e,src:r.config.arrowImg,scale:1,zIndex:1e3,rotation:-i}));r.vectorSource.addFeature(o),r.pref=o,++s,r.handler=requestAnimationFrame(t)})})},AnimationManager.prototype.stopTask=function(){if(!this.runing)return!1;if(this.handler&&cancelAnimationFrame(this.handler),this.pref&&this.vectorSource.removeFeature(this.pref),this.lines)for(var t=0;t<this.lines.length;t++)this.vectorSource.removeFeature(this.lines[t]);var n;this.preActiveId&&(n=this.vectorSource.getFeatureById(this.preActiveId),this.vectorSource.removeFeature(n),this.preActiveId="")},AnimationManager.prototype.stop=function(){this.stopTask(),this.runing=!1},AnimationManager}();export default AnimationManager;
//# sourceMappingURL=animationmanager.js.map
