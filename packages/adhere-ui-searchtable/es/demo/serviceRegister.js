import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import ServiceRegister from"@ctsj/state/lib/middleware/saga/serviceregister";function serviceRegister(){var s=require.context("./service",!1,/.*\.(js)$/),i={};s.keys().forEach(function(e){var r=e.substring(2,e.length-3);i[r]=s(e)}),ServiceRegister.initConfig(i)}serviceRegister();
//# sourceMappingURL=serviceRegister.js.map
