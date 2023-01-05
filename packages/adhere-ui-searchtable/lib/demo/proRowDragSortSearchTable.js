"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),adhere_1=require("@baifendian/adhere"),index_1=tslib_1.__importDefault(require("../index")),ProSearchRowDragSortStateTable=(require("./serviceRegister"),index_1.default.ProSearchRowDragSortStateTable),SearchTableStateImplementFactory=index_1.default.SearchTableStateImplementFactory,serviceName="user",RowDragSort=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.getComponentId=function(){return"RowDragSort"},t.prototype.getServiceName=function(){return serviceName},t.prototype.getFetchListPropName=function(){return"fetchList"},t.prototype.getOrderFieldValue=function(){return"height"},t.prototype.getDataKey=function(){return"list"},t.prototype.getTotalKey=function(){return"totalCount"},t.prototype.getColumns=function(){return e.prototype.getColumns.call(this,[{title:"姓名",dataIndex:"name",key:"name",width:150,render:function(e){return react_1.default.createElement("div",{style:{color:"red"}},e)},$search:{type:"input",visible:!0}},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:150,render:function(e){return adhere_1.Resource.Dict.value.ResourceNormalSexMap.value.get(e).label},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",width:200,sorter:!0,sortOrder:this.sortOrder("birthday"),render:function(e){return react_1.default.createElement(adhere_1.DateDisplay.DateDisplay10,{value:e})},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"}},{title:"身高",dataIndex:"height",key:"height",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("height"),$search:{type:"inputNumberDecimal2",visible:!0}},{title:"体重",dataIndex:"width",key:"width",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("width"),$search:{type:"inputNumberDecimal2",visible:!0}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",ellipsis:!0,width:200,$search:{type:"input",visible:!0}},{title:"现居住地",dataIndex:"address",key:"address",width:300,$search:{type:"input",visible:!0,valueAttrs:{colSpan:5}}}])},t}(ProSearchRowDragSortStateTable),models=(RowDragSort.propTypes={},[]),requireComponent=require.context("./model",!1,/.*\.(js)$/),Wrap=(requireComponent.keys().forEach(function(e){e=requireComponent(e);models.push(e.default())}),SearchTableStateImplementFactory({serviceNames:[serviceName],middleWares:[],reducer:null,models:models})(RowDragSort));exports.default=Wrap;
//# sourceMappingURL=proRowDragSortSearchTable.js.map
