import React from"react";import SearchEditableStateTable from"../../Editable/SearchEditableStateTable";import{SearchTableStateImplement}from"../../SearchTableStateImplement";import RowDragSortMultiExtend from"./RowDragSortMultiExtend";import SearchRowDragSortStateTable from"./SearchRowDragSortStateTable";var SearchEditableTableRowDragSortStateTable=RowDragSortMultiExtend(SearchTableStateImplement,[SearchEditableStateTable,SearchRowDragSortStateTable],null,{render:function(){var t=SearchRowDragSortStateTable.prototype.render.call(this),e=SearchEditableStateTable.prototype.render.call(this);return React.cloneElement(t,t.props,e)},moveRow:function(){for(var t=this,e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return SearchRowDragSortStateTable.prototype.moveRow.apply(this,e).then(function(){t.setFieldValues()})},fetchData:function(){return SearchEditableStateTable.prototype.fetchData.call(this)}},null);export default SearchEditableTableRowDragSortStateTable;
//# sourceMappingURL=SearchEditableTableRowDragSortStateTable.js.map
