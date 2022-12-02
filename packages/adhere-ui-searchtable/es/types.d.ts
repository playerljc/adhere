import type { TableProps } from 'antd/lib/table/Table';
import type { ColumnType } from 'antd/lib/table/interface';
import type { CSSProperties, ReactElement, ReactNode, RefObject } from 'react';
import type { SuspenseProps, SuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';
/**
 * ColumnSearchConfig
 * @description 列的查询设置
 */
export interface ColumnSearchConfig {
    type: 'input' | 'textArea' | 'inputNumber' | 'inputNumberDecimal1' | 'inputNumberDecimal2' | 'inputNumberInteger' | 'select' | 'multiSelect' | 'checkAllMultiSelect' | 'autoCompleteSelect' | 'autoCompleteSelectMulti' | 'autoCompleteSelectCheckAllMulti' | 'radioHorizontal' | 'radioButton' | 'radioSelect' | 'radioCustom' | 'checkBoxHorizontal' | 'checkBoxCheckAllHorizontal' | 'checkboxSelect' | 'checkBoxCheckAllSelect' | 'checkBoxCustom' | 'checkBoxCheckAllCustom' | 'transferSelect' | 'tableSelect' | 'tableMultiSelect' | 'tablePagingSelect' | 'tablePagingMultiSelect' | 'listSelect' | 'listMultiSelect' | 'listPagingSelect' | 'listPagingMultiSelect' | 'treeSelect' | 'treeMultiSelect' | 'treeSelectLeaf' | 'treeMultiSelectLeaf' | 'cascaderSelect' | 'cascaderMultiSelect' | 'cascaderSelectLeaf' | 'cascaderMultiSelectLeaf' | 'datePicker' | 'timePicker' | 'rangePicker' | 'slider' | 'sliderRange' | 'rate' | 'switch' | 'custom';
    visible?: boolean;
    showColumnHeader?: boolean;
    props?: any;
    labelAttrs?: any;
    valueAttrs?: any;
    authority?: string[];
    renderNoAuthority?: (params?: any) => ReactNode | null;
    dataIndex?: string;
    title?: ReactNode;
    dictName?: string;
    renderChildren?: (params?: any) => ReactNode | null;
    render?: () => ReactNode | null;
    startName?: string;
    endName?: string;
}
/**
 * ColumnTypeExt
 * @description Column列的扩展设置
 */
export interface ColumnTypeExt extends ColumnType<any> {
    $authorized?: () => boolean;
    $resizable?: boolean;
    $hide?: boolean;
    $search?: ColumnSearchConfig;
}
/**
 * SearchTableProps
 * @interface SearchTableProps
 */
export interface SearchTableProps extends SuspenseProps {
    className?: string;
    style?: CSSProperties;
    tableClassName: string;
    tableStyle: CSSProperties;
    searchClassName: string;
    searchStyle: CSSProperties;
    firstLoading: ReactElement;
    antdTableProps: TableProps<any>;
    isShowExpandSearch: boolean;
    defaultExpandSearchCollapse: boolean;
    fitSearch: boolean;
    fitTable: boolean;
    autoFixed: boolean;
    fixedHeaderAutoTable: boolean;
    fixedTableSpaceBetween: boolean;
    showColumnSetting: boolean;
}
/**
 * SearchTableState
 * @interface SearchTableState
 */
export interface SearchTableState extends SuspenseState {
    [props: string]: any;
    page?: number;
    limit?: number;
    expand?: boolean;
    scrollY?: number;
    columnSetting?: Array<ColumnType<any> & {
        sort: number;
        display: boolean;
    }>;
    tableDensity?: TableDensity;
}
export interface ISearchTableImplement {
    /**
     * showLoading - 是否显示遮罩
     */
    showLoading(): boolean;
    /**
     * fetchData - 加载数据
     */
    fetchData(): void;
}
/**
 * SearchTableImplementProps
 * @interface SearchTableImplementProps
 */
export interface SearchTableImplementProps extends SearchTableProps {
    [props: string]: any;
    getTableWrapperInstance?: (ref?: RefObject<HTMLDivElement>) => void;
}
export interface SearchTableImplementState extends SearchTableState {
    [props: string]: any;
    selectedRowKeys?: string[];
    selectedRows?: any[];
    searchParams?: any;
}
export interface AdvancedSearchPanelGroupData {
    className: string;
    style: CSSProperties;
    name: string;
    width: string | number;
    defaultLabelWidth: number;
    padding: number;
    colgroup: number[];
    columnCount: number;
    data: {
        key: string;
        label: ReactNode;
        value: ReactNode;
    }[];
}
export interface AdvancedSearchPanelTableGridLayoutConfig {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    bordered: boolean;
    layout: 'horizontal' | 'vertical';
    density?: string | number;
    parity?: boolean;
}
export interface AdvancedSearchPanelSearchConfig {
    rowCount: string;
    showStrategy: string;
    advancedSearch: {
        className: string;
        style: CSSProperties;
        width: number | string;
        mask: boolean;
        zIndex: number;
        time: number;
        direction: string;
        collapse: boolean;
        getPopupContainer: Function;
        onBeforeShow: Function;
        onBeforeClose: Function;
        onAfterShow: Function;
        onAfterClose: Function;
    };
    renderTitleLabel?: Function;
    renderCollapse?: Function;
    renderSearchButton?: Function;
    insertSearchButton?: Function;
}
export interface AdvancedSearchPanelProps {
    groupData: AdvancedSearchPanelGroupData[];
    tableGridLayoutConfig: AdvancedSearchPanelTableGridLayoutConfig;
    remainingGroupData: AdvancedSearchPanelGroupData[];
    advancedSearchConfig: AdvancedSearchPanelSearchConfig;
    onSearch: Function;
    onReset: Function;
    onCollapse: Function;
}
/**
 * TableDensity
 */
export declare enum TableDensity {
    DEFAULT = "default",
    MIDDLE = "middle",
    SMALL = "small"
}
