"use strict";var __assign=function(){return(__assign=Object.assign||function(a){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}).apply(this,arguments)},__rest=function(a,e){var t={};for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(t[r[o]]=a[r[o]]);return t},__importDefault=function(a){return a&&a.__esModule?a:{default:a}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_mobile_ui_anthoc_1=require("@baifendian/adhere-mobile-ui-anthoc"),Hooks_1=require("../Hooks"),ItemFactory_1=require("../ItemFactory");(0,ItemFactory_1.setItem)("MobileRadio","Standard",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.RadioGroup,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("MobileRadio","Filter",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.FilterRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("MobileRadioDynamic","Standard",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.RadioGroup,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("MobileRadioDynamic","Filter",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.FilterRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("MobileRadioPagination","Standard",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.usePaging)({dictName:o,cascadeParams:e,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=a.pagingProps)?t:{}),{onLoad:e});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.PagingRadio,__assign({},a,{pagingProps:t}))}}),(0,ItemFactory_1.setItem)("MobileRadioPagination","Filter",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.FilterPagingRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("MobileRadioPaginationDynamic","Filter",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.FilterPagingRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("MobileRadioAC","Standard",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useAutoCompleteDict)({dictName:o,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.AutoCompleteRadio,__assign({},a,{searchDataSource:t,loadData:e}))}}),(0,ItemFactory_1.setItem)("MobileRadioAC","Paging",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,Hooks_1.useAutoCompletePaging)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Radio.AutoCompletePagingRadio,__assign({},a,{loadData:e}))}});
//# sourceMappingURL=MobileRadio.js.map