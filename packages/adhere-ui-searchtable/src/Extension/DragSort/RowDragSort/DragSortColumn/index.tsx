import classNames from 'classnames';
import React, { useContext } from 'react';

import { HolderOutlined } from '@ant-design/icons';

import { DRAG_SORT_ROW_COLUMN_KEY } from '../../../../Constent';
import type { DragSortColumnProps } from '../../../../types';
import DragSortRowContext from '../DragSortRowContext';

const selectorPrefix = 'adhere-ui-searchtable-drag-handler';

/**
 * DragHandler
 * @param className
 * @param value
 * @param record
 * @param rowIndex
 * @param render
 */
function DragHandler({ className, value, record, rowIndex, render }) {
  const { dragResult, dropResult, setCanDrag } = useContext(DragSortRowContext);

  // if (render) {
  //   return (
  //     <span ref={dragResult[1]} className={classNames(selectorPrefix, className)}>
  //       {render({ value, record, rowIndex, dragResult })}
  //     </span>
  //   );
  // }
  //
  // return (
  //   <span ref={dragResult[1]} className={classNames(selectorPrefix, className)}>
  //     <HolderOutlined />
  //   </span>
  // );

  function onMouseEnter() {
    setCanDrag(true);
  }

  function onMouseLeave() {
    setCanDrag(false);
  }

  return (
    <span
      className={classNames(selectorPrefix, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {render ? render({ value, record, rowIndex, dragResult }) : <HolderOutlined />}
    </span>
  );
}

/**
 * DragSortColumn
 * @constructor
 * @param columnConfig
 */
function DragSortColumn(columnConfig?: DragSortColumnProps) {
  const { width = 80, render, className, ...rest } = columnConfig ?? {};
  const key = DRAG_SORT_ROW_COLUMN_KEY;

  return {
    key,
    dataIndex: key,
    width,
    $search: {
      visible: false,
      showColumnHeader: false,
    },
    // @ts-ignore
    render: (...params) => <DragHandler render={render} className={className} {...params} />,
    ...rest,
  };
}

export default DragSortColumn;
