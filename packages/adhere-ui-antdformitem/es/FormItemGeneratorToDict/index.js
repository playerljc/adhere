import"core-js/modules/es.object.assign.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var m in r=arguments[t])Object.prototype.hasOwnProperty.call(r,m)&&(e[m]=r[m]);return e}).apply(this,arguments)};import CascaderFormItem from"./CascaderFormItem";import CascaderMulitFormItem from"./CascaderMulitFormItem";import CheckAllMulitSelectFormItem from"./CheckAllMulitSelectFormItem";import CheckBoxCheckAllSelectFormItem from"./CheckBoxCheckAllSelectFormItem";import CheckBoxSelectFormItem from"./CheckBoxSelectFormItem";import Cascader from"./Fields/Cascader";import CheckBox from"./Fields/CheckBox";import List from"./Fields/List";import Radio from"./Fields/Radio";import Select from"./Fields/Select";import Table from"./Fields/Table";import Tag from"./Fields/Tag";import Transfer from"./Fields/Transfer";import TreeSelect from"./Fields/TreeSelect";import MulitSelectFormItem from"./MulitSelectFormItem";import RadioSelectFormItem from"./RadioSelectFormItem";import SelectFormItem from"./SelectFormItem";import TransferSelectFormItem from"./TransferSelectFormItem";import TreeMulitSelectFormItem from"./TreeMulitSelectFormItem";import TreeSelectFormItem from"./TreeSelectFormItem";var FormItemComponents=__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},Cascader()),CheckBox()),List()),Radio()),Select()),Table()),Transfer()),TreeSelect()),Tag()),validatorNormal=function(t){return{validator:function(e,r){return r?Promise.resolve():Promise.reject(t)}}},validatorMulti=function(t){return{validator:function(e,r){return!r||Array.isArray(r)&&!r.length?Promise.reject(t):Promise.resolve()}}};export default FormItemComponents;export{validatorMulti,validatorNormal,CascaderFormItem,CascaderMulitFormItem,CheckAllMulitSelectFormItem,CheckBoxCheckAllSelectFormItem,CheckBoxSelectFormItem,MulitSelectFormItem,RadioSelectFormItem,SelectFormItem,TransferSelectFormItem,TreeMulitSelectFormItem,TreeSelectFormItem};
//# sourceMappingURL=index.js.map
