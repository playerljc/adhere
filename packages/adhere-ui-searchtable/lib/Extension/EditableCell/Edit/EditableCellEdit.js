"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,l)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),dayjs_1=__importDefault(require("dayjs")),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),SearchTable_1=require("../../../SearchTable"),EditableRow_1=require("../EditableRow"),EventTypes_1=__importDefault(require("../EventTypes")),FormItemGenerator_1=__importDefault(require("./FormItemGenerator")),EditableCellEdit=function(r){var e,t=r.editableConfig,a=t.useTrigger,l=t.useKeepEdit,n=t.renderSaveTrigger,d=t.renderCancelTrigger,i=t.onSave,o=t.onBeforeCancel,c=t.dataIndex,u=t.type,_=t.render,s=t.rules,t=t.formItemProps,f=r.record,v=r.rowIndex,m=r.onTriggerChange,p=(0,react_1.useContext)(EditableRow_1.EditableContext),b=(0,react_1.useContext)(SearchTable_1.SearchTableContext),g=antd_1.Form.useWatch(c,p);function x(){i?null!=p&&p.validateFields().then(function(e){null!=(e=i({value:g,values:e,record:f,dataIndex:c,rowIndex:v}))&&e.then(function(){return null==m?void 0:m()})}):null!=m&&m()}function E(){var e;o?null!=(e=o({value:g,record:f,dataIndex:c,rowIndex:v}))&&e.then(function(){return null==m?void 0:m()}):null!=m&&m()}function I(){var e;return g instanceof dayjs_1.default?null==(e=null==b?void 0:b.context)?void 0:e.updateEditorCellDateData({record:f,dataIndex:c,value:g}):null==(e=null==b?void 0:b.context)?void 0:e.updateEditorCellDate({record:f,dataIndex:c,value:g})}return(0,react_1.useEffect)(function(){var e;null!=p&&p.setFieldValue(c,null==(e=null==b?void 0:b.context)?void 0:e.valueToFormItemValue({type:u,record:f,dataIndex:c}))},[null==(e=null==b?void 0:b.context)?void 0:e.getData()]),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editable-cell-edit")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editable-cell-edit-inner")},react_1.default.createElement(antd_1.Form.Item,__assign({name:c,rules:s},null!=t?t:{}),"custom"!==u?(e=__assign(__assign({autoFocus:!l},r.editableConfig.props),EventTypes_1.default.reduce(function(e,t){return e[t]=function(e){r.editableConfig.props[t]&&r.editableConfig.props[t](e,{form:p,dataIndex:c,rowIndex:v,updateEditorCellData:I})},e},{})),e=FormItemGenerator_1.default.render({type:u,props:e,dictName:r.editableConfig.dictName,form:p,dataIndex:c,rowIndex:v}),_?_({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v,form:p,updateEditorCellData:I,children:e}):e):null==_?void 0:_({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v,form:p,updateEditorCellData:I}))),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a&&!l},function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editable-cell-edit-trigger")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editable-cell-edit-trigger-inner")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editable-cell-edit-trigger-save"),onClick:x},!!n&&(null==n?void 0:n({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v})),!n&&react_1.default.createElement(icons_1.CheckOutlined,null)),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editable-cell-edit-trigger-cancel"),onClick:E},!!d&&(null==d?void 0:d({value:null==f?void 0:f[c],record:f,dataIndex:c,rowIndex:v})),!d&&react_1.default.createElement(icons_1.CloseOutlined,null))))}))};EditableCellEdit.displayName="EditableCellEdit",exports.default=EditableCellEdit;
//# sourceMappingURL=EditableCellEdit.js.map
