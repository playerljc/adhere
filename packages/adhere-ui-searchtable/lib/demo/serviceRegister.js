"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),serviceregister_1=tslib_1.__importDefault(require("@ctsj/state/lib/middleware/saga/serviceregister"));function serviceRegister(){var i=require.context("./service",!1,/.*\.(js)$/),t={};i.keys().forEach(function(e){var r=e.substring(2,e.length-3);t[r]=i(e)}),serviceregister_1.default.initConfig(t)}serviceRegister();
//# sourceMappingURL=serviceRegister.js.map
