/**
 * isPrimitiveValue
 * @description 空字符串不参与实体还原。数字 0、布尔 false 仍然算原始值。
 */
export declare function isPrimitiveValue(value: unknown): boolean;
export declare function isRefValue(value: unknown): boolean;
export declare function isMultiplePrimitiveValue(value: unknown, nested?: boolean): boolean;
export declare function isMultipleRefValue(value: unknown, nested?: boolean): boolean;
/**
 * readEntityValue
 * @description 显式 valueProp / fieldNames.value 优先，否则按 value、key、id 查找。
 */
export declare function readEntityValue(entity: any, preferred?: string): any;
/**
 * sameEntityValue
 * @description 只比较引用和数组结构。原始值还原失败时数组内容仍相同，用来拦住重复 onChange。
 */
export declare function sameEntityValue(left: any, right: any): boolean;
export declare function childPassesThroughValue(childProps?: {
    labelInValue?: boolean;
    treeCheckStrictly?: boolean;
}): boolean;
