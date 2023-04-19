"use strict";var __createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),SearchTable_1=require("../../../SearchTable"),EditableRow_1=require("../EditableRow"),EditableRowControl=function(e){var t=e.className,r=e.styles,n=e.renderEditorRow,a=e.renderSave,l=e.renderCancel,o=e.record,c=e.rowKey,i=e.editorRowId,u=e.onEditor,d=e.onSave,_=(0,react_1.useContext)(SearchTable_1.SearchTableContext),f=(0,react_1.useContext)(EditableRow_1.EditableContext),s=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("保存"))},[]),v=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("取消"))},[]),b=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("编辑行"))},[]),m=(0,react_1.useCallback)(function(e){return d?d(e).then(function(){return E(e)}):E(e)},[]),h=(0,react_1.useCallback)(function(){var e;u?null!=(e=null==u?void 0:u(o[c]))&&e.then(function(){return p()}):p()},[]),E=function(e){var t;return null==(t=null==(t=null==_?void 0:_.context)?void 0:t.updateEditorCellRowData({values:e,record:o}))?void 0:t.then(function(){return w()})},w=function(){var e;return null==(e=null==_?void 0:_.context)?void 0:e.setState({editorRowId:""})},p=function(){var e;return null==(e=null==_?void 0:_.context)?void 0:e.setState({editorRowId:o[c]})};return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-editor-row-control"),t),style:r||{}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:i!==o[c],noMatch:function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-row-control-save-cancel")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-row-control-save-cancel-item"),onClick:function(){return null==f?void 0:f.validateFields().then(function(e){return m(e)})}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!a,noMatch:function(){return null==a?void 0:a()}},function(){return s()})),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-row-control-save-cancel-item"),onClick:w},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!l,noMatch:function(){return null==l?void 0:l()}},function(){return v()})))}},function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-row-control-edit"),onClick:h},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!n,noMatch:function(){return null==n?void 0:n()}},function(){return b()}))}))};exports.default=EditableRowControl;
//# sourceMappingURL=index.js.map
