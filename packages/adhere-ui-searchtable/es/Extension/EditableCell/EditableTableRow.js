import _Form from"antd/es/form";import React,{useContext}from"react";import{SearchTableContext}from"../../SearchTable";var EditableTableRow=function(e){var t=e.columns,o=void 0===t?[]:t,n=e.rowIndex,r=e.rowKey,a=useContext(SearchTableContext);return function(e){var t=e,l=[null==(l=null==(l=null==(l=null==(l=null==a?void 0:a.editable)?void 0:l.tableEditable)?void 0:l.formList)?void 0:l.fields[n])?void 0:l.name,r];return t=(o||[]).some(function(e){return!(null==(e=null==e?void 0:e.$editable)||!e.editable)})?React.cloneElement(e,e.props,[React.createElement(_Form.Item,{name:l,hidden:!0}),e.props.children].flat()):t}};export default EditableTableRow;
//# sourceMappingURL=EditableTableRow.js.map
