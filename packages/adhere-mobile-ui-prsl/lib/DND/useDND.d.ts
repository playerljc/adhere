import type { DNDChangeValue, ModeType } from '../types';
export type UseDNDParams = {
    mode: ModeType;
    dataSource: Record<string, any>[];
    reset: () => void;
    rowKey: string;
    total: number;
};
export type DNDMoveParams = {
    oldIndex: number;
    newIndex: number;
};
/**
 * UseDND
 * @param mode
 * @param dataSource
 * @param reset
 * @param rowKey
 * @param total
 * @constructor
 */
export default function UseDND({ mode, dataSource, reset, rowKey, total }: UseDNDParams): {
    optionDataSource: {
        data: Record<string, any>[];
        total: number;
    };
    isUseDNDMode: boolean;
    finish: () => DNDChangeValue;
    cancel: () => void;
    move: ({ oldIndex, newIndex }: DNDMoveParams) => void;
};
