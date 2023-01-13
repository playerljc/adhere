import React from 'react';
export declare const SearchAndPaginParamsMemo: any;
declare const _default: {
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
            label: React.ReactNode;
            value: React.ReactNode;
        }[];
        assignSearchConfig(searchConfig: any, column: any): any;
        renderSearchForm(): JSX.Element;
        renderSearchFooterItems(_defaultItems: any): any[];
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
            searchConfig: any;
            column: any;
            dataIndex: any;
        }): React.ReactNode;
        renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    [x: string]: any;
};
/**
 * ProEditableCellSearchStateTable
 * @classdesc 可以进行单元格编辑的高级表格
 */
export default _default;
