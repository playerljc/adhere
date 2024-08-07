var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import{useMount,useUpdateEffect}from"ahooks";import React,{forwardRef,memo,useImperativeHandle}from"react";import Form from"./Form";var InternalNestingFormItem=memo(forwardRef(function(e,t){var n=e.className,r=e.style,o=e.formProps,a=e.value,s=e.onChange,e=e.children,i=Form.useForm()[0];function m(){return i.validateFields().then(function(){}).catch(function(e){return new Error(e)})}return useMount(function(){i.setFieldsValue(a)}),useUpdateEffect(function(){i.setFieldsValue(a)},[a]),useImperativeHandle(t,function(){return{validateFields:m}}),React.createElement(Form,__assign({ref:t,className:null!=n?n:"",style:null!=r?r:{},form:i},null!=o?o:{},{onValuesChange:function(e,t){null!=s&&s(t)}}),e)})),NestingFormItem=InternalNestingFormItem;NestingFormItem.displayName="NestingFormItem";export default NestingFormItem;
//# sourceMappingURL=NestingFormItem.js.map
