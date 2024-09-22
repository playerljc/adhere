"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var react_1=require("react");function useLoadedLocks(){var r=(0,react_1.useRef)(new Map);return{lock:function(e){r.current.set(e,!0)},unLock:function(e){r.current.set(e,!1)},isLock:function(e){return!!r.current.get(e)}}}exports.default=useLoadedLocks;
//# sourceMappingURL=useLoadedLocks.js.map
