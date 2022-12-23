"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputNumberInteger=exports.InputNumberDecimal2=exports.InputNumberDecimal1=exports.Modal=exports.Tooltip=exports.Upload=exports.Slider=exports.Mentions=exports.Cascader=exports.TimePicker=exports.RangePicker=exports.DatePicker=exports.AutoComplete=exports.TreeSelect=exports.MultipleSelect=exports.Select=void 0,require("antd")),react_1=__importDefault(require("react")),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),AntRangePicker=antd_1.DatePicker.RangePicker,useScrollLayout=adhere_ui_flexlayout_1.default.useScrollLayout;function createFactory(o,a){function e(e){var t=useScrollLayout().getEl,e=__assign(__assign({},a),e),r=("getPopupContainer"in e||(e.getPopupContainer=function(e){return(null==t?void 0:t())||(null==e?void 0:e.parentElement)||document.body}),e.children),e=__rest(e,["children"]);return react_1.default.createElement(o,__assign({},e),r)}return Object.assign(e,o),e}exports.Select=createFactory(antd_1.Select,{showSearch:!0,allowClear:!0,filterOption:function(e,t){return 0<=t.children.toLowerCase().indexOf(e.toLowerCase())}}),exports.MultipleSelect=createFactory(antd_1.Select,{allowClear:!0,mode:"multiple",filterOption:function(e,t){return 0<=t.children.toLowerCase().indexOf(e.toLowerCase())}}),exports.TreeSelect=createFactory(antd_1.TreeSelect,{showSearch:!0,allowClear:!0}),exports.AutoComplete=createFactory(antd_1.AutoComplete,{allowClear:!0,filterOption:function(e,t){return 0<=t.value.toUpperCase().indexOf(e.toUpperCase())}}),exports.DatePicker=createFactory(antd_1.DatePicker,{allowClear:!0}),exports.RangePicker=createFactory(AntRangePicker,{allowClear:!0}),exports.TimePicker=createFactory(antd_1.TimePicker,{allowClear:!0}),exports.Cascader=createFactory(antd_1.Cascader,{showSearch:{filter:function(t,e){return e.some(function(e){return-1<e.label.toLowerCase().indexOf(t.toLowerCase())})}},allowClear:!0}),exports.Mentions=createFactory(antd_1.Mentions,{}),exports.Slider=createFactory(antd_1.Slider,{}),exports.Upload=createFactory(antd_1.Upload,{name:"file",withCredentials:!0}),exports.Tooltip=createFactory(antd_1.Tooltip,{}),exports.Modal=createFactory(antd_1.Modal,{closable:!0,centered:!0,maskClosable:!0,destroyOnClose:!0,zIndex:adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value}),exports.InputNumberDecimal1=createFactory(antd_1.InputNumber,{precision:1}),exports.InputNumberDecimal2=createFactory(antd_1.InputNumber,{precision:2}),exports.InputNumberInteger=createFactory(antd_1.InputNumber,{precision:0});
//# sourceMappingURL=index.js.map