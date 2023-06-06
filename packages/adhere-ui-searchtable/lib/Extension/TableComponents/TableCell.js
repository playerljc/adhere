"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var l,t=1,r=arguments.length;t<r;t++)for(var n in l=arguments[t])Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,l,t,r){void 0===r&&(r=t);var n=Object.getOwnPropertyDescriptor(l,t);n&&("get"in n?l.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return l[t]}}),Object.defineProperty(e,r,n)}:function(e,l,t,r){e[r=void 0===r?t:r]=l[t]},__setModuleDefault=Object.create?function(e,l){Object.defineProperty(e,"default",{enumerable:!0,value:l})}:function(e,l){e.default=l},__importStar=function(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(l,e,t);return __setModuleDefault(l,e),l},__rest=function(e,l){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),SearchTable_1=require("../../SearchTable"),DragSortCell_1=__importDefault(require("../DragSort/RowDragSort/DragSortCell")),EditableCell_1=__importDefault(require("../EditableCell/EditableCell")),EditableTableCell_1=__importDefault(require("../EditableCell/EditableTableCell")),TableCell=function(e){var l=e.record,t=e.column,r=e.rowIndex,n=e.columns,a=__rest(e,["record","column","rowIndex","columns"]),e=(0,react_1.useContext)(SearchTable_1.SearchTableContext),o=(0,react_1.useMemo)(function(){var e;return t&&"align"in t?__assign(__assign({},null!=(e=a.style)?e:{}),{textAlign:t.align}):null!=(e=null==a?void 0:a.style)?e:{}},[a]),o=react_1.default.createElement("td",__assign({},null!=a?a:{},{style:o}),null==a?void 0:a.children),l=__assign({record:l,column:t,rowIndex:r,columns:n},a),r=(0,EditableCell_1.default)(__assign({},l)),n=(0,EditableTableCell_1.default)(__assign({},l)),l=(0,DragSortCell_1.default)(__assign({},l)),u=new Map([["useEditableCell",r],["useEditableTableCell",n],["useRowDragSortCell",l]]);return null==(l=null==(n=null==(r=null==e?void 0:e.context)?void 0:r.getTableCellComponentReducers())?void 0:n.reduce)?void 0:l.call(n,function(e,l){return e.value=null==(l=u.get(l))?void 0:l(e.value),e},{value:o}).value};exports.default=TableCell;
//# sourceMappingURL=TableCell.js.map
