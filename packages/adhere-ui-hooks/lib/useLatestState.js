"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ahooks_1=require("ahooks"),react_1=require("react");function useLatestState(e){var e=(0,react_1.useState)(e),t=e[0],e=e[1];return[(0,ahooks_1.useLatest)(t),e]}exports.default=useLatestState;
//# sourceMappingURL=useLatestState.js.map
