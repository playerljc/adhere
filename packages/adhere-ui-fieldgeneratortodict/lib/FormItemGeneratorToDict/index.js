"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},AutoCompleteFormItem_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.TreeSelectMulitFormItem=exports.TreeSelectLeafMulitFormItem=exports.TreeSelectLeafFormItem=exports.TreeSelectFormItem=exports.TreeMulitSelectFormItem=exports.TransferSelectFormItem=exports.TransferFormItem=exports.TimelineFormItem=exports.TagVerticalFormItem=exports.TagSelectFormItem=exports.TagMultiSelectFormItem=exports.TagHorizontalFormItem=exports.TagCheckAllVerticalFormItem=exports.TagCheckAllSelectFormItem=exports.TagCheckAllHorizontalFormItem=exports.TableSelectFormItem=exports.TableMulitSelectFormItem=exports.TableFormItem=exports.StepsFormItem=exports.SelectFormItem=exports.SegmentedFormItem=exports.RadioVerticalFormItem=exports.RadioSelectFormItem=exports.RadioHorizontalFormItem=exports.RadioCustomFormItem=exports.RadioButtonFormItem=exports.MulitSelectFormItem=exports.MenuFormItem=exports.MentionsFormItem=exports.ListSelectFormItem=exports.ListMulitSelectFormItem=exports.ListFormItem=exports.DropdownFormItem=exports.CheckBoxVerticalFormItem=exports.CheckBoxSelectFormItem=exports.CheckBoxHorizontalFormItem=exports.CheckBoxCustomFormItem=exports.CheckBoxCheckAllVerticalFormItem=exports.CheckBoxCheckAllSelectFormItem=exports.CheckBoxCheckAllHorizontalFormItem=exports.CheckBoxCheckAllCustomFormItem=exports.CheckAllMulitSelectFormItem=exports.CascaderMulitFormItem=exports.CascaderLeafMulitFormItem=exports.CascaderLeafFormItem=exports.CascaderFormItem=exports.BreadcrumbFormItem=exports.AutoCompleteFormItem=exports.validatorMulti=exports.validatorNormal=void 0,__importDefault(require("./AutoCompleteFormItem"))),BreadcrumbFormItem_1=(exports.AutoCompleteFormItem=AutoCompleteFormItem_1.default,__importDefault(require("./BreadcrumbFormItem"))),CascaderFormItem_1=(exports.BreadcrumbFormItem=BreadcrumbFormItem_1.default,__importDefault(require("./CascaderFormItem"))),CascaderLeafFormItem_1=(exports.CascaderFormItem=CascaderFormItem_1.default,__importDefault(require("./CascaderLeafFormItem"))),CascaderLeafMulitFormItem_1=(exports.CascaderLeafFormItem=CascaderLeafFormItem_1.default,__importDefault(require("./CascaderLeafMulitFormItem"))),CascaderMulitFormItem_1=(exports.CascaderLeafMulitFormItem=CascaderLeafMulitFormItem_1.default,__importDefault(require("./CascaderMulitFormItem"))),CheckAllMulitSelectFormItem_1=(exports.CascaderMulitFormItem=CascaderMulitFormItem_1.default,__importDefault(require("./CheckAllMulitSelectFormItem"))),CheckBoxCheckAllCustomFormItem_1=(exports.CheckAllMulitSelectFormItem=CheckAllMulitSelectFormItem_1.default,__importDefault(require("./CheckBoxCheckAllCustomFormItem"))),CheckBoxCheckAllHorizontalFormItem_1=(exports.CheckBoxCheckAllCustomFormItem=CheckBoxCheckAllCustomFormItem_1.default,__importDefault(require("./CheckBoxCheckAllHorizontalFormItem"))),CheckBoxCheckAllSelectFormItem_1=(exports.CheckBoxCheckAllHorizontalFormItem=CheckBoxCheckAllHorizontalFormItem_1.default,__importDefault(require("./CheckBoxCheckAllSelectFormItem"))),CheckBoxCheckAllVerticalFormItem_1=(exports.CheckBoxCheckAllSelectFormItem=CheckBoxCheckAllSelectFormItem_1.default,__importDefault(require("./CheckBoxCheckAllVerticalFormItem"))),CheckBoxCustomFormItem_1=(exports.CheckBoxCheckAllVerticalFormItem=CheckBoxCheckAllVerticalFormItem_1.default,__importDefault(require("./CheckBoxCustomFormItem"))),CheckBoxHorizontalFormItem_1=(exports.CheckBoxCustomFormItem=CheckBoxCustomFormItem_1.default,__importDefault(require("./CheckBoxHorizontalFormItem"))),CheckBoxSelectFormItem_1=(exports.CheckBoxHorizontalFormItem=CheckBoxHorizontalFormItem_1.default,__importDefault(require("./CheckBoxSelectFormItem"))),CheckBoxVerticalFormItem_1=(exports.CheckBoxSelectFormItem=CheckBoxSelectFormItem_1.default,__importDefault(require("./CheckBoxVerticalFormItem"))),DropdownFormItem_1=(exports.CheckBoxVerticalFormItem=CheckBoxVerticalFormItem_1.default,__importDefault(require("./DropdownFormItem"))),ItemFactory_1=(exports.DropdownFormItem=DropdownFormItem_1.default,require("./Fields/AutoComplete"),require("./Fields/Breadcrumb"),require("./Fields/Cascader"),require("./Fields/CheckBox"),require("./Fields/Dropdown"),require("./Fields/List"),require("./Fields/Mentions"),require("./Fields/Menu"),require("./Fields/Radio"),require("./Fields/Segmented"),require("./Fields/Select"),require("./Fields/Steps"),require("./Fields/Table"),require("./Fields/Tag"),require("./Fields/Timeline"),require("./Fields/Transfer"),require("./Fields/TreeSelect"),__importDefault(require("./ItemFactory"))),ListFormItem_1=__importDefault(require("./ListFormItem")),ListMulitSelectFormItem_1=(exports.ListFormItem=ListFormItem_1.default,__importDefault(require("./ListMulitSelectFormItem"))),ListSelectFormItem_1=(exports.ListMulitSelectFormItem=ListMulitSelectFormItem_1.default,__importDefault(require("./ListSelectFormItem"))),MentionsFormItem_1=(exports.ListSelectFormItem=ListSelectFormItem_1.default,__importDefault(require("./MentionsFormItem"))),MenuFormItem_1=(exports.MentionsFormItem=MentionsFormItem_1.default,__importDefault(require("./MenuFormItem"))),MulitSelectFormItem_1=(exports.MenuFormItem=MenuFormItem_1.default,__importDefault(require("./MulitSelectFormItem"))),RadioButtonFormItem_1=(exports.MulitSelectFormItem=MulitSelectFormItem_1.default,__importDefault(require("./RadioButtonFormItem"))),RadioCustomFormItem_1=(exports.RadioButtonFormItem=RadioButtonFormItem_1.default,__importDefault(require("./RadioCustomFormItem"))),RadioHorizontalFormItem_1=(exports.RadioCustomFormItem=RadioCustomFormItem_1.default,__importDefault(require("./RadioHorizontalFormItem"))),RadioSelectFormItem_1=(exports.RadioHorizontalFormItem=RadioHorizontalFormItem_1.default,__importDefault(require("./RadioSelectFormItem"))),RadioVerticalFormItem_1=(exports.RadioSelectFormItem=RadioSelectFormItem_1.default,__importDefault(require("./RadioVerticalFormItem"))),SegmentedFormItem_1=(exports.RadioVerticalFormItem=RadioVerticalFormItem_1.default,__importDefault(require("./SegmentedFormItem"))),SelectFormItem_1=(exports.SegmentedFormItem=SegmentedFormItem_1.default,__importDefault(require("./SelectFormItem"))),StepsFormItem_1=(exports.SelectFormItem=SelectFormItem_1.default,__importDefault(require("./StepsFormItem"))),TableFormItem_1=(exports.StepsFormItem=StepsFormItem_1.default,__importDefault(require("./TableFormItem"))),TableMulitSelectFormItem_1=(exports.TableFormItem=TableFormItem_1.default,__importDefault(require("./TableMulitSelectFormItem"))),TableSelectFormItem_1=(exports.TableMulitSelectFormItem=TableMulitSelectFormItem_1.default,__importDefault(require("./TableSelectFormItem"))),TagCheckAllHorizontalFormItem_1=(exports.TableSelectFormItem=TableSelectFormItem_1.default,__importDefault(require("./TagCheckAllHorizontalFormItem"))),TagCheckAllSelectFormItem_1=(exports.TagCheckAllHorizontalFormItem=TagCheckAllHorizontalFormItem_1.default,__importDefault(require("./TagCheckAllSelectFormItem"))),TagCheckAllVerticalFormItem_1=(exports.TagCheckAllSelectFormItem=TagCheckAllSelectFormItem_1.default,__importDefault(require("./TagCheckAllVerticalFormItem"))),TagHorizontalFormItem_1=(exports.TagCheckAllVerticalFormItem=TagCheckAllVerticalFormItem_1.default,__importDefault(require("./TagHorizontalFormItem"))),TagMultiSelectFormItem_1=(exports.TagHorizontalFormItem=TagHorizontalFormItem_1.default,__importDefault(require("./TagMultiSelectFormItem"))),TagSelectFormItem_1=(exports.TagMultiSelectFormItem=TagMultiSelectFormItem_1.default,__importDefault(require("./TagSelectFormItem"))),TagVerticalFormItem_1=(exports.TagSelectFormItem=TagSelectFormItem_1.default,__importDefault(require("./TagVerticalFormItem"))),TimelineFormItem_1=(exports.TagVerticalFormItem=TagVerticalFormItem_1.default,__importDefault(require("./TimelineFormItem"))),TransferFormItem_1=(exports.TimelineFormItem=TimelineFormItem_1.default,__importDefault(require("./TransferFormItem"))),TransferSelectFormItem_1=(exports.TransferFormItem=TransferFormItem_1.default,__importDefault(require("./TransferSelectFormItem"))),TreeMulitSelectFormItem_1=(exports.TransferSelectFormItem=TransferSelectFormItem_1.default,__importDefault(require("./TreeMulitSelectFormItem"))),TreeSelectFormItem_1=(exports.TreeMulitSelectFormItem=TreeMulitSelectFormItem_1.default,__importDefault(require("./TreeSelectFormItem"))),TreeSelectLeafFormItem_1=(exports.TreeSelectFormItem=TreeSelectFormItem_1.default,__importDefault(require("./TreeSelectLeafFormItem"))),TreeSelectLeafMulitFormItem_1=(exports.TreeSelectLeafFormItem=TreeSelectLeafFormItem_1.default,__importDefault(require("./TreeSelectLeafMulitFormItem"))),TreeSelectMulitFormItem_1=(exports.TreeSelectLeafMulitFormItem=TreeSelectLeafMulitFormItem_1.default,__importDefault(require("./TreeSelectMulitFormItem"))),validatorNormal=(exports.TreeSelectMulitFormItem=TreeSelectMulitFormItem_1.default,function(r){return{validator:function(e,t){return t?Promise.resolve():Promise.reject(r)}}}),validatorMulti=(exports.validatorNormal=validatorNormal,function(r){return{validator:function(e,t){return!t||Array.isArray(t)&&!t.length?Promise.reject(r):Promise.resolve()}}}),ItemNames=(exports.validatorMulti=validatorMulti,new Map([["AutoCompleteDynamic",["FormItem"]],["AutoComplete",["FormItem"]],["BreadcrumbDynamic",["FormItem"]],["Breadcrumb",["FormItem"]],["CascaderDynamic",["FormItem","LeafFormItem","MulitFormItem","LeafMulitFormItem"]],["Cascader",["FormItem","LeafFormItem","MulitFormItem","LeafMulitFormItem"]],["CheckBoxDynamic",["VerticalFormItem","HorizontalFormItem","CheckAllVerticalFormItem","CheckAllHorizontalFormItem","SelectFormItem","CheckAllSelectFormItem","CustomFormItem","CheckAllCustomFormItem"]],["CheckBox",["VerticalFormItem","HorizontalFormItem","CheckAllVerticalFormItem","CheckAllHorizontalFormItem","SelectFormItem","CheckAllSelectFormItem","CustomFormItem","CheckAllCustomFormItem"]],["DropdownDynamic",["FormItem"]],["Dropdown",["FormItem"]],["ListPagination",["FormItem","SelectFormItem","MulitSelectFormItem"]],["ListDynamic",["FormItem","SelectFormItem","MulitSelectFormItem"]],["List",["FormItem","SelectFormItem","MulitSelectFormItem"]],["MentionsDynamic",["FormItem"]],["Mentions",["FormItem"]],["MenuDynamic",["FormItem"]],["Menu",["FormItem"]],["RadioDynamic",["VerticalFormItem","HorizontalFormItem","ButtonFormItem","SelectFormItem","CustomFormItem"]],["Radio",["VerticalFormItem","HorizontalFormItem","ButtonFormItem","SelectFormItem","CustomFormItem"]],["SegmentedDynamic",["FormItem"]],["Segmented",["FormItem"]],["StepsDynamic",["FormItem"]],["Steps",["FormItem"]],["TablePagination",["FormItem","SelectFormItem","MulitSelectFormItem"]],["TableDynamic",["FormItem","SelectFormItem","MulitSelectFormItem"]],["Table",["FormItem","SelectFormItem","MulitSelectFormItem"]],["TagDynamic",["VerticalFormItem","HorizontalFormItem","CheckAllVerticalFormItem","CheckAllHorizontalFormItem","SelectFormItem","MultiSelectFormItem","CheckAllSelectFormItem"]],["Tag",["VerticalFormItem","HorizontalFormItem","CheckAllVerticalFormItem","CheckAllHorizontalFormItem","SelectFormItem","MultiSelectFormItem","CheckAllSelectFormItem"]],["TimelineDynamic",["FormItem"]],["Timeline",["FormItem"]],["TransferDynamic",["FormItem","SelectFormItem"]],["Transfer",["FormItem","SelectFormItem"]],["TreeDynamic",["FormItem","LeafFormItem","MulitFormItem","LeafMulitFormItem"]],["Tree",["FormItem","LeafFormItem","MulitFormItem","LeafMulitFormItem"]],["AutoSelectComplete",["FormItem","MulitFormItem","CheckAllMulitFormItem"]],["SelectDynamic",["FormItem","MulitFormItem","CheckAllMulitFormItem"]],["Select",["FormItem","MulitFormItem","CheckAllMulitFormItem"]]]));exports.default=new Proxy({},{get:function(e,m,t){var o,l,a;if(m in e&&e[m])return Reflect.get(e,m,t);for(var r,i=Array.from(ItemNames.keys()),F=0;F<i.length&&"break"!==function(e){var t=i[e],e=null!=(o=ItemNames.get(t))?o:[],r=e.findIndex(function(e){return m.endsWith("".concat(t).concat(e))});if(-1!==r)return l=t,a=e[r],"break"}(F);F++);return l&&a?(r=m.substring(0,m.lastIndexOf(a)),t[m]=(0,ItemFactory_1.default)({itemName:l,functionName:a,dictName:r}),Reflect.get(e,m,t)):void 0}});
//# sourceMappingURL=index.js.map