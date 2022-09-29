import type { TableProps } from 'antd/lib/table/Table';
import type { ColumnType } from 'antd/lib/table/interface';
import { RefObject } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import type { SuspenseProps, SuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';
export interface ColumnTypeExt extends ColumnType<any> {
    authorized?: () => boolean;
    resizable?: boolean;
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
/**
 * TableDensity
 */
export declare enum TableDensity {
    DEFAULT = "default",
    MIDDLE = "middle",
    SMALL = "small"
}
