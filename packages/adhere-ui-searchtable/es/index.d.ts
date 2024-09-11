/// <reference types="react" />
import SearchRowDragSortStateTable from './DragSort/RowDragSort/SearchRowDragSortStateTable';
import SearchRowDragSortTable from './DragSort/RowDragSort/SearchRowDragSortTable';
import SearchEditableCellStateTable from './Editable/SearchEditableCellStateTable';
import SearchEditableCellTable from './Editable/SearchEditableCellTable';
import SearchEditableRowStateTable from './Editable/SearchEditableRowStateTable';
import SearchEditableRowTable from './Editable/SearchEditableRowTable';
import SearchEditableStateTable from './Editable/SearchEditableStateTable';
import SearchEditableTable from './Editable/SearchEditableTable';
import DragSortColumn from './Extension/DragSort/RowDragSort/DragSortColumn';
import * as SearchAndPaginParams from './Extension/SearchAndPaginParams';
import Search from './Search';
import SearchTable from './SearchTable';
import { SearchTableImplement } from './SearchTableImplement';
import { SearchTableStateImplement } from './SearchTableStateImplement';
declare const _default: {
    Search: typeof Search;
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
    TableDensitySetting: import("react").FC<import("./types").TableDensitySettingProps>;
    ReloadTable: import("react").FC<import("./types").ReloadTableProps>;
    ExportExcel: import("react").FC<import("./types").ExportExcelProps>;
    DragSortColumn: typeof DragSortColumn;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
    };
    ProTableFactory: (SuperClass: any, searchAndPaginParamsMemo: any) => {
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
            getTableColumnSearchHeaderIcon(column: import("./types").ColumnTypeExt): import("react").JSX.Element;
            getOptionsColumnDataIndex(): string;
            getLinkColumnDataIndex(): string;
            getPagination(): any;
            getGridSearchFormColgroup(): {
                columnCount: number;
                colgroup: (string | undefined)[];
            };
            getGridSearchFormRowCount(): number;
            getGridSearchFormProps(): {
                rowCount: number;
            };
            getGridSearchFormGroupParams(): {}[];
            getSearchLabelSymbol($search: any): import("react").JSX.Element | null;
            getGridSearchFormGroupDataByColumnConfig(): {
                key: number;
                sort?: number | undefined;
                label: import("react").ReactNode;
                value: import("react").ReactNode;
            }[];
            assignSearchConfig(searchConfig: any, column: any): any;
            renderSearchBarCollapseControl(): any;
            renderSearchForm(): import("react").JSX.Element | null;
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
                searchConfig: any;
                column: any;
                dataIndex: any;
            }): import("react").ReactNode;
            renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
            renderAdvancedSearchPanel(params: any): null;
            renderOptionColumn(defaultItems: any, params: any): any;
        };
        [x: string]: any;
        displayName: string;
    };
    DisabledOption: {
        ({ className, style, children }: {
            className: any;
            style: any;
            children: any;
        }): import("react").JSX.Element;
        displayName: string;
    };
    LinkColumn: {
        ({ className, style, record, rowIndex, dataIndex, to, children }: {
            className: any;
            style: any;
            record: any;
            rowIndex: any;
            dataIndex: any;
            to: any;
            children: any;
        }): import("react").JSX.Element;
        displayName: string;
    };
    OptionsWrap: {
        ({ className, style, ellipsisCount, isEllipsesShowOnlyOneAfterCollapsing, children, }: {
            className?: string | undefined;
            style?: {} | undefined;
            ellipsisCount?: number | undefined;
            isEllipsesShowOnlyOneAfterCollapsing?: boolean | undefined;
            children: any;
        }): import("react").JSX.Element;
        displayName: string;
    };
    EditableContext: import("react").Context<import("antd").FormInstance<any> | null>;
    EditableRowControl: import("react").FC<import("./types").EditorRowControlProps>;
    EditableTableControl: import("react").FC<import("./types").EditorTableControlProps>;
    SearchAndPaginParams: typeof SearchAndPaginParams;
};
export default _default;
