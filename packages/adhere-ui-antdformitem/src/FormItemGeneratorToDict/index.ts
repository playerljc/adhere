import AutoCompleteFormItem from './AutoCompleteFormItem';
import BreadcrumbFormItem from './BreadcrumbFormItem';
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
import DropdownFormItem from './DropdownFormItem';
import AutoComplete from './Fields/AutoComplete';
import Breadcrumb from './Fields/Breadcrumb';
import Cascader from './Fields/Cascader';
import CheckBox from './Fields/CheckBox';
import Dropdown from './Fields/Dropdown';
import List from './Fields/List';
import Menu from './Fields/Menu';
import Radio from './Fields/Radio';
import Segmented from './Fields/Segmented';
import Select from './Fields/Select';
import Steps from './Fields/Steps';
import Table from './Fields/Table';
import Tag from './Fields/Tag';
import Timeline from './Fields/Timeline';
import Transfer from './Fields/Transfer';
import TreeSelect from './Fields/TreeSelect';
import ListFormItem from './ListFormItem';
import ListMulitSelectFormItem from './ListMulitSelectFormItem';
import ListSelectFormItem from './ListSelectFormItem';
import MenuFormItem from './MenuFormItem';
import MulitSelectFormItem from './MulitSelectFormItem';
import RadioButtonFormItem from './RadioButtonFormItem';
import RadioCustomFormItem from './RadioCustomFormItem';
import RadioHorizontalFormItem from './RadioHorizontalFormItem';
import RadioSelectFormItem from './RadioSelectFormItem';
import RadioVerticalFormItem from './RadioVerticalFormItem';
import SegmentedFormItem from './SegmentedFormItem';
import SelectFormItem from './SelectFormItem';
import StepsFormItem from './StepsFormItem';
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
import TimelineFormItem from './TimelineFormItem';
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
  ...Menu(),
  ...Dropdown(),
  ...Breadcrumb(),
  ...Segmented(),
  ...Timeline(),
  ...Steps(),
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
  BreadcrumbFormItem,
  DropdownFormItem,
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
  SegmentedFormItem,
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
  MenuFormItem,
  TransferFormItem,
  TransferSelectFormItem,
  TimelineFormItem,
  StepsFormItem,
};

export default FormItemComponents;
