import React from 'react';
import type { TSortTableProps, SortableTableState } from './types';
/**
 * 可排序表格组件
 * 支持拖拽排序功能的表格组件
 * @template RecordType - 数据记录类型
 */
declare class SortableTable<RecordType extends object = any> extends React.Component<TSortTableProps<RecordType>, SortableTableState> {
    static displayName: string;
    /** 组件状态 */
    state: SortableTableState;
    /**
     * 从属性派生状态
     * @param nextProps - 下一个属性
     * @param prevState - 前一个状态
     * @returns 新的状态或null
     */
    static getDerivedStateFromProps(nextProps: TSortTableProps<any>, prevState: SortableTableState): {
        dataSource: readonly any[] | undefined;
        isSort?: undefined;
    } | {
        isSort: boolean;
        dataSource?: undefined;
    } | null;
    /**
     * 可拖拽行组件
     * 覆盖antd Table的tr，添加拖拽功能
     * @param props - 行属性
     * @returns 可拖拽行JSX
     */
    DraggableBodyRow: ({ className, style, ...restProps }: any) => React.JSX.Element;
    /**
     * 可拖拽容器组件
     * 覆盖antd Table的tbody，添加拖拽容器功能
     * @param containerProps - 容器属性
     * @returns 可拖拽容器JSX
     */
    DraggableContainer: (containerProps: any) => React.JSX.Element;
    /**
     * 拖拽完成时更改dataSource
     * @param params - 拖拽参数
     * @param params.oldIndex - 原索引
     * @param params.newIndex - 新索引
     */
    onSortEnd: ({ oldIndex, newIndex }: {
        oldIndex: number;
        newIndex: number;
    }) => void;
    /**
     * 渲染组件
     * @returns 组件JSX
     */
    render(): React.ReactNode;
}
export default SortableTable;
