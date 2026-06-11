import type { TableProps } from 'antd';

import type { PagingSettingValue } from '../../../../components';
import type { TableSelectColumnSettingItem } from '../../../../components';
import type { I18nValue } from '../../../../types';
import type { TableDataRow } from '../../../../utils/tableDataSource';
import { compareTableCellValues } from '../../../../utils/compareTableCellValues';
import { resolveI18nText } from '../../../../utils';

export type TableSelectFieldConfig = {
  showSearch?: boolean;
  searchPlaceholder?: I18nValue | string;
  searchAllowClear?: boolean;
  bordered?: boolean;
  loading?: boolean;
  size?: string;
  showHeader?: boolean;
  tableLayout?: 'auto' | 'fixed';
  rowKey?: string;
  rowSelectionType?: 'checkbox' | 'radio';
  hideSelectAll?: boolean;
  rowSelectionFixed?: boolean;
  rowSelectionColumnWidth?: number;
  pagination?: boolean;
  paginationSetting?: PagingSettingValue;
  scrollY?: number;
  columnSetting?: TableSelectColumnSettingItem[];
  disabled?: boolean;
};

const DEFAULT_MOBILE_COLUMN_WIDTH = 120;
const DEFAULT_SELECTION_COLUMN_WIDTH = 48;

export function resolveTableColumns(
  columnSetting: TableSelectColumnSettingItem[] | undefined,
  lang: string,
  options?: { isMobile?: boolean },
): TableProps<TableDataRow>['columns'] {
  const isMobile = options?.isMobile === true;

  return (columnSetting ?? [])
    .filter((col) => col.visible !== false)
    .map((col) => {
      const dataIndex = col.dataIndex;
      const enableSorter = col.sorter === true && !!dataIndex;
      const defaultSortOrder =
        enableSorter &&
        (col.defaultSortOrder === 'ascend' || col.defaultSortOrder === 'descend')
          ? col.defaultSortOrder
          : undefined;
      const width =
        col.width ?? (isMobile ? DEFAULT_MOBILE_COLUMN_WIDTH : undefined);

      return {
        key: col.id,
        title: resolveI18nText(col.title, lang) || col.dataIndex || '',
        dataIndex,
        width,
        align: col.align,
        ellipsis: col.ellipsis,
        fixed:
          col.fixed === 'left' || col.fixed === 'right'
            ? col.fixed
            : undefined,
        ...(enableSorter
          ? {
              sorter: (a: TableDataRow, b: TableDataRow) =>
                compareTableCellValues(a[dataIndex], b[dataIndex]),
              defaultSortOrder,
            }
          : {}),
      };
    });
}

export function resolveTableSize(size?: string): TableProps<TableDataRow>['size'] {
  if (size === 'medium' || size === 'middle') return 'middle';
  return (size as TableProps<TableDataRow>['size']) ?? 'middle';
}

export function resolveTablePagination(
  pagination?: boolean,
  paginationSetting?: PagingSettingValue,
): TableProps<TableDataRow>['pagination'] {
  if (!pagination) return false;
  if (!paginationSetting) return {};
  return {
    defaultCurrent: paginationSetting.defaultCurrent ?? 1,
    pageSize: paginationSetting.pageSize ?? 10,
    showSizeChanger: paginationSetting.showSizeChanger ?? true,
    pageSizeOptions: paginationSetting.pageSizeOptions ?? [10, 20, 50, 100],
    showQuickJumper: paginationSetting.showQuickJumper ?? false,
    simple: paginationSetting.simple ?? false,
    hideOnSinglePage: paginationSetting.hideOnSinglePage ?? false,
    position: paginationSetting.position ?? ['bottomRight'],
    size: paginationSetting.size ?? 'default',
  };
}

export function resolveMobileScrollX(
  columnSetting: TableSelectColumnSettingItem[] | undefined,
  rowSelectionColumnWidth?: number,
): number {
  const selectionWidth = rowSelectionColumnWidth ?? DEFAULT_SELECTION_COLUMN_WIDTH;
  const columnsWidth = (columnSetting ?? [])
    .filter((col) => col.visible !== false)
    .reduce((sum, col) => sum + (col.width ?? DEFAULT_MOBILE_COLUMN_WIDTH), 0);

  return selectionWidth + columnsWidth;
}

export function pickTableSelectTableProps(
  fieldProps: TableSelectFieldConfig,
  lang: string,
  options?: { isMobile?: boolean },
): Omit<TableProps<TableDataRow>, 'rowSelection' | 'dataSource' | 'scroll'> {
  const isMobile = options?.isMobile === true;

  return {
    bordered: fieldProps.bordered,
    loading: fieldProps.loading,
    size: resolveTableSize(fieldProps.size),
    showHeader: fieldProps.showHeader,
    tableLayout: isMobile ? 'fixed' : fieldProps.tableLayout,
    rowKey: fieldProps.rowKey ?? 'key',
    columns: resolveTableColumns(fieldProps.columnSetting, lang, { isMobile }),
    pagination: resolveTablePagination(fieldProps.pagination, fieldProps.paginationSetting),
  };
}
