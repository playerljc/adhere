"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react")),useTreeEntityValueHOC_1=__importDefault(require("../useTreeEntityValueHOC")),InternalAsyncTreeEntityValueHOC=(0,react_1.memo)(function(e){var t=(0,react_1.useState)([]),n=t[0],r=t[1],t=(0,react_1.cloneElement)(e.children,__assign(__assign({},null!=(t=null==(t=null==e?void 0:e.children)?void 0:t.props)?t:{}),{onDataSourceChange:function(e){r(e)}}));return(0,useTreeEntityValueHOC_1.default)(__assign(__assign({},e),{children:t,treeData:n}))}),AsyncTreeEntityValueHOC=InternalAsyncTreeEntityValueHOC;exports.default=AsyncTreeEntityValueHOC;
//# sourceMappingURL=InternalAsyncTreeEntityValueHOC.js.map
