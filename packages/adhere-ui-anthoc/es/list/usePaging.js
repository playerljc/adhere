let usePaging=e=>{var{totalCount:e,paging:n,onPagingChange:a,onPagingShowSizeChange:g,defaultLimit:i}=e,t=[10,20,50,100];return t.includes(i)||t.push(i),{current:n.page,pageSize:n.limit,total:e,showSizeChanger:!0,onChange:a,onShowSizeChange:g,pageSizeOptions:t.sort((e,n)=>e-n)}};export default usePaging;
//# sourceMappingURL=usePaging.js.map
