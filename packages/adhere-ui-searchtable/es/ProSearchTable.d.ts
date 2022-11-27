import React from 'react';
export declare const SearchAndPaginParamsMemo: any;
declare const _default: {
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
        assignSearchConfig(searchConfig: any, column: any): any;
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
        renderSearchForm(): JSX.Element;
        renderSearchFooterItems(_defaultItems: any): any[];
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
            searchConfig: any;
            column: any;
            dataIndex: any;
        }): React.ReactNode;
        getGridSearchFormGroupDataByColumnConfig(): any;
        renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    [x: string]: any;
};
export default _default;
