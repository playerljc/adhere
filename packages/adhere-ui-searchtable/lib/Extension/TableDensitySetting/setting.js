"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},prop_types_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("prop-types"))),react_1=__importDefault(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),SearchTable_1=require("../../SearchTable"),types_1=require("../../types"),config=[{label:adhere_util_intl_1.default.v("缺省"),value:types_1.TableDensity.DEFAULT},{label:adhere_util_intl_1.default.v("中等"),value:types_1.TableDensity.MIDDLE},{label:adhere_util_intl_1.default.v("紧凑"),value:types_1.TableDensity.SMALL}];function TableDensitySetting(e){var t=e.density,a=e.onReset,l=e.onChange;return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-table-density-setting")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-table-density-setting-header")},react_1.default.createElement("a",{onClick:a},adhere_util_intl_1.default.v("重置"))),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-table-density-setting-body")},react_1.default.createElement("ul",null,config.map(function(e){return react_1.default.createElement("li",{key:e.value,className:t===e.value?"active":"",onClick:function(){l(e.value)}},e.label)}))))}TableDensitySetting.defaultProps={density:types_1.TableDensity.DEFAULT},TableDensitySetting.propTypes={density:prop_types_1.default.string,onReset:prop_types_1.default.func,onChange:prop_types_1.default.func},TableDensitySetting.displayName="TableDensitySetting",exports.default=TableDensitySetting;
//# sourceMappingURL=Setting.js.map
