/**
 * setItem
 * @param {string} itemName - 组件名称
 * @param {string} functionName - 功能名称
 * @param {(dictName: string) => any)} handler
 */
export declare function setItem(itemName: string, functionName: string, handler: (dictName: string) => any): void;
/**
 * getItem
 * @param {string} itemName - 组件名
 * @param {string} functionName - 功能名
 * @param {string} dictName - 字典的名称
 */
export declare function getItem({ itemName, functionName, dictName, }: {
    itemName: string;
    functionName: string;
    dictName: string;
}): any;
/**
 * ItemFactory
 * // p = 字典名(业务名 + 组件名) + 功能名
 * // p = SystemAppBasicLayoutRectifyTransferListSection + SelectDynamic + MulitFormItem
 * @param params
 * @return {any}
 */
declare const _default: ({ itemName, functionName, dictName, }: {
    itemName: string;
    functionName: string;
    dictName: string;
}) => any;
export default _default;
