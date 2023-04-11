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
import './Fields/AutoComplete';
import './Fields/Breadcrumb';
import './Fields/Cascader';
import './Fields/CheckBox';
import './Fields/Dropdown';
import './Fields/List';
import './Fields/Mentions';
import './Fields/Menu';
import './Fields/Radio';
import './Fields/Segmented';
import './Fields/Select';
import './Fields/Steps';
import './Fields/Table';
import './Fields/Tag';
import './Fields/Timeline';
import './Fields/Transfer';
import './Fields/TreeSelect';
import ItemFactory from './ItemFactory';
import ListFormItem from './ListFormItem';
import ListMulitSelectFormItem from './ListMulitSelectFormItem';
import ListSelectFormItem from './ListSelectFormItem';
import MentionsFormItem from './MentionsFormItem';
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

export const validatorNormal = (message) => ({
  validator(_, value) {
    if (!value) {
      return Promise.reject(message);
    }

    return Promise.resolve();
  },
});

export const validatorMulti = (message) => ({
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
  CascaderFormItem,
  CascaderLeafFormItem,
  CascaderLeafMulitFormItem,
  CascaderMulitFormItem,
  CheckAllMulitSelectFormItem,
  CheckBoxCheckAllCustomFormItem,
  CheckBoxCheckAllHorizontalFormItem,
  CheckBoxCheckAllSelectFormItem,
  CheckBoxCheckAllVerticalFormItem,
  CheckBoxCustomFormItem,
  CheckBoxHorizontalFormItem,
  CheckBoxSelectFormItem,
  CheckBoxVerticalFormItem,
  DropdownFormItem,
  ListFormItem,
  ListMulitSelectFormItem,
  ListSelectFormItem,
  MentionsFormItem,
  MenuFormItem,
  MulitSelectFormItem,
  RadioButtonFormItem,
  RadioCustomFormItem,
  RadioHorizontalFormItem,
  RadioSelectFormItem,
  RadioVerticalFormItem,
  SegmentedFormItem,
  SelectFormItem,
  StepsFormItem,
  TableFormItem,
  TableMulitSelectFormItem,
  TableSelectFormItem,
  TagCheckAllHorizontalFormItem,
  TagCheckAllSelectFormItem,
  TagCheckAllVerticalFormItem,
  TagHorizontalFormItem,
  TagMultiSelectFormItem,
  TagSelectFormItem,
  TagVerticalFormItem,
  TimelineFormItem,
  TransferFormItem,
  TransferSelectFormItem,
  TreeMulitSelectFormItem,
  TreeSelectFormItem,
  TreeSelectLeafFormItem,
  TreeSelectLeafMulitFormItem,
  TreeSelectMulitFormItem,
};

const ItemNames = new Map([
  ['AutoCompleteDynamic', ['FormItem']],
  ['AutoComplete', ['FormItem']],

  ['BreadcrumbDynamic', ['FormItem']],
  ['Breadcrumb', ['FormItem']],

  ['CascaderDynamic', ['FormItem', 'LeafFormItem', 'MulitFormItem', 'LeafMulitFormItem']],
  ['Cascader', ['FormItem', 'LeafFormItem', 'MulitFormItem', 'LeafMulitFormItem']],

  [
    'CheckBoxDynamic',
    [
      'VerticalFormItem',
      'HorizontalFormItem',
      'CheckAllVerticalFormItem',
      'CheckAllHorizontalFormItem',
      'SelectFormItem',
      'CheckAllSelectFormItem',
      'CustomFormItem',
      'CheckAllCustomFormItem',
    ],
  ],
  [
    'CheckBox',
    [
      'VerticalFormItem',
      'HorizontalFormItem',
      'CheckAllVerticalFormItem',
      'CheckAllHorizontalFormItem',
      'SelectFormItem',
      'CheckAllSelectFormItem',
      'CustomFormItem',
      'CheckAllCustomFormItem',
    ],
  ],

  ['DropdownDynamic', ['FormItem']],
  ['Dropdown', ['FormItem']],

  ['ListPagination', ['FormItem', 'SelectFormItem', 'MulitSelectFormItem']],
  ['ListDynamic', ['FormItem', 'SelectFormItem', 'MulitSelectFormItem']],
  ['List', ['FormItem', 'SelectFormItem', 'MulitSelectFormItem']],

  ['MentionsDynamic', ['FormItem']],
  ['Mentions', ['FormItem']],

  ['MenuDynamic', ['FormItem']],
  ['Menu', ['FormItem']],

  [
    'RadioDynamic',
    [
      'VerticalFormItem',
      'HorizontalFormItem',
      'ButtonFormItem',
      'SelectFormItem',
      'CustomFormItem',
    ],
  ],
  [
    'Radio',
    [
      'VerticalFormItem',
      'HorizontalFormItem',
      'ButtonFormItem',
      'SelectFormItem',
      'CustomFormItem',
    ],
  ],

  ['SegmentedDynamic', ['FormItem']],
  ['Segmented', ['FormItem']],

  ['StepsDynamic', ['FormItem']],
  ['Steps', ['FormItem']],

  ['TablePagination', ['FormItem', 'SelectFormItem', 'MulitSelectFormItem']],
  ['TableDynamic', ['FormItem', 'SelectFormItem', 'MulitSelectFormItem']],
  ['Table', ['FormItem', 'SelectFormItem', 'MulitSelectFormItem']],

  [
    'TagDynamic',
    [
      'VerticalFormItem',
      'HorizontalFormItem',
      'CheckAllVerticalFormItem',
      'CheckAllHorizontalFormItem',
      'SelectFormItem',
      'MultiSelectFormItem',
      'CheckAllSelectFormItem',
    ],
  ],
  [
    'Tag',
    [
      'VerticalFormItem',
      'HorizontalFormItem',
      'CheckAllVerticalFormItem',
      'CheckAllHorizontalFormItem',
      'SelectFormItem',
      'MultiSelectFormItem',
      'CheckAllSelectFormItem',
    ],
  ],

  ['TimelineDynamic', ['FormItem']],
  ['Timeline', ['FormItem']],

  ['TransferDynamic', ['FormItem', 'SelectFormItem']],
  ['Transfer', ['FormItem', 'SelectFormItem']],

  ['TreeDynamic', ['FormItem', 'LeafFormItem', 'MulitFormItem', 'LeafMulitFormItem']],
  ['Tree', ['FormItem', 'LeafFormItem', 'MulitFormItem', 'LeafMulitFormItem']],

  // 必须放在最后
  ['AutoSelectComplete', ['FormItem', 'MulitFormItem', 'CheckAllMulitFormItem']],
  ['SelectDynamic', ['FormItem', 'MulitFormItem', 'CheckAllMulitFormItem']],
  ['Select', ['FormItem', 'MulitFormItem', 'CheckAllMulitFormItem']],
]);

export default new Proxy(
  {},
  {
    get(target: {}, p: string, receiver: any): any {
      // p
      // p = SystemAppBasicLayoutRectifyTransferListSectionSelectDynamicMulitFormItem
      // p = SystemAppBasicLayoutRectifyTransferListSectionSelectDynamic + MulitFormItem
      // (业务名 + 组件名 + 功能名)
      // p = SystemAppBasicLayoutRectifyTransferListSection + SelectDynamic + MulitFormItem

      // 存在则返回
      if (p in target && !!target[p]) return Reflect.get(target, p, receiver);

      // 组件名
      let itemName;
      // 功能名
      let functionName;

      const itemNames = Array.from(ItemNames.keys());

      for (let i = 0; i < itemNames.length; i++) {
        const _itemName = itemNames[i];
        const _functionNames = ItemNames.get(_itemName) ?? [];
        const _functionNameIndex = _functionNames.findIndex((_functionName) =>
          p.endsWith(`${_itemName}${_functionName}`),
        );

        if (_functionNameIndex !== -1) {
          itemName = _itemName;
          functionName = _functionNames[_functionNameIndex];
          break;
        }
      }

      if (!itemName || !functionName) return;

      // 字典名
      const dictName = p.substring(0, p.lastIndexOf(functionName));

      receiver[p] = ItemFactory({ itemName, functionName, dictName });

      return Reflect.get(target, p, receiver);
    },
  },
);