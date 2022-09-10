import type { CSSProperties, ReactElement } from 'react';
/**
 * RowCountRef
 */
export interface RowCountRef {
    current: number;
}
/**
 * RenderHorizontal
 */
export interface RenderHorizontal {
    (params: {
        data: DataItem;
        rowCountRef?: RowCountRef;
    }): {
        element: ReactElement[];
        detail: GroupRenderDetail;
    };
}
/**
 * RenderVertical
 */
export interface RenderVertical {
    (data: DataItem, rowCountRef: any): {
        element: ReactElement[];
        detail: GroupRenderDetail;
    };
}
/**
 * RenderGridSearchForm
 */
export interface RenderGridSearchForm {
    (params: {
        data: DataItem;
        rowCountRef?: RowCountRef;
        layout?: 'horizontal' | 'vertical';
        density?: string;
        parity?: boolean;
    }): ReactElement;
}
/**
 * DataItem
 * @interface DataItem
 */
export interface DataItem {
    className?: string;
    style?: CSSProperties;
    name?: string;
    width?: string | number;
    defaultLabelWidth?: number;
    padding?: string;
    colgroup?: (number | 'auto')[];
    columnCount?: number;
    data?: {
        key: string;
        require?: boolean;
        label: any;
        value: any;
    }[];
}
/**
 * TableGridLayoutProps
 * @interface TableGridLayoutProps
 */
export interface TableGridLayoutProps {
    bordered?: boolean;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    data?: DataItem[];
    className?: string;
    style?: CSSProperties;
    layout: 'horizontal' | 'vertical';
    density?: string;
    parity?: boolean;
}
/**
 * GroupDetail
 * @description 组的渲染细节
 */
export declare type GroupRenderDetail = {
    startIndex: number;
    endIndex: number;
}[];
/**
 * RenderDetail
 * @description 渲染细节
 */
export interface RenderDetail {
    rowCount: number;
    layout: 'horizontal' | 'vertical';
    detail: {
        name: string;
        rowCount: number;
        detail: GroupRenderDetail;
    }[];
}
