import AutoCompleteFormItem from './AutoCompleteFormItem';
import CascaderFormItem from './CascaderFormItem';
import CascaderLeafFormItem from './CascaderLeafFormItem';
import CascaderLeafMultiFormItem from './CascaderLeafMultiFormItem';
import CascaderMultiFormItem from './CascaderMultiFormItem';
import CheckAllMultiSelectFormItem from './CheckAllMultiSelectFormItem';
import CheckBoxCheckAllCustomFormItem from './CheckBoxCheckAllCustomFormItem';
import CheckBoxCheckAllHorizontalFormItem from './CheckBoxCheckAllHorizontalFormItem';
import CheckBoxCheckAllSelectFormItem from './CheckBoxCheckAllSelectFormItem';
import CheckBoxCheckAllVerticalFormItem from './CheckBoxCheckAllVerticalFormItem';
import CheckBoxCustomFormItem from './CheckBoxCustomFormItem';
import CheckBoxHorizontalFormItem from './CheckBoxHorizontalFormItem';
import CheckBoxSelectFormItem from './CheckBoxSelectFormItem';
import CheckBoxVerticalFormItem from './CheckBoxVerticalFormItem';
import Components from './Components';
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
import ListMultiSelectFormItem from './ListMultiSelectFormItem';
import ListSelectFormItem from './ListSelectFormItem';
import MultiSelectFormItem from './MultiSelectFormItem';
import RadioButtonFormItem from './RadioButtonFormItem';
import RadioCustomFormItem from './RadioCustomFormItem';
import RadioHorizontalFormItem from './RadioHorizontalFormItem';
import RadioSelectFormItem from './RadioSelectFormItem';
import RadioVerticalFormItem from './RadioVerticalFormItem';
import SelectFormItem from './SelectFormItem';
import StepsFormItem from './StepsFormItem';
import TableFormItem from './TableFormItem';
import TableMultiSelectFormItem from './TableMultiSelectFormItem';
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
import TreeMultiSelectFormItem from './TreeMultiSelectFormItem';
import TreeSelectFormItem from './TreeSelectFormItem';
import TreeSelectLeafFormItem from './TreeSelectLeafFormItem';
import TreeSelectLeafMultiFormItem from './TreeSelectLeafMultiFormItem';
import TreeSelectMultiFormItem from './TreeSelectMultiFormItem';

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

export const components = {
  AutoCompleteFormItem,
  CascaderFormItem,
  CascaderLeafFormItem,
  CascaderLeafMultiFormItem,
  CascaderMultiFormItem,
  CheckAllMultiSelectFormItem,
  CheckBoxCheckAllCustomFormItem,
  CheckBoxCheckAllHorizontalFormItem,
  CheckBoxCheckAllSelectFormItem,
  CheckBoxCheckAllVerticalFormItem,
  CheckBoxCustomFormItem,
  CheckBoxHorizontalFormItem,
  CheckBoxSelectFormItem,
  CheckBoxVerticalFormItem,
  ListFormItem,
  ListMultiSelectFormItem,
  ListSelectFormItem,
  MultiSelectFormItem,
  RadioButtonFormItem,
  RadioCustomFormItem,
  RadioHorizontalFormItem,
  RadioSelectFormItem,
  RadioVerticalFormItem,
  SelectFormItem,
  StepsFormItem,
  TableFormItem,
  TableMultiSelectFormItem,
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
  TreeMultiSelectFormItem,
  TreeSelectFormItem,
  TreeSelectLeafFormItem,
  TreeSelectLeafMultiFormItem,
  TreeSelectMultiFormItem,
};

export { Components };

export const ItemNames = Object.entries(Components).reduce((ret, entry) => {
  const [componentName, functionNameHash] = entry;
  const functionNameArray = Object.keys(functionNameHash);
  ret.set(componentName, functionNameArray);
  return ret;
}, new Map());

export default new Proxy(
  {},
  {
    get(target: {}, p: string, receiver: any): any {
      // p
      // p = SystemAppBasicLayoutRectifyTransferListSectionSelectDynamicMultiFormItem
      // p = SystemAppBasicLayoutRectifyTransferListSectionSelectDynamic + MultiFormItem
      // (业务名 + 组件名 + 功能名)
      // p = SystemAppBasicLayoutRectifyTransferListSection + SelectDynamic + MultiFormItem

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
