import type { DictReactComponentObj } from './types';
/**
 * set - 设置字典对应的组件
 * @param {string} key - 字典名称
 * @return {void}
 */
export declare function set(key: any): void;
/**
 * Components - 字典对用的React组件
 * 调用init后会自动填充
 */
declare const DictReactComponents: DictReactComponentObj;
export default DictReactComponents;
