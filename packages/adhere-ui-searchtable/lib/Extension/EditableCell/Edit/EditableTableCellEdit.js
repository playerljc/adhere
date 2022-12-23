"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),react_1=tslib_1.__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),SearchTable_1=require("../../../SearchTable"),FormItemGenerator_1=tslib_1.__importDefault(require("./FormItemGenerator")),EditableTableCellEdit=function(e){var l=e.editableConfig,r=l.useTrigger,t=l.useKeepEdit,a=l.renderSaveTrigger,n=l.renderCancelTrigger,d=l.onSave,i=l.onBeforeCancel,o=l.dataIndex,c=l.type,u=l.render,s=l.rules,l=l.formItemProps,_=e.record,f=e.rowIndex,v=e.onTriggerChange,m=(0,react_1.useContext)(SearchTable_1.SearchTableContext),b=[null==(b=null==(b=null==m?void 0:m.formList)?void 0:b.fields[f])?void 0:b.name,o],x=tslib_1.__spreadArray(["dataSource"],b,!0),g=antd_1.Form.useWatch(x,null==m?void 0:m.form);function I(){var e,l;null!=(l=null==(e=null==(e=null==(l=null==m?void 0:m.form)?void 0:l.validateFields)?void 0:e.call(l))?void 0:e.then)&&l.call(e,function(e){d?null!=(e=d({value:g,values:e,record:_,dataIndex:o,rowIndex:f}))&&e.then(function(){return null==v?void 0:v()}):null!=v&&v()})}function h(){var e;i?null!=(e=i({value:g,record:_,dataIndex:o,rowIndex:f}))&&e.then(function(){return null==v?void 0:v()}):null!=v&&v()}return(0,react_1.useEffect)(function(){var e,l;null!=(e=null==m?void 0:m.form)&&e.setFieldValue(x,null==(l=null==(e=null==m?void 0:m.context)?void 0:e.valueToFormItemValue)?void 0:l.call(e,{type:c,record:_,dataIndex:o}))},[null==_?void 0:_[o]]),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-inner")},react_1.default.createElement(antd_1.Form.Item,tslib_1.__assign({name:b,rules:s},l||{}),"custom"!==c?(b=FormItemGenerator_1.default.render({type:c,props:tslib_1.__assign({autoFocus:!t},e.editableConfig.props),dictName:e.editableConfig.dictName,renderChildren:e.editableConfig.renderChildren,form:null==m?void 0:m.form,dataIndex:o,rowIndex:f}),u?u({value:null==_?void 0:_[o],record:_,dataIndex:o,rowIndex:f,form:null==m?void 0:m.form,children:b}):b):null==u?void 0:u({value:null==_?void 0:_[o],record:_,dataIndex:o,rowIndex:f,form:null==m?void 0:m.form}))),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r&&!t},function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-inner")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-save"),onClick:I},!!a&&(null==a?void 0:a({value:null==_?void 0:_[o],record:_,dataIndex:o,rowIndex:f})),!a&&react_1.default.createElement(icons_1.CheckOutlined,null)),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-cancel"),onClick:h},!!n&&(null==n?void 0:n({value:null==_?void 0:_[o],record:_,dataIndex:o,rowIndex:f})),!n&&react_1.default.createElement(icons_1.CloseOutlined,null))))}))};exports.default=EditableTableCellEdit;
//# sourceMappingURL=EditableTableCellEdit.js.map