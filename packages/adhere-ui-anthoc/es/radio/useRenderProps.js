let useRadioRenderProps=u=>e=>{let l,{value:a,onChange:o,options:n}=e;return{value:a,onChange:e=>null==o?void 0:o(e.target.value,[]),options:(null==n||null==(l=n.map)?void 0:l.call(n,e=>({label:e.label,value:e.value})))??[],...u??{}}};export default useRadioRenderProps;
//# sourceMappingURL=useRenderProps.js.map
