"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchAndPaginParamsMemo=void 0;var tslib_1=require("tslib"),SearchAndPaginParams_1=require("./Extension/SearchAndPaginParams"),ProTableFactory_1=tslib_1.__importDefault(require("./ProTableFactory")),SearchEditorRowStateTable_1=tslib_1.__importDefault(require("./SearchEditorRowStateTable"));exports.SearchAndPaginParamsMemo=SearchAndPaginParams_1.MemoManager.create(),exports.default=(0,ProTableFactory_1.default)(SearchEditorRowStateTable_1.default,exports.SearchAndPaginParamsMemo);
//# sourceMappingURL=ProEditorRowSearchStateTable.js.map
