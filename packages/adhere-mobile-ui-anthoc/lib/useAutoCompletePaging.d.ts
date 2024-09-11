import type { CheckListItemProps } from 'antd-mobile';
/**
 * UseAutoCompletePaging
 * @description 适配 AutoComplete 的 props
 * @param defaultSearchDataSource
 * @param pagingComponentProps
 * @param loadData
 * @param onDataSourceChange
 * @constructor
 */
declare function UseAutoCompletePaging<Option>({ defaultSearchDataSource, pagingComponentProps, loadData, onDataSourceChange, }: {
    defaultSearchDataSource: any;
    pagingComponentProps: any;
    loadData: any;
    onDataSourceChange: any;
}): {
    searchDataSource: {
        data: CheckListItemProps[];
        total: number;
    };
    targetPagingComponentProps: any;
    autoCompleteLoadData: (_kw: any) => any;
};
export default UseAutoCompletePaging;
