import SearchEditableRowTable from"../../Editable/SearchEditableRowTable";import{SearchTableImplement}from"../../SearchTableImplement";import RowDragSortMultiExtend from"./RowDragSortMultiExtend";import SearchRowDragSortTable from"./SearchRowDragSortTable";var SearchEditableRowDragSortTable=RowDragSortMultiExtend(SearchTableImplement,[SearchEditableRowTable,SearchRowDragSortTable],SearchRowDragSortTable,{onDragSortRow:function(r){return this.state.editorRowId?{dragConfig:{canDrag:function(){return!1}},dropConfig:{canDrop:function(){return!1}}}:SearchRowDragSortTable.prototype.onDragSortRow.call(this,r)}});export default SearchEditableRowDragSortTable;
//# sourceMappingURL=SearchEditableRowDragSortTable.js.map