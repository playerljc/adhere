"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),react_1=tslib_1.__importStar(require("react")),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=tslib_1.__importDefault(require("@baifendian/adhere-util-intl")),SearchTable_1=require("../../../SearchTable"),SearchTable_2=require("../../../SearchTable"),EditableRow_1=require("../EditableRow"),EditorRowControl=function(e){var t=e.className,r=e.styles,a=e.renderEditorRow,n=e.renderSave,l=e.renderCancel,i=e.record,o=e.rowKey,c=e.editorRowId,u=e.onEditor,d=e.onSave,_=(0,react_1.useContext)(EditableRow_1.EditableContext),s=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("保存"))},[]),f=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("取消"))},[]),b=(0,react_1.useCallback)(function(){return react_1.default.createElement("a",null,adhere_util_intl_1.default.v("编辑行"))},[]),h=(0,react_1.useContext)(SearchTable_2.SearchTableContext),v=(0,react_1.useCallback)(function(e){d?d(e).then(function(){return E(e)}):E(e)},[]),m=(0,react_1.useCallback)(function(){var e;u?null!=(e=null==u?void 0:u(i[o]))&&e.then(function(){return w()}):w()},[]),E=function(e){return null==(e=null==h?void 0:h.updateEditorCellRowData({values:e,record:i}))?void 0:e.then(function(){return C()})},C=function(){return null==h?void 0:h.setState({editorRowId:""})},w=function(){return null==h?void 0:h.setState({editorRowId:i[o]})};return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-editor-row-control"),t),style:r||{}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:c!==i[o],noMatch:function(){return react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-row-control-save-cancel")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-row-control-save-cancel-item"),onClick:function(){return null==_?void 0:_.validateFields().then(function(e){return v(e)})}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!n,noMatch:function(){return null==n?void 0:n()}},function(){return s()})),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editor-row-control-save-cancel-item"),onClick:C},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!l,noMatch:function(){return null==l?void 0:l()}},function(){return f()})))}},function(){return react_1.default.createElement("div",{onClick:m},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!a,noMatch:function(){return null==a?void 0:a()}},function(){return b()}))}))};exports.default=EditorRowControl;
//# sourceMappingURL=index.js.map
