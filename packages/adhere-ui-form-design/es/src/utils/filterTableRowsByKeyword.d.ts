import type { TableDataRow } from './tableDataSource';
/**
 * 对表格行做全局关键字过滤：任意字段命中即保留该行
 */
export declare function filterTableRowsByKeyword(rows: TableDataRow[], keyword: string | undefined | null): TableDataRow[];
