import SearchEditableRowStateTable from"../../Editable/SearchEditableRowStateTable";import{SearchTableStateImplement}from"../../SearchTableStateImplement";import RowDragSortMultiExtend from"./RowDragSortMultiExtend";import SearchRowDragSortStateTable from"./SearchRowDragSortStateTable";var SearchEditableRowDragSortStateTable=RowDragSortMultiExtend(SearchTableStateImplement,[SearchEditableRowStateTable,SearchRowDragSortStateTable],SearchRowDragSortStateTable,{onDragSortRow:function(t){return this.state.editorRowId?{dragConfig:{canDrag:function(){return!1}},dropConfig:{canDrop:function(){return!1}}}:SearchRowDragSortStateTable.prototype.onDragSortRow.call(this,t)}});export default SearchEditableRowDragSortStateTable;
//# sourceMappingURL=SearchEditableRowDragSortStateTable.js.map
