"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},adhere_util_watchmemoized_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.getItem=exports.setItem=void 0,__importDefault(require("@baifendian/adhere-util-watchmemoized"))),memoized=adhere_util_watchmemoized_1.default.memoized,map=new Map;function setItem(e,t,m){map.set("".concat(e).concat(t),m)}function getItem(e){var t=e.itemName,m=e.functionName,e=e.dictName;return null==(t=memoized.createMemoFun(map.get("".concat(t).concat(m))))?void 0:t(e)}exports.setItem=setItem,exports.getItem=getItem,exports.default=function(e){return getItem({itemName:e.itemName,functionName:e.functionName,dictName:e.dictName})};
//# sourceMappingURL=ItemFactory.js.map
