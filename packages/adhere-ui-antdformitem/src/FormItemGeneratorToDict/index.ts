import AutoCompleteFormItem from './AutoCompleteFormItem';
import CascaderFormItem from './CascaderFormItem';
import CascaderLeafFormItem from './CascaderLeafFormItem';
import CascaderLeafMulitFormItem from './CascaderLeafMulitFormItem';
import CascaderMulitFormItem from './CascaderMulitFormItem';
import CheckAllMulitSelectFormItem from './CheckAllMulitSelectFormItem';
import CheckBoxCheckAllCustomFormItem from './CheckBoxCheckAllCustomFormItem';
import CheckBoxCheckAllHorizontalFormItem from './CheckBoxCheckAllHorizontalFormItem';
import CheckBoxCheckAllSelectFormItem from './CheckBoxCheckAllSelectFormItem';
import CheckBoxCheckAllVerticalFormItem from './CheckBoxCheckAllVerticalFormItem';
import CheckBoxCustomFormItem from './CheckBoxCustomFormItem';
import CheckBoxHorizontalFormItem from './CheckBoxHorizontalFormItem';
import CheckBoxSelectFormItem from './CheckBoxSelectFormItem';
import CheckBoxVerticalFormItem from './CheckBoxVerticalFormItem';
import AutoComplete from './Fields/AutoComplete';
import Cascader from './Fields/Cascader';
import CheckBox from './Fields/CheckBox';
import List from './Fields/List';
import Radio from './Fields/Radio';
import Select from './Fields/Select';
import Table from './Fields/Table';
import Tag from './Fields/Tag';
import Transfer from './Fields/Transfer';
import TreeSelect from './Fields/TreeSelect';
import ListFormItem from './ListFormItem';
import ListMulitSelectFormItem from './ListMulitSelectFormItem';
import ListSelectFormItem from './ListSelectFormItem';
import MulitSelectFormItem from './MulitSelectFormItem';
import RadioButtonFormItem from './RadioButtonFormItem';
import RadioCustomFormItem from './RadioCustomFormItem';
import RadioHorizontalFormItem from './RadioHorizontalFormItem';
import RadioSelectFormItem from './RadioSelectFormItem';
import RadioVerticalFormItem from './RadioVerticalFormItem';
import SelectFormItem from './SelectFormItem';
import TableFormItem from './TableFormItem';
import TableMulitSelectFormItem from './TableMulitSelectFormItem';
import TableSelectFormItem from './TableSelectFormItem';
import TagCheckAllHorizontalFormItem from './TagCheckAllHorizontalFormItem';
import TagCheckAllSelectFormItem from './TagCheckAllSelectFormItem';
import TagCheckAllVerticalFormItem from './TagCheckAllVerticalFormItem';
import TagHorizontalFormItem from './TagHorizontalFormItem';
import TagMultiSelectFormItem from './TagMultiSelectFormItem';
import TagSelectFormItem from './TagSelectFormItem';
import TagVerticalFormItem from './TagVerticalFormItem';
import TransferFormItem from './TransferFormItem';
import TransferSelectFormItem from './TransferSelectFormItem';
import TreeMulitSelectFormItem from './TreeMulitSelectFormItem';
import TreeSelectFormItem from './TreeSelectFormItem';
import TreeSelectLeafFormItem from './TreeSelectLeafFormItem';
import TreeSelectLeafMulitFormItem from './TreeSelectLeafMulitFormItem';
import TreeSelectMulitFormItem from './TreeSelectMulitFormItem';

const FormItemComponents = {
  ...AutoComplete(),
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
  AutoCompleteFormItem,
  validatorMulti,
  validatorNormal,
  TableFormItem,
  TableSelectFormItem,
  TableMulitSelectFormItem,
  TreeSelectLeafMulitFormItem,
  TreeSelectLeafFormItem,
  TreeSelectMulitFormItem,
  TreeSelectFormItem,
  TreeMulitSelectFormItem,
  TagCheckAllHorizontalFormItem,
  TagCheckAllSelectFormItem,
  TagCheckAllVerticalFormItem,
  TagHorizontalFormItem,
  TagSelectFormItem,
  TagMultiSelectFormItem,
  TagVerticalFormItem,
  CheckBoxHorizontalFormItem,
  CheckBoxCheckAllCustomFormItem,
  CheckBoxCheckAllVerticalFormItem,
  CheckBoxCheckAllHorizontalFormItem,
  CheckBoxVerticalFormItem,
  CheckBoxCheckAllSelectFormItem,
  CheckBoxCustomFormItem,
  CheckBoxSelectFormItem,
  RadioVerticalFormItem,
  RadioCustomFormItem,
  RadioHorizontalFormItem,
  RadioButtonFormItem,
  RadioSelectFormItem,
  ListMulitSelectFormItem,
  ListSelectFormItem,
  ListFormItem,
  CascaderFormItem,
  CascaderMulitFormItem,
  CascaderLeafFormItem,
  CascaderLeafMulitFormItem,
  CheckAllMulitSelectFormItem,
  SelectFormItem,
  MulitSelectFormItem,
  TransferFormItem,
  TransferSelectFormItem,
};

export default FormItemComponents;
