import{__assign,__spreadArrays}from"tslib";import{Form}from"antd";import React,{useContext,useEffect}from"react";import{CheckOutlined,CloseOutlined}from"@ant-design/icons";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import{SearchTableContext,selectorPrefix}from"../../../SearchTable";import FormItemGenerator from"./FormItemGenerator";var EditableTableCellEdit=function(e){var l,t=e.editableConfig,n=t.useTrigger,r=t.useKeepEdit,a=t.renderSaveTrigger,i=t.renderCancelTrigger,d=t.onSave,o=t.onBeforeCancel,u=t.dataIndex,c=t.type,v=t.render,m=t.rules,t=t.formItemProps,s=e.record,f=e.rowIndex,b=e.onTriggerChange,x=useContext(SearchTableContext),g=[null==(g=null==(g=null==(g=null==(g=null==x?void 0:x.editable)?void 0:g.tableEditable)?void 0:g.formList)?void 0:g.fields[f])?void 0:g.name,u],E=__spreadArrays(["dataSource"],g),C=Form.useWatch(E,null==(l=null==(l=null==x?void 0:x.editable)?void 0:l.tableEditable)?void 0:l.form);function I(){var e,l;d&&null!=(l=null==(e=null==(e=null==(l=null==(l=null==(l=null==x?void 0:x.editable)?void 0:l.tableEditable)?void 0:l.form)?void 0:l.validateFields)?void 0:e.call(l))?void 0:e.then)&&l.call(e,function(e){null!=(e=d({value:C,values:e,record:s,dataIndex:u,rowIndex:f}))&&e.then(function(){return null==b?void 0:b()})}),null!=b&&b()}function p(){var e;o?null!=(e=o({value:C,record:s,dataIndex:u,rowIndex:f}))&&e.then(function(){return null==b?void 0:b()}):null!=b&&b()}return useEffect(function(){var e,l;null!=(e=null==(e=null==(e=null==x?void 0:x.editable)?void 0:e.tableEditable)?void 0:e.form)&&e.setFieldValue(E,null==(l=null==(e=null==x?void 0:x.context)?void 0:e.valueToFormItemValue)?void 0:l.call(e,{type:c,record:s,dataIndex:u}))},[null==(l=null==x?void 0:x.context)?void 0:l.getData()]),React.createElement("div",{className:selectorPrefix+"-editablecell-edit"},React.createElement("div",{className:selectorPrefix+"-editablecell-edit-inner"},React.createElement(Form.Item,__assign({name:g,rules:m},t||{}),"custom"!==c?(l=FormItemGenerator.render({type:c,props:__assign({autoFocus:!r},e.editableConfig.props),dictName:e.editableConfig.dictName,renderChildren:e.editableConfig.renderChildren,form:null==(l=null==(l=null==x?void 0:x.editable)?void 0:l.tableEditable)?void 0:l.form,dataIndex:u,rowIndex:f}),v?v({value:null==s?void 0:s[u],record:s,dataIndex:u,rowIndex:f,form:null==(g=null==(g=null==x?void 0:x.editable)?void 0:g.tableEditable)?void 0:g.form,children:l}):l):null==v?void 0:v({value:null==s?void 0:s[u],record:s,dataIndex:u,rowIndex:f,form:null==(t=null==(m=null==x?void 0:x.editable)?void 0:m.tableEditable)?void 0:t.form}))),React.createElement(ConditionalRender,{conditional:!!n&&!r},function(){return React.createElement("div",{className:selectorPrefix+"-editablecell-edit-trigger"},React.createElement("div",{className:selectorPrefix+"-editablecell-edit-trigger-inner"},React.createElement("div",{className:selectorPrefix+"-editablecell-edit-trigger-save",onClick:I},!!a&&(null==a?void 0:a({value:null==s?void 0:s[u],record:s,dataIndex:u,rowIndex:f})),!a&&React.createElement(CheckOutlined,null)),React.createElement("div",{className:selectorPrefix+"-editablecell-edit-trigger-cancel",onClick:p},!!i&&(null==i?void 0:i({value:null==s?void 0:s[u],record:s,dataIndex:u,rowIndex:f})),!i&&React.createElement(CloseOutlined,null))))}))};export default EditableTableCellEdit;
//# sourceMappingURL=EditableTableCellEdit.js.map
