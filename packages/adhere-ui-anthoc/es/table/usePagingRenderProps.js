var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var u in e=arguments[n])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t}).apply(this,arguments)};import{useUpdateEffect}from"ahooks";import{useMemo,useRef,useState}from"react";var DEFAULT_PAGE=1,DEFAULT_LIMIT=10,usePagingTableRenderProps=function(t){var i=t.loadData,e=t.defaultPage,n=t.defaultLimit,a=t.tablePagingProps,u=t.mode,r=t.suspenseRef,o=useRef(void 0),s=null!=n?n:DEFAULT_LIMIT,l=null!=e?e:DEFAULT_PAGE,t=useState(""),f=t[0],g=t[1],t=useState({page:l,limit:s}),c=t[0],p=t[1],t=useState(0),d=t[0],P=t[1],t=useState([]),m=t[0],_=t[1],t=useMemo(function(){return"multiple"===u},[u]);function h(){return new Promise(function(a,u){p(function(t){var e=t.page,n=t.limit;return null!=(n=null==(e=null==i?void 0:i(e,n,o.current))?void 0:e.then)&&n.call(e,function(t){var e=t.totalCount,n=t.data;P(e),_(n),a(t)}).catch(function(t){return u(t)}),t})})}function v(t,e){p({page:t,limit:e}),g("")}function E(t,e){p({page:t,limit:e}),g("")}return useUpdateEffect(function(){p({page:l,limit:s})},[e,n]),useUpdateEffect(function(){var t;r?null!=(t=r.fetchData)&&t.call(r):h()},[c]),{inputValue:f,options:m,paging:c,setInputValue:g,setPaging:p,defaultCurrentPage:l,defaultPageSize:s,isMultiple:t,fetchData:h,setKw:function(t){o.current=t},renderProps:function(t){return __assign(__assign(__assign({},null!=a?a:{}),t),{totalCount:d,paging:c,defaultLimit:n,onPagingChange:v,onPagingShowSizeChange:E})}}};export default usePagingTableRenderProps;
//# sourceMappingURL=usePagingRenderProps.js.map
