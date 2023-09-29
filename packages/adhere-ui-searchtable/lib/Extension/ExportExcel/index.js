"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},exceljs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("exceljs"))),file_saver_1=__importDefault(require("file-saver")),react_1=__importDefault(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_globalindicator_1=__importDefault(require("@baifendian/adhere-ui-globalindicator")),adhere_ui_prompt_errorprompt_1=__importDefault(require("@baifendian/adhere-ui-prompt-errorprompt")),adhere_ui_prompt_successprompt_1=__importDefault(require("@baifendian/adhere-ui-prompt-successprompt")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),SearchTable_1=require("../../SearchTable");function isLeaf(e){return!("children"in e)||Array.isArray(e.children)&&!e.children.length}function renderTitle(e){var t=e.worksheet,r=e.title,e=e.columnsLength,e=(t.mergeCells(1,1,1,e),t.getCell("A1"));e.value=r,e.alignment={vertical:"middle",horizontal:"center"},e.font={bold:!0,size:14},e.fill={type:"pattern",pattern:"solid",fgColor:{argb:"8DB4E2"}},e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}function renderColumns(e){var d=e.worksheet,c=e.columns,s=e.leafNodes,f=e.level;!function i(a){for(var u,e=0;e<a.length;e++)!function(e){var t,r,l=a[e],e=adhere_util_1.default.getNodeLevel(c,l,"key"),n=void 0,o=void 0;(o=isLeaf(l)?{startRow:1+e,startCell:r=s.findIndex(function(e){return e.key===l.key})+1,endRow:1+f,endCell:r}:(t=adhere_util_1.default.getLeafNodes(l.children),{startRow:1+e,startCell:r=s.findIndex(function(e){return e.key===t[0].key})+1,endRow:1+e,endCell:r+t.length-1}))&&(d.mergeCells(o.startRow,o.startCell,o.endRow,o.endCell),n=d.getRow(o.startRow).getCell(o.startCell)),n&&(n.value=l.title,n.font={bold:!0,size:12},n.alignment={vertical:"middle",horizontal:"center"},n.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}},n.fill={type:"pattern",pattern:"solid",fgColor:{argb:"C5D9F1"}}),i(null!=(u=l.children)?u:[])}(e)}(c)}function renderData(e){var i=e.worksheet,a=e.leafNodes,u=e.level,e=e.dataSource,d=0;(function t(e,n,o){e.forEach(function(r,e){var l=i.getRow(1+u+1+d++);l.indent=2*n,o&&(l.outlineLevel=n),a.forEach(function(e,t){e=e.dataIndex,t=l.getCell(t+1);t.value=r[e],t.font={bold:!1,size:10},t.alignment={vertical:"middle",horizontal:"center"},t.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}),"children"in r&&Array.isArray(r.children)&&r.children.length&&t(r.children,n+1,l)})})(e,0)}function columnsAdaption(e){e.columns.forEach(function(e){var t,r=0;null!=(t=null==e?void 0:e.eachCell)&&t.call(e,{includeEmpty:!0},function(e){e=e.value?e.value.toString().length:10;r<e&&(r=e)}),e.width=r<10?10:r+2})}function download(e){var t=e.workbook,r=e.title;return t.xlsx.writeBuffer().then(function(e){(0,file_saver_1.default)(new Blob([e],{type:"application/octet-stream"}),"".concat(r,".xlsx"))})}function exportExcel(e){var t=e.dataSource,r=e.columns,e=e.title,l=new exceljs_1.default.Workbook,n=l.addWorksheet(e),o=adhere_util_1.default.getLeafNodes(r),i=adhere_util_1.default.getTreeLevel(r,"key");return renderTitle({worksheet:n,title:e,columnsLength:o.length}),renderColumns({worksheet:n,leafNodes:o,columns:r,level:i}),renderData({worksheet:n,leafNodes:o,level:i,dataSource:t}),columnsAdaption(n),download({workbook:l,title:e})}var ExportExcel=function(e){var t=e.title,r=void 0===t?"excel":t,l=e.getDataSource,n=e.getColumns;return react_1.default.createElement(icons_1.FileExcelOutlined,{onClick:function(){var t=adhere_ui_globalindicator_1.default.show(),e=n();return exportExcel({dataSource:l(),columns:e,title:r}).then(function(){adhere_ui_globalindicator_1.default.hide(t),adhere_ui_prompt_successprompt_1.default.openSuccessMessage()}).catch(function(e){adhere_ui_globalindicator_1.default.hide(t),adhere_ui_prompt_errorprompt_1.default.openErrorMessage(e)})},className:"".concat(SearchTable_1.selectorPrefix,"-export-excel")})};exports.default=ExportExcel;
//# sourceMappingURL=index.js.map
