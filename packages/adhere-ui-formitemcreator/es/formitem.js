import _Tag from"antd/es/tag";import _Upload from"antd/es/upload";import _Rate from"antd/es/rate";import _Slider from"antd/es/slider";import _TreeSelect from"antd/es/tree-select";import _Switch from"antd/es/switch";import _TimePicker from"antd/es/time-picker";import _InputNumber from"antd/es/input-number";import _Select from"antd/es/select";import _Input from"antd/es/input";import _DatePicker from"antd/es/date-picker";import _Radio from"antd/es/radio";import _Checkbox from"antd/es/checkbox";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.slice.js";import{__assign,__rest,__spreadArray}from"tslib";import React,{memo,useState,useEffect,useRef}from"react";import Intl from"@baifendian/adhere-util-intl";var CheckboxGroup=_Checkbox.Group,RadioGroup=_Radio.Group,RangePicker=_DatePicker.RangePicker,TextArea=_Input.TextArea,Option=_Select.Option,renderText=memo(function(e){e=__rest(e,[]);return React.createElement(_Input,__assign({},e,{readOnly:!0}))}),renderInput=memo(function(e){var r=e.type,t=e.maxLength,t=void 0===t?100:t,n=e.placeholder,n=void 0===n?Intl.v("请输入"):n,e=__rest(e,["type","maxLength","placeholder"]);return React.createElement(_Input,__assign({autoComplete:"off",type:r,maxLength:t||100,placeholder:n},e))}),renderSearch=memo(function(e){var r=e.maxLength,r=void 0===r?800:r,t=e.placeholder,t=void 0===t?Intl.v("请输入"):t,e=__rest(e,["maxLength","placeholder"]);return React.createElement(_Input.Search,__assign({autoComplete:"off",maxLength:r||800,placeholder:t},e))}),renderInputArea=memo(function(e){var r=e.maxLength,r=void 0===r?500:r,t=e.rows,t=void 0===t?4:t,n=e.placeholder,n=void 0===n?Intl.v("请输入"):n,e=__rest(e,["maxLength","rows","placeholder"]);return React.createElement(TextArea,__assign({autoComplete:"off",maxLength:r||500,rows:t,placeholder:n},e))}),renderPassword=memo(function(e){var r=e.type,t=e.maxLength,t=void 0===t?800:t,n=e.placeholder,n=void 0===n?Intl.v("请输入"):n,e=__rest(e,["type","maxLength","placeholder"]);return React.createElement(_Input.Password,__assign({autoComplete:"off",type:r,maxLength:t||800,placeholder:n},e))}),renderInputNumber=memo(function(e){var r=e.placeholder,r=void 0===r?"请输入":r,t=e.max,t=void 0===t?1/0:t,n=e.min,n=void 0===n?-1/0:n,e=__rest(e,["placeholder","max","min"]);return React.createElement(_InputNumber,__assign({autoComplete:"off",placeholder:r,max:t||1/0,min:n||-1/0},e))}),renderRadio=memo(function(e){e=__rest(e,[]);return React.createElement(RadioGroup,__assign({},e))}),renderCheckbox=memo(function(e){var r=e.options,e=__rest(e,["options"]);return r.length&&1===r.length?React.createElement(_Checkbox,__assign({},e),r[0].label):React.createElement(CheckboxGroup,__assign({options:r},e))}),renderSelect=memo(function(e){function r(e){return(e||[]).map(function(e){return React.createElement(Option,{value:e.value,key:e.value,disabled:e.disabled},o?o(e):e.label)})}var t=e.optGroup,n=e.options,a=e.placeholder,a=void 0===a?Intl.v("请选择"):a,o=e.renderOption,i=e.autoComplete,e=__rest(e,["optGroup","options","placeholder","renderOption","autoComplete"]),c=useState(""),l=c[0],s=c[1];return React.createElement(_Select,__assign({placeholder:a,optionFilterProp:"children",onSearch:function(e){return s(e)}},e,{showSearch:e.showSearch||i}),t&&t.length?t.map(r):r(!(null!=(c=n)&&c.length&&i&&l)||e.mode||null!=c&&c.find(function(e){return e.value&&e.value.toString()===l||e.label&&e.label.toString()===l})?c:__spreadArray(__spreadArray([],c,!0),[{label:l,value:l}],!1)))}),renderRangePicker=memo(function(e){e=__rest(e,[]);return React.createElement(RangePicker,__assign({},e))}),renderDatePicker=memo(function(e){e=__rest(e,[]);return React.createElement(_DatePicker,__assign({},e))}),renderTimePicker=memo(function(e){e=__rest(e,[]);return React.createElement(_TimePicker,__assign({},e))}),renderSwitch=memo(function(e){return React.createElement(_Switch,__assign({},e))}),renderTreeSelect=memo(function(e){e=__rest(e,[]);return React.createElement(_TreeSelect,__assign({},e))}),renderSlider=memo(function(e){e=__rest(e,[]);return React.createElement(_Slider,__assign({},e))}),renderRate=memo(function(e){e=__rest(e,[]);return React.createElement(_Rate,__assign({},e))}),renderUpload=memo(function(e){e=__rest(e,[]);return React.createElement(_Upload,__assign({},e))}),Tags=function(e){function t(e){(e?((e=__spreadArray([],l,!0))[g]=p,s(e),h(-1),f):(u&&-1===l.indexOf(u)&&s(__spreadArray(__spreadArray([],l,!0),[u],!1)),d(!1),_))("")}function n(e,r){return void 0===r&&(r=!1),React.createElement(_Input,{type:"text",key:r?e:"",ref:r?R:v,size:"small",maxLength:100,className:"form-item-tag-input",value:e,onChange:function(e){return(r?f:_)(e.target.value)},onPressEnter:function(){return t(r)},onBlur:function(){return t(r)}})}function a(t,r){var e=t.length>o;return React.createElement(_Tag,{className:"form-item-tag",key:t,closable:!i,onClose:function(){var r,e;r=t,e=l.filter(function(e){return e!==r}),s(e)}},React.createElement("span",{onDoubleClick:function(e){i||(h(r),f(t),e.preventDefault())}},e?"".concat(t.slice(0,20),"..."):t))}var r=e.longLimit,o=void 0===r?20:r,i=e.disabled,r=e.addTagInner,r=void 0===r?"+":r,c=useState(e.value||[]),l=c[0],s=c[1],c=useState(!1),m=c[0],d=c[1],c=useState(""),u=c[0],_=c[1],c=useState(""),p=c[0],f=c[1],c=useState(-1),g=c[0],h=c[1],v=useRef(null),R=useRef(null);useEffect(function(){var e;m&&null!=(e=v.current)&&e.focus()},[m,u]),useEffect(function(){var e;null!=(e=R.current)&&e.focus()},[p]),useEffect(function(){JSON.stringify(e.value)!==JSON.stringify(l)&&s(e.value||[])},[e.value]),useEffect(function(){e.onChange&&e.onChange(l)},[l]);return React.createElement("div",{className:"form-item-tag"},null==l?void 0:l.map(function(e,r){return r===g?n(p,!0):a(e,r)}),i?"":m?n(u,!1):React.createElement(_Tag,{className:"form-item-tag-add",onClick:function(){return d(!0)}},r))},renderTag=memo(function(e){return React.createElement(Tags,__assign({},e))});export default{renderText:renderText,renderInput:renderInput,renderSearch:renderSearch,renderPassword:renderPassword,renderInputArea:renderInputArea,renderInputNumber:renderInputNumber,renderRadio:renderRadio,renderCheckbox:renderCheckbox,renderSelect:renderSelect,renderDatePicker:renderDatePicker,renderRangePicker:renderRangePicker,renderTimePicker:renderTimePicker,renderSwitch:renderSwitch,renderTreeSelect:renderTreeSelect,renderSlider:renderSlider,renderRate:renderRate,renderTag:renderTag,renderUpload:renderUpload};
//# sourceMappingURL=formitem.js.map
