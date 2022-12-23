import _Switch from"antd/es/switch";import _Rate from"antd/es/rate";import _Slider from"antd/es/slider";import _InputNumber from"antd/es/input-number";import _Input from"antd/es/input";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import{__assign}from"tslib";import React from"react";import AntdFormItem from"@baifendian/adhere-ui-antdformitem";var FormItemGeneratorToDict=AntdFormItem.FormItemGeneratorToDict,_a=AntdFormItem.AntFormItemNormalize,DatePicker=_a.DatePicker,InputNumberDecimal1=_a.InputNumberDecimal1,InputNumberDecimal2=_a.InputNumberDecimal2,InputNumberInteger=_a.InputNumberInteger,RangePicker=_a.RangePicker,TimePicker=_a.TimePicker;export default{render:function(e){var t=e.type,r=e.renderChildren,n=e.props,c=e.dictName,a=(e.form,e.dataIndex,e.rowIndex,{autoFocus:!0});return null==(e=new Map([["input",function(){return React.createElement(_Input,__assign({},a,n||{}))}],["textArea",function(){return React.createElement(_Input.TextArea,__assign({},a,n||{}))}],["inputNumber",function(){return React.createElement(_InputNumber,__assign({},a,n||{}))}],["inputNumberDecimal1",function(){return React.createElement(InputNumberDecimal1,__assign({},a,n||{}))}],["inputNumberDecimal2",function(){return React.createElement(InputNumberDecimal2,__assign({},a,n||{}))}],["inputNumberInteger",function(){return React.createElement(InputNumberInteger,__assign({},a,n||{}))}],["select",function(){var e=FormItemGeneratorToDict["".concat(c,"FormItem")];return React.createElement(e,__assign({},a,n||{}))}],["multiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"MulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["checkAllMultiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"CheckAllMulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["autoCompleteSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"FormItem")];return React.createElement(e,__assign({},a,n||{}))}],["autoCompleteSelectMulti",function(){var e=FormItemGeneratorToDict["".concat(c,"MulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["autoCompleteSelectCheckAllMulti",function(){var e=FormItemGeneratorToDict["".concat(c,"CheckAllMulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["radioHorizontal",function(){var e=FormItemGeneratorToDict["".concat(c,"HorizontalFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["radioButton",function(){var e=FormItemGeneratorToDict["".concat(c,"ButtonFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["radioSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"SelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["radioCustom",function(){var e=FormItemGeneratorToDict["".concat(c,"CustomFormItem")];return React.createElement(e,__assign({},a,n||{}),function(e){return null==r?void 0:r(e)})}],["checkBoxHorizontal",function(){var e=FormItemGeneratorToDict["".concat(c,"HorizontalFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["checkBoxCheckAllHorizontal",function(){var e=FormItemGeneratorToDict["".concat(c,"CheckAllHorizontalFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["checkboxSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"SelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["checkBoxCheckAllSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"CheckAllSelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["checkBoxCustom",function(){var e=FormItemGeneratorToDict["".concat(c,"CustomFormItem")];return React.createElement(e,__assign({},a,n||{}),function(e){return null==r?void 0:r(e)})}],["checkBoxCheckAllCustom",function(){var e=FormItemGeneratorToDict["".concat(c,"CheckAllCustomFormItem")];return React.createElement(e,__assign({},a,n||{}),function(e){return null==r?void 0:r(e)})}],["transferSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"SelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["tableSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"SelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["tableMultiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"MulitSelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["tablePagingSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"PaginationSelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["tablePagingMultiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"PaginationMulitSelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["listSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"SelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["listMultiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"MulitSelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["listPagingSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"PaginationSelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["listPagingMultiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"PaginationMulitSelectFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["treeSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"FormItem")];return React.createElement(e,__assign({},a,n||{}))}],["treeMultiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"MulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["treeSelectLeaf",function(){var e=FormItemGeneratorToDict["".concat(c,"LeafFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["treeMultiSelectLeaf",function(){var e=FormItemGeneratorToDict["".concat(c,"LeafMulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["cascaderSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"FormItem")];return React.createElement(e,__assign({},a,n||{}))}],["cascaderMultiSelect",function(){var e=FormItemGeneratorToDict["".concat(c,"MulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["cascaderSelectLeaf",function(){var e=FormItemGeneratorToDict["".concat(c,"LeafFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["cascaderMultiSelectLeaf",function(){var e=FormItemGeneratorToDict["".concat(c,"LeafMulitFormItem")];return React.createElement(e,__assign({},a,n||{}))}],["datePicker",function(){return React.createElement(DatePicker,__assign({},a,n||{}))}],["timePicker",function(){return React.createElement(TimePicker,__assign({},a,n||{}))}],["rangePicker",function(){return React.createElement(RangePicker,__assign({},a,n||{}))}],["slider",function(){return React.createElement(_Slider,__assign({},a,n||{}))}],["sliderRange",function(){return React.createElement(_Slider,__assign({range:!0},a,n||{}))}],["rate",function(){return React.createElement(_Rate,__assign({},a,n||{}))}],["switch",function(){return React.createElement(_Switch,__assign({},a,n||{}))}]]).get(t))?void 0:e()}};
//# sourceMappingURL=FormItemGenerator.js.map