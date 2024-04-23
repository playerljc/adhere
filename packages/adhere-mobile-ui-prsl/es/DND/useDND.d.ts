import type { DNDChangeValue } from '../types';
/**
 * UseDND
 * @param mode
 * @param dataSource
 * @param reset
 * @param rowKey
 * @constructor
 */
export default function UseDND({ mode, dataSource, reset, rowKey }: {
    mode: any;
    dataSource: any;
    reset: any;
    rowKey: any;
}): {
    optionDataSource: {
        data: any[];
        total: number;
    };
    isUseDNDMode: boolean;
    finish: () => DNDChangeValue;
    cancel: () => void;
    move: ({ oldIndex, newIndex }: {
        oldIndex: any;
        newIndex: any;
    }) => void;
};
