/*
 * @Description: 可拖拽排序的表格
 * @Author: yumeng.qin
 * @Date: 2021-04-28 14:58:37
 * @LastEditor: yumeng.qin
 * @LastEditTime: 2021-04-28 17:10:18
 */
import { Table } from 'antd';
import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import { selectorPrefix } from './TableList';
import type { TSortTableProps, SortableTableState } from './types';

const SortableItem = SortableElement((props: any) => <tr {...props} />);

const SortableWrapper = SortableContainer((props: any) => <tbody {...props} />);

/**
 * 可排序表格组件
 * 支持拖拽排序功能的表格组件
 * @template RecordType - 数据记录类型
 */
class SortableTable<RecordType extends object = any> extends React.Component<
  TSortTableProps<RecordType>,
  SortableTableState
> {
  static displayName = 'SortableTable';

  /** 组件状态 */
  state: SortableTableState = {
    dataSource: [...(this.props.dataSource || [])],
    isSort: false,
  };

  /**
   * 从属性派生状态
   * @param nextProps - 下一个属性
   * @param prevState - 前一个状态
   * @returns 新的状态或null
   */
  static getDerivedStateFromProps(nextProps: TSortTableProps<any>, prevState: SortableTableState) {
    if (
      !prevState.isSort &&
      JSON.stringify(nextProps.dataSource) !== JSON.stringify(prevState.dataSource)
    ) {
      return {
        dataSource: nextProps.dataSource,
      };
    }
    if (prevState.isSort) {
      return {
        isSort: false,
      };
    }
    return null;
  }

  /**
   * 可拖拽行组件
   * 覆盖antd Table的tr，添加拖拽功能
   * @param props - 行属性
   * @returns 可拖拽行JSX
   */
  DraggableBodyRow = ({ className, style, ...restProps }: any) => {
    const { dataSource } = this.state;
    const { rowKey = 'id' } = this.props;
    const index = dataSource.findIndex((x: any) => {
      const key = rowKey && typeof rowKey === 'function' ? rowKey(x) : rowKey;
      return x[key] === restProps['data-row-key'];
    });
    
    return (
      <SortableItem
        index={index}
        {...(this.props.sortable &&
          typeof this.props.sortable !== 'boolean' &&
          this.props.sortable.itemProps)}
        {...restProps}
      />
    );
  };

  /**
   * 可拖拽容器组件
   * 覆盖antd Table的tbody，添加拖拽容器功能
   * @param containerProps - 容器属性
   * @returns 可拖拽容器JSX
   */
  DraggableContainer = (containerProps: any) => (
    <SortableWrapper
      helperClass={`${selectorPrefix}-row-dragging`}
      onSortEnd={this.onSortEnd}
      distance={2}
      {...(this.props.sortable &&
        typeof this.props.sortable !== 'boolean' &&
        this.props.sortable.containerProps)}
      {...containerProps}
    />
  );

  /**
   * 拖拽完成时更改dataSource
   * @param params - 拖拽参数
   * @param params.oldIndex - 原索引
   * @param params.newIndex - 新索引
   */
  onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    const { dataSource } = this.state;
    
    if (oldIndex !== newIndex) {
      const oldItem = dataSource[oldIndex];
      let newData = dataSource.filter((_, i) => i !== oldIndex);
      newData.splice(newIndex, 0, oldItem);
      this.setState({ isSort: true, dataSource: newData });
    }
  };

  /**
   * 渲染组件
   * @returns 组件JSX
   */
  render(): React.ReactNode {
    const { sortable, ...rest } = this.props;

    return (
      <Table
        {...rest}
        dataSource={this.state.dataSource}
        components={{
          body: {
            wrapper: this.DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      />
    );
  }
}

export default SortableTable;
