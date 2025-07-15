import { ReactElement } from 'react';
/**
 * React工具函数集合
 */
interface ReactUtil {
    /**
     * 为数组元素生成带有唯一key的React元素数组
     * @description 迭代数组并返回一个确保每个元素都有唯一key的JSX数组
     * @template T - 数组元素的类型
     * @param arr - 要处理的数组
     * @param handler - 处理函数，接收数组元素和索引，返回React元素
     * @returns 带有唯一key的React元素数组
     * @example
     * ```tsx
     * const items = ['a', 'b', 'c'];
     * const elements = reactUtil.keyMap(items, (item, index) => (
     *   <div>{item}</div>
     * ));
     * ```
     */
    keyMap<T = any>(arr: T[], handler: (item: T, index: number) => ReactElement): ReactElement[];
    /**
     * 为React元素数组填充唯一的key属性
     * @description 遍历React元素数组，为没有key的元素自动生成唯一key
     * @param elements - React元素数组
     * @returns 所有元素都带有唯一key的React元素数组
     * @example
     * ```tsx
     * const elements = [
     *   <div>Item 1</div>,
     *   <div key="existing-key">Item 2</div>,
     *   <div>Item 3</div>
     * ];
     * const elementsWithKeys = reactUtil.fillKey(elements);
     * ```
     */
    fillKey(elements: ReactElement[]): ReactElement[];
}
/**
 * React工具函数实现
 */
declare const reactUtil: ReactUtil;
export default reactUtil;
export type { ReactUtil };
