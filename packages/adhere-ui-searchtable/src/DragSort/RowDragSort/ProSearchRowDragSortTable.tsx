import { MemoManager } from '../../Extension/SearchAndPaginParams';
import ProTableFactory from '../../ProTableFactory';
import SearchRowDragSortTable from './SearchRowDragSortTable';

export const SearchAndPaginParamsMemo: any = MemoManager.create();

/**
 * ProSearchRowDragSortTable
 * @classdesc 可以进行行拖拽排序的高级表格
 */
export default ProTableFactory(SearchRowDragSortTable, SearchAndPaginParamsMemo);
