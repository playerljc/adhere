import classNames from 'classnames';
import { ReactElement, useMemo, useState } from 'react';
import React, { useContext, useRef } from 'react';
import { ConnectDragSource, ConnectDropTarget, useDrag, useDrop } from 'react-dnd';

import { DRAG_SORT_ROW_COLUMN_KEY } from '../../../Constent';
import type SearchTable from '../../../SearchTable';
import { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import { isSameLevel } from '../../../Util';
import type { TableRowComponentReducer } from '../../../types';
import DragSortRowContext from './DragSortRowContext';

const type = 'DraggableBodyRow';

function ProviderWrapper({ value, children }) {
  return <DragSortRowContext.Provider value={value}>{children}</DragSortRowContext.Provider>;
}

/**
 * DragSortRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const DragSortRow: TableRowComponentReducer = ({ rowIndex, rowConfig, record, columns }) => {
  const context = useContext<{
    context: SearchTable;
  } | null>(SearchTableContext);

  const isUseHandlerDrag = useMemo(() => {
    function loop(_columns: any[]) {
      let result: boolean = false;
      for (let i = 0; i < _columns.length; i++) {
        const column = _columns[i];
        if (column.key === DRAG_SORT_ROW_COLUMN_KEY) {
          result = true;
          break;
        } else {
          if (column.children) {
            result = loop(column.children ?? []);

            if (result) {
              break;
            }
          }
        }
      }
      return result;
    }

    return loop(columns);
  }, [columns]);

  const [canDrag, setCanDrag] = useState(!isUseHandlerDrag);

  const ref = useRef<HTMLTableRowElement>(null);

  let dragArr: ReturnType<typeof useDrag>;
  let dropArr: ReturnType<typeof useDrop<{ isOver: boolean; dropClassName: string }, any, any>>;

  const defaultRowDragSortConfig = {
    type,
    dropOverDownwardClassName: `${selectorPrefix}-row-drag-sort-drop-over-downward`,
    dropOverUpwardClasName: `${selectorPrefix}-row-drag-sort-drop-over-upward`,
    /**
     * dragConfig
     * @description 拖
     */
    dragConfig: () => {
      return {
        type: rowDragSortConfig.type,
        item: { index: rowIndex, record },
        collect: (monitor) => {
          return {
            isDragging: monitor.isDragging(),
          };
        },
        canDrag: () => {
          return canDrag;
        },
      };
    },
    /**
     * dropConfig
     * @description 方
     */
    dropConfig: () => {
      return {
        accept: rowDragSortConfig.type,
        collect: (monitor) => {
          const { index: dragIndex } = monitor.getItem() ?? {};

          // if (dragIndex === rowIndex) {
          //   console.log('dragIndex === rowIndex', dragIndex, rowIndex);
          //   return {};
          // }

          return {
            isOver: monitor.isOver(),
            dropClassName:
              dragIndex < rowIndex
                ? rowDragSortConfig.dropOverDownwardClassName
                : rowDragSortConfig.dropOverUpwardClasName,
            ...(rowConfig?.$rowDragSort?.dropHooks?.collect?.(monitor) ?? {}),
          };
        },
        drop: (item: { index: number; record: any }) => {
          // @ts-ignore
          const dataSource = context?.context?.getData();
          const rowKey = context?.context?.getRowKey() as string;

          // 判断如果不是同一层级则不能拖放成功
          if (
            isSameLevel({
              dataSource,
              rowKey,
              sourceId: record[rowKey],
              targetId: item.record[rowKey],
            })
          ) {
            if (rowConfig?.$rowDragSort?.dropHooks?.drop) {
              rowConfig?.$rowDragSort?.dropHooks
                ?.drop({
                  sourceRecord: item.record,
                  targetRecord: record,
                  item,
                })
                .then(() => {
                  // @ts-ignore
                  context?.context?.moveRow(item.record, record);
                });
            } else {
              // @ts-ignore
              context?.context?.moveRow(item.record, record);
            }
          }
        },
      };
    },
  };

  const rowDragSortConfig = {
    ...defaultRowDragSortConfig,
    ...(rowConfig?.$rowDragSort?.override ?? {}),
  };

  const defaultDragConfig = defaultRowDragSortConfig.dragConfig();
  const defaultDropConfig = defaultRowDragSortConfig.dropConfig();

  if (rowConfig?.$rowDragSort?.override?.dragConfig) {
    rowDragSortConfig.dragConfig = Object.assign(
      defaultDragConfig,
      rowConfig?.$rowDragSort?.override?.dragConfig?.(defaultDragConfig) ?? {},
    );
  } else {
    rowDragSortConfig.dragConfig = defaultRowDragSortConfig.dragConfig();
  }

  if (rowConfig?.$rowDragSort?.override?.dropConfig) {
    rowDragSortConfig.dropConfig = Object.assign(
      defaultDropConfig,
      rowConfig?.$rowDragSort?.override?.dropConfig?.(defaultDropConfig) ?? {},
    );
  } else {
    rowDragSortConfig.dropConfig = defaultRowDragSortConfig.dropConfig();
  }

  let drag: ConnectDragSource | ((arg0: React.RefObject<HTMLTableRowElement>) => any);
  let isOver: any,
    dropClassName:
      | string
      | number
      | boolean
      | classNames.ArgumentArray
      | classNames.Mapping
      | classNames.ReadonlyArgumentArray
      | null
      | undefined,
    drop: ConnectDropTarget | ((arg0: any) => void);

  try {
    dragArr = useDrag(rowDragSortConfig.dragConfig as any);
    drag = dragArr[1];

    dropArr /*[{ isOver, dropClassName }, drop]*/ = useDrop<
      { isOver: boolean; dropClassName: string },
      any,
      any
    >(rowDragSortConfig.dropConfig as any);

    isOver = dropArr[0].isOver;
    dropClassName = dropArr[0].dropClassName;
    drop = dropArr[1];

    drop(drag(ref));
  } catch (e) {
    console.log(e);
  }

  return (trREL: ReactElement) => {
    const defaultStyle = {
      cursor:
        'canDrag' in rowDragSortConfig.dragConfig && !rowDragSortConfig.dragConfig.canDrag()
          ? 'no-drop'
          : 'move',
    };

    // if (Array.isArray(trREL.props.children)) {
    //   debugger;
    //   const dragColumnIndex = trREL.props.children.findIndex((c) => c.key === '_drag');
    //   if (dragColumnIndex !== -1) {
    //     const dragColumn = trREL.props.children[dragColumnIndex];
    //     trREL.props.children[dragColumnIndex] = React.cloneElement(dragColumn, {
    //       ...dragColumn.props,
    //       ref: dragArr[1],
    //       style: {
    //         color: 'red',
    //       },
    //     });
    //   }
    // }

    // res = React.cloneElement(trREL, {
    //   ...trREL.props,
    //   ref,
    //   // ref: dragArr[2],
    //   style: { ...defaultStyle, ...(trREL.props.style ?? {}) },
    //   className: classNames(trREL.props.className, isOver ? dropClassName : ''),
    // });

    return (
      <ProviderWrapper
        value={{
          dragResult: dragArr,
          dropResult: dropArr,
          setCanDrag,
        }}
      >
        {Array.isArray(trREL.props.children) ? (
          <tr
            // ref={dragArr[2]}
            ref={ref}
            {...trREL.props}
            style={{ ...defaultStyle, ...(trREL.props.style ?? {}) }}
            className={classNames(trREL.props.className, isOver ? dropClassName : '')}
          >
            {trREL.props.children}
          </tr>
        ) : (
          trREL.props.children
        )}
      </ProviderWrapper>
    );
  };
};

export default DragSortRow;
