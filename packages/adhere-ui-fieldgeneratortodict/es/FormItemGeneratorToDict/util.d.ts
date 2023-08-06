/**
 * deepDep - deepDep
 * @param {any} dep
 */
export declare const deepDep: (dep: any) => string;
/**
 * getOriginDictNameByItemName
 * @description 根据itemName获取实际的dictName
 * // 实际使用的名字(业务名 + 组件名 + 功能名)
 * // p = SystemAppBasicLayoutRectifyTransferListSection(业务名) + SelectDynamic(组件名) + MulitFormItem(功能名)
 *
 * // 字典的名字(业务名 + 组件名)
 * // p = SystemAppBasicLayoutRectifyTransferListSection(业务名) + SelectDynamic(组件名)
 * @param {string} targetDictName 当前的dictName
 * @param {string} dictItemName dict的itemName(组件名)
 * @return {string} originDictName
 */
export declare const getOriginDictNameByItemName: (targetDictName: string, dictItemName: string) => string;
