var __extends=this&&this.__extends||function(){var a=function(t,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){function e(){this.constructor=t}a(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),BMapAirPressureLayer=function(a){function t(t){var n=this;n.update=n.update.bind(n),(n=a.call(this,{update:n.update,paneName:t.paneName,zIndex:t.zIndex})||this).map=null,n.data=null;var e=(n.config=t).map,t=t.data;return n.map=e,n.data=t,n}return __extends(t,a),t.prototype.update=function(){var e=this;if(this.canvas){var a=(null==this?void 0:this.canvas).getContext("2d");if(a){a.clearRect(0,0,a.canvas.width,a.canvas.height);for(var t=this.config,o=t.data,r=t.style,n=0;n<o.length;n++)!function(t){var t=o[t],n=[];t.forEach(function(t){n.push(new BMap.Point(t.lng,t.lat))}),a.beginPath(),a.strokeStyle=r.strokeStyle,a.lineJoin=r.lineJoin,a.lineWidth=r.lineWidth,n.forEach(function(t,n){t=e.map.pointToPixel(t);0===n?a.moveTo(t.x,t.y):a.lineTo(t.x,t.y)}),a.stroke()}(n)}}},t}(BMap.CanvasLayer);export default BMapAirPressureLayer;
//# sourceMappingURL=airpressurelayer.js.map
