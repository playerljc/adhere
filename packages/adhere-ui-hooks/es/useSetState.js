import{useState,useLayoutEffect,useRef}from"react";function useSetState(e){var t=useState(e),e=t[0],u=t[1],r=useRef();return useLayoutEffect(function(){var e;null!==(e=null==r?void 0:r.current)&&void 0!==e&&e.call(r)},[e]),[e,function(e,t){r.current=t,u(e)}]}export default useSetState;
//# sourceMappingURL=useSetState.js.map
