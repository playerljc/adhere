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
