export default{getDrawStartPath:function(t){for(var a=t.startCount,h=360/a,r=90-h,n=h-r,s=t.center,u=t.outRadius,M=t.innerRadius,e=[],o=0;o<a;o++)e.push({x:Math.cos((r+o*h)/180*Math.PI)*u+s.x,y:-Math.sin((r+o*h)/180*Math.PI)*u+s.y}),e.push({x:Math.cos((n+o*h)/180*Math.PI)*M+s.x,y:-Math.sin((n+o*h)/180*Math.PI)*M+s.y});return e}};
//# sourceMappingURL=geometry.js.map
