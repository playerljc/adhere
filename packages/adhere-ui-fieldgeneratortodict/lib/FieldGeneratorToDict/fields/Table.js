"use strict";var __assign=function(){return(__assign=Object.assign||function(a){for(var e,t=1,n=arguments.length;t<n;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}).apply(this,arguments)},__rest=function(a,e){var t={};for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(a);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(a,r[n])&&(t[r[n]]=a[r[n]]);return t},__importDefault=function(a){return a&&a.__esModule?a:{default:a}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),ItemFactory_1=require("../ItemFactory"),Suspense_1=__importDefault(require("../Suspense")),SuspenseAsync_1=__importDefault(require("../SuspenseAsync")),hooks_1=require("../hooks");(0,ItemFactory_1.setItem)("Table","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Table,__assign({},a,{dataSource:e}))}}),(0,ItemFactory_1.setItem)("Table","SuspenseStandard",function(r){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDict)({dictName:r,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=n?n:{},{data:e,emptyComponent:react_1.default.createElement(adhere_ui_anthoc_1.Table,null)}),react_1.default.createElement(adhere_ui_anthoc_1.Table,__assign({},a,{dataSource:e})))}}),(0,ItemFactory_1.setItem)("Table","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TableSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Table","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TableSelect,__assign({},a,{mode:"multiple",options:e}))}}),(0,ItemFactory_1.setItem)("TableDynamic","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Table,__assign({},a,{dataSource:e}))}}),(0,ItemFactory_1.setItem)("TableDynamic","SuspenseStandard",function(r){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDynamicDict)({dictName:r,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=n?n:{},{data:e,emptyComponent:react_1.default.createElement(adhere_ui_anthoc_1.Table,null)}),react_1.default.createElement(adhere_ui_anthoc_1.Table,__assign({},a,{dataSource:e})))}}),(0,ItemFactory_1.setItem)("TableDynamic","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TableSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("TableDynamic","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TableSelect,__assign({},a,{mode:"multiple",options:e}))}}),(0,ItemFactory_1.setItem)("TablePagination","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.usePaging)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TablePaging,__assign({},a,t))}}),(0,ItemFactory_1.setItem)("TablePagination","Multi",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.usePaging)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TablePaging,__assign({},a,t,{mode:"multiple"}))}}),(0,ItemFactory_1.setItem)("TablePagination","SuspenseStandard",function(r){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.usePaging)({dictName:r,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(SuspenseAsync_1.default,__assign({},null!=n?n:{},{fetchData:e,emptyComponent:react_1.default.createElement(adhere_ui_anthoc_1.Table,null)}),react_1.default.createElement(adhere_ui_anthoc_1.Table.TablePaging,__assign({},a,t)))}}),(0,ItemFactory_1.setItem)("TablePagination","SuspenseMulti",function(r){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,n=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.usePaging)({dictName:r,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(SuspenseAsync_1.default,__assign({},null!=n?n:{},{fetchData:e,emptyComponent:react_1.default.createElement(adhere_ui_anthoc_1.Table,null)}),react_1.default.createElement(adhere_ui_anthoc_1.Table.TablePaging,__assign({},a,t,{mode:"multiple"})))}}),(0,ItemFactory_1.setItem)("TablePagination","Select",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.usePaging)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TablePagingSelect,__assign({},a,t))}}),(0,ItemFactory_1.setItem)("TablePagination","MultiSelect",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.usePaging)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(adhere_ui_anthoc_1.Table.TablePagingSelect,__assign({},a,t,{mode:"multiple"}))}}),(0,ItemFactory_1.setItem)("AutoCompleteTable","Standard",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useAutoCompleteDict)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return react_1.default.createElement(adhere_ui_anthoc_1.Table.AutoCompleteTableSelect,__assign({},a,{options:t,loadData:e}))}}),(0,ItemFactory_1.setItem)("AutoCompleteTable","Multi",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useAutoCompleteDict)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return react_1.default.createElement(adhere_ui_anthoc_1.Table.AutoCompleteTableSelect,__assign({},a,{mode:"multiple",options:t,loadData:e}))}}),(0,ItemFactory_1.setItem)("AutoCompleteTable","Paging",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useAutoCompletePaging)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(adhere_ui_anthoc_1.Table.AutoCompleteTablePagingSelect,__assign({},a,t))}}),(0,ItemFactory_1.setItem)("AutoCompleteTable","MultiPaging",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useAutoCompletePaging)({dictName:n,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{loadData:e});return react_1.default.createElement(adhere_ui_anthoc_1.Table.AutoCompleteTablePagingSelect,__assign({},a,t,{mode:"multiple"}))}});
//# sourceMappingURL=Table.js.map
