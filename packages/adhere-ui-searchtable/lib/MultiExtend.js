"use strict";var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},lodash_clonedeep_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("lodash.clonedeep")));function MultiExtendFactory(t,n,u,o,e){__extends(c,i=t);var i,r=c;function c(o){var e=i.call(this,o)||this,r=[];return n.forEach(function(t){t.call(e,o),r.push((0,lodash_clonedeep_1.default)(e))}),u.call(e,r),e}n.forEach(function(t){for(var o in t.prototype)o in r.prototype||(r.prototype[o]=t.prototype[o])});var p,a=o();for(p in a)r.prototype[p]=a[p];var l,f=e();for(l in f)r[l]=f[l];return r}exports.default=MultiExtendFactory;
//# sourceMappingURL=MultiExtend.js.map
