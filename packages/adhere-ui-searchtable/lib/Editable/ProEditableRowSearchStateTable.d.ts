import React from 'react';
export declare const SearchAndPaginParamsMemo: any;
/**
 * ProEditableRowSearchStateTable
 * @classdesc 可以进行行编辑的高级查询表格
 */
declare const _default: {
    new (props: any): {
        [x: string]: any;
        componentDidMount(): void;
        componentWillUnmount(): void;
        onSubTableChange(pagination: any, filters: any, sorter: any): void;
        onSearchPanelCollapseBefore(): void;
        unMountSearchAndPaginationParamsDeal(): void;
        isUseMemo(): any;
        initSearchAndPaginationParams(queryReduce?: (key: string, v: any) => any): any;
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
        getFetchDateParams(): {};
        getColumns(columns: any): any;
        getTableColumns(): any;
        getTableColumnSearchHeaderIcon(column: import("../types").ColumnTypeExt): React.JSX.Element;
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
        getSearchLabelSymbol($search: any): React.JSX.Element | null;
        getGridSearchFormGroupDataByColumnConfig(tableGridLayoutProps?: Omit<import("@baifendian/adhere-ui-tablegridlayout/lib/types").TableGridLayoutProps, "data" | "layout"> & {
            layout: import("@baifendian/adhere-ui-tablegridlayout/lib/types").LayoutType | "prefix";
        }): {
            key: number;
            sort?: number;
            label: React.ReactNode;
            value: React.ReactNode | null;
        }[];
        assignSearchConfig(searchConfig: any, column: any): any;
        renderSearchBarCollapseControl(): any;
        renderSearchForm(): React.JSX.Element | null;
        renderSearchFormToolBarItems(_defaultItems: any): any[];
        renderSearchFormToolBarDefaultPanel(): React.JSX.Element | null;
        renderSearchFooterItems(_defaultItems: any): any[];
        getSearchFooterItemsEllipsisCount(): number;
        isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
        renderSearchFooterItemsMore(): React.JSX.Element;
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex, layout, currentTitle }: {
            searchConfig: any;
            column: any;
            dataIndex: any;
            layout: any;
            currentTitle: any;
        }): React.ReactNode;
        renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): React.JSX.Element;
        renderAdvancedSearchPanel(params: any): null;
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    [x: string]: any;
    displayName: string;
};
export default _default;
