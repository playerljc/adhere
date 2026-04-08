import type { DesignValue } from '../../../types';
export declare function layoutReducerToRemove(state: DesignValue, action: {
    sourceDesignValue: DesignValue;
    targetId: string;
}): DesignValue[];
