"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ar_EG_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("antd/locale/ar_EG"))),en_US_1=__importDefault(require("antd/locale/en_US")),pt_PT_1=__importDefault(require("antd/locale/pt_PT")),zh_CN_1=__importDefault(require("antd/locale/zh_CN")),dayjs_1=__importDefault(require("dayjs")),adhere_util_dict_1=(require("dayjs/locale/ar"),require("dayjs/locale/en"),require("dayjs/locale/pt"),require("dayjs/locale/zh-cn"),__importDefault(require("@baifendian/adhere-util-dict")));exports.default={initStatic:function(){adhere_util_dict_1.default.handlers.Locals=function(){return{zh_CN:"zh_CN",pt_PT:"pt_PT",en_US:"en_US",ar_EG:"ar_EG"}},adhere_util_dict_1.default.handlers.AddLocals=function(){return function(e,t){adhere_util_dict_1.default.value.Locals.value[e]=t,adhere_util_dict_1.default.value.Locals.refresh()}},adhere_util_dict_1.default.handlers.RemoveLocals=function(){return function(e){delete adhere_util_dict_1.default.value.Locals.value[e],adhere_util_dict_1.default.value.Locals.refresh()}},adhere_util_dict_1.default.handlers.LocalsAntd=function(){return{zh_CN:zh_CN_1.default,pt_PT:pt_PT_1.default,en_US:en_US_1.default,ar_EG:ar_EG_1.default}},adhere_util_dict_1.default.handlers.AddLocalsAntd=function(){return function(e,t){adhere_util_dict_1.default.value.LocalsAntd.value[e]=t,adhere_util_dict_1.default.value.LocalsAntd.refresh()}},adhere_util_dict_1.default.handlers.RemoveLocalsAntd=function(){return function(e){delete adhere_util_dict_1.default.value.LocalsAntd.value[e],adhere_util_dict_1.default.value.LocalsAntd.refresh()}},adhere_util_dict_1.default.handlers.LocalsMoment=function(){return{zh_CN:function(){dayjs_1.default.locale("zh-cn")},en_US:function(){dayjs_1.default.locale("en")},pt_PT:function(){dayjs_1.default.locale("pt")},ar_EG:function(){dayjs_1.default.locale("ar")}}},adhere_util_dict_1.default.handlers.AddLocalsMoment=function(){return function(e,t){adhere_util_dict_1.default.value.LocalsMoment.value[e]=t,adhere_util_dict_1.default.value.LocalsMoment.refresh()}},adhere_util_dict_1.default.handlers.RemoveLocalsMoment=function(){return function(e){delete adhere_util_dict_1.default.value.LocalsMoment.value[e],adhere_util_dict_1.default.value.LocalsMoment.refresh()}}},initRemote:function(){}};
//# sourceMappingURL=dict.locals.config.js.map
