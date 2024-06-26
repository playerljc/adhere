"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,n){void 0===n&&(n=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&("get"in a?r.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,a)}:function(e,r,t,n){e[n=void 0===n?t:n]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),Constent_1=require("../../../../Constent"),DragSortRowContext_1=__importDefault(require("../DragSortRowContext")),selectorPrefix="adhere-ui-searchtable-drag-handler";function DragHandler(e){var r=e.className,t=e.value,n=e.record,a=e.rowIndex,e=e.render,o=(0,react_1.useContext)(DragSortRowContext_1.default),l=o.dragResult,u=(o.dropResult,o.setCanDrag);return react_1.default.createElement("span",{className:(0,classnames_1.default)(selectorPrefix,r),onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)}},e?e({value:t,record:n,rowIndex:a,dragResult:l}):react_1.default.createElement(icons_1.HolderOutlined,null))}function DragSortColumn(e){var r=e.width,r=void 0===r?80:r,t=e.render,n=e.className,e=__rest(e,["width","render","className"]),a=Constent_1.DRAG_SORT_ROW_COLUMN_KEY;return __assign({key:a,dataIndex:a,width:r,$search:{visible:!1,showColumnHeader:!1},render:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return react_1.default.createElement(DragHandler,__assign({render:t,className:n},e))}},e)}exports.default=DragSortColumn;
//# sourceMappingURL=index.js.map
