import _Form from"antd/es/form";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.flat.js";import"core-js/modules/es.array.unscopables.flat.js";import React,{useContext}from"react";import{SearchTableContext}from"../../SearchTable";var EditableTableRow=function(e){var o=e.columns,r=void 0===o?[]:o,l=e.rowIndex,a=e.rowKey,n=useContext(SearchTableContext);return function(e){var o=e,t=[null==(t=null==(t=null==(t=null==(t=null==n?void 0:n.editable)?void 0:t.tableEditable)?void 0:t.formList)?void 0:t.fields[l])?void 0:t.name,a];return o=(r||[]).some(function(e){return!(null==(e=null==e?void 0:e.$editable)||!e.editable)})?React.cloneElement(e,e.props,[React.createElement(_Form.Item,{name:t,hidden:!0}),e.props.children].flat()):o}};export default EditableTableRow;
//# sourceMappingURL=EditableTableRow.js.map
