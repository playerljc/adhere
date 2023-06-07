"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var l,t=1,r=arguments.length;t<r;t++)for(var a in l=arguments[t])Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,l,t,r){void 0===r&&(r=t);var a=Object.getOwnPropertyDescriptor(l,t);a&&("get"in a?l.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return l[t]}}),Object.defineProperty(e,r,a)}:function(e,l,t,r){e[r=void 0===r?t:r]=l[t]},__setModuleDefault=Object.create?function(e,l){Object.defineProperty(e,"default",{enumerable:!0,value:l})}:function(e,l){e.default=l},__importStar=function(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(l,e,t);return __setModuleDefault(l,e),l},__spreadArray=function(e,l,t){if(t||2===arguments.length)for(var r,a=0,n=l.length;a<n;a++)!r&&a in l||((r=r||Array.prototype.slice.call(l,0,a))[a]=l[a]);return e.concat(r||Array.prototype.slice.call(l))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),SearchTable_1=require("../../../SearchTable"),FormItemGenerator_1=__importDefault(require("./FormItemGenerator")),EditableTableCellEdit=function(e){var l,t=e.editableConfig,r=t.useTrigger,a=t.useKeepEdit,n=t.renderSaveTrigger,i=t.renderCancelTrigger,d=t.onSave,o=t.onBeforeCancel,c=t.dataIndex,u=t.type,f=t.render,_=t.rules,t=t.formItemProps,s=e.record,v=e.rowIndex,b=e.onTriggerChange,m=(0,react_1.useContext)(SearchTable_1.SearchTableContext),g=[null==(g=null==(g=null==(g=null==(g=null==m?void 0:m.editable)?void 0:g.tableEditable)?void 0:g.formList)?void 0:g.fields[v])?void 0:g.name,c],p=__spreadArray(["dataSource"],g,!0),h=antd_1.Form.useWatch(p,null==(l=null==(l=null==m?void 0:m.editable)?void 0:l.tableEditable)?void 0:l.form);function x(){var e,l;d&&null!=(l=null==(e=null==(e=null==(l=null==(l=null==(l=null==m?void 0:m.editable)?void 0:l.tableEditable)?void 0:l.form)?void 0:l.validateFields)?void 0:e.call(l))?void 0:e.then)&&l.call(e,function(e){null!=(e=d({value:h,values:e,record:s,dataIndex:c,rowIndex:v}))&&e.then(function(){return null==b?void 0:b()})}),null!=b&&b()}function E(){var e;o?null!=(e=o({value:h,record:s,dataIndex:c,rowIndex:v}))&&e.then(function(){return null==b?void 0:b()}):null!=b&&b()}return(0,react_1.useEffect)(function(){var e,l;null!=(e=null==(e=null==(e=null==m?void 0:m.editable)?void 0:e.tableEditable)?void 0:e.form)&&e.setFieldValue(p,null==(l=null==(e=null==m?void 0:m.context)?void 0:e.valueToFormItemValue)?void 0:l.call(e,{type:u,record:s,dataIndex:c}))},[null==(l=null==m?void 0:m.context)?void 0:l.getData()]),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-inner")},react_1.default.createElement(antd_1.Form.Item,__assign({name:g,rules:_},null!=t?t:{}),"custom"!==u?FormItemGenerator_1.default.render({type:u,props:__assign({autoFocus:!a},e.editableConfig.props),dictName:e.editableConfig.dictName,renderChildren:e.editableConfig.renderChildren,form:null==(l=null==(l=null==m?void 0:m.editable)?void 0:l.tableEditable)?void 0:l.form,dataIndex:c,rowIndex:v}):null==f?void 0:f({value:null==s?void 0:s[c],record:s,dataIndex:c,rowIndex:v,form:null==(_=null==(g=null==m?void 0:m.editable)?void 0:g.tableEditable)?void 0:_.form}))),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!r&&!a},function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-inner")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-save"),onClick:x},!!n&&(null==n?void 0:n({value:null==s?void 0:s[c],record:s,dataIndex:c,rowIndex:v})),!n&&react_1.default.createElement(icons_1.CheckOutlined,null)),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-edit-trigger-cancel"),onClick:E},!!i&&(null==i?void 0:i({value:null==s?void 0:s[c],record:s,dataIndex:c,rowIndex:v})),!i&&react_1.default.createElement(icons_1.CloseOutlined,null))))}))};exports.default=EditableTableCellEdit;
//# sourceMappingURL=EditableTableCellEdit.js.map
