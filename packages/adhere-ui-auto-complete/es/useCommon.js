import _Empty from"antd/es/empty";import _Spin from"antd/es/spin";import React,{useCallback,useMemo,useState}from"react";import WatchMemoized from"@baifendian/adhere-util-watchmemoized";var memoized=WatchMemoized.memoized,selectorPrefix="adhere-ui-auto-complete",useMemoInternal=function(e){var t=e.renderLoading,n=e.emptyContent,o=e.loadData,e=useState(!1),a=e[0],r=e[1],e=useState(!1),m=e[0],e=e[1],i=useMemo(function(){var e;return null!=(e=null==t?void 0:t())?e:React.createElement("div",{className:"".concat(selectorPrefix,"-loading")},React.createElement(_Spin,{size:"large"}))},[t]),u=useMemo(function(){return null!=n?n:React.createElement(_Empty,{image:_Empty.PRESENTED_IMAGE_SIMPLE})},[n]),c=useCallback(memoized.createMemoFun(function(e){r(!0),null!=o&&o(e).then(function(){r(!1)})}),[o]);return{defaultDebounceTimeout:300,fetchLoading:i,empty:u,selectorPrefix:selectorPrefix,fetching:a,open:m,setOpen:e,onClear:function(){null!=o&&o("").then(function(){r(!1)})},onInputMemo:c}};export default useMemoInternal;
//# sourceMappingURL=useCommon.js.map
