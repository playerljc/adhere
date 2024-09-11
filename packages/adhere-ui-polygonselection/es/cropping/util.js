var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var a,e=1,n=arguments.length;e<n;e++)for(var i in a=arguments[e])Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);return t}).apply(this,arguments)};import{SelectType}from"../types";function drawCircle(t,a){var e;null!=t&&t.beginPath(),null!=t&&t.ellipse((null==(e=a.data.center)?void 0:e.x)||0,(null==(e=a.data.center)?void 0:e.y)||0,a.data.radius,a.data.radius,45*Math.PI/180,0,2*Math.PI),null!=t&&t.closePath()}function getCircleRectangle(t){return getSelfRectangle({leftTopPoint:{x:t.center.x-t.radius,y:t.center.y-t.radius},width:2*t.radius,height:2*t.radius})}function drawRectangle(t,a){var e;null!=t&&t.beginPath(),t.rect((null==(e=a.data.leftTopPoint)?void 0:e.x)||0,(null==(e=a.data.leftTopPoint)?void 0:e.y)||0,a.data.width,a.data.height),null!=t&&t.closePath()}function getSelfRectangle(t){return __assign({},t)}function drawDiamond(t,a){null!=t&&t.beginPath();var e=a.data.width/2,n=a.data.height/2;t.moveTo(a.data.leftTopPoint.x,a.data.leftTopPoint.y+n),t.lineTo(a.data.leftTopPoint.x+e,a.data.leftTopPoint.y),t.lineTo(a.data.leftTopPoint.x+a.data.width,a.data.leftTopPoint.y+n),t.lineTo(a.data.leftTopPoint.x+e,a.data.leftTopPoint.y+a.data.height),null!=t&&t.closePath()}function getDiamondRectangle(t){return __assign({},t)}function drawStart(t,a){null!=t&&t.beginPath();for(var e=72,n=0;n<5;n++)t.lineTo(Math.cos((18+n*e)/180*Math.PI)*a.data.outRadius+a.data.center.x,-Math.sin((18+n*e)/180*Math.PI)*a.data.outRadius+a.data.center.y),t.lineTo(Math.cos((54+n*e)/180*Math.PI)*a.data.innerRadius+a.data.center.x,-Math.sin((54+n*e)/180*Math.PI)*a.data.innerRadius+a.data.center.y);null!=t&&t.closePath()}function getStartRectangle(t){return getCircleRectangle({center:t.center,radius:t.outRadius})}function drawTriangle(t,a){null!=t&&t.beginPath(),t.moveTo(a.data.points[0].x,a.data.points[0].y),t.lineTo(a.data.points[1].x,a.data.points[1].y),t.lineTo(a.data.points[2].x,a.data.points[2].y),null!=t&&t.closePath()}function getTriangleRectangle(t){return getSelfRectangle({leftTopPoint:{x:t.points[0].x,y:t.points[1].y},width:t.points[2].x-t.points[0].x,height:t.points[2].y-t.points[1].y})}function drawPolygon(e,t){e.beginPath(),((null==t?void 0:t.data)||[]).forEach(function(t,a){0===a?e.moveTo(t.x,t.y):e.lineTo(t.x,t.y)}),null!=e&&e.closePath()}function getPolygonRectangle(t){var a=t.map(function(t){return t.x}),t=t.map(function(t){return t.y}),a={minX:Math.min.apply(Math,a),maxX:Math.max.apply(Math,a)},e=a.minX,a=a.maxX,t={minY:Math.min.apply(Math,t),maxY:Math.max.apply(Math,t)},n=t.minY;return{leftTopPoint:{x:e,y:n},width:a-e,height:t.maxY-n}}function getClipDataUrl(t){var a=t.data,t=t.clipCtx,e=null==(e=new Map([[SelectType.Circle,getCircleRectangle],[SelectType.Rectangle,getSelfRectangle],[SelectType.Diamond,getDiamondRectangle],[SelectType.Start,getStartRectangle],[SelectType.Triangle,getTriangleRectangle],[SelectType.Polygon,getPolygonRectangle]]).get(a.data.type))?void 0:e(a.data.data),a=t.getImageData(e.leftTopPoint.x,e.leftTopPoint.y,e.width,e.height),t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").putImageData(a,0,0),t.toDataURL("image/png",1)}function sort(t){var e=Array.from({length:t.length}).fill(null),n=[];return t.forEach(function(t,a){"sort"in t?n.push(t):e[a]=t}),n.forEach(function(t){e.splice(t.sort,0,t)}),e.filter(function(t){return!!t})}export{drawCircle,getCircleRectangle,drawRectangle,getSelfRectangle,drawDiamond,getDiamondRectangle,drawStart,getStartRectangle,drawTriangle,getTriangleRectangle,drawPolygon,getPolygonRectangle,getClipDataUrl,sort};
//# sourceMappingURL=Util.js.map
