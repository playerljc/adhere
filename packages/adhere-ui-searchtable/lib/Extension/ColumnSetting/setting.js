"use strict";var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;for(var r=Array(e),n=0,t=0;t<a;t++)for(var l=arguments[t],c=0,o=l.length;c<o;c++,n++)r[n]=l[c];return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),antd_1=require("antd"),react_sortable_hoc_1=require("react-sortable-hoc"),array_move_1=require("array-move"),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),searchtable_1=require("../../searchtable"),DragHandle=react_sortable_hoc_1.sortableHandle(function(){return react_1.default.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJzLjktMiAyLTJzMiAuOSAyIDJ6bS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6bTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJzLTIgLjktMiAycy45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6Ij48L3BhdGg+PC9zdmc+DQo=",alt:""})}),SortableItem=react_sortable_hoc_1.sortableElement(function(e){var t=e.column,a=e.onDisplayColumn;return react_1.default.createElement("li",null,react_1.default.createElement(DragHandle,null),react_1.default.createElement(antd_1.Checkbox,{checked:t.display,onChange:function(e){a(t,e.target.checked)}},t.title))}),SortableContainer=react_sortable_hoc_1.sortableContainer(function(e){e=e.children;return react_1.default.createElement("ul",null,e)});function ColumnSetting(e){var r=e.columns,t=e.onShowColumns,a=e.onReset,n=e.onDisplayColumn,l=e.onSortEnd;return react_1.default.createElement("div",{className:searchtable_1.selectorPrefix+"-column-setting"},react_1.default.createElement("div",{className:searchtable_1.selectorPrefix+"-column-setting-header"},react_1.default.createElement("div",null,react_1.default.createElement(antd_1.Checkbox,{checked:r.every(function(e){return e.display}),onChange:function(e){t(e.target.checked)}},adhere_util_intl_1.default.v("列展示"))),react_1.default.createElement("div",null,react_1.default.createElement("a",{onClick:a},adhere_util_intl_1.default.v("重置")))),react_1.default.createElement("div",{className:searchtable_1.selectorPrefix+"-column-setting-body"},react_1.default.createElement(SortableContainer,{onSortEnd:function(e){var t=e.oldIndex,e=e.newIndex,e=array_move_1.arrayMoveImmutable(__spreadArrays(r),t,e),a=new Map;e.forEach(function(e,t){a.set(e.key,t)}),l(a)},useDragHandle:!0,helperClass:searchtable_1.selectorPrefix+"-sortableHelper"},r.map(function(e,t){return react_1.default.createElement(SortableItem,{key:e.key,index:t,column:e,onDisplayColumn:n})}))))}ColumnSetting.defaultProps={columns:[]},ColumnSetting.propTypes={columns:prop_types_1.default.array,onShowColumns:prop_types_1.default.func,onReset:prop_types_1.default.func,onDisplayColumn:prop_types_1.default.func,onSortEnd:prop_types_1.default.func},exports.default=ColumnSetting;
//# sourceMappingURL=setting.js.map