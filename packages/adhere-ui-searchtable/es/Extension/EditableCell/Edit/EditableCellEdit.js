import _CloseOutlined from"@ant-design/icons/es/icons/CloseOutlined";import _CheckOutlined from"@ant-design/icons/es/icons/CheckOutlined";import _Form from"antd/es/form";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};import dayjs from"dayjs";import React,{useContext,useEffect,useMemo}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Util from"@baifendian/adhere-util";import{SearchTableContext,selectorPrefix}from"../../../SearchTable";import{EditableContext}from"../EditableRow";import EventTypes from"../EventTypes";import FormItemGenerator from"./FormItemGenerator";var EditableCellEdit=function(e){var t,n=e.editableConfig,r=n.useTrigger,l=n.useKeepEdit,a=n.renderSaveTrigger,o=n.renderCancelTrigger,i=n.onSave,d=n.onBeforeCancel,c=n.dataIndex,u=n.type,s=n.render,m=n.rules,n=n.formItemProps,f=e.record,v=e.rowIndex,x=e.onTriggerChange,p=useContext(EditableContext),C=useContext(SearchTableContext),g=_Form.useWatch(c,p);function E(){i?null!=p&&p.validateFields().then(function(e){null!=(e=i({value:g,values:e,record:f,dataIndex:c,rowIndex:v}))&&e.then(function(){return null==x?void 0:x()})}):null!=x&&x()}function I(){var e;d?null!=(e=d({value:g,record:f,dataIndex:c,rowIndex:v}))&&e.then(function(){return null==x?void 0:x()}):null!=x&&x()}function b(){var e;return g instanceof dayjs?null==(e=null==C?void 0:C.context)?void 0:e.updateEditorCellDateData({record:f,dataIndex:c,value:g}):null==(e=null==C?void 0:C.context)?void 0:e.updateEditorCellDate({record:f,dataIndex:c,value:g})}var h,_,R=useMemo(function(){return Util.isFunction(m)?m({record:f,value:g,rowIndex:v,dataIndex:c}):m},[m,f,g,v,c]);return useEffect(function(){var e;null!=p&&p.setFieldValue(c,null==(e=null==C?void 0:C.context)?void 0:e.valueToFormItemValue({type:u,record:f,dataIndex:c}))},[null==(t=null==C?void 0:C.context)?void 0:t.getData()]),React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-edit")},React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-edit-inner")},React.createElement(_Form.Item,__assign({name:c,rules:null!=R?R:[]},null!=n?n:{}),"custom"!==u?(h=Util.isFunction(e.editableConfig.props)?null!=(_=e.editableConfig.props({record:f,dataIndex:c,rowIndex:v}))?_:{}:null!=(_=e.editableConfig.props)?_:{},_=__assign(__assign({autoFocus:!l},h),EventTypes.reduce(function(e,t){return e[t]=function(e){h[t]&&h[t](e,{form:p,dataIndex:c,rowIndex:v,updateEditorCellData:b})},e},{})),_=FormItemGenerator.render({type:u,props:_,dictName:e.editableConfig.dictName,form:p,dataIndex:c,rowIndex:v}),s?s({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v,form:p,updateEditorCellData:b,children:_}):_):null==s?void 0:s({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v,form:p,updateEditorCellData:b}))),React.createElement(ConditionalRender,{conditional:!!r&&!l},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-edit-trigger")},React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-edit-trigger-inner")},React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-edit-trigger-save"),onClick:E},!!a&&(null==a?void 0:a({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v})),!a&&React.createElement(_CheckOutlined,null)),React.createElement("div",{className:"".concat(selectorPrefix,"-editable-cell-edit-trigger-cancel"),onClick:I},!!o&&(null==o?void 0:o({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v})),!o&&React.createElement(_CloseOutlined,null))))}))};EditableCellEdit.displayName="EditableCellEdit";export default EditableCellEdit;
//# sourceMappingURL=EditableCellEdit.js.map
