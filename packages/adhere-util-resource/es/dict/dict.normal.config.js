import Dict from"@baifendian/adhere-util-dict";import INTL from"@baifendian/adhere-util-intl";export default{initStatic:function(){Dict.handlers.ResourceNormalMaxZIndex=function(){return 19999},Dict.handlers.ResourceNormalPageSize=function(){return 10},Dict.handlers.ResourceNormalRomanNumeralsMap=function(){return new Map([[1,"Ⅰ"],[2,"Ⅱ"],[3,"Ⅲ"],[4,"Ⅳ"],[5,"Ⅴ"],[6,"Ⅵ"],[7,"Ⅶ"],[8,"Ⅷ"],[9,"Ⅸ"],[10,"Ⅹ"]])},Dict.handlers.ResourceNormalWhether=function(){return[{label:INTL.v("全部"),value:""},{label:INTL.v("是"),value:"1"},{label:INTL.v("否"),value:"0"}]},Dict.handlers.ResourceNormalWhetherMap=function(){return new Map([["",{label:INTL.v("全部"),value:""}],["1",{label:INTL.v("是"),value:"1"}],["0",{label:INTL.v("否"),value:"0"}]])},Dict.handlers.ResourceNormalIsThere=function(){return[{label:INTL.v("全部"),value:""},{label:INTL.v("有"),value:"1"},{label:INTL.v("无"),value:"0"}]},Dict.handlers.ResourceNormalIsThereMap=function(){return new Map([["",{label:INTL.v("全部"),value:""}],["1",{label:INTL.v("有"),value:"1"}],["0",{label:INTL.v("无"),value:"0"}]])},Dict.handlers.ResourceNormalSex=function(){return[{label:INTL.v("全部"),value:""},{label:INTL.v("男"),value:"1"},{label:INTL.v("女"),value:"0"}]},Dict.handlers.ResourceNormalSexMap=function(){return new Map([["",{label:INTL.v("全部"),value:""}],["1",{label:INTL.v("男"),value:"1"}],["0",{label:INTL.v("女"),value:"0"}]])}}};
//# sourceMappingURL=dict.normal.config.js.map