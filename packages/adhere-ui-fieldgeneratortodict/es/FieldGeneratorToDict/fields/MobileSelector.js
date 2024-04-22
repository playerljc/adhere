import _Selector from"@baifendian/adhere-mobile-ui-anthoc/es/selector";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,t=1,c=arguments.length;t<c;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,a){var t={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)a.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]]);return t};import React from"react";import{useAutoCompleteDict,useAutoCompletePaging,useDict,useDynamicDict,usePaging}from"../Hooks";import{setItem}from"../ItemFactory";setItem("MobileSelector","Standard",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector,__assign({},e,{options:a}))}}),setItem("MobileSelector","CheckAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.CheckAllSelector,__assign({},e,{options:a}))}}),setItem("MobileSelector","Filter",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.FilterSelector,__assign({},e,{options:a}))}}),setItem("MobileSelector","FilterCheckAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.FilterCheckAllSelector,__assign({},e,{options:a}))}}),setItem("MobileSelectorDynamic","Standard",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector,__assign({},e,{options:a}))}}),setItem("MobileSelectorDynamic","CheckAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.CheckAllSelector,__assign({},e,{options:a}))}}),setItem("MobileSelectorDynamic","Filter",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.FilterSelector,__assign({},e,{options:a}))}}),setItem("MobileSelectorDynamic","FilterCheckAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.FilterCheckAllSelector,__assign({},e,{options:a}))}}),setItem("MobileSelectorPagination","Standard",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=usePaging({dictName:c,cascadeParams:a,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=e.pagingProps)?t:{}),{onLoad:a});return React.createElement(_Selector.PagingSelector,__assign({},e,{pagingProps:t}))}}),setItem("MobileSelectorPagination","Filter",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.FilterPagingSelector,__assign({},e,{options:a}))}}),setItem("MobileSelectorPaginationDynamic","Filter",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.FilterPagingSelector,__assign({},e,{options:a}))}}),setItem("MobileSelectorAC","Standard",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useAutoCompleteDict({dictName:c,cascadeParams:a,onDataSourceChange:t}),t=a.options,a=a.loadData;return React.createElement(_Selector.AutoCompleteSelector,__assign({},e,{searchDataSource:t,loadData:a}))}}),setItem("MobileSelectorAC","Paging",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useAutoCompletePaging({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Selector.AutoCompletePagingSelector,__assign({},e,{loadData:a}))}});
//# sourceMappingURL=MobileSelector.js.map