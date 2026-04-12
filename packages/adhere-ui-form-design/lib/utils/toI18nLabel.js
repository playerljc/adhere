Object.defineProperty(exports,"__esModule",{value:!0}),exports.toI18nLabel=toI18nLabel;var _constant=require("../constant");function toI18nLabel(n,e,t){var o,r;return n&&"object"==typeof n&&_constant.SELECT_VALUE_KEY_NAME in n?n:((o={})[_constant.SELECT_VALUE_KEY_NAME]=e,r=o,t.forEach(function(t){r[t]=t===e?"string"==typeof n?n:"":null}),r)}
//# sourceMappingURL=toI18nLabel.js.map
