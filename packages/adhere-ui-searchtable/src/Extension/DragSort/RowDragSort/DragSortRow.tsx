import classNames from 'classnames';
import React, { ReactElement, useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import SearchTable, { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import { TableRowComponentReducer } from '../../../types';

const type = 'DraggableBodyRow';

/**
 * DragSortRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const DragSortRow: TableRowComponentReducer = ({ rowIndex, rowConfig }) => {
  const context = useContext<{
    context: SearchTable;
  } | null>(SearchTableContext);

  const defaultRowDragSortConfig = {
    type,
    dropOverDownwardClassName: `${selectorPrefix}-row-drag-sort-drop-over-downward`,
    dropOverUpwardClasName: `${selectorPrefix}-row-drag-sort-drop-over-upward`,
    /**
     * dragConfig
     * @description 拖
     */
    dragConfig: () => ({
      type: rowDragSortConfig.type,
      item: { index: rowIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    /**
     * dropConfig
     * @description 方
     */
    dropConfig: () => ({
      accept: rowDragSortConfig.type,
      collect: (monitor) => {
        const { index: dragIndex } = monitor.getItem() || {};

        if (dragIndex === rowIndex) {
          return {};
        }

        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < rowIndex
              ? rowDragSortConfig.dropOverDownwardClassName
              : rowDragSortConfig.dropOverUpwardClasName,
        };
      },
      drop: (item: { index: number }) => {
        // @ts-ignore
        context?.context?.moveRow(item.index, rowIndex);
      },
    }),
  };

  const rowDragSortConfig = { ...defaultRowDragSortConfig, ...(rowConfig?.$rowDragSort || {}) };

  if (rowConfig?.$rowDragSort?.dropConfig) {
    rowDragSortConfig.dropConfig = Object.assign(
      defaultRowDragSortConfig.dropConfig(),
      rowConfig.$rowDragSort.dropConfig || {},
    );
  } else {
    rowDragSortConfig.dropConfig = defaultRowDragSortConfig.dropConfig();
  }

  if (rowConfig?.$rowDragSort?.dragConfig) {
    rowDragSortConfig.dragConfig = Object.assign(
      defaultRowDragSortConfig.dragConfig(),
      rowConfig.$rowDragSort.dragConfig || {},
    );
  } else {
    rowDragSortConfig.dragConfig = defaultRowDragSortConfig.dragConfig();
  }

  const ref = useRef<HTMLTableRowElement>(null);

  const [, drag] = useDrag(rowDragSortConfig.dragConfig as any);

  const [{ isOver, dropClassName }, drop] = useDrop<
    { isOver: boolean; dropClassName: string },
    any,
    any
  >(rowDragSortConfig.dropConfig as any);

  drop(drag(ref));

  return (trREL: ReactElement) => {
    let res = trREL;

    const defaultStyle = {
      cursor:
        'canDrag' in rowDragSortConfig.dragConfig && !rowDragSortConfig.dragConfig.canDrag()
          ? 'no-drop'
          : 'move',
    };

    res = React.cloneElement(trREL, {
      ...trREL.props,
      ref,
      style: { ...defaultStyle, ...(trREL.props.style || {}) },
      className: classNames(trREL.props.className, isOver ? dropClassName : ''),
    });

    return res;
  };
};

export default DragSortRow;
