"use strict";var __extends=this&&this.__extends||function(){var o=function(t,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},events_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("events"))),Domain=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return __extends(r,t),r.prototype.emitError=function(t){this.emit("error",t)},r.prototype.add=function(t){t.on("error",this.emitError)},r.prototype.bind=function(r){var e=this;return function(){var t=Array.prototype.slice.call(arguments);try{r.apply(null,t)}catch(t){e.emitError(t)}}},r.prototype.dispose=function(){return this.removeAllListeners(),this},r.prototype.enter=function(){return this},r.prototype.exit=function(){return this},r.prototype.intercept=function(e){var o=this;return function(t){if(t)o.emitError(t);else{var r=Array.prototype.slice.call(arguments,1);try{e.apply(null,r)}catch(t){o.emitError(t)}}}},r.prototype.remove=function(t){t.removeListener("error",this.emitError)},r.prototype.run=function(t){try{t()}catch(t){this.emitError(t)}return this},r}(events_1.default);exports.default={createDomain:function(){return new Domain},create:function(){return new Domain}};
//# sourceMappingURL=domain.js.map
