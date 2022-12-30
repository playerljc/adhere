import CascaderFormItem from './CascaderFormItem';
import CascaderMulitFormItem from './CascaderMulitFormItem';
import CheckAllMulitSelectFormItem from './CheckAllMulitSelectFormItem';
import CheckBoxCheckAllSelectFormItem from './CheckBoxCheckAllSelectFormItem';
import CheckBoxSelectFormItem from './CheckBoxSelectFormItem';
import Cascader from './Fields/Cascader';
import CheckBox from './Fields/CheckBox';
import List from './Fields/List';
import Radio from './Fields/Radio';
import Select from './Fields/Select';
import Table from './Fields/Table';
import Tag from './Fields/Tag';
import Transfer from './Fields/Transfer';
import TreeSelect from './Fields/TreeSelect';
import MulitSelectFormItem from './MulitSelectFormItem';
import RadioSelectFormItem from './RadioSelectFormItem';
import SelectFormItem from './SelectFormItem';
import TransferSelectFormItem from './TransferSelectFormItem';
import TreeMulitSelectFormItem from './TreeMulitSelectFormItem';
import TreeSelectFormItem from './TreeSelectFormItem';

const FormItemComponents = {
  ...Cascader(),
  ...CheckBox(),
  ...List(),
  ...Radio(),
  ...Select(),
  ...Table(),
  ...Transfer(),
  ...TreeSelect(),
  ...Tag(),
};

const validatorNormal = (message) => ({
  validator(_, value) {
    if (!value) {
      return Promise.reject(message);
    }

    return Promise.resolve();
  },
});

const validatorMulti = (message) => ({
  validator(_, value) {
    if (!value) {
      return Promise.reject(message);
    }

    if (Array.isArray(value) && !value.length) {
      return Promise.reject(message);
    }

    return Promise.resolve();
  },
});

export {
  validatorMulti,
  validatorNormal,
  CascaderFormItem,
  CascaderMulitFormItem,
  CheckAllMulitSelectFormItem,
  CheckBoxCheckAllSelectFormItem,
  CheckBoxSelectFormItem,
  MulitSelectFormItem,
  RadioSelectFormItem,
  SelectFormItem,
  TransferSelectFormItem,
  TreeMulitSelectFormItem,
  TreeSelectFormItem,
};

export default FormItemComponents;
