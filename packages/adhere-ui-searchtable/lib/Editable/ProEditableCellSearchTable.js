"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchAndPaginParamsMemo=void 0;var tslib_1=require("tslib"),SearchAndPaginParams_1=require("../Extension/SearchAndPaginParams"),ProTableFactory_1=tslib_1.__importDefault(require("../ProTableFactory")),SearchEditableCellTable_1=tslib_1.__importDefault(require("./SearchEditableCellTable"));exports.SearchAndPaginParamsMemo=SearchAndPaginParams_1.MemoManager.create(),exports.default=(0,ProTableFactory_1.default)(SearchEditableCellTable_1.default,exports.SearchAndPaginParamsMemo);
//# sourceMappingURL=ProEditableCellSearchTable.js.map
