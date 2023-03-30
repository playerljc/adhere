/// <reference types="react" />
import SearchList from './SearchList';
import { SearchListImplement } from './SearchListImplement';
import { SearchListStateImplement } from './SearchListStateImplement';
declare const _default: {
    List: typeof SearchList;
    SearchListContext: import("react").Context<{
        context: SearchList<import("./types").SearchListProps, import("./types").SearchListState>;
    } | null>;
    ListImplement: typeof SearchListImplement;
    ListStateImplement: typeof SearchListStateImplement;
    SearchListImplementFactory: import("./types").SearchListImplementFactoryFunction<any, any>;
    SearchListStateImplementFactory: import("./types").SearchListStateImplementFactoryFunction<any, any>;
    ProSearchList: {
        new (props: any): {
            [x: string]: any;
            getParams(): {};
            getColumns(): never[];
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
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
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
    };
    ProSearchStateList: {
        new (props: any): {
            [x: string]: any;
            getParams(): {};
            getColumns(): never[];
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
            getDateState(state: any): {};
            getDataKey(): string;
            getTotalKey(): string;
            getLimit(): number;
            getFetchDataParams(): {};
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
    };
};
export default _default;
