"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.useGap=exports.useGrid=void 0,require("react")),fixed_1=require("./fixed"),useGrid=function(e){return(0,react_1.useMemo)(function(){return"span"in e&&"number"==typeof e.span&&0<=e.span&&e.span<=fixed_1.gridCount},[e.span])},useGap=(exports.useGrid=useGrid,function(e){return(0,react_1.useMemo)(function(){if(null==e||""===e||0===e||"function"==typeof e||"object"===(0,_typeof2.default)(e)&&!Array.isArray(e))return!1;if(Array.isArray(e)){if(0===e.length)return!1;if(1<=e.length&&e.length<=2)return!e.some(function(e){return null==e||""===e||0===e||"number"!=typeof e})}return!0},[e])});exports.useGap=useGap;
//# sourceMappingURL=hooks.js.map
