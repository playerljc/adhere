import React from 'react';
export declare const SearchAndPaginParamsMemo: any;
/**
 * ProSearchEditableCellRowDragSortStateTable
 * @classdesc 可以进行编辑单元格且进行行拖拽排序的高级表格
 */
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
        }): React.ReactNode;
        renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): JSX.Element;
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    [x: string]: any;
};
export default _default;
