import SearchTableResizableColumnItem from './SearchTableResizableColumnItem';
import SearchTableResizableObserver from './SearchTableResizableObserver';
import SearchTableResizableTitle from './SearchTableResizableTitle';

class ColumnResizable {
  // 列的宽度
  columnsWidth = new Map<string, { width: number; height: number }>();

  searchTableResizableColumnItem(context: any, index: number, column: any) {
    return SearchTableResizableColumnItem({
      columnsWidth: this.columnsWidth,
      context,
      index,
      column,
    });
  }
}

export default ColumnResizable;

export { SearchTableResizableTitle, SearchTableResizableObserver };
