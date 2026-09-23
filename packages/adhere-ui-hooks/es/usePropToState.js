import{useUpdateEffect}from"ahooks";import{useRef,useState}from"react";function usePropToState(e,t){var t=(null!=t?t:{}).isEqual,t=void 0===t?Object.is:t,r=useState(e),u=r[0],o=r[1],f=useRef(e),s=useRef(t);return s.current=t,useUpdateEffect(function(){s.current(f.current,e)||o(e),f.current=e},[e]),[u,o]}export default usePropToState;
//# sourceMappingURL=usePropToState.js.map
