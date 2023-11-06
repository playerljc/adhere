"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var n in a=arguments[t])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e}).apply(this,arguments)},__rest=function(e,a){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),ItemFactory_1=require("../ItemFactory"),Suspense_1=__importDefault(require("../Suspense")),hooks_1=require("../hooks");(0,ItemFactory_1.setItem)("Segmented","Standard",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Segmented,__assign({},e,{options:a}))}}),(0,ItemFactory_1.setItem)("Segmented","SuspenseStandard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,r=e.suspenseProps,e=__rest(e,["cascadeParams","onDataSourceChange","suspenseProps"]),a=(0,hooks_1.useDict)({dictName:n,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=r?r:{},{data:a}),react_1.default.createElement(adhere_ui_anthoc_1.Segmented,__assign({},e,{options:a})))}}),(0,ItemFactory_1.setItem)("SegmentedDynamic","Standard",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Segmented,__assign({},e,{options:a}))}}),(0,ItemFactory_1.setItem)("SegmentedDynamic","SuspenseStandard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,r=e.suspenseProps,e=__rest(e,["cascadeParams","onDataSourceChange","suspenseProps"]),a=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=r?r:{},{data:a}),react_1.default.createElement(adhere_ui_anthoc_1.Segmented,__assign({},e,{options:a})))}});
//# sourceMappingURL=Segmented.js.map
