"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var react_1=require("react");function useSetState(e){var e=(0,react_1.useState)(e),t=e[0],r=e[1],u=(0,react_1.useRef)();return(0,react_1.useLayoutEffect)(function(){var e;null!=(e=null==u?void 0:u.current)&&e.call(u)},[t]),[t,function(e,t){u.current=t,r(e)}]}exports.default=useSetState;
//# sourceMappingURL=useSetState.js.map
