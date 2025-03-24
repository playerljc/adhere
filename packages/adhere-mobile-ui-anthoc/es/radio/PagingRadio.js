import React,{memo}from"react";import Paging from"../Paging";import RadioGroup from"./RadioGroup";let InternalPagingRadio=memo(a=>{let{options:o,pagingProps:i,...e}=a;return React.createElement(Paging,{options:o,...i},React.createElement(RadioGroup,{...e}))}),PagingRadio=InternalPagingRadio;PagingRadio.displayName="PagingRadio";export default PagingRadio;
//# sourceMappingURL=PagingRadio.js.map
