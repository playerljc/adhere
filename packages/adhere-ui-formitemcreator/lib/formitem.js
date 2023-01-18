var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||((n=n||Array.prototype.slice.call(r,0,a))[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))};import{Checkbox,DatePicker,Input,InputNumber,Radio,Rate,Select,Slider,Switch,TimePicker,TreeSelect,Upload,Tag}from"antd";import React,{memo,useState,useEffect,useRef}from"react";import Intl from"@baifendian/adhere-util-intl";var CheckboxGroup=Checkbox.Group,RadioGroup=Radio.Group,RangePicker=DatePicker.RangePicker,TextArea=Input.TextArea,Option=Select.Option,renderText=memo(function(e){e=__rest(e,[]);return React.createElement(Input,__assign({},e,{readOnly:!0}))}),renderInput=memo(function(e){var r=e.type,t=e.maxLength,t=void 0===t?100:t,n=e.placeholder,n=void 0===n?Intl.v("请输入"):n,e=__rest(e,["type","maxLength","placeholder"]);return React.createElement(Input,__assign({autoComplete:"off",type:r,maxLength:t||100,placeholder:n},e))}),renderSearch=memo(function(e){var r=e.maxLength,r=void 0===r?800:r,t=e.placeholder,t=void 0===t?Intl.v("请输入"):t,e=__rest(e,["maxLength","placeholder"]);return React.createElement(Input.Search,__assign({autoComplete:"off",maxLength:r||800,placeholder:t},e))}),renderInputArea=memo(function(e){var r=e.maxLength,r=void 0===r?500:r,t=e.rows,t=void 0===t?4:t,n=e.placeholder,n=void 0===n?Intl.v("请输入"):n,e=__rest(e,["maxLength","rows","placeholder"]);return React.createElement(TextArea,__assign({autoComplete:"off",maxLength:r||500,rows:t,placeholder:n},e))}),renderPassword=memo(function(e){var r=e.type,t=e.maxLength,t=void 0===t?800:t,n=e.placeholder,n=void 0===n?Intl.v("请输入"):n,e=__rest(e,["type","maxLength","placeholder"]);return React.createElement(Input.Password,__assign({autoComplete:"off",type:r,maxLength:t||800,placeholder:n},e))}),renderInputNumber=memo(function(e){var r=e.placeholder,r=void 0===r?"请输入":r,t=e.max,t=void 0===t?1/0:t,n=e.min,n=void 0===n?-1/0:n,e=__rest(e,["placeholder","max","min"]);return React.createElement(InputNumber,__assign({autoComplete:"off",placeholder:r,max:t||1/0,min:n||-1/0},e))}),renderRadio=memo(function(e){e=__rest(e,[]);return React.createElement(RadioGroup,__assign({},e))}),renderCheckbox=memo(function(e){var r=e.options,e=__rest(e,["options"]);return r.length&&1===r.length?React.createElement(Checkbox,__assign({},e),r[0].label):React.createElement(CheckboxGroup,__assign({options:r},e))}),renderSelect=memo(function(e){function r(e){return(e||[]).map(function(e){return React.createElement(Option,{value:e.value,key:e.value,disabled:e.disabled},o?o(e):e.label)})}var t=e.optGroup,n=e.options,a=e.placeholder,a=void 0===a?Intl.v("请选择"):a,o=e.renderOption,c=e.autoComplete,e=__rest(e,["optGroup","options","placeholder","renderOption","autoComplete"]),i=useState(""),l=i[0],u=i[1];return React.createElement(Select,__assign({placeholder:a,optionFilterProp:"children",onSearch:function(e){return u(e)}},e,{showSearch:e.showSearch||c}),t&&t.length?t.map(r):r(!(null!=(i=n)&&i.length&&c&&l)||e.mode||null!=i&&i.find(function(e){return e.value&&e.value.toString()===l||e.label&&e.label.toString()===l})?i:__spreadArray(__spreadArray([],i,!0),[{label:l,value:l}],!1)))}),renderRangePicker=memo(function(e){e=__rest(e,[]);return React.createElement(RangePicker,__assign({},e))}),renderDatePicker=memo(function(e){e=__rest(e,[]);return React.createElement(DatePicker,__assign({},e))}),renderTimePicker=memo(function(e){e=__rest(e,[]);return React.createElement(TimePicker,__assign({},e))}),renderSwitch=memo(function(e){return React.createElement(Switch,__assign({},e))}),renderTreeSelect=memo(function(e){e=__rest(e,[]);return React.createElement(TreeSelect,__assign({},e))}),renderSlider=memo(function(e){e=__rest(e,[]);return React.createElement(Slider,__assign({},e))}),renderRate=memo(function(e){e=__rest(e,[]);return React.createElement(Rate,__assign({},e))}),renderUpload=memo(function(e){e=__rest(e,[]);return React.createElement(Upload,__assign({},e))}),Tags=function(e){function t(e){(e?((e=__spreadArray([],l,!0))[h]=f,u(e),g(-1),_):(m&&-1===l.indexOf(m)&&u(__spreadArray(__spreadArray([],l,!0),[m],!1)),d(!1),p))("")}function n(e,r){return void 0===r&&(r=!1),React.createElement(Input,{type:"text",key:r?e:"",ref:r?R:v,size:"small",maxLength:100,className:"form-item-tag-input",value:e,onChange:function(e){return(r?_:p)(e.target.value)},onPressEnter:function(){return t(r)},onBlur:function(){return t(r)}})}function a(t,r){var e=t.length>o;return React.createElement(Tag,{className:"form-item-tag",key:t,closable:!c,onClose:function(){var r,e;r=t,e=l.filter(function(e){return e!==r}),u(e)}},React.createElement("span",{onDoubleClick:function(e){c||(g(r),_(t),e.preventDefault())}},e?"".concat(t.slice(0,20),"..."):t))}var r=e.longLimit,o=void 0===r?20:r,c=e.disabled,r=e.addTagInner,r=void 0===r?"+":r,i=useState(e.value||[]),l=i[0],u=i[1],i=useState(!1),s=i[0],d=i[1],i=useState(""),m=i[0],p=i[1],i=useState(""),f=i[0],_=i[1],i=useState(-1),h=i[0],g=i[1],v=useRef(null),R=useRef(null);useEffect(function(){var e;s&&null!=(e=v.current)&&e.focus()},[s,m]),useEffect(function(){var e;null!=(e=R.current)&&e.focus()},[f]),useEffect(function(){JSON.stringify(e.value)!==JSON.stringify(l)&&u(e.value||[])},[e.value]),useEffect(function(){e.onChange&&e.onChange(l)},[l]);return React.createElement("div",{className:"form-item-tag"},null==l?void 0:l.map(function(e,r){return r===h?n(f,!0):a(e,r)}),c?"":s?n(m,!1):React.createElement(Tag,{className:"form-item-tag-add",onClick:function(){return d(!0)}},r))},renderTag=memo(function(e){return React.createElement(Tags,__assign({},e))});export default{renderText:renderText,renderInput:renderInput,renderSearch:renderSearch,renderPassword:renderPassword,renderInputArea:renderInputArea,renderInputNumber:renderInputNumber,renderRadio:renderRadio,renderCheckbox:renderCheckbox,renderSelect:renderSelect,renderDatePicker:renderDatePicker,renderRangePicker:renderRangePicker,renderTimePicker:renderTimePicker,renderSwitch:renderSwitch,renderTreeSelect:renderTreeSelect,renderSlider:renderSlider,renderRate:renderRate,renderTag:renderTag,renderUpload:renderUpload};
//# sourceMappingURL=formitem.js.map
