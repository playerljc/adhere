"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib");function default_1(t){return r=t,tslib_1.__extends(e,r),e.prototype.rowEditableReducer=function(t){var e=t.rowConfig,r=t.rowIndex,o=t.columns,t=t.record;return this.onEditorRow&&(e.$editable=this.onEditorRow({rowIndex:r,record:t,columns:o})),e},e.prototype.onEditorRow=function(t){return{editable:!0}},e.prototype.onEditorCell=function(t){var e=t.record,t=t.editorConfig;t&&(t.useTrigger=!1,e[this.getRowKey()]===this.state.editorRowId&&(t.defaultStatus="edit"))},e.prototype.fetchData=function(){var e=this;return r.prototype.fetchData.call(this).then(function(t){return e.setState({editorRowId:""}),t})},e;function e(t){t=r.call(this,t)||this;return t.state=tslib_1.__assign(tslib_1.__assign({},t.state),{editorRowId:""}),t.rowConfigReducers=tslib_1.__spreadArray(tslib_1.__spreadArray([],t.rowConfigReducers,!0),[t.rowEditableReducer],!1),t}var r}exports.default=default_1;
//# sourceMappingURL=SearchEditableRowFactory.js.map
