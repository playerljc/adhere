import React from 'react';
/**
 * ProListFactory
 * @param SuperClass
 * @param searchAndPaginParamsMemo
 */
declare const _default: (SuperClass: any, searchAndPaginParamsMemo: any) => {
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
        getGridSearchFormGroupDataByColumnConfig(): {
            key: number;
            sort?: number | undefined;
            label: React.ReactNode;
            value: React.ReactNode;
        }[];
        assignSearchConfig(searchConfig: any, column: any): any;
        renderSearchBarCollapseControl(): any;
        renderSearchForm(): React.JSX.Element | null;
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
        renderAdvancedSearchPanel(params: any): null;
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    displayName: string;
};
export default _default;
