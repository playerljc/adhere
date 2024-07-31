import React from 'react';
import type { DragSortColumnProps } from '../../../../types';
/**
 * DragSortColumn
 * @constructor
 * @param columnConfig
 */
declare function DragSortColumn(columnConfig?: DragSortColumnProps): {
    $tip?: React.ReactNode;
    renderTip?: ((tip: React.ReactNode) => React.ReactNode) | undefined;
    $authorized?: (() => boolean) | undefined;
    $resizable?: boolean | undefined;
    $hide?: boolean | undefined;
    $search: import("../../../../types").ColumnSearchConfig | {
        visible: boolean;
        showColumnHeader: boolean;
    };
    $editable?: import("../../../../types").ColumnEditableConfig | undefined;
    $rowDragSort?: import("../../../../types").ColumnRowDragSortConfig | undefined;
    headerCellAlign?: "center" | "left" | "right" | undefined;
    title?: import("antd/lib/table/interface").ColumnTitle<any>;
    sorter?: boolean | import("antd/lib/table/interface").CompareFn<any> | {
        compare?: import("antd/lib/table/interface").CompareFn<any> | undefined;
        multiple?: number | undefined;
    } | undefined;
    sortOrder?: import("antd/lib/table/interface").SortOrder | undefined;
    defaultSortOrder?: import("antd/lib/table/interface").SortOrder | undefined;
    sortDirections?: import("antd/lib/table/interface").SortOrder[] | undefined;
    sortIcon?: ((props: {
        sortOrder: import("antd/lib/table/interface").SortOrder;
    }) => React.ReactNode) | undefined;
    showSorterTooltip?: boolean | import("antd/lib/table/interface").SorterTooltipProps | undefined;
    filtered?: boolean | undefined;
    filters?: import("antd/lib/table/interface").ColumnFilterItem[] | undefined;
    filterDropdown?: React.ReactNode | ((props: import("antd/lib/table/interface").FilterDropdownProps) => React.ReactNode);
    filterOnClose?: boolean | undefined;
    filterMultiple?: boolean | undefined;
    filteredValue?: import("antd/lib/table/interface").FilterValue | null | undefined;
    defaultFilteredValue?: import("antd/lib/table/interface").FilterValue | null | undefined;
    filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
    filterMode?: "menu" | "tree" | undefined;
    filterSearch?: import("antd/lib/table/interface").FilterSearchType<import("antd/lib/table/interface").ColumnFilterItem> | undefined;
    onFilter?: ((value: boolean | React.Key, record: any) => boolean) | undefined;
    filterDropdownOpen?: boolean | undefined;
    onFilterDropdownOpenChange?: ((visible: boolean) => void) | undefined;
    filterResetToDefaultFilteredValue?: boolean | undefined;
    responsive?: import("antd/lib").Breakpoint[] | undefined;
    filterDropdownVisible?: boolean | undefined;
    onFilterDropdownVisibleChange?: ((visible: boolean) => void) | undefined;
    onHeaderCell?: import("rc-table/lib/interface").GetComponentProps<import("rc-table").ColumnType<any> | import("rc-table/lib/interface").ColumnGroupType<any>> | undefined;
    align?: import("rc-table/lib/interface").AlignType | undefined;
    fixed?: import("rc-table/lib/interface").FixedType | undefined;
    colSpan?: number | undefined;
    dataIndex: any;
    shouldCellUpdate?: ((record: any, prevRecord: any) => boolean) | undefined;
    rowSpan?: number | undefined;
    onCell?: import("rc-table/lib/interface").GetComponentProps<any> | undefined;
    onCellClick?: ((record: any, e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    key: React.Key;
    hidden?: boolean | undefined;
    ellipsis?: import("rc-table/lib/interface").CellEllipsisType | undefined;
    rowScope?: import("rc-table/lib/interface").RowScopeType | undefined;
    width: string | number;
    render: (...params: any[]) => React.JSX.Element;
};
export default DragSortColumn;
