import type { DesignValue } from '../../../types';
/** 从单个布局节点的 props.children 中按 id 删除子项 */
export declare function removeSourceFromLayoutChildren(layoutNode: DesignValue, sourceId: string): boolean;
export declare function layoutReducerToRemove(state: DesignValue, action: {
    sourceDesignValue: DesignValue;
    targetId: string;
}): DesignValue[];
