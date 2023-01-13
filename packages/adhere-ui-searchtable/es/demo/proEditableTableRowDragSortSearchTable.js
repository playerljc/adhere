import{__extends,__spreadArrays}from"tslib";import React from"react";import{DateDisplay,Resource}from"@baifendian/adhere";import SearchTable from"../index";import"./serviceRegister";var ProSearchEditableTableRowDragSortStateTable=SearchTable.ProSearchEditableTableRowDragSortStateTable,ProEditableSearchStateTable=SearchTable.ProEditableSearchStateTable,EditableTableControl=SearchTable.EditableTableControl,SearchTableStateImplementFactory=SearchTable.SearchTableStateImplementFactory,serviceName="user",RowDragSort=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getComponentId=function(){return"RowDragSort"},e.prototype.getServiceName=function(){return serviceName},e.prototype.getFetchListPropName=function(){return"fetchList"},e.prototype.getOrderFieldValue=function(){return"height"},e.prototype.getDataKey=function(){return"list"},e.prototype.getTotalKey=function(){return"totalCount"},e.prototype.getColumns=function(){var n=this;return t.prototype.getColumns.call(this,[{title:"姓名",dataIndex:"name",key:"name",width:150,render:function(e){return React.createElement("div",{style:{color:"red"}},e)},$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],onSave:function(e){var t=e.value,r=e.record,a=e.dataIndex;return new Promise(function(e){n.updateEditorCellDate({record:r,dataIndex:a,value:t}).then(function(){return e()})})}},$resizable:!0},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:150,render:function(e){return Resource.Dict.value.ResourceNormalSexMap.value.get(e).label},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"},$editable:{editable:!0,type:"select",dictName:"SystemTestSexSelect",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",width:200,sorter:!0,sortOrder:this.sortOrder("birthday"),render:function(e){return React.createElement(DateDisplay.DateDisplay10,{value:e})},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDateData({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"身高",dataIndex:"height",key:"height",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("height"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"体重",dataIndex:"width",key:"width",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("width"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",ellipsis:!0,width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"现居住地",dataIndex:"address",key:"address",width:300,$search:{type:"input",visible:!0,valueAttrs:{colSpan:5}},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}}])},e.prototype.renderSearchFooterItems=function(e){return t.prototype.renderSearchFooterItems.call(this,__spreadArrays([{key:"editorTable",value:React.createElement(EditableTableControl,null)}],e))},e}(ProEditableSearchStateTable),models=(RowDragSort.propTypes={},[]),requireComponent=require.context("./model",!1,/.*\.(js)$/),Wrap=(requireComponent.keys().forEach(function(e){e=requireComponent(e);models.push(e.default())}),SearchTableStateImplementFactory({serviceNames:[serviceName],middleWares:[],reducer:null,models:models})(RowDragSort));export default Wrap;
//# sourceMappingURL=proEditableTableRowDragSortSearchTable.js.map
