"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={getRectLeftTopPoint:function(t){var e=t.startPoint,t=t.targetPoint;return t.x<=e.x&&t.y<=e.y?t:t.x<=e.x&&t.y>=e.y?{x:t.x,y:e.y}:t.x>=e.x&&t.y<=e.y?{x:e.x,y:t.y}:t.x>=e.x&&t.y>=e.y?e:null},triangle:function(t){var e,x=t.startPoint,t=t.targetPoint,y=this.getRectLeftTopPoint({startPoint:x,targetPoint:t});return y?(e=Math.abs(t.x-x.x),t=Math.abs(t.y-x.y),[{x:y.x,y:y.y+t},{x:y.x+e/2,y:y.y},{x:y.x+e,y:y.y+t}]):[]}};
//# sourceMappingURL=Util.js.map
