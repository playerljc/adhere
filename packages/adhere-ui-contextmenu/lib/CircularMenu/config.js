"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},index_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("./Creator/index"))),extend_1=__importDefault(require("./extend")),defaultConfig={totalAngle:360,spaceDeg:0,background:"#323232",backgroundHover:"#515151",pageBackground:"transparent",percent:.32,diameter:300,position:"top",horizontal:!0,animation:"into",hideAfterClick:!0};function default_1(e){return e=(0,extend_1.default)(defaultConfig,e),this._creator=new index_1.default(this,e),this._creator.createMenu(),this}exports.default=default_1;
//# sourceMappingURL=config.js.map