/// <reference types="react" />
/**
 * IDataItem
 * @interface IDataItem
 */
export interface IDataItem {
    className?: string;
    style?: object;
    name?: string;
    width?: string | number;
    defaultLabelWidth?: number;
    padding?: string;
    colgroup?: (number | 'auto' | undefined)[];
    columnCount?: number;
    data?: Array<{
        key: string;
        label: JSX.Element;
        value: JSX.Element;
    }>;
}
/**
 * ITableGridLayoutProps
 * @interface ITableGridLayoutProps
 */
export interface ITableGridLayoutProps {
    className?: string;
    style?: object;
    innerClassName?: string;
    innerStyle?: object;
    bordered?: boolean;
    layout: 'horizontal' | 'vertical';
    density?: string | number;
    parity?: boolean;
    data: IDataItem[];
}
/**
 * GroupDetail
 * @description 组的渲染细节
 */
export declare type GroupRenderDetail = Array<{
    startIndex: number;
    endIndex: number;
}>;
/**
 * RenderDetail
 * @description 渲染细节
 */
export declare type RenderDetail = {
    rowCount: number;
    layout: 'horizontal' | 'vertical';
    detail: Array<{
        name: string;
        rowCount: number;
        detail: GroupRenderDetail;
    }>;
};
