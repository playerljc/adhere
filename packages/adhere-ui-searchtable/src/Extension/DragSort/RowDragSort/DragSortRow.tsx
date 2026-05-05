import classNames from 'classnames';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import React, { useContext, useRef } from 'react';
import {
  ConnectDragSource,
  ConnectDropTarget,
  useDrag,
  useDragLayer,
  useDrop,
} from 'react-dnd';

import { DRAG_SORT_ROW_COLUMN_KEY } from '../../../Constant';
import type SearchTable from '../../../SearchTable';
import { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import { findBrother, isSameLevel } from '../../../Util';
import type { TableRowComponentReducer } from '../../../types';
import DragSortRowContext from './DragSortRowContext';

const type = 'DraggableBodyRow';

/** react-dnd useDrag 的 drag item / collect 类型，避免 ReturnType<typeof useDrag> 推断 collect 为 {} */
type RowDragSortDragItem = { index: number; record: any };
type RowDragSortDragCollected = { isDragging: boolean };
type RowDragSortUseDragReturn = ReturnType<
  typeof useDrag<RowDragSortDragItem, unknown, RowDragSortDragCollected>
>;

/**
 * flipRowsAround
 * @description FLIP 动画：在 action 执行前后分别测量 tbody 下所有带 data-row-drag-sort-key
 * 的 <tr>，对位置变化的行通过 transform + transition 平滑过渡。被拖动的行（dragging 类）
 * 不参与 transform，避免影响 react-dnd 的 boundingRect 计算。
 */
function flipRowsAround(tbodyEl: HTMLElement, action: () => Promise<void>): Promise<void> {
  const trs = Array.from(
    tbodyEl.querySelectorAll<HTMLElement>('tr[data-row-drag-sort-key]'),
  );
  const oldRects = new Map<string, DOMRect>();
  trs.forEach((tr) => {
    const key = tr.dataset.rowDragSortKey;
    if (!key) return;
    oldRects.set(key, tr.getBoundingClientRect());
  });

  return action().then(() => {
    requestAnimationFrame(() => {
      const newTrs = Array.from(
        tbodyEl.querySelectorAll<HTMLElement>('tr[data-row-drag-sort-key]'),
      );
      newTrs.forEach((tr) => {
        const key = tr.dataset.rowDragSortKey;
        if (!key) return;
        const oldRect = oldRects.get(key);
        if (!oldRect) return;
        const newRect = tr.getBoundingClientRect();
        const dx = oldRect.left - newRect.left;
        const dy = oldRect.top - newRect.top;
        if (dx === 0 && dy === 0) return;
        if (tr.classList.contains(`${selectorPrefix}-row-drag-sort-dragging`)) return;

        tr.style.transition = 'none';
        tr.style.transform = `translate(${dx}px, ${dy}px)`;
        requestAnimationFrame(() => {
          tr.style.transition = 'transform 0.2s ease';
          tr.style.transform = '';
          const onEnd = () => {
            tr.style.transition = '';
            tr.style.transform = '';
            tr.removeEventListener('transitionend', onEnd);
          };
          tr.addEventListener('transitionend', onEnd);
        });
      });
    });
  });
}

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

  // sort 模式下，hover 阶段实时调用 moveRow 时的异步锁，防止 dispatch / setState
  // 还未完成时被重复触发同一次换位
  const isMovingRef = useRef(false);

  let dragArr: RowDragSortUseDragReturn;
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

          // 解析有效的拖拽模式：行级 dragSortType 优先于表级 getDragSortType()，最终回退到 'swap'
          const dragSortType =
            rowConfig?.$rowDragSort?.dragSortType ??
            // @ts-ignore
            context?.context?.getDragSortType?.() ??
            'swap';

          // sort 模式下，行已经物理位移，不再叠加上下边框线提示
          const dropClassName =
            dragSortType === 'sort'
              ? ''
              : dragIndex < rowIndex
                ? rowDragSortConfig.dropOverDownwardClassName
                : rowDragSortConfig.dropOverUpwardClasName;

          return {
            isOver: monitor.isOver(),
            dropClassName,
            ...(rowConfig?.$rowDragSort?.dropHooks?.collect?.(monitor) ?? {}),
          };
        },
        hover: (item: { index: number; record: any }, monitor) => {
          if (!ref.current) return;

          const dragSortType =
            rowConfig?.$rowDragSort?.dragSortType ??
            // @ts-ignore
            context?.context?.getDragSortType?.() ??
            'swap';

          // 仅 sort 模式启用 hover 实时换位
          if (dragSortType !== 'sort') return;

          // @ts-ignore
          const dataSource = context?.context?.getData();
          const rowKey = context?.context?.getRowKey() as string;
          if (!dataSource || !rowKey) return;

          // 同一行不处理
          if (item.record[rowKey] === record[rowKey]) return;

          // 仅同层级兄弟可重排
          if (
            !isSameLevel({
              dataSource,
              rowKey,
              sourceId: record[rowKey],
              targetId: item.record[rowKey],
            })
          ) {
            return;
          }

          // 中线检测：跨过悬停行垂直中线才触发，避免抖动
          const hoverBoundingRect = ref.current.getBoundingClientRect();
          const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
          const clientOffset = monitor.getClientOffset();
          if (!clientOffset) return;
          const hoverClientY = clientOffset.y - hoverBoundingRect.top;

          // 计算 drag/hover 在兄弟数组中的相对索引（用于方向判断）
          const siblings = findBrother(dataSource, rowKey, item.record[rowKey]);
          const dragIndex = siblings.findIndex((r) => r[rowKey] === item.record[rowKey]);
          const hoverIndex = siblings.findIndex((r) => r[rowKey] === record[rowKey]);
          if (dragIndex === -1 || hoverIndex === -1 || dragIndex === hoverIndex) return;

          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

          // 异步锁：防止 dispatch / setState 还未完成时重复触发
          if (isMovingRef.current) return;
          isMovingRef.current = true;

          // FLIP 动画：测量重渲染前后 tbody 中各兄弟行的位置并平滑过渡
          const tbodyEl = ref.current.parentElement as HTMLElement | null;
          const move = (): Promise<void> => {
            // @ts-ignore
            const r = context?.context?.moveRow(item.record, record, 'sort');
            return r && typeof r.then === 'function' ? r : Promise.resolve();
          };
          const flipPromise = tbodyEl ? flipRowsAround(tbodyEl, move) : move();
          flipPromise.finally(() => {
            isMovingRef.current = false;
          });
        },
        drop: (item: { index: number; record: any }) => {
          // @ts-ignore
          const dataSource = context?.context?.getData();
          const rowKey = context?.context?.getRowKey() as string;

          // 解析有效的拖拽模式：行级 dragSortType 优先于表级 getDragSortType()，最终回退到 'swap'
          const dragSortType =
            rowConfig?.$rowDragSort?.dragSortType ??
            // @ts-ignore
            context?.context?.getDragSortType?.() ??
            'swap';

          // sort 模式：hover 阶段已经实时换位完成，drop 只触发用户钩子，不再调用 moveRow
          if (dragSortType === 'sort') {
            rowConfig?.$rowDragSort?.dropHooks?.drop?.({
              sourceRecord: item.record,
              targetRecord: record,
              item,
            });
            return;
          }

          // swap 模式：保持原逻辑
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
                  context?.context?.moveRow(item.record, record, dragSortType);
                });
            } else {
              // @ts-ignore
              context?.context?.moveRow(item.record, record, dragSortType);
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

  let drag: ConnectDragSource | ((arg0: React.RefObject<HTMLTableRowElement | null>) => any);
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
    dragArr = useDrag<RowDragSortDragItem, unknown, RowDragSortDragCollected>(
      rowDragSortConfig.dragConfig as any,
    );
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

  return (trREL: ReactElement<any>) => {
    const defaultStyle = {
      cursor:
        'canDrag' in rowDragSortConfig.dragConfig && !rowDragSortConfig.dragConfig.canDrag()
          ? 'no-drop'
          : 'move',
    };

    // 解析当前 sort 类型，用于 ghost / hover-target / data 属性
    const dragSortTypeForRender =
      rowConfig?.$rowDragSort?.dragSortType ??
      // @ts-ignore
      context?.context?.getDragSortType?.() ??
      'swap';
    const isSortMode = dragSortTypeForRender === 'sort';
    const isDragging = !!dragArr?.[0]?.isDragging;

    // FLIP 追踪用的 rowKey 标记（仅 sort 模式输出，避免影响 swap 模式）
    // @ts-ignore
    const rowKeyName = context?.context?.getRowKey?.() as string | undefined;
    const dataRowKey = isSortMode && rowKeyName ? (record?.[rowKeyName] ?? '') : undefined;

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
            ref={ref}
            {...trREL.props}
            data-row-drag-sort-key={dataRowKey}
            style={{ ...defaultStyle, ...(trREL.props.style ?? {}) }}
            className={classNames(
              trREL.props.className,
              isOver ? dropClassName : '',
              isSortMode && isDragging && `${selectorPrefix}-row-drag-sort-dragging`,
              isSortMode && isOver && `${selectorPrefix}-row-drag-sort-hover-target`,
            )}
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

/**
 * DragGlobalEffect
 * @description 拖拽期间为 body 切换 grabbing className，实现全局 grabbing 光标 + 文本不可选。
 * 必须放在 DndProvider 内部使用（依赖 useDragLayer）。
 */
export const DragGlobalEffect: React.FC = () => {
  const isAnyDragging = useDragLayer((monitor) => monitor.isDragging());
  useEffect(() => {
    const cls = `${selectorPrefix}-row-drag-sort-grabbing`;
    if (isAnyDragging) {
      document.body.classList.add(cls);
    } else {
      document.body.classList.remove(cls);
    }
    return () => document.body.classList.remove(cls);
  }, [isAnyDragging]);
  return null;
};

export default DragSortRow;
