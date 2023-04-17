"use strict";var __extends=function(){var o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||((o=o||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),SearchTable_1=require("../SearchTable"),util_1=require("../util");function default_1(e){return __extends(t,r=e),t.prototype.onTableRowComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?__spreadArray(__spreadArray([],this.tableRowComponentReducers,!0),["useEditableTableRow"],!1):this.tableRowComponentReducers},t.prototype.onTableCellComponentReducers=function(e){return e.some(function(e){return"$editable"in e&&(null==(e=e.$editable)?void 0:e.editable)})?__spreadArray(__spreadArray([],this.tableCellComponentReducers,!0),["useEditableTableCell"],!1):this.tableCellComponentReducers},t.prototype.rowEditableReducer=function(e){var t=e.rowConfig,r=e.rowIndex,o=e.columns,e=e.record;return this.onEditorRow&&(t.$editable=this.onEditorRow({rowIndex:r,record:e,columns:o})),t},t.prototype.onEditorRow=function(e){return{editable:!0}},t.prototype.onEditorCell=function(e){e.record;e=e.editorConfig;e&&(e.useTrigger=!1,this.state.isTableEditor)&&(e.defaultStatus="edit")},t.prototype.onExpandedRowsChange=function(e){var t=this;return r.prototype.onExpandedRowsChange.call(this,e).then(function(){t.state.isTableEditor&&t.setFieldValues(t.getData())})},t.prototype.setFieldValues=function(t){function r(o){var e;return(a||[]).reduce(function(e,t){var r=t.dataIndex,t=t.$editable;return r in o&&t&&"type"in t&&(e[r]=n.valueToFormItemValue({type:t.type,record:o,dataIndex:r})),e},((e={})[n.getRowKey()]=o[n.getRowKey()],e))}var e,n=this,a=this.getTableColumns(),o=[],l=this.state.expandedRowKeys,i=this.getRowKey();o=l.length?(e=null==(e=null==(l=null==(l=this.tableWrapRef)?void 0:l.current)?void 0:l.querySelectorAll)?void 0:e.call(l,".ant-table-wrapper tr[data-row-key]"),Array.from(e).map(function(e){e=e.dataset.rowKey,e=(0,util_1.findRecord)(t,i,e);return r(e)})):t.map(r),console.log("this.tableWrapRef",o),null!=(l=null==(e=null==(l=this.formRef)?void 0:l.current)?void 0:e.setFieldValue)&&l.call(e,"dataSource",o)},t.prototype.fetchData=function(){var t=this;return r.prototype.fetchData.call(this).then(function(e){return t.setFieldValues(e.data[t.getDataKey()]),t.setState({isTableEditor:!1}),e})},t.prototype.render=function(){var n=this;return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-wrap")},react_1.default.createElement(antd_1.Form,{ref:this.formRef,className:"".concat(SearchTable_1.selectorPrefix,"-form"),component:!1},react_1.default.createElement(antd_1.Form.List,{name:"dataSource"},function(e,t,r){var o;return console.log("fields",e),react_1.default.createElement(SearchTable_1.SearchTableContext.Provider,{value:{context:n,editable:{tableEditable:{form:null==(o=n.formRef)?void 0:o.current,formList:{fields:e,operation:t,meta:r}}}}},n.renderChildren())})))},t;function t(e){e=r.call(this,e)||this;return e.formRef=(0,react_1.createRef)(),e.state=__assign(__assign({},e.state),{isTableEditor:!1}),e.rowConfigReducers=__spreadArray(__spreadArray([],e.rowConfigReducers,!0),[e.rowEditableReducer],!1),e}var r}exports.default=default_1;
//# sourceMappingURL=SearchEditableFactory.js.map
