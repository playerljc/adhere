import Components from './Components';
import ItemFactory from './ItemFactory';
import './fields/AutoComplete';
import './fields/Breadcrumb';
import './fields/Cascader';
import './fields/CheckBox';
import './fields/Dropdown';
import './fields/List';
import './fields/Mentions';
import './fields/Menu';
import './fields/Radio';
import './fields/Segmented';
import './fields/Select';
import './fields/Steps';
import './fields/Table';
import './fields/Tag';
import './fields/Timeline';
import './fields/Transfer';
import './fields/TreeSelect';

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

const dictComponentHash = Object.entries(Components).reduce((ret, entry) => {
  const [componentName, functionNameHash] = entry;
  const functionNameArray = Object.keys(functionNameHash);
  functionNameArray.forEach((functionName) => {
    const dictComponentName = functionNameHash[functionName];
    ret[dictComponentName] = { componentName, functionName };
  });
  return ret;
}, {});

const ItemNames = Object.entries(Components).reduce((ret, entry) => {
  const [componentName, functionNameHash] = entry;
  const functionNameArray = Object.keys(functionNameHash);
  ret.set(componentName, functionNameArray);
  return ret;
}, new Map());

/**
 * 生成字典组件名
 * @param dictName - 字典名
 * @param componentName - 组件名 (如: SelectFormItem)，可通过 Components 获取
 * @example
 * ```js
 * const dictComponentName = genDictComponentName('SystemUsers', Components.Select.FormItem);
 * ```
 */
const genDictComponentName = (dictName: string, componentName: string) => {
  return `${dictName}${componentName}`;
};

/**
 * 获取字典组件
 * @param dictName - 字典名
 * @param componentName - 组件名 (如: SelectFormItem)，可通过 Components 获取
 * @returns
 */
const getDictComponent = (dictName: string, componentName: string) => {
  const { componentName: itemName, functionName } = dictComponentHash[componentName];
  return ItemFactory({ dictName, itemName, functionName });
};

export { Components, ItemNames, getDictComponent, genDictComponentName };

export default new Proxy<any>(
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
