"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.fill.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.oneData=void 0;var tslib_1=require("tslib"),faker_1=tslib_1.__importDefault(require("faker")),adhere_1=require("@baifendian/adhere"),data=[];data.length=300,data.fill(0),exports.oneData={code:200,data:{total:1,list:[{id:faker_1.default.random.uuid(),name:faker_1.default.internet.userName(),sex:"".concat(adhere_1.Util.generatorRandom(0,1)),homeTown:faker_1.default.address.city(),birthday:(new Date).getTime(),deptName:faker_1.default.company.companyName(),height:faker_1.default.random.number(),width:faker_1.default.random.number()}]}},exports.default={code:200,data:{total:data.length,list:data.map(function(){return{id:faker_1.default.random.uuid(),name:faker_1.default.internet.userName(),sex:"".concat(adhere_1.Util.generatorRandom(0,1)),homeTown:faker_1.default.address.city(),address:faker_1.default.address.city(),birthday:(new Date).getTime(),deptName:faker_1.default.company.companyName(),height:faker_1.default.random.number(),width:faker_1.default.random.number()}})}};
//# sourceMappingURL=mock.js.map