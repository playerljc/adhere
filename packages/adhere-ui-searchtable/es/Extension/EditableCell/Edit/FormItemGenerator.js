import _Switch from"antd/es/switch";import _Rate from"antd/es/rate";import _Slider from"antd/es/slider";import _RangePicker from"@baifendian/adhere-ui-anthoc/es/range-picker";import _TimePicker from"@baifendian/adhere-ui-anthoc/es/time-picker";import _DatePicker from"@baifendian/adhere-ui-anthoc/es/date-picker";import _InputNumberInteger from"@baifendian/adhere-ui-anthoc/es/input-number-integer";import _InputNumberDecimal2 from"@baifendian/adhere-ui-anthoc/es/input-number-decimal2";import _InputNumberDecimal from"@baifendian/adhere-ui-anthoc/es/input-number-decimal1";import _InputNumber from"antd/es/input-number";import _Input from"antd/es/input";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};import React from"react";import FieldGeneratorToDict from"@baifendian/adhere-ui-fieldgeneratortodict";var FormItemGeneratorToDict=FieldGeneratorToDict.FormItemGeneratorToDict;export default{render:function(e){var t=e.type,n=e.renderChildren,r=e.props,i=e.dictName,a=(e.form,e.dataIndex,e.rowIndex,{autoFocus:!0,zIndex:1051});return null==(e=new Map([["dict",function(){var e=FormItemGeneratorToDict["".concat(i,"FormItem")];return-1!==(null==i?void 0:i.indexOf("CustomFormItem"))?React.createElement(e,__assign({},a,r||{}),function(e){return null==n?void 0:n(e)}):React.createElement(e,__assign({},a,r||{}))}],["input",function(){return React.createElement(_Input,__assign({},a,r||{}))}],["textArea",function(){return React.createElement(_Input.TextArea,__assign({},a,r||{}))}],["inputNumber",function(){return React.createElement(_InputNumber,__assign({},a,r||{}))}],["inputNumberDecimal1",function(){return React.createElement(_InputNumberDecimal,__assign({},a,r||{}))}],["inputNumberDecimal2",function(){return React.createElement(_InputNumberDecimal2,__assign({},a,r||{}))}],["inputNumberInteger",function(){return React.createElement(_InputNumberInteger,__assign({},a,r||{}))}],["datePicker",function(){return React.createElement(_DatePicker,__assign({},a,r||{}))}],["timePicker",function(){return React.createElement(_TimePicker,__assign({},a,r||{}))}],["rangePicker",function(){return React.createElement(_RangePicker,__assign({},a,r||{}))}],["slider",function(){return React.createElement(_Slider,__assign({},a,r||{}))}],["sliderRange",function(){return React.createElement(_Slider,__assign({range:!0},a,r||{}))}],["rate",function(){return React.createElement(_Rate,__assign({},a,r||{}))}],["switch",function(){return React.createElement(_Switch,__assign({},a,r||{}))}]]).get(t))?void 0:e()}};
//# sourceMappingURL=FormItemGenerator.js.map
