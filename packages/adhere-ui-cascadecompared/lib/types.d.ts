import type { CSSProperties, ReactElement, ReactNode } from 'react';
/**
 * 列配置接口
 */
export interface ColumnConfig {
    /** 列的自定义类名 */
    className?: string;
    /** 列的自定义样式 */
    style?: CSSProperties;
    /** 数据字段名 */
    dataIndex: string;
    /** 列宽度 */
    width?: string | number;
    /** 是否固定列 */
    isFixed?: boolean;
    /** 自定义渲染函数 */
    render?: (val: any, record: Record<string, any>, groupIndex: number, rowIndex: number, columnIndex: number) => ReactNode;
}
/**
 * 表格配置接口
 */
export interface ITableConfig {
    /** 列配置数组 */
    columns: ColumnConfig[];
    /** 数据源 */
    dataSource: Record<string, any>[];
}
/**
 * 指示器表格配置接口
 */
export interface IndicatorTableConfig {
    /** 列配置数组 */
    columns: ColumnConfig[];
    /** 数据源（单行数据） */
    dataSource: Record<string, any>;
}
/**
 * 主内容项配置接口
 */
export interface IMasterItem extends ITableConfig {
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 固定区域包装器类名 */
    fixedWrapClassName?: string;
    /** 固定区域包装器样式 */
    fixedWrapStyle?: CSSProperties;
    /** 自动滚动区域包装器类名 */
    autoWrapClassName?: string;
    /** 自动滚动区域包装器样式 */
    autoWrapStyle?: CSSProperties;
    /** 自动滚动区域内包装器类名 */
    autoInnerClassName?: string;
    /** 自动滚动区域内包装器样式 */
    autoInnerStyle?: CSSProperties;
    /** 标题内容 */
    title?: ReactElement;
}
/**
 * 级联对比组件属性接口
 */
export interface CascadeComparedProps {
    /** 根容器类名 */
    className?: string;
    /** 根容器样式 */
    style?: CSSProperties;
    /** 指示器容器类名 */
    indicatorClassName?: string;
    /** 指示器容器样式 */
    indicatorStyle?: CSSProperties;
    /** 指示器固定区域包装器类名 */
    indicatorFixedWrapClassName?: string;
    /** 指示器固定区域包装器样式 */
    indicatorFixedWrapStyle?: CSSProperties;
    /** 指示器自动滚动区域包装器类名 */
    indicatorAutoWrapClassName?: string;
    /** 指示器自动滚动区域包装器样式 */
    indicatorAutoWrapStyle?: CSSProperties;
    /** 主内容容器类名 */
    masterClassName?: string;
    /** 主内容容器样式 */
    masterStyle?: CSSProperties;
    /** 主内容内包装器类名 */
    masterInnerClassName?: string;
    /** 主内容内包装器样式 */
    masterInnerStyle?: CSSProperties;
    /** 主内容固定区域类名 */
    masterStickFixedClassName?: string;
    /** 主内容固定区域样式 */
    masterStickFixedStyle?: CSSProperties;
    /** 主内容固定区域内包装器类名 */
    masterStickInnerClassName?: string;
    /** 主内容固定区域内包装器样式 */
    masterStickInnerStyle?: CSSProperties;
    /** 指示器配置 */
    indicator: IndicatorTableConfig;
    /** 主内容配置数组 */
    master: IMasterItem[];
    /** 粘性变化回调函数 */
    onStickChange?: (index: number) => void;
    /** 默认单元格宽度 */
    defaultCellWidth?: number | string;
}
/**
 * 级联对比组件句柄接口
 */
export interface CascadeComparedHandle {
    /** 根据索引滚动到指定位置 */
    scrollToByIndex: (index: number, duration?: number) => void;
    /** 根据头部元素滚动到指定位置 */
    scrollToByHeaderEl: (headerEl: HTMLElement, duration?: number) => void;
    /** 根据列索引滚动到指定列 */
    scrollToByColumn: (columnIndex: number) => void;
}
