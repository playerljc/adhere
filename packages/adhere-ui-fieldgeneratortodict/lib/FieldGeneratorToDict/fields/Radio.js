"use strict";var __assign=function(){return(__assign=Object.assign||function(a){for(var e,t=1,o=arguments.length;t<o;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}).apply(this,arguments)},__rest=function(a,e){var t={};for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(a);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(a,n[o])&&(t[n[o]]=a[n[o]]);return t},__importDefault=function(a){return a&&a.__esModule?a:{default:a}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),ItemFactory_1=require("../ItemFactory"),Suspense_1=__importDefault(require("../Suspense")),hooks_1=require("../hooks");(0,ItemFactory_1.setItem)("Radio","Vertical",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.VerticalRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Radio","Horizontal",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.HorizontalRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Radio","Custom",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.CustomRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Radio","Button",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.ButtonRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Radio","SuspenseVertical",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.VerticalRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("Radio","SuspenseHorizontal",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.HorizontalRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("Radio","SuspenseCustom",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.CustomRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("Radio","SuspenseButton",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.ButtonRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("Radio","Select",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.RadioSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Radio","CustomSelect",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.CustomRadioSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Radio","ButtonSelect",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.ButtonRadioSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","Vertical",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.VerticalRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","Horizontal",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.HorizontalRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","Custom",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.CustomRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","Button",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.ButtonRadio,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","SuspenseVertical",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.VerticalRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("RadioDynamic","SuspenseHorizontal",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.HorizontalRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("RadioDynamic","SuspenseCustom",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.CustomRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("RadioDynamic","SuspenseButton",function(n){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,o=a.suspenseProps,a=__rest(a,["cascadeParams","onDataSourceChange","suspenseProps"]),e=(0,hooks_1.useDynamicDict)({dictName:n,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(Suspense_1.default,__assign({},null!=o?o:{},{data:e}),react_1.default.createElement(adhere_ui_anthoc_1.Radio.ButtonRadio,__assign({},a,{options:e})))}}),(0,ItemFactory_1.setItem)("Radio","Select",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.RadioSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("Radio","CustomSelect",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.CustomRadioSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","ButtonSelect",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useDynamicDict)({dictName:o,cascadeParams:e,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.Radio.ButtonRadioSelect,__assign({},a,{options:e}))}}),(0,ItemFactory_1.setItem)("AutoCompleteRadio","Standard",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useAutoCompleteDict)({dictName:o,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return react_1.default.createElement(adhere_ui_anthoc_1.Radio.AutoCompleteRadioSelect,__assign({},a,{options:t,loadData:e}))}}),(0,ItemFactory_1.setItem)("AutoCompleteRadio","Custom",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useAutoCompleteDict)({dictName:o,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return react_1.default.createElement(adhere_ui_anthoc_1.Radio.AutoCompleteCustomRadioSelect,__assign({},a,{options:t,loadData:e}))}}),(0,ItemFactory_1.setItem)("AutoCompleteRadio","Button",function(o){return function(a){var e=a.cascadeParams,t=a.onDataSourceChange,a=__rest(a,["cascadeParams","onDataSourceChange"]),e=(0,hooks_1.useAutoCompleteDict)({dictName:o,cascadeParams:e,onDataSourceChange:t}),t=e.options,e=e.loadData;return react_1.default.createElement(adhere_ui_anthoc_1.Radio.AutoCompleteRadioSelect,__assign({},a,{options:t,loadData:e}))}});
//# sourceMappingURL=Radio.js.map
