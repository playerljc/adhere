import type { DesignValue } from '../types';
/**
 * flattenDesignChildren
 * @description 与 Outline 等视图一致：将 props.children 展平为一维 DesignValue[]（支持嵌套数组片段）
 */
export declare function flattenDesignChildren(children: unknown): DesignValue[];
/**
 * findParentWithChildIndex
 * @description 在设计树中查找 childId 的直接父节点及其在父节点扁平 children 中的下标
 */
export declare function findParentWithChildIndex(root: DesignValue, childId: string): {
    parent: DesignValue;
    index: number;
} | null;
