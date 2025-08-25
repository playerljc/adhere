export declare const SearchAndPaginParamsMemo: any;
/**
 * ProSearchList
 * @classdesc 高级查询列表
 */
declare const ProSearchList: {
    new (props: any): {
        [x: string]: any;
        getParams(): {};
        getColumns(): never[];
        componentDidMount(): void;
        componentWillUnmount(): void;
        onSubTableChange(pagination: any, filters: any, sorter: any): void;
        onSearchPanelCollapseBefore(): void;
        unMountSearchAndPaginParamsDeal(): void;
        isUseMemo(): any;
        initSearchAndPaginParams(queryReduce?: (key: string, v: any) => any): any;
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
        getTableColumnSearchHeaderIcon(column: import("@baifendian/adhere-ui-searchtable/es/types").ColumnTypeExt): import("react").JSX.Element;
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
        getGridSearchFormGroupDataByColumnConfig(tableGridLayoutProps?: Omit<import("@baifendian/adhere-ui-tablegridlayout/lib/types").TableGridLayoutProps, "data" | "layout"> & {
            layout: import("@baifendian/adhere-ui-tablegridlayout/lib/types").LayoutType | "prefix";
        }): {
            key: number;
            sort?: number;
            label: import("react").ReactNode;
            value: import("react").ReactNode | null;
        }[];
        assignSearchConfig(searchConfig: any, column: any): any;
        renderSearchBarCollapseControl(): any;
        renderSearchForm(): import("react").JSX.Element | null;
        renderSearchFormToolBarItems(_defaultItems: any): any[];
        renderSearchFormToolBarDefaultPanel(): import("react").JSX.Element | null;
        renderSearchFooterItems(_defaultItems: any): any[];
        getSearchFooterItemsEllipsisCount(): number;
        isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
        renderSearchFooterItemsMore(): import("react").JSX.Element;
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex, layout, currentTitle }: {
            searchConfig: any;
            column: any;
            dataIndex: any;
            layout: any;
            currentTitle: any;
        }): import("react").ReactNode;
        renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): import("react").JSX.Element;
        renderAdvancedSearchPanel(params: any): null;
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    displayName: string;
};
export default ProSearchList;
