import"core-js/modules/es.object.assign.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,m=1,r=arguments.length;m<r;m++)for(var o in t=arguments[m])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import CascaderFormItem from"./CascaderFormItem";import CascaderLeafFormItem from"./CascaderLeafFormItem";import CascaderLeafMulitFormItem from"./CascaderLeafMulitFormItem";import CascaderMulitFormItem from"./CascaderMulitFormItem";import CheckAllMulitSelectFormItem from"./CheckAllMulitSelectFormItem";import CheckBoxCheckAllCustomFormItem from"./CheckBoxCheckAllCustomFormItem";import CheckBoxCheckAllHorizontalFormItem from"./CheckBoxCheckAllHorizontalFormItem";import CheckBoxCheckAllSelectFormItem from"./CheckBoxCheckAllSelectFormItem";import CheckBoxCheckAllVerticalFormItem from"./CheckBoxCheckAllVerticalFormItem";import CheckBoxCustomFormItem from"./CheckBoxCustomFormItem";import CheckBoxHorizontalFormItem from"./CheckBoxHorizontalFormItem";import CheckBoxSelectFormItem from"./CheckBoxSelectFormItem";import CheckBoxVerticalFormItem from"./CheckBoxVerticalFormItem";import Cascader from"./Fields/Cascader";import CheckBox from"./Fields/CheckBox";import List from"./Fields/List";import Radio from"./Fields/Radio";import Select from"./Fields/Select";import Table from"./Fields/Table";import Tag from"./Fields/Tag";import Transfer from"./Fields/Transfer";import TreeSelect from"./Fields/TreeSelect";import ListFormItem from"./ListFormItem";import ListMulitSelectFormItem from"./ListMulitSelectFormItem";import ListSelectFormItem from"./ListSelectFormItem";import MulitSelectFormItem from"./MulitSelectFormItem";import RadioButtonFormItem from"./RadioButtonFormItem";import RadioCustomFormItem from"./RadioCustomFormItem";import RadioHorizontalFormItem from"./RadioHorizontalFormItem";import RadioSelectFormItem from"./RadioSelectFormItem";import RadioVerticalFormItem from"./RadioVerticalFormItem";import SelectFormItem from"./SelectFormItem";import TableFormItem from"./TableFormItem";import TableMulitSelectFormItem from"./TableMulitSelectFormItem";import TableSelectFormItem from"./TableSelectFormItem";import TransferFormItem from"./TransferFormItem";import TransferSelectFormItem from"./TransferSelectFormItem";import TreeMulitSelectFormItem from"./TreeMulitSelectFormItem";import TreeSelectFormItem from"./TreeSelectFormItem";import TreeSelectLeafFormItem from"./TreeSelectLeafFormItem";import TreeSelectLeafMulitFormItem from"./TreeSelectLeafMulitFormItem";import TreeSelectMulitFormItem from"./TreeSelectMulitFormItem";var FormItemComponents=__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},Cascader()),CheckBox()),List()),Radio()),Select()),Table()),Transfer()),TreeSelect()),Tag()),validatorNormal=function(m){return{validator:function(e,t){return t?Promise.resolve():Promise.reject(m)}}},validatorMulti=function(m){return{validator:function(e,t){return!t||Array.isArray(t)&&!t.length?Promise.reject(m):Promise.resolve()}}};export default FormItemComponents;export{validatorMulti,validatorNormal,TableSelectFormItem,TableMulitSelectFormItem,CheckBoxHorizontalFormItem,RadioVerticalFormItem,MulitSelectFormItem,TreeSelectLeafMulitFormItem,ListMulitSelectFormItem,TreeSelectLeafFormItem,CascaderMulitFormItem,CheckBoxCheckAllCustomFormItem,TreeSelectMulitFormItem,CascaderLeafFormItem,ListFormItem,CascaderFormItem,SelectFormItem,CascaderLeafMulitFormItem,CheckBoxCheckAllVerticalFormItem,ListSelectFormItem,CheckBoxCheckAllHorizontalFormItem,TreeMulitSelectFormItem,TransferSelectFormItem,TreeSelectFormItem,RadioCustomFormItem,RadioHorizontalFormItem,TableFormItem,CheckBoxCustomFormItem,TransferFormItem,CheckBoxVerticalFormItem,CheckBoxCheckAllSelectFormItem,CheckBoxSelectFormItem,RadioButtonFormItem,RadioSelectFormItem,CheckAllMulitSelectFormItem};
//# sourceMappingURL=index.js.map
