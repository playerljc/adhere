"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importDefault(require("react")),icons_1=require("@ant-design/icons"),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),SearchList_1=require("../../SearchList"),setting_1=__importDefault(require("./setting")),ListDensitySetting=function(e){var t;return react_1.default.createElement(antd_1.Popover,{content:react_1.default.createElement(setting_1.default,__assign({},e,{density:null!=(t=e.density)?t:"default"})),placement:"bottomRight",trigger:"click",getPopupContainer:function(e){return e.parentElement}},react_1.default.createElement(antd_1.Tooltip,{title:"".concat(adhere_util_intl_1.default.v("密度"))},react_1.default.createElement("div",{className:"".concat(SearchList_1.selectorPrefix,"-list-density-setting-btn")},e.renderDensitySettingBtn&&e.renderDensitySettingBtn(),!e.renderDensitySettingBtn&&react_1.default.createElement(icons_1.ColumnHeightOutlined,null))))};exports.default=ListDensitySetting;
//# sourceMappingURL=index.js.map
