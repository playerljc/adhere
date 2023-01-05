import ServiceRegister from"@ctsj/state/lib/middleware/saga/serviceregister";function serviceRegister(){var r=require.context("./service",!1,/.*\.(js)$/),s={};r.keys().forEach(function(e){var i=e.substring(2,e.length-3);s[i]=r(e)}),ServiceRegister.initConfig(s)}serviceRegister();
//# sourceMappingURL=serviceRegister.js.map
