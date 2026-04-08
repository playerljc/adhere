type AnyRecord = Record<string, any>;
declare const EditableRowControlTable_base: {
    new (): {
        [x: string]: any;
        getServiceName(): string;
        getFetchListPropName(): string;
        renderSearchForm(): null;
        getPagination(): boolean;
        hasAdvancedSearch(): boolean;
        renderTableDensitySetting(): null;
        renderTableReload(): null;
        renderColumnSetting(): null;
        getRowSelection(): boolean;
        isUsePadding(): boolean;
        isUseSearchFormToolBarGap(): boolean;
        isUseSearchWrapperGap(): boolean;
        getNumberGeneratorRule(): any;
        onAdd(values?: AnyRecord): any;
        onDel(key: unknown): Promise<any>;
        afterFetchData(): void;
        componentWillReceiveProps(nextProps: AnyRecord): void;
        renderSearchFooterItems(defaultItems: AnyRecord[]): any;
    };
    [x: string]: any;
};
/**
 * EditableRowControlTable
 * @description 带有行编辑控制功能的搜索表格实现类，支持整行编辑和删除操作
 */
export declare class EditableRowControlTable extends EditableRowControlTable_base {
    /**
     * onSave
     * @description 保存一行数据
     * @param values {Record<string, any>}
     * @return {Promise<void>}
     */
    onSave(values: AnyRecord): Promise<void>;
    getColumns(): any;
}
declare const EditorCellTable_base: {
    new (): {
        [x: string]: any;
        getServiceName(): string;
        getFetchListPropName(): string;
        renderSearchForm(): null;
        getPagination(): boolean;
        hasAdvancedSearch(): boolean;
        renderTableDensitySetting(): null;
        renderTableReload(): null;
        renderColumnSetting(): null;
        getRowSelection(): boolean;
        isUsePadding(): boolean;
        isUseSearchFormToolBarGap(): boolean;
        isUseSearchWrapperGap(): boolean;
        getNumberGeneratorRule(): any;
        onAdd(values?: AnyRecord): any;
        onDel(key: unknown): Promise<any>;
        afterFetchData(): void;
        componentWillReceiveProps(nextProps: AnyRecord): void;
        renderSearchFooterItems(defaultItems: AnyRecord[]): any;
    };
    [x: string]: any;
};
/**
 * EditorCellTable
 * @description 带有单元格编辑功能的搜索表格实现类，支持单个单元格编辑和删除操作
 */
export declare class EditorCellTable extends EditorCellTable_base {
    /**
     * onCellSave
     * @description 保存单元格数据
     */
    onCellSave({ value, record, dataIndex }: {
        value: any;
        record: AnyRecord;
        dataIndex: any;
    }): any;
    /**
     * onCellSaveByDate
     * @description 保存日期单元格数据
     */
    onCellSaveByDate({ value, record, dataIndex, }: {
        value: any;
        record: AnyRecord;
        dataIndex: any;
    }): any;
    getColumns(): any;
}
/**
 * StateTable
 * @description 创建基于 SystemBaseSearchTableStateImpl 的状态表格高阶组件，自动加载 Model 和 Service
 */
export declare const StateTable: (SubClass: any) => any;
export {};
