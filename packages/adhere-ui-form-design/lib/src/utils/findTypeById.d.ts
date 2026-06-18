import type { DesignValue, FieldType } from '../types';
/**
 * 根据 id 在设计值树中查找并返回对应节点的 type
 * @description 递归查找设计值中指定id的字段类型
 */
export declare function findTypeById({ id, designValue, }: {
    id: string;
    designValue: DesignValue | undefined;
}): FieldType | undefined;
