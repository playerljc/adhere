"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react")),useArrayEntityValueHOC_1=__importDefault(require("../useArrayEntityValueHOC")),InternalPagingEntityValueHOC=(0,react_1.memo)(function(a){var e=(0,react_1.useState)([]),n=e[0],r=e[1],l=(0,react_1.useRef)(new Map),e=(0,react_1.cloneElement)(a.children,__assign(__assign({},null!=(e=null==(e=null==a?void 0:a.children)?void 0:e.props)?e:{}),{pagingProps:__assign(__assign({},null!=(e=null==(e=null==(e=null==a?void 0:a.children)?void 0:e.props)?void 0:e.pagingProps)?e:{}),{onDataSourceChange:function(e,n){var t=null!=(t=null==(t=null==a?void 0:a.getOptionsByDataSource)?void 0:t.call(a,n))?t:n;l.current.set(e,t),r(Array.from(l.current.values()).flat())}})}));return(0,useArrayEntityValueHOC_1.default)(__assign(__assign({},a),{children:e,options:n}))}),PagingEntityValueHOC=InternalPagingEntityValueHOC;PagingEntityValueHOC.displayName="PagingEntityValueHOC",exports.default=PagingEntityValueHOC;
//# sourceMappingURL=index.js.map