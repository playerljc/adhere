import _Form from"antd/es/form";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var l,t=1,n=arguments.length;t<n;t++)for(var r in l=arguments[t])Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,l,t){if(t||2===arguments.length)for(var n,r=0,a=l.length;r<a;r++)!n&&r in l||((n=n||Array.prototype.slice.call(l,0,r))[r]=l[r]);return e.concat(n||Array.prototype.slice.call(l))};import React,{useContext,useEffect}from"react";import{CheckOutlined,CloseOutlined}from"@ant-design/icons";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import{SearchTableContext,selectorPrefix}from"../../../SearchTable";import FormItemGenerator from"./FormItemGenerator";var EditableTableCellEdit=function(e){var l,t=e.editableConfig,n=t.useTrigger,r=t.useKeepEdit,a=t.renderSaveTrigger,i=t.renderCancelTrigger,o=t.onSave,d=t.onBeforeCancel,c=t.dataIndex,u=t.type,s=t.render,v=t.rules,t=t.formItemProps,m=e.record,f=e.rowIndex,b=e.onTriggerChange,g=useContext(SearchTableContext),x=[null==(x=null==(x=null==(x=null==(x=null==g?void 0:g.editable)?void 0:x.tableEditable)?void 0:x.formList)?void 0:x.fields[f])?void 0:x.name,c],p=(console.log("record",f,x,m.name),__spreadArray(["dataSource"],x,!0)),C=_Form.useWatch(p,null==(l=null==(l=null==g?void 0:g.editable)?void 0:l.tableEditable)?void 0:l.form);function E(){var e,l;o&&null!=(l=null==(e=null==(e=null==(l=null==(l=null==(l=null==g?void 0:g.editable)?void 0:l.tableEditable)?void 0:l.form)?void 0:l.validateFields)?void 0:e.call(l))?void 0:e.then)&&l.call(e,function(e){null!=(e=o({value:C,values:e,record:m,dataIndex:c,rowIndex:f}))&&e.then(function(){return null==b?void 0:b()})}),null!=b&&b()}function h(){var e;d?null!=(e=d({value:C,record:m,dataIndex:c,rowIndex:f}))&&e.then(function(){return null==b?void 0:b()}):null!=b&&b()}return useEffect(function(){var e,l;null!=(e=null==(e=null==(e=null==g?void 0:g.editable)?void 0:e.tableEditable)?void 0:e.form)&&e.setFieldValue(p,null==(l=null==(e=null==g?void 0:g.context)?void 0:e.valueToFormItemValue)?void 0:l.call(e,{type:u,record:m,dataIndex:c}))},[null==(l=null==g?void 0:g.context)?void 0:l.getData()]),React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit")},React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-inner")},React.createElement(_Form.Item,__assign({name:x,rules:v},t||{}),"custom"!==u?FormItemGenerator.render({type:u,props:__assign({autoFocus:!r},e.editableConfig.props),dictName:e.editableConfig.dictName,renderChildren:e.editableConfig.renderChildren,form:null==(l=null==(l=null==g?void 0:g.editable)?void 0:l.tableEditable)?void 0:l.form,dataIndex:c,rowIndex:f}):null==s?void 0:s({value:null==m?void 0:m[c],record:m,dataIndex:c,rowIndex:f,form:null==(v=null==(x=null==g?void 0:g.editable)?void 0:x.tableEditable)?void 0:v.form}))),React.createElement(ConditionalRender,{conditional:!!n&&!r},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger")},React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger-inner")},React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger-save"),onClick:E},!!a&&(null==a?void 0:a({value:null==m?void 0:m[c],record:m,dataIndex:c,rowIndex:f})),!a&&React.createElement(CheckOutlined,null)),React.createElement("div",{className:"".concat(selectorPrefix,"-editablecell-edit-trigger-cancel"),onClick:h},!!i&&(null==i?void 0:i({value:null==m?void 0:m[c],record:m,dataIndex:c,rowIndex:f})),!i&&React.createElement(CloseOutlined,null))))}))};export default EditableTableCellEdit;
//# sourceMappingURL=EditableTableCellEdit.js.map
