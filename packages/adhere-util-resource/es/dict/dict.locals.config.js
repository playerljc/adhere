import arEG from"antd/locale/ar_EG";import enUS from"antd/locale/en_US";import ptPT from"antd/locale/pt_PT";import zhCN from"antd/locale/zh_CN";import dayjs from"dayjs";import"dayjs/locale/ar";import"dayjs/locale/en";import"dayjs/locale/pt";import"dayjs/locale/zh-cn";import Dict from"@baifendian/adhere-util-dict";export default{initStatic:function(){Dict.handlers.Locals=function(){return{zh_CN:"zh_CN",pt_PT:"pt_PT",en_US:"en_US",ar_EG:"ar_EG"}},Dict.handlers.AddLocals=function(){return function(t,e){Dict.value.Locals.value[t]=e,Dict.value.Locals.refresh()}},Dict.handlers.RemoveLocals=function(){return function(t){delete Dict.value.Locals.value[t],Dict.value.Locals.refresh()}},Dict.handlers.LocalsAntd=function(){return{zh_CN:zhCN,pt_PT:ptPT,en_US:enUS,ar_EG:arEG}},Dict.handlers.AddLocalsAntd=function(){return function(t,e){Dict.value.LocalsAntd.value[t]=e,Dict.value.LocalsAntd.refresh()}},Dict.handlers.RemoveLocalsAntd=function(){return function(t){delete Dict.value.LocalsAntd.value[t],Dict.value.LocalsAntd.refresh()}},Dict.handlers.LocalsMoment=function(){return{zh_CN:function(){dayjs.locale("zh-cn")},en_US:function(){dayjs.locale("en")},pt_PT:function(){dayjs.locale("pt")},ar_EG:function(){dayjs.locale("ar")}}},Dict.handlers.AddLocalsMoment=function(){return function(t,e){Dict.value.LocalsMoment.value[t]=e,Dict.value.LocalsMoment.refresh()}},Dict.handlers.RemoveLocalsMoment=function(){return function(t){delete Dict.value.LocalsMoment.value[t],Dict.value.LocalsMoment.refresh()}}},initRemote:function(){}};
//# sourceMappingURL=dict.locals.config.js.map
