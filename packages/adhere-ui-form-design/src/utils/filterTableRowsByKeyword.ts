import type { TableDataRow } from './tableDataSource';

function cellValueMatchesKeyword(value: unknown, keyword: string): boolean {
  if (value == null) return false;
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value).toLowerCase().includes(keyword);
    } catch {
      return false;
    }
  }
  return String(value).toLowerCase().includes(keyword);
}

function rowMatchesKeyword(row: TableDataRow, keyword: string): boolean {
  return Object.values(row).some((value) => cellValueMatchesKeyword(value, keyword));
}

/**
 * 对表格行做全局关键字过滤：任意字段命中即保留该行
 */
export function filterTableRowsByKeyword(
  rows: TableDataRow[],
  keyword: string | undefined | null,
): TableDataRow[] {
  const normalized = (keyword ?? '').trim().toLowerCase();
  if (!normalized) return rows;
  return rows.filter((row) => rowMatchesKeyword(row, normalized));
}
