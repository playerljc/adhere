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
 * flattenLeafColumns
 * @description 展开表头分组，得到与 colgroup 对齐的叶子列
 */
function flattenLeafColumns(columns: any[] = []): any[] {
  return columns.reduce((result, column) => {
    if (column?.children && Array.isArray(column.children)) {
      return result.concat(flattenLeafColumns(column.children));
    }

    return result.concat(column);
  }, []);
}

/**
 * getHeaderColElements
 * @description 获取表头 colgroup 中的 col 节点
 */
function getHeaderColElements(context: any): HTMLElement[] {
  const colEls = context?.tableWrapRef?.current?.querySelectorAll?.(
    '.ant-table-header > table > colgroup > col',
  );

  return colEls?.length ? (Array.from(colEls) as HTMLElement[]) : [];
}

/**
 * getLeadingColCount
 * @description 选择列 / 序号列占用的前置 col 数量
 */
function getLeadingColCount(context: any): number {
  let spanCount = 0;

  if (context.getRowSelection()) {
    spanCount += 1;
  }

  if (context.isShowNumber()) {
    spanCount += 1;
  }

  return spanCount;
}

/**
 * isColumnVisible
 * @description 与 getTableColumns 的显隐规则保持一致
 */
function isColumnVisible(column: any): boolean {
  if ('$hide' in column && !!column.$hide) {
    return false;
  }

  if ('$authorized' in column) {
    return !!column?.$authorized?.();
  }

  return true;
}

/**
 * getVisibleLeafColumns
 * @description 取可见叶子列；这里用 getColumns，避免调用 getTableColumns 重入 resizable 处理
 */
function getVisibleLeafColumns(context: any): any[] {
  const columns = (context?.getColumns?.() ?? []).filter(isColumnVisible);
  return flattenLeafColumns(columns);
}

/**
 * freezeColumnWidthsFromDOM
 * @description 首次拖拽前把所有叶子列当前渲染宽度写入缓存，避免只锁一列时其余列随布局重算被带偏
 */
function freezeColumnWidthsFromDOM(
  context: any,
  columnsWidth: Map<string, { width: number; height: number }>,
) {
  const colEls = getHeaderColElements(context);
  const leafColumns = getVisibleLeafColumns(context);
  const spanCount = getLeadingColCount(context);

  leafColumns.forEach((column, index) => {
    const key = column?.key;
    if (key == null || columnsWidth.has(key)) {
      return;
    }

    const fromColumn = parseWidthToNumber(column.width);
    const fromDom = getRenderedColWidth(colEls[spanCount + index]);
    const width = fromColumn ?? fromDom;

    if (typeof width === 'number' && width > 0) {
      columnsWidth.set(key, { width, height: 0 });
    }
  });
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
    // 拖动过程中先冻结其余列宽，再写入当前列，避免邻列被表格重排带偏
    freezeColumnWidthsFromDOM(context, columnsWidth);
    columnsWidth.set(column.key, size);

    context.forceUpdate();
  };
}

/**
 * handleResizeStart
 * @description 开始拖拽时立即冻结全部叶子列宽
 */
function handleResizeStart(context, columnsWidth) {
  return () => {
    freezeColumnWidthsFromDOM(context, columnsWidth);
  };
}

/**
 * resolveResizableWidth
 * @description 解析列拖拽初始宽度：拖拽缓存 > 明确 width/minWidth > DOM 实测
 * @param {boolean} isEmpty - 当前数据源是否为空；为空时不回退到 DOM 实测宽度，
 * 否则会把"有数据时"渲染出的旧列宽（此时 DOM 还未提交本次空数据的渲染）继续用到空数据的展示上
 */
function resolveResizableWidth({
  column,
  columnsWidth,
  computedWidth,
  isEmpty,
}: {
  column: any;
  columnsWidth: Map<string, { width: number; height: number }>;
  computedWidth?: number;
  isEmpty?: boolean;
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

  if (isEmpty) {
    return undefined;
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
  const colEls = getHeaderColElements(context);
  const spanCount = getLeadingColCount(context);

  // 表头分组时传入的 index 是顶层索引，需按叶子列位置对齐 colgroup
  const leafColumns = getVisibleLeafColumns(context);
  const leafIndex = leafColumns.findIndex(
    (item) => item?.key === column?.key || item?.dataIndex === column?.dataIndex,
  );
  const colIndex = leafIndex >= 0 ? leafIndex : index;

  const colEl = colEls.length > spanCount ? colEls[spanCount + colIndex] : null;
  const computedWidth = getRenderedColWidth(colEl);
  const isEmpty = (context?.getDataSource?.() ?? []).length === 0;

  const width = resolveResizableWidth({
    column,
    columnsWidth,
    computedWidth,
    isEmpty,
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
          isEmpty,
        }) ?? width;

      return {
        width: headerWidth,
        onResizeStart: handleResizeStart(context, columnsWidth),
        onResize: handleResize(context, _others, columnsWidth),
        column: _others,
      };
    },
  };
};
