/**
 * parseWidthToNumber
 * @description 将列宽解析为可用于 Resizable 的 number；width: {} 等无效值返回 undefined
 */
function parseWidthToNumber(width: unknown): number | undefined {
  if (typeof width === 'number' && !Number.isNaN(width) && width > 0) {
    return width;
  }

  if (typeof width === 'string') {
    const value = parseFloat(width);
    if (!Number.isNaN(value) && value > 0) {
      return value;
    }
  }

  // width: {} / null / undefined / 0 都视为无效，回退到 DOM 实测宽度
  return undefined;
}

/**
 * getRenderedColWidth
 * @description 从 colgroup 读取列的实际渲染宽度（auto / max-content 场景下 style.width 可能为空）
 */
function getRenderedColWidth(colEl: HTMLElement | null | undefined): number | undefined {
  if (!colEl) {
    return undefined;
  }

  const rectWidth = colEl.getBoundingClientRect?.()?.width;
  if (typeof rectWidth === 'number' && rectWidth > 0) {
    return rectWidth;
  }

  const styleWidth = parseWidthToNumber(colEl.style?.width);
  if (styleWidth) {
    return styleWidth;
  }

  const offsetWidth = colEl.offsetWidth;
  if (typeof offsetWidth === 'number' && offsetWidth > 0) {
    return offsetWidth;
  }

  return undefined;
}

/**
 * handleResize
 * @description 表头列拖动的时候
 * @param context
 * @param column
 * @param columnsWidth
 * @protected
 */
function handleResize(context, column, columnsWidth) {
  return (e, { size }) => {
    // 当拖动header的column时
    columnsWidth.set(column.key, size);

    context.forceUpdate();
  };
}

/**
 * resolveResizableWidth
 * @description 解析列拖拽初始宽度：拖拽缓存 > 明确 width/minWidth > DOM 实测
 */
function resolveResizableWidth({
  column,
  columnsWidth,
  computedWidth,
}: {
  column: any;
  columnsWidth: Map<string, { width: number; height: number }>;
  computedWidth?: number;
}): number | undefined {
  const columnSizeItem = columnsWidth.get(column.key as string);
  if (columnSizeItem) {
    const cached = parseWidthToNumber(columnSizeItem.width);
    if (cached) {
      return cached;
    }
  }

  const explicitWidth = parseWidthToNumber(column.width);
  if (explicitWidth) {
    return explicitWidth;
  }

  const minWidth = parseWidthToNumber(column.minWidth);
  if (minWidth) {
    return minWidth;
  }

  return parseWidthToNumber(computedWidth);
}

export default ({
  columnsWidth,
  context,
  index,
  column,
}: {
  columnsWidth: Map<string, { width: number; height: number }>;
  context: any;
  index: number;
  column: any;
}) => {
  // 如果设置了列可拖动
  const colEls = context?.tableWrapRef?.current?.querySelectorAll?.(
    '.ant-table-header > table > colgroup > col',
  );

  let spanCount = 0;

  if (context.getRowSelection()) {
    spanCount = spanCount + 1;
  }

  if (context.isShowNumber()) {
    spanCount = spanCount + 1;
  }

  const colEl =
    colEls && colEls.length > spanCount ? (colEls?.[spanCount + index] as HTMLElement) : null;
  const computedWidth = getRenderedColWidth(colEl);

  const width = resolveResizableWidth({
    column,
    columnsWidth,
    computedWidth,
  });

  return {
    ...column,
    // 只有解析出有效数值时才覆盖 width，避免把 {} 原样传给 Table/Resizable
    ...(typeof width === 'number' ? { width } : {}),
    // 加入onHeaderCell
    onHeaderCell: () => {
      const findLoop: any = (__columns) => {
        let res;

        for (let i = 0; i < __columns.length; i++) {
          if (__columns[i].dataIndex === column.dataIndex) {
            res = __columns[i];
            break;
          } else {
            if (__columns[i].children && Array.isArray(__columns[i].children)) {
              res = findLoop(__columns[i].children);
              if (res) break;
            }
          }
        }

        return res;
      };

      const _columns = context.getTableColumns();
      const _column = findLoop(_columns) ?? column;
      const { onHeaderCell, ..._others } = _column;

      // 必须把当前解析出的数值宽传给 Resizable；
      // 若仍用 _others.width（可能是 {}），首次拖动会从 0 起算导致列宽突然变小
      const headerWidth =
        resolveResizableWidth({
          column: { ..._others, key: column.key, minWidth: column.minWidth ?? _others.minWidth },
          columnsWidth,
          computedWidth,
        }) ?? width;

      return {
        width: headerWidth,
        onResize: handleResize(context, _others, columnsWidth),
        column: _others,
      };
    },
  };
};
