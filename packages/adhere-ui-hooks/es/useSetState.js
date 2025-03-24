import{useLayoutEffect,useRef}from"react";import useLatestState from"./useLatestState";function useSetState(t){let[e,u]=useLatestState(t),r=useRef();return useLayoutEffect(()=>{r?.current?.()},[e.current]),[e,(t,e)=>{r.current=e,u(t)}]}export default useSetState;
//# sourceMappingURL=useSetState.js.map
