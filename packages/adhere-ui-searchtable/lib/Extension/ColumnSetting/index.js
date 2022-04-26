"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(M){for(var u,t=1,L=arguments.length;t<L;t++)for(var j in u=arguments[t])Object.prototype.hasOwnProperty.call(u,j)&&(M[j]=u[j]);return M}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(M){return M&&M.__esModule?M:{default:M}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),antd_1=require("antd"),setting_1=__importDefault(require("./setting"));function ColumnSetting(M){return react_1.default.createElement(antd_1.Popover,{content:react_1.default.createElement(setting_1.default,__assign({},M)),placement:"bottomRight",trigger:"click",getPopupContainer:function(M){return M.parentElement}},react_1.default.createElement("a",null,react_1.default.createElement("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1yaSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik0yLjIxMyAxNC4wNmE5Ljk0NSA5Ljk0NSAwIDAgMSAwLTQuMTJjMS4xMS4xMyAyLjA4LS4yMzcgMi4zOTYtMS4wMDFjLjMxNy0uNzY1LS4xMDgtMS43MS0uOTg2LTIuNDAzYTkuOTQ1IDkuOTQ1IDAgMCAxIDIuOTEzLTIuOTEzYy42OTIuODc3IDEuNjM4IDEuMzAzIDIuNDAzLjk4NmMuNzY1LS4zMTcgMS4xMzItMS4yODYgMS4wMDEtMi4zOTZhOS45NDUgOS45NDUgMCAwIDEgNC4xMiAwYy0uMTMgMS4xMS4yMzcgMi4wOCAxLjAwMSAyLjM5NmMuNzY1LjMxNyAxLjcxLS4xMDggMi40MDMtLjk4NmE5Ljk0NSA5Ljk0NSAwIDAgMSAyLjkxMyAyLjkxM2MtLjg3Ny42OTItMS4zMDMgMS42MzgtLjk4NiAyLjQwM2MuMzE3Ljc2NSAxLjI4NiAxLjEzMiAyLjM5NiAxLjAwMWE5Ljk0NSA5Ljk0NSAwIDAgMSAwIDQuMTJjLTEuMTEtLjEzLTIuMDguMjM3LTIuMzk2IDEuMDAxYy0uMzE3Ljc2NS4xMDggMS43MS45ODYgMi40MDNhOS45NDUgOS45NDUgMCAwIDEtMi45MTMgMi45MTNjLS42OTItLjg3Ny0xLjYzOC0xLjMwMy0yLjQwMy0uOTg2Yy0uNzY1LjMxNy0xLjEzMiAxLjI4Ni0xLjAwMSAyLjM5NmE5Ljk0NSA5Ljk0NSAwIDAgMS00LjEyIDBjLjEzLTEuMTEtLjIzNy0yLjA4LTEuMDAxLTIuMzk2Yy0uNzY1LS4zMTctMS43MS4xMDgtMi40MDMuOTg2YTkuOTQ1IDkuOTQ1IDAgMCAxLTIuOTEzLTIuOTEzYy44NzctLjY5MiAxLjMwMy0xLjYzOC45ODYtMi40MDNjLS4zMTctLjc2NS0xLjI4Ni0xLjEzMi0yLjM5Ni0xLjAwMXpNNCAxMi4yMWMxLjEuMzA1IDIuMDA3IDEuMDAyIDIuNDU3IDIuMDg2Yy40NDkgMS4wODUuMyAyLjIyLS4yNjIgMy4yMTJjLjA5Ni4xMDIuMTk1LjIwMS4yOTcuMjk3Yy45OTMtLjU2MiAyLjEyNy0uNzEgMy4yMTItLjI2MmMxLjA4NC40NSAxLjc4MSAxLjM1NyAyLjA4NiAyLjQ1N2MuMTQuMDA0LjI4LjAwNC40MiAwYy4zMDUtMS4xIDEuMDAyLTIuMDA3IDIuMDg2LTIuNDU3YzEuMDg1LS40NDkgMi4yMi0uMyAzLjIxMi4yNjJjLjEwMi0uMDk2LjIwMS0uMTk1LjI5Ny0uMjk3Yy0uNTYyLS45OTMtLjcxLTIuMTI3LS4yNjItMy4yMTJjLjQ1LTEuMDg0IDEuMzU3LTEuNzgxIDIuNDU3LTIuMDg2Yy4wMDQtLjE0LjAwNC0uMjggMC0uNDJjLTEuMS0uMzA1LTIuMDA3LTEuMDAyLTIuNDU3LTIuMDg2Yy0uNDQ5LTEuMDg1LS4zLTIuMjIuMjYyLTMuMjEyYTcuOTM1IDcuOTM1IDAgMCAwLS4yOTctLjI5N2MtLjk5My41NjItMi4xMjcuNzEtMy4yMTIuMjYyQzEzLjIxMiA2LjAwNyAxMi41MTUgNS4xIDEyLjIxIDRhNy45MzUgNy45MzUgMCAwIDAtLjQyIDBjLS4zMDUgMS4xLTEuMDAyIDIuMDA3LTIuMDg2IDIuNDU3Yy0xLjA4NS40NDktMi4yMi4zLTMuMjEyLS4yNjJhNi45MzIgNi45MzIgMCAwIDAtLjI5Ny4yOTdjLjU2Mi45OTMuNzEgMi4xMjcuMjYyIDMuMjEyQzYuMDA3IDEwLjc4OCA1LjEgMTEuNDg1IDQgMTEuNzljLS4wMDQuMTQtLjAwNC4yOCAwIC40MnpNMTIgMTVhMyAzIDAgMSAxIDAtNmEzIDMgMCAwIDEgMCA2em0wLTJhMSAxIDAgMSAwIDAtMmExIDEgMCAwIDAgMCAyeiI+PC9wYXRoPjwvc3ZnPg=="})))}ColumnSetting.defaultProps={columns:[]},ColumnSetting.propTypes={columns:prop_types_1.default.array,onShowColumns:prop_types_1.default.func,onReset:prop_types_1.default.func,onDisplayColumn:prop_types_1.default.func,onSortEnd:prop_types_1.default.func},exports.default=ColumnSetting;
//# sourceMappingURL=index.js.map
