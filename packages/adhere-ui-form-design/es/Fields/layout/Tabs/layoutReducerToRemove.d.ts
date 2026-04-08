import type { DesignValue } from '../../../types';
/**
 * layoutReducerToRemove
 * @param state
 * @param action
 *
 * Tabs children 为二维数组：每个 tab 对应一个 children 数组
 */
export declare function layoutReducerToRemove(state: DesignValue, action: {
    sourceDesignValue: DesignValue;
    targetId: string;
}): (DesignValue | DesignValue[])[];
