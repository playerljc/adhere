import _Switch from"antd/es/switch";import _Rate from"antd/es/rate";import _Slider from"antd/es/slider";import _RangePicker from"@baifendian/adhere-ui-anthoc/es/range-picker";import _TimePicker from"@baifendian/adhere-ui-anthoc/es/time-picker";import _DatePicker from"@baifendian/adhere-ui-anthoc/es/date-picker";import _InputNumberInteger from"@baifendian/adhere-ui-anthoc/es/input-number-integer";import _InputNumberDecimal2 from"@baifendian/adhere-ui-anthoc/es/input-number-decimal2";import _InputNumberDecimal from"@baifendian/adhere-ui-anthoc/es/input-number-decimal1";import _InputNumber from"antd/es/input-number";import _Input from"antd/es/input";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};import React from"react";import FieldGeneratorToDict from"@baifendian/adhere-ui-fieldgeneratortodict";var TextArea=_Input.TextArea;export default{render:function(e){var n=e.type,t=e.props,r=e.dictName,i=(e.form,e.dataIndex,e.rowIndex,{autoFocus:!0,zIndex:1051});return null==(e=new Map([["dict",function(){var e;return r?(e=FieldGeneratorToDict.Components[r],React.createElement(e,__assign({},i,null!=t?t:{}))):null}],["input",function(){return React.createElement(_Input,__assign({},i,null!=t?t:{}))}],["textArea",function(){return React.createElement(TextArea,__assign({},i,null!=t?t:{}))}],["inputNumber",function(){return React.createElement(_InputNumber,__assign({},i,null!=t?t:{}))}],["inputNumberDecimal1",function(){return React.createElement(_InputNumberDecimal,__assign({},i,null!=t?t:{}))}],["inputNumberDecimal2",function(){return React.createElement(_InputNumberDecimal2,__assign({},i,null!=t?t:{}))}],["inputNumberInteger",function(){return React.createElement(_InputNumberInteger,__assign({},i,null!=t?t:{}))}],["datePicker",function(){return React.createElement(_DatePicker,__assign({},i,null!=t?t:{}))}],["timePicker",function(){return React.createElement(_TimePicker,__assign({},i,null!=t?t:{}))}],["rangePicker",function(){return React.createElement(_RangePicker,__assign({},i,null!=t?t:{}))}],["slider",function(){return React.createElement(_Slider,__assign({},i,null!=t?t:{}))}],["sliderRange",function(){return React.createElement(_Slider,__assign({range:!0},i,null!=t?t:{}))}],["rate",function(){return React.createElement(_Rate,__assign({},i,null!=t?t:{}))}],["switch",function(){return React.createElement(_Switch,__assign({},i,null!=t?t:{}))}]]).get(n))?void 0:e()}};
//# sourceMappingURL=FormItemGenerator.js.map
