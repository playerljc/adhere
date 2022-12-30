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
    colEls && colEls.length > spanCount ? colEls?.[spanCount + index]?.style?.width : null;

  if (computedWidth) {
    computedWidth = parseInt(computedWidth);
  }

  const columnSizeItem = columnsWidth.get(column.key as string);

  const width = columnSizeItem ? columnSizeItem.width : column.width ? column.width : computedWidth;

  return {
    ...column,
    width,
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
      const _column = findLoop(_columns);
      const { onHeaderCell, ..._others } = _column;
      return {
        width: _others.width,
        onResize: handleResize(context, _others, columnsWidth),
      };
    },
  };
};
