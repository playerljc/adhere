import _TreeSelect from"@baifendian/adhere-ui-anthoc/es/tree-select";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,t=1,c=arguments.length;t<c;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,a){var t={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)a.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]]);return t};import React from"react";import{useAsyncTree,useDict,useDynamicDict}from"../Hooks";import{setItem}from"../ItemFactory";setItem("Tree","Standard",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect,__assign({},e,{treeData:a}))}}),setItem("Tree","Multi",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a}))}}),setItem("Tree","Leaf",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a}))}}),setItem("Tree","LeafMulti",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a}))}}),setItem("Tree","CheckedShowAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a}))}}),setItem("Tree","CheckedShowChild",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a}))}}),setItem("Tree","CheckedShowParent",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a}))}}),setItem("Tree","Flat",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("Tree","FlatMulti",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("Tree","FlatLeaf",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("Tree","FlatLeafMulti",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("Tree","FlatCheckedShowAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("Tree","FlatCheckedShowChild",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("Tree","FlatCheckedShowParent",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeDynamic","Standard",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect,__assign({},e,{treeData:a}))}}),setItem("TreeDynamic","Multi",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a}))}}),setItem("TreeDynamic","Leaf",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a}))}}),setItem("TreeDynamic","LeafMulti",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a}))}}),setItem("TreeDynamic","CheckedShowAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a}))}}),setItem("TreeDynamic","CheckedShowChild",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a}))}}),setItem("TreeDynamic","CheckedShowParent",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a}))}}),setItem("TreeDynamic","Flat",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeDynamic","FlatMulti",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeDynamic","FlatLeaf",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeDynamic","FlatLeafMulti",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeMultiLeafSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeDynamic","FlatCheckedShowAll",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowAllSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeDynamic","FlatCheckedShowChild",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowChildSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeDynamic","FlatCheckedShowParent",function(c){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:c,cascadeParams:a,onDataSourceChange:t});return React.createElement(_TreeSelect.TreeCheckedShowParentSelect,__assign({},e,{treeData:a,treeDataSimpleMode:!0}))}}),setItem("TreeAsync","Standard",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeSelect,__assign({},e,{fetchData:a}))}}),setItem("TreeAsync","Multi",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeMultiSelect,__assign({},e,{fetchData:a}))}}),setItem("TreeAsync","Leaf",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeLeafSelect,__assign({},e,{fetchData:a}))}}),setItem("TreeAsync","LeafMulti",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeMultiLeafSelect,__assign({},e,{fetchData:a}))}}),setItem("TreeAsync","CheckedShowAll",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeCheckedShowAllSelect,__assign({},e,{fetchData:a}))}}),setItem("TreeAsync","CheckedShowChild",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeCheckedShowChildSelect,__assign({},e,{fetchData:a}))}}),setItem("TreeAsync","CheckedShowParent",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeCheckedShowParentSelect,__assign({},e,{fetchData:a}))}}),setItem("TreeAsync","FlatStandard",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),setItem("TreeAsync","FlatMulti",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeMultiSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),setItem("TreeAsync","FlatLeaf",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeLeafSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),setItem("TreeAsync","FlatLeafMulti",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeMultiLeafSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),setItem("TreeAsync","FlatCheckedShowAll",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeCheckedShowAllSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),setItem("TreeAsync","FlatCheckedShowChild",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeCheckedShowChildSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}}),setItem("TreeAsync","FlatCheckedShowParent",function(t){return function(e){var a=useAsyncTree({dictName:t});return React.createElement(_TreeSelect.AsyncTreeCheckedShowParentSelect,__assign({},e,{fetchData:a,treeDataSimpleMode:!0}))}});
//# sourceMappingURL=TreeSelect.js.map