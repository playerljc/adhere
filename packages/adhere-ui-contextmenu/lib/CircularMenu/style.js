"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},window_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("./window")));function styleRemove(t){this.style.removeProperty(t)}function styleConstant(t,e,l){this.style.setProperty(t,e,l)}function styleFunction(t,e,l){e=e.apply(this,arguments);null==e?this.style.removeProperty(t):this.style.setProperty(t,e,l)}function default_1(t,e,l,o){return 1<arguments.length?(null==l?styleRemove:"function"==typeof l?styleFunction:styleConstant).call(t,e,l,null==o?"":o):(0,window_1.default)(l=t).getComputedStyle(l,null).getPropertyValue(e)}exports.default=default_1;
//# sourceMappingURL=style.js.map
