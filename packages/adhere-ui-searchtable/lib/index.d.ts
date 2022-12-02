import * as SearchAndPaginParams from './Extension/SearchAndPaginParams';
import SearchTableImplement from './SearchTableImplement';
import SearchTableStateImplement from './SearchTableStateImplement';
import SearchTable from './Searchtable';
declare const _default: {
    Table: typeof SearchTable;
    TableImplement: typeof SearchTableImplement;
    TableStateImplement: typeof SearchTableStateImplement;
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
    SearchAndPaginParams: typeof SearchAndPaginParams;
};
export default _default;
