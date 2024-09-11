import type { CSSProperties, NamedExoticComponent, ReactElement, ReactNode } from 'react';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Label from './Label';
import Value from './Value';
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
        mode?: TableGridLayoutProps['mode'];
        media?: ConfigProviderProps['media'];
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
    mode?: 'normal' | 'parity' | 'bordered';
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
export type TableGridLayoutComponent = NamedExoticComponent<TableGridLayoutProps> & {
    propTypes: object;
    defaultProps: object;
    Label: typeof Label;
    Value: typeof Value;
    renderGridSearchFormGroup(data?: DataItem[], props?: Omit<TableGridLayoutProps, 'data'>, media?: ConfigProviderProps['media']): ReactNode;
    getRenderDetail(data: DataItem[], props: Omit<TableGridLayoutProps, 'data'>): RenderDetail;
};
