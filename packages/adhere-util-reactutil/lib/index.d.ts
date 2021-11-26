import { ReactElement } from 'react';
declare const _default: {
    /**
     * keyMap
     * @description - 迭代数组返回一个肯定含有key的JSX数组
     * @param arr
     * @param handler
     * @return Array
     */
    keyMap(arr: any[] | undefined, handler: (item: any, index: number) => ReactElement): Array<ReactElement>;
    /**
     * fillKey
     * @description - 将一个ReactElements填充key
     * @param elements
     * @return Array
     */
    fillKey(elements?: Array<ReactElement>): Array<ReactElement>;
};
export default _default;
