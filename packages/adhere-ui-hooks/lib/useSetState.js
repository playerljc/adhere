import{useLayoutEffect,useRef,useState}from"react";function useSetState(e){var e=useState(e),t=e[0],u=e[1],r=useRef();return useLayoutEffect(function(){var e;null!=(e=null==r?void 0:r.current)&&e.call(r)},[t]),[t,function(e,t){r.current=t,u(e)}]}export default useSetState;
//# sourceMappingURL=useSetState.js.map
