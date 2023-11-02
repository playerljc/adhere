/// <reference types="react" />
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
import TreeMultiSelectFormItem from './TreeMultiSelectFormItem';
export declare const validatorNormal: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
export declare const validatorMulti: (message: any) => {
    validator(_: any, value: any): Promise<void>;
};
export declare const components: {
    AutoCompleteFormItem: import("react").FC<import("../types").AutoCompleteFormItemProps>;
    CascaderFormItem: import("react").FC<import("../types").CascaderFormItemProps>;
    CascaderLeafFormItem: import("react").FC<import("../types").CascaderLeafFormItemProps>;
    CascaderLeafMultiFormItem: import("react").FC<import("../types").CascaderLeafMultiFormItemProps>;
    CascaderMultiFormItem: import("react").FC<import("../types").CascaderMultiFormItemProps>;
    CheckAllMultiSelectFormItem: import("react").FC<import("../types").CheckAllFormItemProps>;
    CheckBoxCheckAllCustomFormItem: import("react").FC<import("../types").CheckBoxCheckAllCustomFormItemProps>;
    CheckBoxCheckAllHorizontalFormItem: import("react").FC<import("../types").CheckBoxCheckAllHorizontalFormItemProps>;
    CheckBoxCheckAllSelectFormItem: import("react").FC<import("../types").RadioSelectFormItemProps>;
    CheckBoxCheckAllVerticalFormItem: import("react").FC<import("../types").CheckBoxCheckAllVerticalFormItemProps>;
    CheckBoxCustomFormItem: import("react").FC<import("../types").CheckBoxCustomFormItemProps>;
    CheckBoxHorizontalFormItem: import("react").FC<import("../types").CheckBoxHorizontalFormItemProps>;
    CheckBoxSelectFormItem: import("react").FC<import("../types").RadioSelectFormItemProps>;
    CheckBoxVerticalFormItem: import("react").FC<import("../types").CheckBoxVerticalFormItemProps>;
    ListFormItem: import("react").FC<import("../types").ListFormItemProps>;
    ListMultiSelectFormItem: import("react").FC<import("../types").ListMultiSelectFormItemProps>;
    ListSelectFormItem: import("react").FC<import("../types").ListSelectFormItemProps>;
    MultiSelectFormItem: import("react").FC<import("../types").SelectFormItemProps>;
    RadioButtonFormItem: import("react").FC<import("../types").RadioButtonFormItemProps>;
    RadioCustomFormItem: import("react").FC<import("../types").RadioCustomFormItemProps>;
    RadioHorizontalFormItem: import("react").FC<import("../types").RadioHorizontalFormItemProps>;
    RadioSelectFormItem: import("react").FC<import("../types").RadioSelectFormItemProps>;
    RadioVerticalFormItem: import("react").FC<import("../types").RadioVerticalFormItemProps>;
    SelectFormItem: import("react").FC<import("../types").SelectFormItemProps>;
    StepsFormItem: import("react").FC<import("../types").StepsFormItemProps>;
    TableFormItem: import("react").FC<import("../types").TableFormItemProps>;
    TableMultiSelectFormItem: import("react").FC<import("../types").TableMultiSelectFormItemProps>;
    TableSelectFormItem: import("react").FC<import("../types").TableSelectFormItemProps>;
    TagCheckAllHorizontalFormItem: import("react").FC<import("../types").TagCheckAllFormItemProps>;
    TagCheckAllSelectFormItem: import("react").FC<import("../types").RadioSelectFormItemProps>;
    TagCheckAllVerticalFormItem: import("react").FC<import("../types").TagCheckAllFormItemProps>;
    TagHorizontalFormItem: import("react").FC<import("../types").TagFormItemProps>;
    TagMultiSelectFormItem: import("react").FC<import("../types").TagSelectFormItemProps>;
    TagSelectFormItem: import("react").FC<import("../types").TagSelectFormItemProps>;
    TagVerticalFormItem: import("react").FC<import("../types").TagFormItemProps>;
    TimelineFormItem: import("react").FC<import("../types").TimelineFormItemProps>;
    TransferFormItem: import("react").FC<import("../types").TransferFormItemProps>;
    TransferSelectFormItem: import("react").FC<import("../types").RadioSelectFormItemProps>;
    TreeMultiSelectFormItem: typeof TreeMultiSelectFormItem;
    TreeSelectFormItem: import("react").FC<import("../types").TreeSelectFormItemProps>;
    TreeSelectLeafFormItem: import("react").FC<import("../types").TreeSelectLeafFormItemProps>;
    TreeSelectLeafMultiFormItem: import("react").FC<import("../types").TreeSelectLeafMultiFormItemProps>;
    TreeSelectMultiFormItem: import("react").FC<import("../types").TreeSelectMultiFormItemProps>;
};
export { Components };
export declare const ItemNames: Map<any, any>;
/**
 * 生成字典组件名
 * @param dictName - 字典名
 * @param componentName - 组件名 (如: SelectFormItem)，可通过 Components 获取
 * @example
 * ```js
 * const dictComponentName = genDictComponentName('SystemUsers', Components.Select.FormItem);
 * ```
 */
export declare const genDictComponentName: (dictName: string, componentName: string) => string;
/**
 * 获取字典组件
 * @param dictName - 字典名
 * @param componentName - 组件名 (如: SelectFormItem)，可通过 Components 获取
 * @returns
 */
export declare const getDictComponent: (dictName: string, componentName: string) => any;
declare const _default: {};
export default _default;
