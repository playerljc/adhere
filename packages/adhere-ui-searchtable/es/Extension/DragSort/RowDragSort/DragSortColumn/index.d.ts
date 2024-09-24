import React from 'react';
import type { DragSortColumnProps } from '../../../../types';
/**
 * DragSortColumn
 * @constructor
 * @param columnConfig
 */
declare function DragSortColumn(columnConfig?: DragSortColumnProps): {
    $tip?: React.ReactNode;
    renderTip?: (tip: React.ReactNode) => React.ReactNode;
    $authorized?: () => boolean;
    $resizable?: boolean;
    $hide?: boolean;
    $search: import("../../../../types").ColumnSearchConfig | {
        visible: boolean;
        showColumnHeader: boolean;
    };
    $editable?: import("../../../../types").ColumnEditableConfig;
    $rowDragSort?: import("../../../../types").ColumnRowDragSortConfig;
    headerCellAlign?: "left" | "center" | "right";
    title?: import("antd/lib/table/interface").ColumnTitle<any>;
    sorter?: boolean | import("antd/lib/table/interface").CompareFn<any> | {
        compare?: import("antd/lib/table/interface").CompareFn<any> | undefined;
        multiple?: number;
    } | undefined;
    sortOrder?: import("antd/lib/table/interface").SortOrder;
    defaultSortOrder?: import("antd/lib/table/interface").SortOrder;
    sortDirections?: import("antd/lib/table/interface").SortOrder[];
    sortIcon?: (props: {
        sortOrder: import("antd/lib/table/interface").SortOrder;
    }) => React.ReactNode;
    showSorterTooltip?: boolean | import("antd/lib/table/interface").SorterTooltipProps;
    filtered?: boolean;
    filters?: import("antd/lib/table/interface").ColumnFilterItem[];
    filterDropdown?: React.ReactNode | ((props: import("antd/lib/table/interface").FilterDropdownProps) => React.ReactNode);
    filterOnClose?: boolean;
    filterMultiple?: boolean;
    filteredValue?: import("antd/lib/table/interface").FilterValue | null;
    defaultFilteredValue?: import("antd/lib/table/interface").FilterValue | null;
    filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
    filterMode?: "menu" | "tree";
    filterSearch?: import("antd/lib/table/interface").FilterSearchType<import("antd/lib/table/interface").ColumnFilterItem>;
    onFilter?: ((value: React.Key | boolean, record: any) => boolean) | undefined;
    filterDropdownOpen?: boolean;
    onFilterDropdownOpenChange?: (visible: boolean) => void;
    filterResetToDefaultFilteredValue?: boolean;
    responsive?: import("antd/lib").Breakpoint[];
    filterDropdownVisible?: boolean;
    onFilterDropdownVisibleChange?: (visible: boolean) => void;
    onHeaderCell?: import("rc-table/lib/interface").GetComponentProps<import("rc-table").ColumnType<any> | import("rc-table/lib/interface").ColumnGroupType<any>> | undefined;
    align?: import("rc-table/lib/interface").AlignType | undefined;
    fixed?: import("rc-table/lib/interface").FixedType | undefined;
    colSpan?: number | undefined;
    dataIndex: any;
    shouldCellUpdate?: ((record: any, prevRecord: any) => boolean) | undefined;
    rowSpan?: number | undefined;
    onCell?: import("rc-table/lib/interface").GetComponentProps<any> | undefined;
    onCellClick?: ((record: any, e: React.MouseEvent<HTMLElement>) => void) | undefined;
    key: import("rc-table/lib/interface").Key;
    hidden?: boolean | undefined;
    ellipsis?: import("rc-table/lib/interface").CellEllipsisType | undefined;
    rowScope?: import("rc-table/lib/interface").RowScopeType | undefined;
    width: string | number;
    render: (...params: any[]) => React.JSX.Element;
};
export default DragSortColumn;
