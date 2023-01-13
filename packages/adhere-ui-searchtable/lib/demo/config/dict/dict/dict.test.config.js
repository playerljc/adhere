"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),faker_1=tslib_1.__importDefault(require("faker")),adhere_util_dict_1=tslib_1.__importDefault(require("@baifendian/adhere-util-dict"));exports.default={initStatic:function(){adhere_util_dict_1.default.handlers.SystemTestRadio=function(){return[{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}]},adhere_util_dict_1.default.handlers.SystemTestDynamicRadio=function(){return Promise.resolve([{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}])},adhere_util_dict_1.default.handlers.SystemTestCheckBox=function(){return[{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}]},adhere_util_dict_1.default.handlers.SystemTestDynamicCheckBox=function(){return Promise.resolve([{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}])},adhere_util_dict_1.default.handlers.SystemTestSelect=function(){return[{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}]},adhere_util_dict_1.default.handlers.SystemTestDynamicSelect=function(){return Promise.resolve([{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}])},adhere_util_dict_1.default.handlers.SystemTestAutoCompleteSelect=function(){return function(a){return Promise.resolve([{label:"java",value:1},{label:"javaScript",value:2},{label:"html",value:3},{label:"css",value:4},{label:"spring",value:5},{label:"react",value:6}].filter(function(e){return e.label.includes(a)}))}},adhere_util_dict_1.default.handlers.SystemTestTree=function(){return[{title:"Node1",value:"0-0",leaf:!1,children:[{title:"Child Node1",value:"0-0-1",leaf:!0},{title:"Child Node2",value:"0-0-2",leaf:!0}]},{title:"Node2",value:"0-1",leaf:!0}]},adhere_util_dict_1.default.handlers.SystemTestTransfer=function(){return[{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}]},adhere_util_dict_1.default.handlers.SystemTestDynamicTransfer=function(){return Promise.resolve([{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}])},adhere_util_dict_1.default.handlers.SystemTestTable=function(){return Array.from({length:10}).map(function(e,a){return{id:faker_1.default.random.uuid(),isMore:!!Math.floor(10*Math.random()%2),name:faker_1.default.internet.userName(),sex:""+(a+1)%2,birthDay:faker_1.default.time.recent(),deptName:faker_1.default.company.companyName(),height:faker_1.default.random.number(),width:faker_1.default.random.number(),hometown:faker_1.default.address.city(),address:faker_1.default.address.streetAddress()}})},adhere_util_dict_1.default.handlers.SystemTestTablePagination=function(){return function(e){var t=e.current,l=e.pageSize,e=[],e=(e.length=300,e.fill(0),{resCode:0,data:{total:e.length,pages:30,current:1,records:e.slice((t-1)*l,(t-1)*l+l).map(function(e,a){return{id:(t-1)*l+(a+1),isMore:!!Math.floor(10*Math.random()%2),name:faker_1.default.internet.userName(),sex:""+(a+1)%2,birthDay:faker_1.default.time.recent(),deptName:faker_1.default.company.companyName(),height:faker_1.default.random.number(),width:faker_1.default.random.number(),hometown:faker_1.default.address.city(),address:faker_1.default.address.streetAddress()}})},resMsg:""});return Promise.resolve(e.data)}},adhere_util_dict_1.default.handlers.SystemTestCascader=function(){return[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]},adhere_util_dict_1.default.handlers.SystemTestDynamicCascader=function(){return Promise.resolve([{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}])},adhere_util_dict_1.default.handlers.SystemTestList=function(){return Array.from({length:5}).map(function(e,a){return{id:faker_1.default.random.uuid(),isMore:!!Math.floor(10*Math.random()%2),name:faker_1.default.internet.userName(),sex:""+(a+1)%2,birthDay:faker_1.default.time.recent(),deptName:faker_1.default.company.companyName(),height:faker_1.default.random.number(),width:faker_1.default.random.number(),hometown:faker_1.default.address.city(),address:faker_1.default.address.streetAddress()}})},adhere_util_dict_1.default.handlers.SystemTestListPagination=function(){return function(e){var t=e.current,l=e.pageSize,e=[],e=(e.length=300,e.fill(0),{resCode:0,data:{total:e.length,pages:30,current:1,records:e.slice((t-1)*l,(t-1)*l+l).map(function(e,a){return{id:(t-1)*l+(a+1),isMore:!!Math.floor(10*Math.random()%2),name:faker_1.default.internet.userName(),sex:""+(a+1)%2,birthDay:faker_1.default.time.recent(),deptName:faker_1.default.company.companyName(),height:faker_1.default.random.number(),width:faker_1.default.random.number(),hometown:faker_1.default.address.city(),address:faker_1.default.address.streetAddress()}})},resMsg:""});return Promise.resolve(e.data)}},adhere_util_dict_1.default.handlers.SystemTestSexSelect=function(){return[{label:"男",value:"1"},{label:"女",value:"0"}]}},initRemote:function(){}};
//# sourceMappingURL=dict.test.config.js.map
