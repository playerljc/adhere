import Components from './Components';
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
export declare const validatorNormal: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
export declare const validatorMulti: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
declare const ItemNames: Map<any, any>;
/**
 * 生成字典组件名
 * @param dictName - 字典名
 * @param componentName - 组件名 (如: SelectFormItem)，可通过 Components 获取
 * @example
 * ```js
 * const dictComponentName = genDictComponentName('SystemUsers', Components.Select.FormItem);
 * ```
 */
declare const genDictComponentName: (dictName: string, componentName: string) => string;
/**
 * 获取字典组件
 * @param dictName - 字典名
 * @param componentName - 组件名 (如: SelectFormItem)，可通过 Components 获取
 * @returns
 */
declare const getDictComponent: (dictName: string, componentName: string) => any;
export { Components, ItemNames, getDictComponent, genDictComponentName };
declare const _default: any;
export default _default;
