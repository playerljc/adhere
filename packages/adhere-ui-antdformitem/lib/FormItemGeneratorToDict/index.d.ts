import CascaderFormItem from './CascaderFormItem';
import CascaderMulitFormItem from './CascaderMulitFormItem';
import CheckAllMulitSelectFormItem from './CheckAllMulitSelectFormItem';
import CheckBoxCheckAllSelectFormItem from './CheckBoxCheckAllSelectFormItem';
import CheckBoxSelectFormItem from './CheckBoxSelectFormItem';
import MulitSelectFormItem from './MulitSelectFormItem';
import RadioSelectFormItem from './RadioSelectFormItem';
import SelectFormItem from './SelectFormItem';
import TransferSelectFormItem from './TransferSelectFormItem';
import TreeMulitSelectFormItem from './TreeMulitSelectFormItem';
import TreeSelectFormItem from './TreeSelectFormItem';
declare const FormItemComponents: {};
declare const validatorNormal: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
declare const validatorMulti: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
export { validatorMulti, validatorNormal, CascaderFormItem, CascaderMulitFormItem, CheckAllMulitSelectFormItem, CheckBoxCheckAllSelectFormItem, CheckBoxSelectFormItem, MulitSelectFormItem, RadioSelectFormItem, SelectFormItem, TransferSelectFormItem, TreeMulitSelectFormItem, TreeSelectFormItem, };
export default FormItemComponents;
