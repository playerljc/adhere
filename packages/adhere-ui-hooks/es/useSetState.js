import{useLayoutEffect,useRef}from"react";import useLatestState from"./useLatestState";function useSetState(t){var t=useLatestState(t),e=t[0],u=t[1],r=useRef();return useLayoutEffect(function(){var t;null!=(t=null==r?void 0:r.current)&&t.call(r)},[e.current]),[e,function(t,e){r.current=e,u(t)}]}export default useSetState;
//# sourceMappingURL=useSetState.js.map
