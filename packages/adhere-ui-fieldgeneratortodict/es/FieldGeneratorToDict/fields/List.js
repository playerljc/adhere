import _List from"@baifendian/adhere-ui-anthoc/es/list";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(a){for(var e,t=1,n=arguments.length;t<n;t++)for(var s in e=arguments[t])Object.prototype.hasOwnProperty.call(e,s)&&(a[s]=e[s]);return a}).apply(this,arguments)},__rest=this&&this.__rest||function(a,e){var t={};for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&e.indexOf(s)<0&&(t[s]=a[s]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(t[s[n]]=a[s[n]]);return t};import React from"react";import{useAutoCompleteDict,useAutoCompletePaging,useDict,useDynamicDict,usePaging}from"../Hooks";import{setItem}from"../ItemFactory";import Suspense from"../Suspense";setItem("List","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List,__assign({},a,{dataSource:e}))}}),setItem("List","SuspenseStandard",function(s){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDict({dictName:s,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e,emptyComponent:React.createElement(_List,null)}),React.createElement(_List,__assign({},a,{dataSource:e})))}}),setItem("List","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List.ListSelect,__assign({},a,{options:e}))}}),setItem("List","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List.ListSelect,__assign({},a,{mode:"multiple",options:e}))}}),setItem("List","CheckAllSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List.CheckAllListSelect,__assign({},a,{options:e}))}}),setItem("ListDynamic","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List,__assign({},a,{dataSource:e}))}}),setItem("ListDynamic","SuspenseStandard",function(s){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDynamicDict({dictName:s,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e,emptyComponent:React.createElement(_List,null)}),React.createElement(_List,__assign({},a,{dataSource:e})))}}),setItem("ListDynamic","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List.ListSelect,__assign({},a,{options:e}))}}),setItem("ListDynamic","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List.ListSelect,__assign({},a,{mode:"multiple",options:e}))}}),setItem("ListDynamic","CheckAllSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_List.CheckAllListSelect,__assign({},a,{options:e}))}}),setItem("ListPagination","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=usePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.ListPaging,__assign({},a,{pagingProps:t,isSuspenseAsync:!1}))}}),setItem("ListPagination","Multi",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=usePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.ListPaging,__assign({},a,{pagingProps:t,mode:"multiple",isSuspenseAsync:!1}))}}),setItem("ListPagination","SuspenseStandard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=usePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.ListPaging,__assign({},a,{pagingProps:t,isSuspenseAsync:!0}))}}),setItem("ListPagination","SuspenseMulti",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=usePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.ListPaging,__assign({},a,{pagingProps:t,mode:"multiple",isSuspenseAsync:!0}))}}),setItem("ListPagination","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=usePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.ListPagingSelect,__assign({},a,{pagingProps:t}))}}),setItem("ListPagination","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=usePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.ListPagingSelect,__assign({},a,{pagingProps:t,mode:"multiple"}))}}),setItem("ListAC","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useAutoCompleteDict({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return React.createElement(_List.AutoCompleteListSelect,__assign({},a,{options:t,loadData:e}))}}),setItem("ListAC","Multi",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useAutoCompleteDict({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return React.createElement(_List.AutoCompleteListSelect,__assign({},a,{mode:"multiple",options:t,loadData:e}))}}),setItem("ListAC","CheckAll",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useAutoCompleteDict({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return React.createElement(_List.AutoCompleteCheckAllListSelect,__assign({},a,{options:t,loadData:e}))}}),setItem("ListAC","Paging",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useAutoCompletePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.AutoCompleteListPagingSelect,__assign({},a,{pagingProps:t}))}}),setItem("ListAC","MultiPaging",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useAutoCompletePaging({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return React.createElement(_List.AutoCompleteListPagingSelect,__assign({},a,{pagingProps:t,mode:"multiple"}))}});
//# sourceMappingURL=List.js.map
