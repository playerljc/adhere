"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchList=void 0;var adhere_1=require("@baifendian/adhere"),request=new adhere_1.Ajax(""),data=require("../mock.js").default;exports.fetchList={call:function(){return request.get({path:JSON.parse(JSON.stringify(data)),mock:!0,loading:{show:!1}})},defaultResult:function(){return{total:0,list:[]}}},exports.default={codeKey:"code",codeSuccessKey:200,dataKey:"data",messageKey:"message"};
//# sourceMappingURL=user.js.map