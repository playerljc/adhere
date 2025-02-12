import type { CSSProperties, ReactElement, ReactNode } from 'react';
export interface ColumnConfig {
    className: string;
    style: CSSProperties;
    dataIndex: string;
    width: string | number;
    isFixed: boolean;
    render: (val: string, record: Record<string, any>, groupIndex: number, rowIndex: number, columnIndex: number) => ReactNode;
}
export interface ITableConfig {
    columns: ColumnConfig[];
    dataSource: Record<string, any>[];
}
export interface IndicatorTableConfig {
    columns: ColumnConfig[];
    dataSource: Record<string, any>;
}
export interface IMasterItem extends ITableConfig {
    className: string;
    style: CSSProperties;
    fixedWrapClassName: string;
    fixedWrapStyle: CSSProperties;
    autoWrapClassName: string;
    autoWrapStyle: CSSProperties;
    autoInnerClassName: string;
    autoInnerStyle: CSSProperties;
    title: ReactElement;
}
/**
 * CascadeComparedProps
 */
export interface CascadeComparedProps {
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
    onStickChange: (index: number) => void;
    defaultCellWidth: number | string;
}
export interface CascadeComparedHandle {
    scrollToByIndex: (index: number, duration: number) => void;
    scrollToByHeaderEl: (headerEl: HTMLElement, duration: number) => void;
    scrollToByColumn: (columnIndex: number) => void;
}
