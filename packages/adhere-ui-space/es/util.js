function getValue(e,t,r){return e?createPxReplace(t,r,5,0):"".concat(r,"px")}function createPxReplace(e,t,r,a){return t<a?t:0===(a=toFixed(t/e,r))?"0":a+"rem"}function toFixed(e,t){t=Math.pow(10,t+1),e=Math.floor(e*t);return 10*Math.round(e/10)/t}export{getValue,createPxReplace,toFixed};
//# sourceMappingURL=util.js.map
