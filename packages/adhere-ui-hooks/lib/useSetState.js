"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var react_1=require("react");exports.default=function(e){var t=react_1.useState(e),e=t[0],r=t[1],u=react_1.useRef();return react_1.useLayoutEffect(function(){var e;null!==(e=null==u?void 0:u.current)&&void 0!==e&&e.call(u)},[e]),[e,function(e,t){u.current=t,r(e)}]};
//# sourceMappingURL=useSetState.js.map
