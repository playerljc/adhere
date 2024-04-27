import type { DNDChangeValue } from '../types';
/**
 * UseDND
 * @param mode
 * @param dataSource
 * @param reset
 * @param rowKey
 * @param total
 * @constructor
 */
export default function UseDND({ mode, dataSource, reset, rowKey, total }: {
    mode: any;
    dataSource: any;
    reset: any;
    rowKey: any;
    total: any;
}): {
    optionDataSource: {
        data: any[];
        total: any;
    };
    isUseDNDMode: boolean;
    finish: () => DNDChangeValue;
    cancel: () => void;
    move: ({ oldIndex, newIndex }: {
        oldIndex: any;
        newIndex: any;
    }) => void;
};
