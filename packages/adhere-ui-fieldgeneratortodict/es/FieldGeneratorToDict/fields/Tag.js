import _Tag from"@baifendian/adhere-ui-anthoc/es/tag";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(a){for(var e,t=1,n=arguments.length;t<n;t++)for(var c in e=arguments[t])Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c]);return a}).apply(this,arguments)},__rest=this&&this.__rest||function(a,e){var t={};for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&e.indexOf(c)<0&&(t[c]=a[c]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,c=Object.getOwnPropertySymbols(a);n<c.length;n++)e.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(a,c[n])&&(t[c[n]]=a[c[n]]);return t};import React from"react";import{useAutoCompleteDict,useDict,useDynamicDict}from"../Hooks";import{setItem}from"../ItemFactory";import Suspense from"../Suspense";setItem("Tag","Vertical",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return console.log("options",e),React.createElement(_Tag.VerticalTagGroup,__assign({},a,{options:e}))}}),setItem("Tag","VerticalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.VerticalCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("Tag","CheckAllVerticalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.VerticalCheckAllCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("Tag","Horizontal",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.HorizontalTagGroup,__assign({},a,{options:e}))}}),setItem("Tag","HorizontalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.HorizontalCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("Tag","CheckAllHorizontalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.HorizontalCheckAllCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("Tag","SuspenseVertical",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return console.log("options",e),React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.VerticalTagGroup,__assign({},a,{options:e})))}}),setItem("Tag","SuspenseVerticalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.VerticalCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("Tag","SuspenseCheckAllVerticalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.VerticalCheckAllCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("Tag","SuspenseHorizontal",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.HorizontalTagGroup,__assign({},a,{options:e})))}}),setItem("Tag","SuspenseHorizontalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.HorizontalCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("Tag","SuspenseCheckAllHorizontalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.HorizontalCheckAllCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("Tag","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.TagSelect,__assign({},a,{options:e}))}}),setItem("Tag","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.TagSelect,__assign({},a,{mode:"multiple",options:e}))}}),setItem("Tag","CheckAllSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.CheckAllTagSelect,__assign({},a,{options:e}))}}),setItem("TagDynamic","Vertical",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.VerticalTagGroup,__assign({},a,{options:e}))}}),setItem("TagDynamic","VerticalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.VerticalCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("TagDynamic","CheckAllVerticalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.VerticalCheckAllCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("TagDynamic","Horizontal",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.HorizontalTagGroup,__assign({},a,{options:e}))}}),setItem("TagDynamic","HorizontalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.HorizontalCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("TagDynamic","CheckAllHorizontalCheckable",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.HorizontalCheckAllCheckableTagGroup,__assign({},a,{options:e}))}}),setItem("TagDynamic","SuspenseVertical",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDynamicDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.VerticalTagGroup,__assign({},a,{options:e})))}}),setItem("TagDynamic","SuspenseVerticalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDynamicDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.VerticalCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("TagDynamic","SuspenseCheckAllVerticalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDynamicDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.VerticalCheckAllCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("TagDynamic","SuspenseHorizontal",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDynamicDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.HorizontalTagGroup,__assign({},a,{options:e})))}}),setItem("TagDynamic","SuspenseHorizontalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDynamicDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.HorizontalCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("TagDynamic","SuspenseCheckAllHorizontalCheckable",function(c){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=useDynamicDict({dictName:c,cascadeParams:e,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:e}),React.createElement(_Tag.HorizontalCheckAllCheckableTagGroup,__assign({},a,{options:e})))}}),setItem("TagDynamic","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.TagSelect,__assign({},a,{options:e}))}}),setItem("TagDynamic","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return console.log("TagDynamicMultiSelect",a.value),React.createElement(_Tag.TagSelect,__assign({},a,{mode:"multiple",options:e}))}}),setItem("TagDynamic","CheckAllSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useDynamicDict({dictName:n,cascadeParams:e,onDataSourceChange:t});return React.createElement(_Tag.CheckAllTagSelect,__assign({},a,{options:e}))}}),setItem("TagAC","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useAutoCompleteDict({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return React.createElement(_Tag.AutoCompleteTagSelect,__assign({},a,{options:t,loadData:e}))}}),setItem("TagAC","CheckAll",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=useAutoCompleteDict({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return React.createElement(_Tag.AutoCompleteCheckAllTagSelect,__assign({},a,{options:t,loadData:e}))}});
//# sourceMappingURL=Tag.js.map
