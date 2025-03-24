import{useRef,useState}from"react";let useForceUpdate=()=>{let e=useRef(0),t=useState(e.current);return()=>{t[1](++e.current)}};export default useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map
