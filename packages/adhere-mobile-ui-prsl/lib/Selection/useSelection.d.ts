import type { ModeType } from '../types';
export type SelectionRowKey = string | number;
export type SelectionChangeInfo = {
    type: 'select' | 'unselect';
};
export type SelectionFinishResult = {
    selectedRowKeys: SelectionRowKey[];
    selectedRows: Record<string, any>[];
    changeRowKeys: SelectionRowKey[];
    info: SelectionChangeInfo;
};
export type UseSelectionParams = {
    selectedRowKeys?: SelectionRowKey[];
    selectionMultiple?: boolean;
    mode: ModeType;
    dataSource: Record<string, any>[];
    rowKey: string;
};
export default function UseSelection({ selectedRowKeys, selectionMultiple, mode, dataSource, rowKey, }: UseSelectionParams): {
    optionSelectedRowKeys: SelectionRowKey[];
    targetSelectedRowKeys: SelectionRowKey[];
    isUseSelectionMode: boolean;
    isSelectionMultiple: boolean;
    selectionChange: (_checked: boolean, _id: SelectionRowKey) => void;
    selectionAllChange: (_checkAll: boolean) => void;
    finish: () => SelectionFinishResult;
    cancel: () => void;
};
