"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),react_1=tslib_1.__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_1=require("@baifendian/adhere"),index_1=tslib_1.__importDefault(require("../index")),ProSearchStateTable=(require("./serviceRegister"),index_1.default.ProSearchStateTable),EditableContext=index_1.default.EditableContext,SearchTableStateImplementFactory=index_1.default.SearchTableStateImplementFactory,serviceName="user";function RowEditorCell(e){var t=e.record,r=e.onEditor,n=e.onSave,e=e.editorRowId,a=(0,react_1.useContext)(EditableContext);return react_1.default.createElement("div",null,react_1.default.createElement(adhere_1.ConditionalRender,{conditional:e!==t.id,noMatch:function(){return react_1.default.createElement("a",{onClick:function(){a.validateFields().then(function(e){n(e)})}},"保存")}},function(){return react_1.default.createElement("a",{onClick:function(){return r(t.id)}},"编辑行")}))}var ProSearchStateTableImpl=function(a){function e(e){e=a.call(this,e)||this;return e.state=tslib_1.__assign(tslib_1.__assign({},e.state),{editorRowId:""}),e}return tslib_1.__extends(e,a),e.prototype.getComponentId=function(){return"ProSearchStateTableImpl"},e.prototype.getServiceName=function(){return serviceName},e.prototype.getFetchListPropName=function(){return"fetchList"},e.prototype.getOrderFieldValue=function(){return"height"},e.prototype.getDataKey=function(){return"list"},e.prototype.getTotalKey=function(){return"totalCount"},e.prototype.getColumns=function(){var n=this;return a.prototype.getColumns.call(this,[{title:"姓名",dataIndex:"name",key:"name",width:150,render:function(e){return react_1.default.createElement("div",{style:{color:"red"}},e)},$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请选择"}],useKeepEdit:!0,props:{onBlur:function(e,t){var r=t.form;t.rowIndex,t.dataIndex;r.validateFields().then(function(e){})}},onSave:function(e){return new Promise(function(e){n.fetchData(),e()})}}},{title:"性别",dataIndex:"sex",key:"sex",align:"center",width:150,render:function(e){return adhere_1.Resource.Dict.value.ResourceNormalSexMap.value.get(e).label},$search:{type:"select",visible:!0,dictName:"SystemTestSexSelect"},$editable:{editable:!0,type:"select",dictName:"SystemTestSexSelect",rules:[{required:!0,message:"请选择"}],onSave:function(e){return new Promise(function(e){n.fetchData(),e()})}}},{title:"出生年月",dataIndex:"birthday",key:"birthday",align:"center",width:200,sorter:!0,sortOrder:this.sortOrder("birthday"),render:function(e){return react_1.default.createElement(adhere_1.DateDisplay.DateDisplay10,{value:e})},$search:{type:"rangePicker",visible:!0,startName:"birthDayStart",endName:"birthDayEnd"},$editable:{editable:!0,type:"datePicker",rules:[{required:!0,message:"请选择"}],onSave:function(e){return new Promise(function(e){n.fetchData(),e()})}}},{title:"身高",dataIndex:"height",key:"height",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("height"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请选择"}],onSave:function(e){return new Promise(function(e){n.fetchData(),e()})}}},{title:"体重",dataIndex:"width",key:"width",align:"center",width:150,sorter:!0,sortOrder:this.sortOrder("width"),$search:{type:"inputNumberDecimal2",visible:!0},$editable:{editable:!0,type:"inputNumberDecimal2",rules:[{required:!0,message:"请选择"}],onSave:function(e){return new Promise(function(e){n.fetchData(),e()})}}},{title:"籍贯",dataIndex:"homeTown",key:"homeTown",ellipsis:!0,width:200,$search:{type:"input",visible:!0},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请选择"}],onSave:function(e){return new Promise(function(e){n.fetchData(),e()})}}},{title:"现居住地",dataIndex:"address",key:"address",width:300,$search:{type:"input",visible:!0,valueAttrs:{colSpan:5}},$editable:{editable:!0,type:"input",rules:[{required:!0,message:"请选择"}],onSave:function(e){return new Promise(function(e){n.fetchData(),e()})}}},{title:"操作",dataIndex:this.getOptionsColumnDataIndex(),key:this.getOptionsColumnDataIndex(),width:200,render:function(e,t,r){return react_1.default.createElement(RowEditorCell,{value:e,record:t,rowIndex:r,editorRowId:n.state.editorRowId,onEditor:function(e){n.setState({editorRowId:e})},onSave:function(e){n.fetchData().then(function(){return n.setState({editorRowId:""})})}})}}])},e.prototype.onEditorCell=function(e){e.rowIndex;var t=e.record,e=e.editorConfig;t.id===this.state.editorRowId&&e&&(e.defaultStatus="edit")},e.prototype.fetchData=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return a.prototype.fetchData.apply(this,e).then(function(e){return t.setState({editorRowId:""}),e})},e.prototype.renderSearchFooterItems=function(e){var t=this;return a.prototype.renderSearchFooterItems.call(this,tslib_1.__spreadArray([{key:"add",value:react_1.default.createElement(antd_1.Button,{key:"add",icon:react_1.default.createElement(icons_1.UserAddOutlined,null),type:"primary",onClick:function(){}},"新增")},{key:"delete",value:react_1.default.createElement(antd_1.Button,{key:"delete",icon:react_1.default.createElement(icons_1.DeleteOutlined,null),type:"primary",onClick:function(){t.state.selectedRowKeys.length?adhere_1.DelConfirm.open(function(){return Promise.resolve().then(function(){t.setState({selectedRowKeys:[]}),t.fetchData()})}):(0,adhere_1.WarnPrompt)("请选择要删除的数据")}},"删除")}],e,!0))},e}(ProSearchStateTable),models=(ProSearchStateTableImpl.propTypes={},[]),requireComponent=require.context("./model",!1,/.*\.(js)$/),Wrap=(requireComponent.keys().forEach(function(e){e=requireComponent(e);models.push(e.default())}),SearchTableStateImplementFactory({serviceNames:[serviceName],middleWares:[],reducer:null,models:models})(ProSearchStateTableImpl));exports.default=Wrap;
//# sourceMappingURL=proStateSearchTable.js.map
