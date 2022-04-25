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
    console.log('handleResize', column, size, context);
    // 当拖动header的column时
    columnsWidth.set(column.key, size);

    // @ts-ignore
    context.forceUpdate();
  };
}

// @ts-ignore
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

  let computedWidth =
    // @ts-ignore
    colEls && colEls.length > spanCount ? colEls?.[spanCount + index]?.style?.width : null;

  if (computedWidth) {
    computedWidth = parseInt(computedWidth);
  }

  // @ts-ignore
  const columnSizeItem = columnsWidth.get(column.key as string);

  const width = columnSizeItem
    ? columnSizeItem.width
    : // @ts-ignore
    column.width
    ? // @ts-ignore
      column.width
    : computedWidth;

  return {
    // @ts-ignore
    ...column,
    width,
    // 加入onHeaderCell
    onHeaderCell: () => {
      const _columns = context.getTableColumns();
      const _column = _columns.find((_t) => _t.dataIndex === column.dataIndex);
      const { onHeaderCell, ..._others } = _column;
      return {
        width: _others.width,
        onResize: handleResize(context, _others, columnsWidth),
      };
    },
  };
};
