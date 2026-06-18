import type { DesignValue } from '../../../types';
/** 向单个布局节点（TableGrid / Flex / Card 等）的 props.children 追加子项 */
export declare function pushSourceIntoLayoutChildren(layoutNode: DesignValue, source: DesignValue): void;
/**
 * layoutReducerToAdd
 * @param state
 * @param action
 */
export declare function layoutReducerToAdd(state: DesignValue, action: {
    sourceDesignValue: DesignValue;
    targetId: string;
}): DesignValue[];
