import{useMemo}from"react";import Fetch from"../../fetch";export default function useFetch(e){return useMemo(function(){return{fetch:new Fetch(window,window.location.origin),targetOrigin:e}},[e])}
//# sourceMappingURL=useFetch.js.map
