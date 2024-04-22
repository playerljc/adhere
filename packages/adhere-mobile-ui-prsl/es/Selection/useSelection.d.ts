export default function UseSelection({ selectedRowKeys, selectionMultiple, mode, dataSource, rowKey, }: {
    selectedRowKeys: any;
    selectionMultiple: any;
    mode: any;
    dataSource: any;
    rowKey: any;
}): {
    optionSelectedRowKeys: any;
    targetSelectedRowKeys: any;
    isUseSelectionMode: boolean;
    isSelectionMultiple: any;
    selectionChange: (_checked: any, _id: any) => void;
    selectionAllChange: (_checkAll: any) => void;
    finish: () => {
        selectedRowKeys: any[];
        selectedRows: Record<string, any>[];
        changeRowKeys: any[];
        info: {
            type: string;
        };
    };
    cancel: () => void;
};
