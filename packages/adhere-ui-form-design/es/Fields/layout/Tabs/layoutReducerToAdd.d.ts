import type { DesignValue } from '../../../types';
/**
 * layoutReducerToAdd
 * @param state
 * @param action
 */
export declare function layoutReducerToAdd(state: DesignValue, action: {
    sourceDesignValue: DesignValue;
    targetId: string;
}): (DesignValue | DesignValue[])[];
