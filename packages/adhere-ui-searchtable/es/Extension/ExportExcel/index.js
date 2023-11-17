import _FileExcelOutlined from"@ant-design/icons/es/icons/FileExcelOutlined";import _Tooltip from"antd/es/tooltip";import ExcelJS from"exceljs";import FileSaver from"file-saver";import React from"react";import GlobalIndicator from"@baifendian/adhere-ui-globalindicator";import ErrorPrompt from"@baifendian/adhere-ui-prompt-errorprompt";import SuccessPrompt from"@baifendian/adhere-ui-prompt-successprompt";import Util from"@baifendian/adhere-util";import Intl from"@baifendian/adhere-util-intl";import{selectorPrefix}from"../../SearchTable";function isLeaf(e){return!("children"in e)||Array.isArray(e.children)&&!e.children.length}function renderTitle(e){var t=e.worksheet,l=e.title,e=e.columnsLength,e=(t.mergeCells(1,1,1,e),t.getCell("A1"));e.value=l,e.alignment={vertical:"middle",horizontal:"center"},e.font={bold:!0,size:14},e.fill={type:"pattern",pattern:"solid",fgColor:{argb:"8DB4E2"}},e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}function renderColumns(e){var d=e.worksheet,s=e.columns,u=e.leafNodes,f=e.level;!function i(a){for(var c,e=0;e<a.length;e++)!function(e){var t,l,o=a[e],e=Util.getNodeLevel(s,o,"key"),r=void 0,n=void 0;(n=isLeaf(o)?{startRow:1+e,startCell:l=u.findIndex(function(e){return e.key===o.key})+1,endRow:1+f,endCell:l}:(t=Util.getLeafNodes(o.children),{startRow:1+e,startCell:l=u.findIndex(function(e){return e.key===t[0].key})+1,endRow:1+e,endCell:l+t.length-1}))&&(d.mergeCells(n.startRow,n.startCell,n.endRow,n.endCell),r=d.getRow(n.startRow).getCell(n.startCell)),r&&(r.value=o.title,r.font={bold:!0,size:12},r.alignment={vertical:"middle",horizontal:"center"},r.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}},r.fill={type:"pattern",pattern:"solid",fgColor:{argb:"C5D9F1"}}),i(null!=(c=o.children)?c:[])}(e)}(s)}function renderData(e){var i=e.worksheet,a=e.leafNodes,c=e.level,e=e.dataSource,d=0;(function t(e,r,n){e.forEach(function(l,e){var o=i.getRow(1+c+1+d++);o.indent=2*r,n&&(o.outlineLevel=r),a.forEach(function(e,t){e=e.dataIndex,t=o.getCell(t+1);t.value=l[e],t.font={bold:!1,size:10},t.alignment={vertical:"middle",horizontal:"center"},t.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}),"children"in l&&Array.isArray(l.children)&&l.children.length&&t(l.children,r+1,o)})})(e,0)}function columnsAdaption(e){e.columns.forEach(function(e){var t,l=0;null!=(t=null==e?void 0:e.eachCell)&&t.call(e,{includeEmpty:!0},function(e){e=e.value?e.value.toString().length:10;l<e&&(l=e)}),e.width=l<10?10:l+2})}function download(e){var t=e.workbook,l=e.title;return t.xlsx.writeBuffer().then(function(e){FileSaver(new Blob([e],{type:"application/octet-stream"}),"".concat(l,".xlsx"))})}function exportExcel(e){var t=e.dataSource,l=e.columns,e=e.title,o=new ExcelJS.Workbook,r=o.addWorksheet(e),n=Util.getLeafNodes(l),i=Util.getTreeLevel(l,"key");return renderTitle({worksheet:r,title:e,columnsLength:n.length}),renderColumns({worksheet:r,leafNodes:n,columns:l,level:i}),renderData({worksheet:r,leafNodes:n,level:i,dataSource:t}),columnsAdaption(r),download({workbook:o,title:e})}var ExportExcel=function(e){var t=e.title,l=void 0===t?"excel":t,o=e.getDataSource,r=e.getColumns,t=e.renderExportExcelBtn;function n(){var t=GlobalIndicator.show(document.body,"".concat(Intl.v("正在导出"),"..."),19999,"default"),e=r();return exportExcel({dataSource:o(),columns:e,title:l}).then(function(){GlobalIndicator.hide(t),SuccessPrompt.openSuccessMessage()}).catch(function(e){GlobalIndicator.hide(t),ErrorPrompt.openErrorMessage(e)})}return React.createElement(_Tooltip,{title:"".concat(Intl.v("导出excel"))},t&&t(n),!t&&React.createElement(_FileExcelOutlined,{onClick:n,className:"".concat(selectorPrefix,"-export-excel-btn")}))};export default ExportExcel;
//# sourceMappingURL=index.js.map
