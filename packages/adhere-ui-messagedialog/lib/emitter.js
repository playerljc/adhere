"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/es.array.find-index.js"),require("core-js/modules/es.array.splice.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js");var events={},_default={on:function(e,r){events[e]||(events[e]={handlers:[]}),events[e].handlers.push(r)},remove:function(e,r){var s;!events[e]||-1!==(s=events[e].handlers.findIndex(function(e){return e===r}))&&events[e].handlers.splice(s,1)},trigger:function(e){for(var r,s=[],n=1;n<arguments.length;n++)s[n-1]=arguments[n];return events[e]&&events[e].handlers.forEach(function(e){r=e.apply(void 0,s)}),r}};exports.default=_default;
//# sourceMappingURL=emitter.js.map
