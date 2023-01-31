/// <reference types="react" />
import SearchRowDragSortStateTable from './DragSort/RowDragSort/SearchRowDragSortStateTable';
import SearchRowDragSortTable from './DragSort/RowDragSort/SearchRowDragSortTable';
import SearchEditableCellStateTable from './Editable/SearchEditableCellStateTable';
import SearchEditableCellTable from './Editable/SearchEditableCellTable';
import SearchEditableRowStateTable from './Editable/SearchEditableRowStateTable';
import SearchEditableRowTable from './Editable/SearchEditableRowTable';
import SearchEditableStateTable from './Editable/SearchEditableStateTable';
import SearchEditableTable from './Editable/SearchEditableTable';
import * as SearchAndPaginParams from './Extension/SearchAndPaginParams';
import SearchTable from './SearchTable';
import { SearchTableImplement } from './SearchTableImplement';
import { SearchTableStateImplement } from './SearchTableStateImplement';
declare const _default: {
    Table: typeof SearchTable;
    SearchTableContext: import("react").Context<{
        context: SearchTable<import("./types").SearchTableProps, import("./types").SearchTableState>;
        editable?: {
            tableEditable?: {
                form?: import("antd").FormInstance<any> | undefined;
                formList?: {
                    fields: import("antd").FormListFieldData[];
                    operation?: import("antd").FormListOperation | undefined;
                    meta?: {
                        errors?: import("react").ReactNode[] | undefined;
                        warnings?: import("react").ReactNode[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } | null>;
    TableImplement: typeof SearchTableImplement;
    TableStateImplement: typeof SearchTableStateImplement;
    SearchTableImplementFactory: import("./types").SearchTableImplementFactoryFunction<any, any>;
    SearchTableStateImplementFactory: import("./types").SearchTableStateImplementFactoryFunction<any, any>;
    SearchEditableCellStateTable: typeof SearchEditableCellStateTable;
    SearchEditableCellTable: typeof SearchEditableCellTable;
    SearchEditableRowStateTable: typeof SearchEditableRowStateTable;
    SearchEditableRowTable: typeof SearchEditableRowTable;
    SearchEditableStateTable: typeof SearchEditableStateTable;
    SearchEditableTable: typeof SearchEditableTable;
    SearchRowDragSortStateTable: typeof SearchRowDragSortStateTable;
    SearchRowDragSortTable: typeof SearchRowDragSortTable;
    SearchEditableCellRowDragSortStateTable: any;
    SearchEditableCellRowDragSortTable: any;
    SearchEditableRowDragSortTable: any;
    SearchEditableRowDragSortStateTable: any;
    SearchEditableTableRowDragSortTable: any;
    SearchEditableTableRowDragSortStateTable: any;
    ProSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProEditableCellSearchStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProEditableCellSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProEditableRowSearchStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProEditableRowSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProEditableSearchStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProEditableSearchTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchRowDragSortStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchRowDragSortTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchEditableCellRowDragSortStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchEditableCellRowDragSortTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchEditableRowDragSortTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchEditableRowDragSortStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchEditableTableRowDragSortTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    ProSearchEditableTableRowDragSortStateTable: {
        new (props: any): {
            [x: string]: any;
            componentWillUnmount(): void;
            onSubTableChange(pagination: any, filters: any, sorter: any): void;
            onSearchPanelCollapseBefore(): void;
            unMountSearchAndPaginParamsDeal(): void;
            initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
            hasAdvancedSearch(): boolean;
            hasNumberColumnFixed(): boolean;
            hasOptionColumnFixed(): boolean;
            getPathName(): string;
            getSearch(): string;
            getParams(): {};
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
                data: {
                    key: number;
                    sort?: number | undefined;
                    label: import("react").ReactNode;
                    value: import("react").ReactNode;
                }[];
            }[] | {
                rowCount?: undefined;
            } | {
                rowCount: number;
            })[];
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
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
    EditableContext: import("react").Context<import("antd").FormInstance<any> | null>;
    EditableRowControl: import("react").FC<import("./types").EditorRowControlProps>;
    EditableTableControl: import("react").FC<import("./types").EditorTableControlProps>;
    SearchAndPaginParams: typeof SearchAndPaginParams;
};
export default _default;
