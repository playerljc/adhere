import * as SearchAndPaginParams from './Extension/SearchAndPaginParams';
import SearchEditorCellStateTable from './SearchEditorCellStateTable';
import SearchEditorCellTable from './SearchEditorCellTable';
import SearchEditorRowStateTable from './SearchEditorRowStateTable';
import SearchEditorRowTable from './SearchEditorRowTable';
import SearchEditorStateTable from './SearchEditorStateTable';
import SearchEditorTable from './SearchEditorTable';
import SearchTable from './SearchTable';
import { SearchTableImplement } from './SearchTableImplement';
import { SearchTableStateImplement } from './SearchTableStateImplement';
declare const _default: {
    Table: typeof SearchTable;
    SearchTableContext: import("react").Context<{
        context: SearchTable<import("./types").SearchTableProps, import("./types").SearchTableState>;
        form?: import("antd/es/form").FormInstance<any> | undefined;
        formList?: {
            fields: import("antd/es/form").FormListFieldData[];
            operation?: import("antd/es/form").FormListOperation | undefined;
            meta?: {
                errors?: import("react").ReactNode[] | undefined;
                warnings?: import("react").ReactNode[] | undefined;
            } | undefined;
        } | undefined;
    } | null>;
    TableImplement: typeof SearchTableImplement;
    TableStateImplement: typeof SearchTableStateImplement;
    SearchTableImplementFactory: import("./types").SearchTableImplementFactoryFunction<any, any>;
    SearchTableStateImplementFactory: import("./types").SearchTableStateImplementFactoryFunction<any, any>;
    SearchEditorCellStateTable: typeof SearchEditorCellStateTable;
    SearchEditorCellTable: typeof SearchEditorCellTable;
    SearchEditorRowStateTable: typeof SearchEditorRowStateTable;
    SearchEditorRowTable: typeof SearchEditorRowTable;
    SearchEditorStateTable: typeof SearchEditorStateTable;
    SearchEditorTable: typeof SearchEditorTable;
    ProSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    ProSearchStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    ProEditorCellSearchStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    ProEditorCellSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    ProEditorRowSearchStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    ProEditorRowSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    ProEditorSearchStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    ProEditorSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): any;
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
            getColumns(columns: any): any;
            getTableColumns(): any;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormGroupParams(): ({
                name: string;
                columnCount: number;
                colgroup: (string | undefined)[];
                data: any;
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): any;
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchForm(): JSX.Element;
            renderSearchFooterItems(_defaultItems: any): any[];
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
    };
    DisabledOption: ({ className, style, children }: {
        className: any;
        style: any;
        children: any;
    }) => JSX.Element;
    LinkColumn: ({ className, style, record, rowIndex, dataIndex, to, children }: {
        className: any;
        style: any;
        record: any;
        rowIndex: any;
        dataIndex: any;
        to: any;
        children: any;
    }) => JSX.Element;
    OptionsWrap: ({ children, className, style }: {
        children: any;
        className?: string | undefined;
        style?: {} | undefined;
    }) => JSX.Element;
    EditableContext: import("react").Context<import("antd/es/form").FormInstance<any> | null>;
    EditorRowControl: import("react").FC<import("./types").EditorRowControlProps>;
    EditorTableControl: import("react").FC<import("./types").EditorTableControlProps>;
    SearchAndPaginParams: typeof SearchAndPaginParams;
};
export default _default;
