/// <reference types="react" />
export declare const ToolbarSelectAll: ({ selectAll, rowSelection, rowKey, dataSource, setSelectAll }: {
    selectAll: any;
    rowSelection: any;
    rowKey: any;
    dataSource: any;
    setSelectAll: any;
}) => JSX.Element | null;
export declare const ToolbarReload: ({ reload, onSearch }: {
    reload: any;
    onSearch: any;
}) => JSX.Element;
export declare const ToolbarSetting: ({ setting, tableColumns, onSettingChange, onSettingSortEnd, selectedColumnKeys, }: {
    setting: any;
    tableColumns: any;
    onSettingChange: any;
    onSettingSortEnd: any;
    selectedColumnKeys: any;
}) => JSX.Element;
