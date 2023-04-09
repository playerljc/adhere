import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

const { memoized } = WatchMemoized;

const map = new Map<string, (dictName: string) => any>();

/**
 * setItem
 * @param {string} itemName - 组件名称
 * @param {string} functionName - 功能名称
 * @param {(dictName: string) => any)} handler
 */
export function setItem(
  itemName: string,
  functionName: string,
  handler: (dictName: string) => any,
) {
  map.set(`${itemName}${functionName}`, handler);
}

/**
 * getItem
 * @param {string} itemName - 组件名
 * @param {string} functionName - 功能名
 * @param {string} dictName - 字典的名称
 */
export function getItem({
  itemName,
  functionName,
  dictName,
}: {
  itemName: string;
  functionName: string;
  dictName: string;
}) {
  return memoized.createMemoFun(map.get(`${itemName}${functionName}`) as Function)?.(dictName);
}

/**
 * ItemFactory
 * // p = 字典名(业务名 + 组件名) + 功能名
 * // p = SystemAppBasicLayoutRectifyTransferListSection + SelectDynamic + MulitFormItem
 * @param params
 * @return {any}
 */
export default ({
  itemName,
  functionName,
  dictName,
}: {
  itemName: string;
  functionName: string;
  dictName: string;
}): any => getItem({ itemName, functionName, dictName });
