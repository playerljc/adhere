export default function Aop(e,l){return function(t,a,n){var c=n.value;return n.value=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=null;try{var o=!0;(o=e&&"function"==typeof e?!1!==e.call(this):o)&&(r=c.apply(this,t)),l&&"function"==typeof l&&l.call(this)}catch(t){console.error("AOP装饰器执行出错 [".concat(String(a),"]:"),t)}return r},n}}
//# sourceMappingURL=ReactAop.js.map
