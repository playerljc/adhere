import type { DictReactComponentObj, UseDictOptions, UseDictState } from './types';
/**
 * set - 设置字典对应的组件
 * @param {string} key - 字典名称
 * @return {void}
 */
export declare function set(key: string): void;
/**
 * useDict
 * @description dict的hook
 * @param {string} dictName - 字典名称 如：SystemUser
 * @param {UseDictOptions} _options 配置
 * @return { data: any, isPending: boolean, isValidate: boolean, refresh:Function }
 */
export declare const useDict: (dictName: string, _options?: UseDictOptions) => UseDictState;
/**
 * Components - 字典对应的React组件
 * 调用init后会自动填充
 */
declare const DictReactComponents: DictReactComponentObj;
export default DictReactComponents;
