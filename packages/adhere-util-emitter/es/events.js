var Events=function(){function t(){this.events={}}return t.prototype.remove=function(t,n){var e;!this.hasType(t)||-1!==(e=this.events[t].handlers.findIndex(function(t){return t===n}))&&this.events[t].handlers.splice(e,1)},t.prototype.hasType=function(t){return t in this.events},t.prototype.clear=function(t){this.hasType(t)&&(this.events[t].handlers=[])},t.prototype.clearAll=function(){this.events={}},t.prototype.on=function(t,n,e){void 0===e&&(e=200),this.hasType(t)||(this.events[t]={handlers:[]});var o,r=this.events[t].handlers;r.length===e&&r.shift(),r.length>e&&(o=r.length,this.events[t].handlers=r.slice(o-e+1)),r.push(n)},t.prototype.once=function(t,n){var e=this;this.hasType(t)||(this.events[t]={handlers:[]}),this.events[t].handlers=[function(){n&&n(),e.clear(t)}]},t.prototype.all=function(t,o){var r=this,s=[];return t.forEach(function(t){function n(){s.find(function(t){return t.key===e}).status=!0,s.every(function(t){return t.status})&&o&&(s=s.map(function(t){return{key:t.key,fn:t.fn,status:!1}}),o())}var e=Symbol.for(t);s.push({key:e,status:!1,fn:n}),r.on(e,n)}),function(){s.forEach(function(t){r.remove(t.key,t.fn)})}},t.prototype.race=function(t,o){var r=this,s=[];return t.forEach(function(t){function n(){s.find(function(t){return t.key===e}).status=!0,s.some(function(t){return t.status})&&o&&(s=s.map(function(t){return{key:t.key,fn:t.fn,status:!1}}),o())}var e=Symbol.for(t);s.push({key:e,status:!1,fn:n}),r.on(e,n)}),function(){s.forEach(function(t){r.remove(t.key,t.fn)})}},t.prototype.count=function(t,n,e){function o(){(s+=1)===n&&(e&&e(),s=0)}var r=this,s=0,i=Symbol.for(t);return this.on(i,o),function(){r.remove(i,o)}},t.prototype.trigger=function(n){for(var e,o=this,r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return this.hasType(n)&&this.events[n].handlers.forEach(function(t){e=t.apply(void 0,r),"string"==typeof n&&o.trigger(Symbol.for(n))}),e},t.prototype.dispatchEvent=function(t,n,e){void 0===t&&(t=document);e=new CustomEvent(n,e);t.dispatchEvent(e)},t}();export default Events;
//# sourceMappingURL=events.js.map