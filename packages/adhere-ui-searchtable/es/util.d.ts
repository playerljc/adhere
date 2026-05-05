import type { ValidatorRule } from './types';
/**
 * findRecord
 * @description 在dataResource中查找rowKey是id的record
 * @param {any[]} dataSource
 * @param {string} rowKey
 * @param {any} id
 * @return {any}
 */
export declare function findRecord(dataSource: any[], rowKey: string | undefined, id: any): any;
/**
 * findBrother
 * @param {any[]} dataSource
 * @param {string} rowKey
 * @param {any} id
 * @return {any[]}
 */
export declare function findBrother(dataSource: any[], rowKey: string | undefined, id: any): any[];
/**
 * flatDataSource
 * @description 拉平dataSource中的的children
 * @param {any[]} dataSource
 * @return {any[]}
 */
export declare function flatDataSource(dataSource: any[]): any[];
/**
 * swap
 * @description 交换两个record
 * @param {any} record1
 * @param {any} record2
 */
export declare function swap(record1: any, record2: any): void;
/**
 * moveSort
 * @description 在同一层级兄弟节点中将dragId对应的记录移动到hoverId对应记录的位置，其他兄弟节点顺序顺移。
 * 由于findBrother返回的是dataSource中真实的兄弟数组引用，对其splice将原地反映到dataSource上。
 * @param {any[]} dataSource
 * @param {string} rowKey
 * @param {any} dragId
 * @param {any} hoverId
 */
export declare function moveSort(dataSource: any[], rowKey: string | undefined, dragId: any, hoverId: any): void;
/**
 * isSameLevel
 * @description 是否是同一层级
 * @param {any[]} dataSource
 * @param {string} rowKey
 * @param {string} sourceId
 * @param {string} targetId
 * @return {boolean}
 */
export declare function isSameLevel({ dataSource, rowKey, sourceId, targetId }: {
    dataSource: any;
    rowKey?: string | undefined;
    sourceId: any;
    targetId: any;
}): boolean;
/**
 * createTreeDataChildren
 * @description 创建TreeData的children
 * @param {ReactElement} tdREL 单元格
 * @param {ReactNode} subChildren
 * @return {ReactNode[]}
 */
export declare const createTreeDataChildren: (tdREL: any, subChildren: any) => any[];
/**
 * createChildren
 * @description 创建children
 * @param {ReactElement} tdREL 单元格
 * @param {ReactNode} subChildren
 * @return {ReactNode[]}
 */
export declare const createChildren: (tdREL: any, subChildren: any) => any[];
export declare const cloneDeep: (obj: {
    [x: string]: any;
}) => {};
/**
 * hasCommonPathRelation
 * @param path1
 * @param path2
 */
export declare function hasCommonPathRelation(path1: string, path2: string): boolean;
export declare const clone: any;
export declare function asyncLoop({ tasks, ...rest }: {
    [x: string]: any;
    tasks: any;
}): Promise<void>;
export declare const validator: (rules: ValidatorRule[]) => {
    validator: (_: any, value: any, cb: any) => Promise<void>;
};
