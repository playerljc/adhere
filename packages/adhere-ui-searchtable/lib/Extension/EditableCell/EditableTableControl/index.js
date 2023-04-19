"use strict";var __createBinding=Object.create?function(e,t,a,n){void 0===n&&(n=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,l)}:function(e,t,a,n){e[n=void 0===n?a:n]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),SearchTable_1=require("../../../SearchTable"),EditableTableControl=function(e){var t=e.className,a=e.styles,n=e.renderEditorTable,l=e.renderSave,r=e.renderCancel,c=e.onEditor,i=e.onSave,o=(0,react_1.useContext)(SearchTable_1.SearchTableContext),u=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("保存"))},[]),d=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("取消"))},[]),_=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("编辑表格"))},[]),f=(0,react_1.useCallback)(function(e){return i?i(e.dataSource).then(function(){return v(e.dataSource)}):v(e.dataSource)},[]),s=(0,react_1.useCallback)(function(){var e;c?null!=(e=null==c?void 0:c())&&e.then(function(){return b()}):b()},[]),v=function(e){var t;return null==(t=null==(t=null==o?void 0:o.context)?void 0:t.updateEditorData(e))?void 0:t.then(function(){return m()})},b=function(){var e,t;null!=(e=null==(t=null==o?void 0:o.context)?void 0:t.setFieldValues)&&e.call(t,null==(e=null==o?void 0:o.context)?void 0:e.getData()),null!=(t=null==o?void 0:o.context)&&t.setState({isTableEditor:!0})},m=function(){var e;return null==(e=null==o?void 0:o.context)?void 0:e.setState({isTableEditor:!1})};return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-editor-table-control"),t),style:a||{}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!(null!=o&&o.context.state.isTableEditor),noMatch:function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-save-cancel")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-save-cancel-item"),onClick:function(){var e,t;return null==(t=null==(e=null==(e=null==(e=null==(e=null==o?void 0:o.editable)?void 0:e.tableEditable)?void 0:e.form)?void 0:e.validateFields())?void 0:e.then)?void 0:t.call(e,function(e){return f(e)})}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!l,noMatch:function(){return null==l?void 0:l()}},function(){return u()})),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-save-cancel-item"),onClick:m},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!r,noMatch:function(){return null==r?void 0:r()}},function(){return d()})))}},function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-table-control-edit"),onClick:s},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!n,noMatch:function(){return null==n?void 0:n()}},function(){return _()}))}))};exports.default=EditableTableControl;
//# sourceMappingURL=index.js.map
