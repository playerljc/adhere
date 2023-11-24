"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var c in a=arguments[t])Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);return e}).apply(this,arguments)},__rest=function(e,a){var t={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&a.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,c=Object.getOwnPropertySymbols(e);r<c.length;r++)a.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(t[c[r]]=e[c[r]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),Hooks_1=require("../Hooks"),ItemFactory_1=require("../ItemFactory");(0,ItemFactory_1.setItem)("Tree","Standard",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("Tree","Multi",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("Tree","Leaf",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("Tree","LeafMulti",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("Tree","CheckedShowAll",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("Tree","CheckedShowChild",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("Tree","CheckedShowParent",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("Tree","Flat",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("Tree","FlatMulti",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("Tree","FlatLeaf",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("Tree","FlatLeafMulti",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("Tree","FlatCheckedShowAll",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("Tree","FlatCheckedShowChild",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("Tree","FlatCheckedShowParent",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","Standard",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","Multi",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","Leaf",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","LeafMulti",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","CheckedShowAll",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","CheckedShowChild",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","CheckedShowParent",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","Flat",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FlatMulti",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FlatLeaf",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FlatLeafMulti",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FlatCheckedShowAll",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FlatCheckedShowChild",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FlatCheckedShowParent",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,Hooks_1.useDynamicDict)({dictName:r,cascadeParams:a,onDataSourceChange:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeAsync","Standard",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeSelect,__assign({},e,{fetchData:a}))}}),(0,ItemFactory_1.setItem)("TreeAsync","Multi",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeMultiSelect,__assign({},e,{fetchData:a}))}}),(0,ItemFactory_1.setItem)("TreeAsync","Leaf",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeLeafSelect,__assign({},e,{fetchData:a}))}}),(0,ItemFactory_1.setItem)("TreeAsync","LeafMulti",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeMultiLeafSelect,__assign({},e,{fetchData:a}))}}),(0,ItemFactory_1.setItem)("TreeAsync","CheckedShowAll",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeCheckedShowAllSelect,__assign({},e,{fetchData:a}))}}),(0,ItemFactory_1.setItem)("TreeAsync","CheckedShowChild",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeCheckedShowChildSelect,__assign({},e,{fetchData:a}))}}),(0,ItemFactory_1.setItem)("TreeAsync","CheckedShowParent",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeCheckedShowParentSelect,__assign({},e,{fetchData:a}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FlatStandard",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FlatMulti",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeMultiSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FlatLeaf",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeLeafSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FlatLeafMulti",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeMultiLeafSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FlatCheckedShowAll",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeCheckedShowAllSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FlatCheckedShowChild",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeCheckedShowChildSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FlatCheckedShowParent",function(t){return function(e){var a=(0,Hooks_1.useAsyncTree)({dictName:t});return react_1.default.createElement(adhere_ui_anthoc_1.TreeSelect.AsyncTreeCheckedShowParentSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}});
//# sourceMappingURL=TreeSelect.js.map