var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var l in t=arguments[e])Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l]);return n}).apply(this,arguments)};import classNames from"classnames";import debounce from"lodash.debounce";import React,{forwardRef,memo,useImperativeHandle,useLayoutEffect,useRef}from"react";import Util from"@baifendian/adhere-util";import{ResizeObserver}from"@juggle/resize-observer";import Signature from"./signature";import{Mode}from"./types";var selectorPrefix="adhere-ui-writing-board",InternalWritingBoard=memo(forwardRef(function(n,t){var e=n.defaultMode,e=void 0===e?Mode.FREE:e,r=n.defaultLineWidth,r=void 0===r?2:r,l=n.defaultStrokeStyle,l=void 0===l?"#000":l,u=n.resizeTime,i=void 0===u?300:u,o=useRef(null),v=useRef(null),s=useRef(null),c=useRef(null),d=useRef(null),a=useRef(null),h=useRef(e),g=useRef(r),f=useRef(l),y=useRef([]),P=useRef(0),m=useRef(new Map([[Mode.FREE,{draw:function(n){var t,e=n.sourcePoint,n=n.targetPoint;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.moveTo(e.x,e.y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.x,n.y),y.current.push({shape:h.current,sourcePoint:e,targetPoint:n}),p({lineWidth:null==g?void 0:g.current,strokeStyle:null==f?void 0:f.current}),null!=(t=null==s?void 0:s.current)&&t.stroke()},drawStack:function(n){var t;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.moveTo(n.sourcePoint.x,n.sourcePoint.y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.targetPoint.x,n.targetPoint.y),p({lineWidth:n.lineWidth,strokeStyle:n.strokeStyle}),null!=(t=null==s?void 0:s.current)&&t.stroke()},mouseup:function(n){W({sourcePoint:a.current,targetPoint:n})}}],[Mode.LINE,{draw:function(n){var t,n=n.targetPoint;null!=(t=null==s?void 0:s.current)&&t.clearRect(0,0,null==(t=null==v?void 0:v.current)?void 0:t.width,null==(t=null==v?void 0:v.current)?void 0:t.height),R(),null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.moveTo(null==(t=null==d?void 0:d.current)?void 0:t.x,null==(t=null==d?void 0:d.current)?void 0:t.y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.x,n.y),p({lineWidth:null==g?void 0:g.current,strokeStyle:null==f?void 0:f.current}),null!=(t=null==s?void 0:s.current)&&t.stroke()},drawStack:function(n){var t;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.moveTo(n.sourcePoint.x,n.sourcePoint.y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.targetPoint.x,n.targetPoint.y),p({lineWidth:n.lineWidth,strokeStyle:n.strokeStyle}),null!=(t=null==s?void 0:s.current)&&t.stroke()},mouseup:function(n){var t;y.current.push({shape:h.current,lineWidth:null==(t=null==s?void 0:s.current)?void 0:t.lineWidth,strokeStyle:null==(t=null==s?void 0:s.current)?void 0:t.strokeStyle,sourcePoint:d.current,targetPoint:n})}}],[Mode.RECTANGLE,{draw:function(n){var t,n=n.targetPoint,e=(null!=(e=null==s?void 0:s.current)&&e.clearRect(0,0,null==(e=null==v?void 0:v.current)?void 0:e.width,null==(e=null==v?void 0:v.current)?void 0:e.height),R(),null!=(e=null==s?void 0:s.current)&&e.beginPath(),w({startPoint:d.current,targetPoint:n}));null!=(t=null==s?void 0:s.current)&&t.rect(e.x,e.y,Math.abs(n.x-(null==(t=null==d?void 0:d.current)?void 0:t.x)),Math.abs(n.y-(null==(e=null==d?void 0:d.current)?void 0:e.y))),p({lineWidth:null==g?void 0:g.current,strokeStyle:null==f?void 0:f.current}),null!=(t=null==s?void 0:s.current)&&t.stroke()},drawStack:function(n){var t;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.rect(n.x,n.y,n.width,n.height),p({lineWidth:n.lineWidth,strokeStyle:n.strokeStyle}),null!=(t=null==s?void 0:s.current)&&t.stroke()},mouseup:function(n){var t,e=w({startPoint:d.current,targetPoint:n});y.current.push({shape:h.current,lineWidth:null==(t=null==s?void 0:s.current)?void 0:t.lineWidth,strokeStyle:null==(t=null==s?void 0:s.current)?void 0:t.strokeStyle,x:e.x,y:e.y,width:Math.abs(n.x-(null==(t=null==d?void 0:d.current)?void 0:t.x)),height:Math.abs(n.y-(null==(e=null==d?void 0:d.current)?void 0:e.y))})}}],[Mode.CIRCLE,{draw:function(n){var t,n=n.targetPoint,e=(null!=(e=null==s?void 0:s.current)&&e.clearRect(0,0,null==(e=null==v?void 0:v.current)?void 0:e.width,null==(e=null==v?void 0:v.current)?void 0:e.height),R(),null!=(e=null==s?void 0:s.current)&&e.beginPath(),w({startPoint:d.current,targetPoint:n})),n=S({p2:n,p1:d.current});null!=(t=null==s?void 0:s.current)&&t.ellipse(e.x,e.y,n,n,45*Math.PI/180,0,2*Math.PI),p({lineWidth:null==g?void 0:g.current,strokeStyle:null==f?void 0:f.current}),null!=(t=null==s?void 0:s.current)&&t.stroke()},drawStack:function(n){var t;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.ellipse(n.x,n.y,n.radiusX,n.radiusY,n.rotation,n.startAngle,n.endAngle),p({lineWidth:n.lineWidth,strokeStyle:n.strokeStyle}),null!=(t=null==s?void 0:s.current)&&t.stroke()},mouseup:function(n){var t,e=w({startPoint:d.current,targetPoint:n}),n=S({p2:n,p1:null==d?void 0:d.current});y.current.push({shape:h.current,lineWidth:null==(t=null==s?void 0:s.current)?void 0:t.lineWidth,strokeStyle:null==(t=null==s?void 0:s.current)?void 0:t.strokeStyle,x:e.x,y:e.y,radiusX:n,radiusY:n,rotation:45*Math.PI/180,startAngle:0,endAngle:2*Math.PI})}}],[Mode.TRIANGLE,{draw:function(n){var n=n.targetPoint,t=(null!=(t=null==s?void 0:s.current)&&t.clearRect(0,0,null==(t=null==v?void 0:v.current)?void 0:t.width,null==(t=null==v?void 0:v.current)?void 0:t.height),R(),null!=(t=null==s?void 0:s.current)&&t.beginPath(),x({startPoint:d.current,targetPoint:n}));null!=(n=null==s?void 0:s.current)&&n.moveTo(t[0].x,t[0].y),null!=(n=null==s?void 0:s.current)&&n.lineTo(t[1].x,t[1].y),null!=(n=null==s?void 0:s.current)&&n.lineTo(t[2].x,t[2].y),null!=(n=null==s?void 0:s.current)&&n.closePath(),p({lineWidth:null==g?void 0:g.current,strokeStyle:null==f?void 0:f.current}),null!=(t=null==s?void 0:s.current)&&t.stroke()},drawStack:function(n){var t;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.moveTo(n.points[0].x,n.points[0].y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.points[1].x,n.points[1].y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.points[2].x,n.points[2].y),null!=(t=null==s?void 0:s.current)&&t.closePath(),p({lineWidth:n.lineWidth,strokeStyle:n.strokeStyle}),null!=(t=null==s?void 0:s.current)&&t.stroke()},mouseup:function(n){var t,n=x({startPoint:d.current,targetPoint:n});y.current.push({shape:h.current,lineWidth:null==(t=null==s?void 0:s.current)?void 0:t.lineWidth,strokeStyle:null==(t=null==s?void 0:s.current)?void 0:t.strokeStyle,points:n})}}],[Mode.RUBBER,{draw:function(n){var t,e=n.sourcePoint,n=n.targetPoint;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.moveTo(e.x,e.y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.x,n.y),y.current.push({shape:h.current,sourcePoint:e,targetPoint:n}),s.current.lineWidth=15,s.current.strokeStyle="#fff",s.current.lineCap="round",s.current.lineJoin="round",null!=(t=null==s?void 0:s.current)&&t.stroke()},drawStack:function(n){var t;null!=(t=null==s?void 0:s.current)&&t.beginPath(),null!=(t=null==s?void 0:s.current)&&t.moveTo(n.sourcePoint.x,n.sourcePoint.y),null!=(t=null==s?void 0:s.current)&&t.lineTo(n.targetPoint.x,n.targetPoint.y),s.current.lineWidth=15,s.current.strokeStyle="#fff",s.current.lineCap="round",s.current.lineJoin="round",null!=(t=null==s?void 0:s.current)&&t.stroke()},mouseup:function(n){W({sourcePoint:a.current,targetPoint:n})}}]]));function p(n){var t=n.lineWidth,n=n.strokeStyle;s.current.lineWidth=t,s.current.strokeStyle=n,s.current.lineCap="round",s.current.lineJoin="round"}function x(n){var t=n.startPoint,n=n.targetPoint,e=w({startPoint:t,targetPoint:n}),r=Math.abs(n.x-t.x),n=Math.abs(n.y-t.y);return[{x:e.x,y:e.y+n},{x:e.x+r/2,y:e.y},{x:e.x+r,y:e.y+n}]}function k(n){var t=n.clientX,n=n.clientY,e=null==(e=null==v?void 0:v.current)?void 0:e.getBoundingClientRect();return{x:t-e.x,y:n-e.y}}function S(n){var t=n.p1,n=n.p2,e=t.x,t=t.y,r=n.x,n=n.y;return Math.sqrt(Math.pow(r-e,2)+Math.pow(n-t,2))}function R(){for(var n=0;n<y.current.length;n++){var t=y.current[n];m.current.get(t.shape).drawStack(t)}}function w(n){var t=n.startPoint,n=n.targetPoint;return n.x<=t.x&&n.y<=t.y?n:n.x<=t.x&&n.y>=t.y?{x:n.x,y:t.y}:n.x>=t.x&&n.y<=t.y?{x:t.x,y:n.y}:n.x>=t.x&&n.y>=t.y?t:void 0}function W(n){var t,e=n.sourcePoint,n=n.targetPoint;(null==(t=null==m?void 0:m.current)?void 0:t.get(h.current)).draw({sourcePoint:e,targetPoint:n})}function b(n){_(n)}function E(n){_(__assign(__assign({},n),{clientX:n.targetTouches[0].clientX,clientY:n.targetTouches[0].clientY}))}function T(n){I(n)}function L(n){I(__assign(__assign({},n),{clientX:n.changedTouches[0].clientX,clientY:n.changedTouches[0].clientY}))}function M(n){var t=n.clientX,n=n.clientY;d.current=a.current=k({clientX:t,clientY:n}),null!=(t=null==o?void 0:o.current)&&t.addEventListener("mousemove",b),null!=(n=null==o?void 0:o.current)&&n.addEventListener("mouseup",T),null!=(t=null==o?void 0:o.current)&&t.addEventListener("touchmove",E),null!=(n=null==o?void 0:o.current)&&n.addEventListener("touchend",L)}function _(n){n=k({clientX:n.clientX,clientY:n.clientY});W({sourcePoint:a.current,targetPoint:n}),a.current=n}function I(n){var t,n=k({clientX:n.clientX,clientY:n.clientY});null!=(t=null==m?void 0:m.current.get(h.current))&&t.mouseup(n),d.current=null,(a.current=null)!=(t=null==o?void 0:o.current)&&t.removeEventListener("mousemove",b),null!=(n=null==o?void 0:o.current)&&n.removeEventListener("mouseup",T),null!=(t=null==o?void 0:o.current)&&t.removeEventListener("touchmove",E),null!=(n=null==o?void 0:o.current)&&n.removeEventListener("touchend",L)}function X(){var n;null!=(n=null==s?void 0:s.current)&&n.clearRect(0,0,null==(n=null==v?void 0:v.current)?void 0:n.width,null==(n=null==v?void 0:v.current)?void 0:n.height),a.current=d.current=null,y.current=[],P.current=0}function Y(n,t,e){var r,l;if(n){for(var n=Util.colorToRgb(n),u=n[0],i=n[1],o=n[2],c=[],d=null==(n=null==s?void 0:s.current)?void 0:n.getImageData(0,0,null==(n=null==v?void 0:v.current)?void 0:n.width,null==(n=null==v?void 0:v.current)?void 0:n.height),a=0;a<(null==(r=null==d?void 0:d.data)?void 0:r.length);a+=4)0===d.data[a+3]&&(d.data[a]=u,d.data[a+1]=i,d.data[a+2]=o,d.data[a+3]=255,c.push(a),c.push(a+1),c.push(a+2),c.push(a+3));null!=(n=null==s?void 0:s.current)&&n.putImageData(d,0,0);n=null==(n=null==v?void 0:v.current)?void 0:n.toDataURL(t||"image/png",e),d=null==(l=null==s?void 0:s.current)?void 0:l.getImageData(0,0,null==(l=null==v?void 0:v.current)?void 0:l.width,null==(l=null==v?void 0:v.current)?void 0:l.height);return c.forEach(function(n){d.data[n]=0}),null!=(l=null==s?void 0:s.current)&&l.putImageData(d,0,0),n}return null==(l=null==v?void 0:v.current)?void 0:l.toDataURL(t||"image/png",e)}function B(){var n,t=null==(n=null==s?void 0:s.current)?void 0:n.getImageData(0,0,null==(n=null==v?void 0:v.current)?void 0:n.width,null==(n=null==v?void 0:v.current)?void 0:n.height);return!t.data.length||!t.data.some(function(n){return n!==t.data[0]})}return useImperativeHandle(t,function(){return{setMode:function(n){h.current=n},setStrokeStyle:function(n){f.current=n},setLineWidth:function(n){g.current=n},clear:X,toDataURL:Y,isEmpty:B}}),useLayoutEffect(function(){s.current=null==(t=null==v?void 0:v.current)?void 0:t.getContext("2d");var n,t=debounce(function(){var n;v.current.width=null==(n=null==o?void 0:o.current)?void 0:n.offsetWidth,v.current.height=null==(n=null==o?void 0:o.current)?void 0:n.offsetHeight,null!=(n=null==s?void 0:s.current)&&n.clearRect(0,0,null==(n=null==v?void 0:v.current)?void 0:n.width,null==(n=null==v?void 0:v.current)?void 0:n.height),R()},i);return c.current=new ResizeObserver(t),null!=(n=null==(t=null==c?void 0:c.current)?void 0:t.observe)&&n.call(t,document.body),function(){var n;return null==(n=null==c?void 0:c.current)?void 0:n.disconnect()}},[]),useLayoutEffect(function(){var n;function t(n){M(n)}function e(n){M(__assign(__assign({},n),{clientX:n.targetTouches[0].clientX,clientY:n.targetTouches[0].clientY}))}return null!=(n=null==o?void 0:o.current)&&n.addEventListener("mousedown",t),null!=(n=null==o?void 0:o.current)&&n.addEventListener("touchstart",e),function(){var n;null!=(n=null==o?void 0:o.current)&&n.removeEventListener("mousedown",t),null!=(n=null==o?void 0:o.current)&&n.removeEventListener("touchstart",e)}},[]),React.createElement("div",{ref:o,className:classNames(selectorPrefix,null!=(u=n.className)?u:""),style:null!=(e=n.style)?e:{}},React.createElement("canvas",{ref:v}))})),WritingBoard=InternalWritingBoard;WritingBoard.Signature=Signature;export default WritingBoard;
//# sourceMappingURL=WritingBoard.js.map
