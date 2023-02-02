"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var m in t=arguments[r])Object.prototype.hasOwnProperty.call(t,m)&&(e[m]=t[m]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},CascaderFormItem_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.CheckAllMulitSelectFormItem=exports.RadioSelectFormItem=exports.RadioButtonFormItem=exports.CheckBoxSelectFormItem=exports.CheckBoxCheckAllSelectFormItem=exports.CheckBoxVerticalFormItem=exports.TransferFormItem=exports.CheckBoxCustomFormItem=exports.TableFormItem=exports.RadioHorizontalFormItem=exports.RadioCustomFormItem=exports.TreeSelectFormItem=exports.TransferSelectFormItem=exports.TreeMulitSelectFormItem=exports.CheckBoxCheckAllHorizontalFormItem=exports.ListSelectFormItem=exports.CheckBoxCheckAllVerticalFormItem=exports.CascaderLeafMulitFormItem=exports.SelectFormItem=exports.CascaderFormItem=exports.ListFormItem=exports.CascaderLeafFormItem=exports.TreeSelectMulitFormItem=exports.CheckBoxCheckAllCustomFormItem=exports.CascaderMulitFormItem=exports.TreeSelectLeafFormItem=exports.ListMulitSelectFormItem=exports.TreeSelectLeafMulitFormItem=exports.MulitSelectFormItem=exports.RadioVerticalFormItem=exports.CheckBoxHorizontalFormItem=exports.TableMulitSelectFormItem=exports.TableSelectFormItem=exports.validatorNormal=exports.validatorMulti=void 0,__importDefault(require("./CascaderFormItem"))),CascaderLeafFormItem_1=(exports.CascaderFormItem=CascaderFormItem_1.default,__importDefault(require("./CascaderLeafFormItem"))),CascaderLeafMulitFormItem_1=(exports.CascaderLeafFormItem=CascaderLeafFormItem_1.default,__importDefault(require("./CascaderLeafMulitFormItem"))),CascaderMulitFormItem_1=(exports.CascaderLeafMulitFormItem=CascaderLeafMulitFormItem_1.default,__importDefault(require("./CascaderMulitFormItem"))),CheckAllMulitSelectFormItem_1=(exports.CascaderMulitFormItem=CascaderMulitFormItem_1.default,__importDefault(require("./CheckAllMulitSelectFormItem"))),CheckBoxCheckAllCustomFormItem_1=(exports.CheckAllMulitSelectFormItem=CheckAllMulitSelectFormItem_1.default,__importDefault(require("./CheckBoxCheckAllCustomFormItem"))),CheckBoxCheckAllHorizontalFormItem_1=(exports.CheckBoxCheckAllCustomFormItem=CheckBoxCheckAllCustomFormItem_1.default,__importDefault(require("./CheckBoxCheckAllHorizontalFormItem"))),CheckBoxCheckAllSelectFormItem_1=(exports.CheckBoxCheckAllHorizontalFormItem=CheckBoxCheckAllHorizontalFormItem_1.default,__importDefault(require("./CheckBoxCheckAllSelectFormItem"))),CheckBoxCheckAllVerticalFormItem_1=(exports.CheckBoxCheckAllSelectFormItem=CheckBoxCheckAllSelectFormItem_1.default,__importDefault(require("./CheckBoxCheckAllVerticalFormItem"))),CheckBoxCustomFormItem_1=(exports.CheckBoxCheckAllVerticalFormItem=CheckBoxCheckAllVerticalFormItem_1.default,__importDefault(require("./CheckBoxCustomFormItem"))),CheckBoxHorizontalFormItem_1=(exports.CheckBoxCustomFormItem=CheckBoxCustomFormItem_1.default,__importDefault(require("./CheckBoxHorizontalFormItem"))),CheckBoxSelectFormItem_1=(exports.CheckBoxHorizontalFormItem=CheckBoxHorizontalFormItem_1.default,__importDefault(require("./CheckBoxSelectFormItem"))),CheckBoxVerticalFormItem_1=(exports.CheckBoxSelectFormItem=CheckBoxSelectFormItem_1.default,__importDefault(require("./CheckBoxVerticalFormItem"))),Cascader_1=(exports.CheckBoxVerticalFormItem=CheckBoxVerticalFormItem_1.default,__importDefault(require("./Fields/Cascader"))),CheckBox_1=__importDefault(require("./Fields/CheckBox")),List_1=__importDefault(require("./Fields/List")),Radio_1=__importDefault(require("./Fields/Radio")),Select_1=__importDefault(require("./Fields/Select")),Table_1=__importDefault(require("./Fields/Table")),Tag_1=__importDefault(require("./Fields/Tag")),Transfer_1=__importDefault(require("./Fields/Transfer")),TreeSelect_1=__importDefault(require("./Fields/TreeSelect")),ListFormItem_1=__importDefault(require("./ListFormItem")),ListMulitSelectFormItem_1=(exports.ListFormItem=ListFormItem_1.default,__importDefault(require("./ListMulitSelectFormItem"))),ListSelectFormItem_1=(exports.ListMulitSelectFormItem=ListMulitSelectFormItem_1.default,__importDefault(require("./ListSelectFormItem"))),MulitSelectFormItem_1=(exports.ListSelectFormItem=ListSelectFormItem_1.default,__importDefault(require("./MulitSelectFormItem"))),RadioButtonFormItem_1=(exports.MulitSelectFormItem=MulitSelectFormItem_1.default,__importDefault(require("./RadioButtonFormItem"))),RadioCustomFormItem_1=(exports.RadioButtonFormItem=RadioButtonFormItem_1.default,__importDefault(require("./RadioCustomFormItem"))),RadioHorizontalFormItem_1=(exports.RadioCustomFormItem=RadioCustomFormItem_1.default,__importDefault(require("./RadioHorizontalFormItem"))),RadioSelectFormItem_1=(exports.RadioHorizontalFormItem=RadioHorizontalFormItem_1.default,__importDefault(require("./RadioSelectFormItem"))),RadioVerticalFormItem_1=(exports.RadioSelectFormItem=RadioSelectFormItem_1.default,__importDefault(require("./RadioVerticalFormItem"))),SelectFormItem_1=(exports.RadioVerticalFormItem=RadioVerticalFormItem_1.default,__importDefault(require("./SelectFormItem"))),TableFormItem_1=(exports.SelectFormItem=SelectFormItem_1.default,__importDefault(require("./TableFormItem"))),TableMulitSelectFormItem_1=(exports.TableFormItem=TableFormItem_1.default,__importDefault(require("./TableMulitSelectFormItem"))),TableSelectFormItem_1=(exports.TableMulitSelectFormItem=TableMulitSelectFormItem_1.default,__importDefault(require("./TableSelectFormItem"))),TransferFormItem_1=(exports.TableSelectFormItem=TableSelectFormItem_1.default,__importDefault(require("./TransferFormItem"))),TransferSelectFormItem_1=(exports.TransferFormItem=TransferFormItem_1.default,__importDefault(require("./TransferSelectFormItem"))),TreeMulitSelectFormItem_1=(exports.TransferSelectFormItem=TransferSelectFormItem_1.default,__importDefault(require("./TreeMulitSelectFormItem"))),TreeSelectFormItem_1=(exports.TreeMulitSelectFormItem=TreeMulitSelectFormItem_1.default,__importDefault(require("./TreeSelectFormItem"))),TreeSelectLeafFormItem_1=(exports.TreeSelectFormItem=TreeSelectFormItem_1.default,__importDefault(require("./TreeSelectLeafFormItem"))),TreeSelectLeafMulitFormItem_1=(exports.TreeSelectLeafFormItem=TreeSelectLeafFormItem_1.default,__importDefault(require("./TreeSelectLeafMulitFormItem"))),TreeSelectMulitFormItem_1=(exports.TreeSelectLeafMulitFormItem=TreeSelectLeafMulitFormItem_1.default,__importDefault(require("./TreeSelectMulitFormItem"))),FormItemComponents=(exports.TreeSelectMulitFormItem=TreeSelectMulitFormItem_1.default,__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},(0,Cascader_1.default)()),(0,CheckBox_1.default)()),(0,List_1.default)()),(0,Radio_1.default)()),(0,Select_1.default)()),(0,Table_1.default)()),(0,Transfer_1.default)()),(0,TreeSelect_1.default)()),(0,Tag_1.default)())),validatorNormal=function(r){return{validator:function(e,t){return t?Promise.resolve():Promise.reject(r)}}},validatorMulti=(exports.validatorNormal=validatorNormal,function(r){return{validator:function(e,t){return!t||Array.isArray(t)&&!t.length?Promise.reject(r):Promise.resolve()}}});exports.validatorMulti=validatorMulti,exports.default=FormItemComponents;
//# sourceMappingURL=index.js.map
