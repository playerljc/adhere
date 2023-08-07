/**
 * deepDep - deepDep
 * @param {any} dep
 */
export const deepDep = (dep: any) => JSON.stringify(dep);

/**
 * getOriginDictNameByItemName
 * @description 根据itemName获取实际的dictName
 * // 实际使用的名字(业务名 + 组件名 + 功能名)
 * // p = SystemAppBasicLayoutRectifyTransferListSection(业务名) + SelectDynamic(组件名) + MultiFormItem(功能名)
 *
 * // 字典的名字(业务名 + 组件名)
 * // p = SystemAppBasicLayoutRectifyTransferListSection(业务名) + SelectDynamic(组件名)
 * @param {string} targetDictName 当前的dictName
 * @param {string} dictItemName dict的itemName(组件名)
 * @return {string} originDictName
 */
export const getOriginDictNameByItemName = (
  targetDictName: string,
  dictItemName: string,
): string => {
  return targetDictName.substring(0, targetDictName.lastIndexOf(dictItemName));
};
