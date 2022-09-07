"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),react_dom_1=__importDefault(require("react-dom")),antd_1=require("antd"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),index_1=__importDefault(require("../index"));require("./index.less"),require("../index.less");var Item=index_1.default.Item,data=Array.from({length:100}).fill(0),columns=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return react_1.default.createElement("a",null,e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return react_1.default.createElement(react_1.default.Fragment,null,e.map(function(e){var t=5<e.length?"geekblue":"green";return react_1.default.createElement(antd_1.Tag,{color:t="loser"===e?"volcano":t,key:e},e.toUpperCase())}))}},{title:"Action",key:"action",render:function(e,t){return react_1.default.createElement(antd_1.Space,{size:"middle"},react_1.default.createElement("a",null,"Invite ",t.name),react_1.default.createElement("a",null,"Delete"))}}],tableData=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],listData=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}];react_dom_1.default.render(react_1.default.createElement("div",{style:{width:600,height:600,border:"1px solid rgba(0,0,0,.1)"}},react_1.default.createElement(index_1.default,{menuData:data.map(function(e,t){return{key:""+(t+1),name:"菜单"+(t+1)}}),activeKey:"1"},data.map(function(e,t){return react_1.default.createElement(Item,{key:""+(t+1)},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:t%2==0,noMatch:function(){return react_1.default.createElement(antd_1.Table,{style:{padding:20},columns:columns,dataSource:tableData,pagination:!1})}},function(){return react_1.default.createElement(antd_1.List,{style:{padding:20},itemLayout:"horizontal",dataSource:listData,renderItem:function(e){return react_1.default.createElement(antd_1.List.Item,null,react_1.default.createElement(antd_1.List.Item.Meta,{avatar:react_1.default.createElement(antd_1.Avatar,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:react_1.default.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}})}))}))),document.getElementById("app"));
//# sourceMappingURL=index.js.map
