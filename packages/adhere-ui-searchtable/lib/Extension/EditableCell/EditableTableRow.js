"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),react_1=tslib_1.__importStar(require("react")),SearchTable_1=require("../../SearchTable"),EditableTableRow=function(e){var t=e.columns,r=void 0===t?[]:t,a=e.rowIndex,n=e.rowKey,i=(0,react_1.useContext)(SearchTable_1.SearchTableContext);return function(e){var t=e,l=[null==(l=null==(l=null==(l=null==(l=null==i?void 0:i.editable)?void 0:l.tableEditable)?void 0:l.formList)?void 0:l.fields[a])?void 0:l.name,n];return t=(r||[]).some(function(e){return!(null==(e=null==e?void 0:e.$editable)||!e.editable)})?react_1.default.cloneElement(e,e.props,[react_1.default.createElement(antd_1.Form.Item,{name:l,hidden:!0}),e.props.children].flat()):t}};exports.default=EditableTableRow;
//# sourceMappingURL=EditableTableRow.js.map
