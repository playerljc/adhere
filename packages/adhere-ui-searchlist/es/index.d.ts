/// <reference types="react" />
import ResourceManager from './ResourceManager/ResourceManager';
import ResourceStateManager from './ResourceManager/ResourceStateManager';
import SearchList from './SearchList';
import { SearchListImplement } from './SearchListImplement';
import { SearchListStateImplement } from './SearchListStateImplement';
declare const _default: {
    List: typeof SearchList;
    Dict: {
        initStatic(): void;
        initRemote(): void;
    };
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
            getTableColumnSearchHeaderIcon(column: import("@baifendian/adhere-ui-searchtable/lib/types").ColumnTypeExt): JSX.Element;
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
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
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
            getTableColumnSearchHeaderIcon(column: import("@baifendian/adhere-ui-searchtable/lib/types").ColumnTypeExt): JSX.Element;
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
            renderSearchFormToolBarItems(_defaultItems: any): any[];
            renderSearchFormToolBarDefaultPanel(): JSX.Element | null;
            renderSearchFooterItems(_defaultItems: any): any[];
            getSearchFooterItemsEllipsisCount(): number;
            isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
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
    ResourceStateManager: typeof ResourceStateManager;
    ResourceManager: typeof ResourceManager;
    ProResourceManager: {
        new (props: any): {
            [x: string]: any;
            getParams(): any;
            getColumns(columns: any): any;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderTableDensitySetting(): any;
            getViewParams(): {
                name: null;
                resourceType: null;
                size: null;
                modifyTimeStart: undefined;
                modifyTimeEnd: undefined;
            };
            getTableViewColumns(): ({
                title: string;
                dataIndex: string;
                key: string;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    dictName?: undefined;
                    startName?: undefined;
                    endName?: undefined;
                };
                render: (value: any, record: any) => JSX.Element;
                align?: undefined;
                width?: undefined;
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    dictName: string;
                    startName?: undefined;
                    endName?: undefined;
                };
                render: (value: any) => JSX.Element;
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    dictName?: undefined;
                    startName?: undefined;
                    endName?: undefined;
                };
                render: (value: any) => JSX.Element | "-";
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    startName: string;
                    endName: string;
                    dictName?: undefined;
                };
                render: (value: any) => JSX.Element;
            })[];
            renderGridViewCard({ record }: {
                record: any;
            }): import("react").ReactNode;
        };
        [x: string]: any;
    };
    ProResourceStateManager: {
        new (props: any): {
            [x: string]: any;
            getParams(): any;
            getColumns(columns: any): any;
            renderSearchFooterItemsImpl(defaultItems: any): any[];
            renderTableDensitySetting(): any;
            getViewParams(): {
                name: null;
                resourceType: null;
                size: null;
                modifyTimeStart: undefined;
                modifyTimeEnd: undefined;
            };
            getTableViewColumns(): ({
                title: string;
                dataIndex: string;
                key: string;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    dictName?: undefined;
                    startName?: undefined;
                    endName?: undefined;
                };
                render: (value: any, record: any) => JSX.Element;
                align?: undefined;
                width?: undefined;
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    dictName: string;
                    startName?: undefined;
                    endName?: undefined;
                };
                render: (value: any) => JSX.Element;
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    dictName?: undefined;
                    startName?: undefined;
                    endName?: undefined;
                };
                render: (value: any) => JSX.Element | "-";
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                sorter: boolean;
                sortOrder: any;
                $search: {
                    type: string;
                    visible: boolean;
                    startName: string;
                    endName: string;
                    dictName?: undefined;
                };
                render: (value: any) => JSX.Element;
            })[];
            renderGridViewCard({ record }: {
                record: any;
            }): import("react").ReactNode;
        };
        [x: string]: any;
    };
    OptionsWrap: ({ className, style, ellipsisCount, isEllipsesShowOnlyOneAfterCollapsing, children, }: {
        className?: string | undefined;
        style?: {} | undefined;
        ellipsisCount?: number | undefined;
        isEllipsesShowOnlyOneAfterCollapsing?: boolean | undefined;
        children: any;
    }) => JSX.Element;
    DisabledOption: ({ className, style, children }: {
        className: any;
        style: any;
        children: any;
    }) => JSX.Element;
    SearchAndPaginParams: typeof import("@baifendian/adhere-ui-searchtable/lib/Extension/SearchAndPaginParams");
};
export default _default;
