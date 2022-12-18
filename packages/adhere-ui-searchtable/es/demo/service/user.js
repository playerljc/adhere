import{Ajax}from"@baifendian/adhere";var request=new Ajax(""),data=require("../mock.js").default,fetchList={call:function(){return request.get({path:JSON.parse(JSON.stringify(data)),mock:!0,loading:{show:!1}})},defaultResult:function(){return{total:0,list:[]}}};export default{codeKey:"code",codeSuccessKey:200,dataKey:"data",messageKey:"message"};export{fetchList};
//# sourceMappingURL=user.js.map
