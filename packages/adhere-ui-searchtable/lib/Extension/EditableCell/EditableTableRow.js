"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.flat.js"),require("core-js/modules/es.array.unscopables.flat.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),react_1=tslib_1.__importStar(require("react")),SearchTable_1=require("../../SearchTable"),EditableTableRow=function(e,r){e.record;var t=e.columns,t=void 0===t?[]:t,l=e.rowIndex,o=e.rowKey,e=(e.rowConfig,(0,react_1.useContext)(SearchTable_1.SearchTableContext)),a=r,l=[null==(e=null==(e=null==e?void 0:e.formList)?void 0:e.fields[l])?void 0:e.name,o];return(t||[]).some(function(e){return!(null==(e=null==e?void 0:e.$editable)||!e.editable)})&&(a=react_1.default.cloneElement(r,r.props,[react_1.default.createElement(antd_1.Form.Item,{name:l,hidden:!0}),r.props.children].flat())),function(){return a}};exports.default=EditableTableRow;
//# sourceMappingURL=EditableTableRow.js.map
