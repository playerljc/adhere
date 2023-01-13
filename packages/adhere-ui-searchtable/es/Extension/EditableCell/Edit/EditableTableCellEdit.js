import _Form from"antd/es/form";import{__assign,__spreadArray}from"tslib";import React,{useContext,useEffect}from"react";import{CheckOutlined,CloseOutlined}from"@ant-design/icons";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import{SearchTableContext,selectorPrefix}from"../../../SearchTable";import FormItemGenerator from"./FormItemGenerator";var EditableTableCellEdit=function(e){var l,t=e.editableConfig,n=t.useTrigger,a=t.useKeepEdit,r=t.renderSaveTrigger,i=t.renderCancelTrigger,d=t.onSave,o=t.onBeforeCancel,c=t.dataIndex,u=t.type,v=t.render,m=t.rules,t=t.formItemProps,s=e.record,f=e.rowIndex,b=e.onTriggerChange,x=useContext(SearchTableContext),g=[null==(g=null==(g=null==(g=null==(g=null==x?void 0:x.editable)?void 0:g.tableEditable)?void 0:g.formList)?void 0:g.fields[f])?void 0:g.name,c],E=__spreadArray(["dataSource"],g,!0),C=_Form.useWatch(E,null==(l=null==(l=null==x?void 0:x.editable)?void 0:l.tableEditable)?void 0:l.form);function I(){var e,l;d&&null!=(l=null==(e=null==(e=null==(l=null==(l=null==(l=null==x?void 0:x.editable)?void 0:l.tableEditable)?void 0:l.form)?void 0:l.validateFields)?void 0:e.call(l))?void 0:e.then)&&l.call(e,function(e){null!=(e=d({value:C,values:e,record:s,dataIndex:c,rowIndex:f}))&&e.then(function(){return null==b?void 0:b()})}),null!=b&&b()}function p(){var e;o?null!=(e=o({value:C,record:s,dataIndex:c,rowIndex:f}))&&e.then(function(){return null==b?void 0:b()}):null!=b&&b()}return useEffect(function(){var e,l;null!=(e=null==(e=null==(e=null==x?void 0:x.editable)?void 0:e.tableEditable)?void 0:e.form)&&e.setFieldValue(E,null==(l=null==(e=null==x?void 0:x.context)?void 0:e.valueToFormItemValue)?void 0:l.call(e,{type:u,record:s,dataIndex:c}))},[null==(l=null==x?void 0:x.context)?void 0:l.getData()]),React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit")},React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-inner")},React.createElement(_Form.Item,__assign({name:g,rules:m},t||{}),"custom"!==u?(l=FormItemGenerator.render({type:u,props:__assign({autoFocus:!a},e.editableConfig.props),dictName:e.editableConfig.dictName,renderChildren:e.editableConfig.renderChildren,form:null==(l=null==(l=null==x?void 0:x.editable)?void 0:l.tableEditable)?void 0:l.form,dataIndex:c,rowIndex:f}),v?v({value:null==s?void 0:s[c],record:s,dataIndex:c,rowIndex:f,form:null==(g=null==(g=null==x?void 0:x.editable)?void 0:g.tableEditable)?void 0:g.form,children:l}):l):null==v?void 0:v({value:null==s?void 0:s[c],record:s,dataIndex:c,rowIndex:f,form:null==(t=null==(m=null==x?void 0:x.editable)?void 0:m.tableEditable)?void 0:t.form}))),React.createElement(ConditionalRender,{conditional:!!n&&!a},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger")},React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger-inner")},React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger-save"),onClick:I},!!r&&(null==r?void 0:r({value:null==s?void 0:s[c],record:s,dataIndex:c,rowIndex:f})),!r&&React.createElement(CheckOutlined,null)),React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger-cancel"),onClick:p},!!i&&(null==i?void 0:i({value:null==s?void 0:s[c],record:s,dataIndex:c,rowIndex:f})),!i&&React.createElement(CloseOutlined,null))))}))};export default EditableTableCellEdit;
//# sourceMappingURL=EditableTableCellEdit.js.map
