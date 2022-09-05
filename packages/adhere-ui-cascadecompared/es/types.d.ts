import type { CSSProperties, ReactElement } from 'react';
export declare type ColumnConfig = {
    dataIndex: string;
    isFixed: boolean;
    width: string | number;
    render: Function;
    className: string;
    style: CSSProperties;
};
export interface ITableConfig {
    columns: ColumnConfig[];
    dataSource: Record<string, any>[];
}
export declare type IndicatorTableConfig = {
    columns: ColumnConfig[];
    dataSource: Record<string, any>;
};
export interface IMasterItem extends ITableConfig {
    title: ReactElement;
    className: string;
    style: CSSProperties;
    fixedWrapClassName: string;
    fixedWrapStyle: CSSProperties;
    autoWrapClassName: string;
    autoWrapStyle: CSSProperties;
    autoInnerClassName: string;
    autoInnerStyle: CSSProperties;
}
/**
 * CascadeComparedProps
 */
export declare type CascadeComparedProps = {
    className?: string;
    style?: CSSProperties;
    indicatorClassName?: string;
    indicatorStyle?: CSSProperties;
    indicatorFixedWrapClassName?: string;
    indicatorFixedWrapStyle?: CSSProperties;
    indicatorAutoWrapClassName?: string;
    indicatorAutoWrapStyle?: CSSProperties;
    masterClassName?: string;
    masterStyle?: CSSProperties;
    masterInnerClassName?: string;
    masterInnerStyle?: CSSProperties;
    masterStickFixedClassName?: string;
    masterStickFixedStyle?: CSSProperties;
    masterStickInnerClassName?: string;
    masterStickInnerStyle?: CSSProperties;
    indicator: IndicatorTableConfig;
    master: IMasterItem[];
    onStickChange: Function;
    defaultCellWidth: number | string;
};
