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
