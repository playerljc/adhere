import type { FC } from 'react';
import type { DictComponentProps } from '../types';
/**
 * setItem
 * @param {string} itemName - 组件名称
 * @param {string} functionName - 功能名称
 * @param {(originDictName: string, dictName?: string) => any)} handler
 */
export declare function setItem<T, D>(itemName: string, functionName: string, handler: (originDictName: string, dictName?: string) => FC<DictComponentProps<T, D>>): void;
/**
 * getItem
 * @param {string} itemName - 组件名
 * @param {string} functionName - 功能名
 * @param {string} dictName - 字典的名称
 */
export declare function getItem<P>({ itemName, functionName, dictName, }: {
    itemName: string;
    functionName: string;
    dictName: string;
}): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<import("../types").DictRefreshWrapperFunction>> | null;
/**
 * ItemFactory
 * // p = 字典名(业务名 + 组件名) + 功能名
 * // p = SystemAppBasicLayoutRectifyTransferListSection + SelectDynamic + MultiFormItem
 * @param params
 */
declare function ItemFactory<P>({ itemName, functionName, dictName, }: {
    itemName: string;
    functionName: string;
    dictName: string;
}): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<import("../types").DictRefreshWrapperFunction>> | null;
export default ItemFactory;
