"use strict";var __assign=function(){return(__assign=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)},__spreadArray=function(r,e,t){if(t||2===arguments.length)for(var n,o=0,l=e.length;o<l;o++)!n&&o in e||((n=n||Array.prototype.slice.call(e,0,o))[o]=e[o]);return r.concat(n||Array.prototype.slice.call(e))},__importDefault=function(r){return r&&r.__esModule?r:{default:r}},MultiExtend_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("../../MultiExtend")));function RowDragSortMultiExtend(r,n,t,e,o){return(0,MultiExtend_1.default)(r,n,function(r){this.cellConfigReducers=r.map(function(r){return r.cellConfigReducers}).flat(),this.rowConfigReducers=r.map(function(r){return r.rowConfigReducers}).flat()},function(){var r=__assign(__assign({},{onTableRowComponentReducers:function(e){var t=this,r=new Set(n.map(function(r){return r.prototype.onTableRowComponentReducers.call(t,e)}).flat());return __spreadArray([],Array.from(r),!0)},onTableCellComponentReducers:function(e){var t=this,r=new Set(n.map(function(r){return r.prototype.onTableCellComponentReducers.call(t,e)}).flat());return __spreadArray([],Array.from(r),!0)}}),null!=e?e:{});return t&&(r.render=function(){var r,e;return null==(e=null==(r=null==(r=null==t?void 0:t.prototype)?void 0:r.render)?void 0:r.call)?void 0:e.call(r,this)}),r},function(){return null!=o?o:{}})}exports.default=RowDragSortMultiExtend;
//# sourceMappingURL=RowDragSortMultiExtend.js.map
