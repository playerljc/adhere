export default{rgbRandom:function(){return"("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"},color16Random:function(){var o=Math.floor(256*Math.random()),r=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"#"+o.toString(16)+r.toString(16)+t.toString(16)},colorToRgb:function(o){for(var r=o.replace(/^#*/,""),t=(3===r.length&&(r=Array.from(r).reduce(function(o,r){return o.push(""+r,""+r),o},[]).join()),[]),n=0;n<r.length;n+=2)t.push(parseInt(""+r[n]+r[n+1],16));return t},rgbToColor:function(o,r,t){return""+o.toString(16)+r.toString(16)+t.toString(16)}};
//# sourceMappingURL=color.js.map
