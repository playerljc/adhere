"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){e[r=void 0===r?i:r]=t[i]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&__createBinding(t,e,i);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var i={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_messagedialog_1=__importDefault(require("@baifendian/adhere-ui-messagedialog")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),selectorPrefix="adhere-ui-important-confirm",icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=",InternalImportantConfirm=(0,react_1.memo)(function(t){var e=t.className,i=t.style,r=t.children;return react_1.default.createElement("div",{className:"".concat(selectorPrefix," ").concat(null!=e?e:""),style:null!=i?i:{},onClick:function(e){e.stopPropagation(),t.children,e=__rest(t,["children"]),ImportantConfirm.open(__assign({},e))}},r)}),ImportantConfirm=InternalImportantConfirm;ImportantConfirm.displayName="ImportantConfirm",ImportantConfirm.open=function(e){var i=e.success,e=__rest(e,["success"]);adhere_ui_messagedialog_1.default.Confirm(__assign(__assign({},e),{title:e.title||adhere_util_intl_1.default.v("提示"),text:e.text||"".concat(adhere_util_intl_1.default.v("真的要执行此操作吗"),"?"),zIndex:"zIndex"in e?e.zIndex:adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,icon:react_1.default.createElement("img",{src:icon,alt:"",width:32}),onSuccess:function(){return new Promise(function(e,t){i?i().then(function(){return e()}).catch(function(){return t()}):e()})}}))},exports.default=ImportantConfirm;
//# sourceMappingURL=ImportantConfirm.js.map
