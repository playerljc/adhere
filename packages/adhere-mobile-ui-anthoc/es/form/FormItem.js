import _Form from"antd-mobile/es/components/form";import React,{useMemo}from"react";let FormItem=e=>{let{children:t,...r}=e;e=useMemo(()=>{var e;return"NestingFormItem"===(null==t||null==(e=t.type)?void 0:e.displayName)?"":"onChange"},[t]);return React.createElement(_Form.Item,{validateTrigger:e,...r},t)};export default FormItem;
//# sourceMappingURL=FormItem.js.map
