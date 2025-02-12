import type { TableCellComponentReducer } from '../../../types';

/**
 * DragSortCell
 * @description 单元格编辑
 */
const DragSortCell: TableCellComponentReducer = (/*props*/) => {
  // const { column } = props;
  // /**
  //  * defaultConfig
  //  * @description 缺省的单元格配置
  //  */
  // const defaultConfig = {};
  //
  // /**
  //  * rowDragSortConfig
  //  * @description 实际的单元格配置
  //  */
  // const rowDragSortConfig: ColumnRowDragSortConfig = useMemo(
  //   () => ({ ...defaultConfig, ...(column?.$rowDragSort ?? {}) }),
  //   [column, column?.dataIndex],
  // );
  //
  // const context = useContext<{
  //   context: SearchTable;
  // } | null>(SearchTableContext);

  return (tdREL) => tdREL;
};

export default DragSortCell;
