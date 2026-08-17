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
/**
 * 遍历 children 并对每个 DesignValue 节点应用 mapper，保留嵌套数组片段结构。
 * 未发生变化时返回原 children 引用。
 */
export declare function mapDesignChildren(children: DesignValue['props']['children'], mapper: (child: DesignValue) => DesignValue): DesignValue['props']['children'];
/**
 * 沿路径浅拷更新指定 id 的节点；未命中的兄弟子树保持原引用。
 * 遍历含嵌套数组片段，与 Outline / flattenDesignChildren 一致。
 */
export declare function updateDesignValueById(root: DesignValue, id: string, updater: (node: DesignValue) => DesignValue): DesignValue;
/**
 * 不可变删除：规则对齐 deleteDesignValueByIdInChildren（先扫直接子节点再递归）。
 * 同时支持嵌套数组片段中的直接子节点删除，以免破坏 Outline 结构。
 */
export declare function deleteDesignValueById(root: DesignValue, id: string): DesignValue;
/**
 * 浅拷贝从根到指定 id 集合的路径（含目标节点本身），用于 swap 等需同时改多个节点的场景。
 * 返回的树上，ids 中的节点均为新对象，可安全改 props.children 而不污染原树。
 */
export declare function clonePathContainingIds(root: DesignValue, ids: Set<string>): {
    root: DesignValue;
    nodes: Map<string, DesignValue>;
};
