"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),adhere_1=require("@baifendian/adhere"),index_1=tslib_1.__importDefault(require("../index")),ProSearchEditableCellRowDragSortStateTable=(require("./serviceRegister"),index_1.default.ProSearchEditableCellRowDragSortStateTable),OptionsWrap=index_1.default.OptionsWrap,SearchTableStateImplementFactory=index_1.default.SearchTableStateImplementFactory,serviceName=(console.log("ProSearchEditableCellRowDragSortStateTable",ProSearchEditableCellRowDragSortStateTable),"user"),RowDragSort=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.getComponentId=function(){return"RowDragSort"},t.prototype.getServiceName=function(){return serviceName},t.prototype.getFetchListPropName=function(){return"fetchList"},t.prototype.getOrderFieldValue=function(){return"height"},t.prototype.getDataKey=function(){return"list"},t.prototype.getTotalKey=function(){return"totalCount"},t.prototype.getColumns=function(){var n=this;return e.prototype.getColumns.call(this,[{title:"姓名",dataIndex:"name",key:"name",width:150,render:function(e){return react_1.default.createElement("div",{style:{color:"red"}},e)},$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入姓名"}],onSave:function(e){var t=e.value,r=e.record,a=e.dataIndex;return new Promise(function(e){n.updateEditorCellDate({record:r,dataIndex:a,value:t}).then(function(){return e()})})}},$resizable:!0},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:150,render:function(e){return adhere_1.Resource.Dict.value.ResourceNormalSexMap.value.get(e).label},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"},$editable:{editable:!0,type:"select",dictName:"SystemTestSexSelect",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",width:200,sorter:!0,sortOrder:this.sortOrder("birthday"),render:function(e){return react_1.default.createElement(adhere_1.DateDisplay.DateDisplay10,{value:e})},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDateData({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"身高",dataIndex:"height",key:"height",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("height"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入身高"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"体重",dataIndex:"width",key:"width",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("width"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请输入体重"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",ellipsis:!0,width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入籍贯"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"现居住地",dataIndex:"address",key:"address",width:300,$search:{type:"input",visible:!0,valueAttrs:{colSpan:5}},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请输入居住地"}],onSave:function(e){var t=e.record,r=e.dataIndex,a=e.value;return new Promise(function(e){n.updateEditorCellDate({record:t,dataIndex:r,value:a}).then(function(){return e()})})}}},{title:"操作",dataIndex:this.getOptionsColumnDataIndex(),key:this.getOptionsColumnDataIndex(),width:260,render:function(e,t){return react_1.default.createElement(OptionsWrap,{style:{justifyContent:"center"}},n.renderOptionColumn([{key:"view",value:react_1.default.createElement("a",null,"查看")},{key:"delete",value:react_1.default.createElement(adhere_1.DelConfirm,{success:function(){return Promise.resolve().then(function(){n.fetchData()})}},react_1.default.createElement("a",null,"删除"))}],{value:e,record:t}))}}])},t}(ProSearchEditableCellRowDragSortStateTable),models=(RowDragSort.propTypes={},[]),requireComponent=require.context("./model",!1,/.*\.(js)$/),Wrap=(requireComponent.keys().forEach(function(e){e=requireComponent(e);models.push(e.default())}),SearchTableStateImplementFactory({serviceNames:[serviceName],middleWares:[],reducer:null,models:models})(RowDragSort));exports.default=Wrap;
//# sourceMappingURL=proEditableCellRowDragSortSearchTable.js.map
