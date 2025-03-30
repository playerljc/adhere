var usePaging=function(n){var e=n.totalCount,a=n.paging,g=n.onPagingChange,i=n.onPagingShowSizeChange,n=n.defaultLimit,t=[10,20,50,100];return t.includes(n)||t.push(n),{current:a.page,pageSize:a.limit,total:e,showSizeChanger:!0,onChange:g,onShowSizeChange:i,pageSizeOptions:t.sort(function(n,e){return n-e})}};export default usePaging;
//# sourceMappingURL=usePaging.js.map
