"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ahooks_1=require("ahooks"),react_1=require("react");function usePropToState(e){var t=(0,react_1.useState)(e),r=t[0],o=t[1];return(0,ahooks_1.useUpdateEffect)(function(){o(e)},[e]),[r,o]}exports.default=usePropToState;
//# sourceMappingURL=usePropToState.js.map
