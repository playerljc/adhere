import React from 'react';
export declare const SearchAndPaginParamsMemo: any;
/**
 * ProSearchStateList
 * @classdesc 高级查询列表
 */
declare const ProSearchStateList: {
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
        getTableColumnSearchHeaderIcon(column: import("@baifendian/adhere-ui-searchtable/es/types").ColumnTypeExt): React.JSX.Element;
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
                label: React.ReactNode;
                value: React.ReactNode;
            }[];
        }[] | {
            rowCount?: undefined;
        } | {
            rowCount: number;
        })[];
        getGridSearchFormGroupDataByColumnConfig(): {
            key: number;
            sort?: number | undefined;
            label: React.ReactNode;
            value: React.ReactNode;
        }[];
        assignSearchConfig(searchConfig: any, column: any): any;
        renderSearchForm(): React.JSX.Element;
        renderSearchFormToolBarItems(_defaultItems: any): any[];
        renderSearchFormToolBarDefaultPanel(): React.JSX.Element | null;
        renderSearchFooterItems(_defaultItems: any): any[];
        getSearchFooterItemsEllipsisCount(): number;
        isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
            searchConfig: any;
            column: any;
            dataIndex: any;
        }): React.ReactNode;
        renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): React.JSX.Element;
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    /**
     * ProSearchStateList
     * @classdesc 高级查询列表
     */
    displayName: string;
};
export default ProSearchStateList;
