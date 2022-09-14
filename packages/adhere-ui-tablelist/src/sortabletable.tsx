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

import { selectorPrefix } from './tablelist';
import { TSortTableProps } from './types';

const SortableItem = SortableElement((props) => <tr {...props} />);

const SortableWrapper = SortableContainer((props) => <tbody {...props} />);

class SortableTable<RecordType extends object = any> extends React.Component<
  TSortTableProps<RecordType>
> {
  state = {
    dataSource: this.props.dataSource || [],
    isSort: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
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
   * 覆盖antdTable的tr
   */
  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    const { rowKey = 'id' } = this.props;
    const index = dataSource.findIndex((x) => {
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

  /*
   * 覆盖antdTable的tbody helperClass为拖拽项的类名
   */
  DraggableContainer = (containerProps) => (
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
   */
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const oldItem = dataSource[oldIndex];
      let newData = dataSource.filter((_, i) => i !== oldIndex);
      newData.splice(newIndex, 0, oldItem);
      this.setState({ isSort: true, dataSource: newData });
    }
  };

  render() {
    const { sortable, ...others } = this.props;

    return (
      <Table
        {...others}
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
