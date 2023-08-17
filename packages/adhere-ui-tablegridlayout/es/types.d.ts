import type { CSSProperties, NamedExoticComponent, ReactElement, ReactNode } from 'react';
export type DensityType = 'default' | 'middle' | 'small' | undefined;
export type LayoutType = 'vertical' | 'horizontal';
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
        layout?: LayoutType;
        density?: DensityType;
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
        show?: boolean;
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
    layout: LayoutType;
    density?: DensityType;
    parity?: boolean;
}
/**
 * GroupDetail
 * @description 组的渲染细节
 */
export type GroupRenderDetail = {
    startIndex: number;
    endIndex: number;
}[];
/**
 * RenderDetail
 * @description 渲染细节
 */
export interface RenderDetail {
    rowCount: number;
    layout: LayoutType;
    detail: {
        name: string;
        rowCount: number;
        detail: GroupRenderDetail;
    }[];
}
export interface TableGridLayoutMemoWrap extends NamedExoticComponent {
    propTypes: object;
    defaultProps: object;
    Label: any;
    Value: any;
    renderGridSearchFormGroup(data?: DataItem[], props?: Omit<TableGridLayoutProps, 'data'>): ReactNode;
    getRenderDetail(data: DataItem[], props: Omit<TableGridLayoutProps, 'data'>): RenderDetail;
}
