import _Upload from"antd/es/upload";import _Rate from"antd/es/rate";import _Slider from"antd/es/slider";import _TreeSelect from"antd/es/tree-select";import _Switch from"antd/es/switch";import _TimePicker from"antd/es/time-picker";import _InputNumber from"antd/es/input-number";import _Select from"antd/es/select";import _Input from"antd/es/input";import _DatePicker from"antd/es/date-picker";import _Radio from"antd/es/radio";import _Checkbox from"antd/es/checkbox";import"core-js/modules/es.array.map.js";import{__assign,__rest}from"tslib";import React from"react";import Intl from"@baifendian/adhere-util-intl";var CheckboxGroup=_Checkbox.Group,RadioGroup=_Radio.Group,RangePicker=_DatePicker.RangePicker,TextArea=_Input.TextArea,Option=_Select.Option,renderText=function(e){e.value;e=__rest(e,["value"]);return React.createElement(_Input,__assign({},e,{readOnly:!0}))},renderInput=function(e){var r=e.type,t=e.maxLength,n=void 0===t?100:t,t=e.placeholder,t=void 0===t?Intl.v("请输入"):t,e=__rest(e,["type","maxLength","placeholder"]);return React.createElement(_Input,__assign({autoComplete:"off",type:r,maxLength:n||100,placeholder:t},e))},renderSearch=function(e){var r=e.maxLength,t=void 0===r?800:r,r=e.placeholder,r=void 0===r?Intl.v("请输入"):r,e=__rest(e,["maxLength","placeholder"]);return React.createElement(_Input.Search,__assign({autoComplete:"off",maxLength:t||800,placeholder:r},e))},renderInputArea=function(e){var r=e.maxLength,t=void 0===r?500:r,n=e.rows,r=void 0===n?4:n,n=e.placeholder,n=void 0===n?Intl.v("请输入"):n,e=__rest(e,["maxLength","rows","placeholder"]);return React.createElement(TextArea,__assign({autoComplete:"off",maxLength:t||500,rows:r,placeholder:n},e))},renderPassword=function(e){var r=e.type,t=e.maxLength,n=void 0===t?800:t,t=e.placeholder,t=void 0===t?Intl.v("请输入"):t,e=__rest(e,["type","maxLength","placeholder"]);return React.createElement(_Input.Password,__assign({autoComplete:"off",type:r,maxLength:n||800,placeholder:t},e))},renderInputNumber=function(e){var r=e.placeholder,t=void 0===r?"请输入":r,n=e.max,r=void 0===n?1/0:n,n=e.min,n=void 0===n?-1/0:n,e=__rest(e,["placeholder","max","min"]);return React.createElement(_InputNumber,__assign({autoComplete:"off",placeholder:t,max:r||1/0,min:n||-1/0},e))},renderRadio=function(e){e=__rest(e,[]);return React.createElement(RadioGroup,__assign({},e))},renderCheckbox=function(e){var r=e.options,e=__rest(e,["options"]);return r.length&&1===r.length?React.createElement(_Checkbox,__assign({},e),r[0].label):React.createElement(CheckboxGroup,__assign({options:r},e))},renderSelect=function(e){function r(e){return(e||[]).map(function(e){return React.createElement(Option,{value:e.value,key:e.value,disabled:e.disabled},o?o(e):e.label)})}var t=e.optGroup,n=e.options,a=e.placeholder,a=void 0===a?Intl.v("请选择"):a,o=e.renderOption,e=__rest(e,["optGroup","options","placeholder","renderOption"]);return React.createElement(_Select,__assign({placeholder:a},e),t&&t.length?t.map(r):r(n))},renderRangePicker=function(e){var r=e.format,e=__rest(e,["format"]);return React.createElement(RangePicker,__assign({format:r},e))},renderDatePicker=function(e){var r=e.format,e=__rest(e,["format"]);return React.createElement(_DatePicker,__assign({format:r},e))},renderTimePicker=function(e){e=__rest(e,[]);return React.createElement(_TimePicker,__assign({},e))},renderSwitch=function(e){return React.createElement(_Switch,__assign({},e))},renderTreeSelect=function(e){var r=e.data,t=e.allowClear,e=__rest(e,["data","allowClear"]);return React.createElement(_TreeSelect,__assign({allowClear:t,treeData:r},e))},renderSlider=function(e){e=__rest(e,[]);return React.createElement(_Slider,__assign({},e))},renderRate=function(e){e=__rest(e,[]);return React.createElement(_Rate,__assign({},e))},renderUpload=function(e){e=__rest(e,[]);return React.createElement(_Upload,__assign({},e))};export default{renderText:renderText,renderInput:renderInput,renderSearch:renderSearch,renderPassword:renderPassword,renderInputArea:renderInputArea,renderInputNumber:renderInputNumber,renderRadio:renderRadio,renderCheckbox:renderCheckbox,renderSelect:renderSelect,renderDatePicker:renderDatePicker,renderRangePicker:renderRangePicker,renderTimePicker:renderTimePicker,renderSwitch:renderSwitch,renderTreeSelect:renderTreeSelect,renderSlider:renderSlider,renderRate:renderRate,renderUpload:renderUpload};
//# sourceMappingURL=formitem.js.map
