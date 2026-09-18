import type { ColumnTypeExt } from '../../types';
import type { SearchFieldCollectorOptions, SearchFieldItem } from './types';

/**
 * collectSearchFieldConfigs
 * @description 收集所有可见查询项配置
 */
export function collectSearchFieldConfigs({
  columns,
  assignSearchConfig,
  hasAuthority,
}: SearchFieldCollectorOptions): SearchFieldItem[] {
  const result: SearchFieldItem[] = [];

  const loop = (columnList: ColumnTypeExt[]) => {
    columnList
      .filter((column) => '$search' in column && !!column.$search?.visible)
      .forEach((columnItem) => {
        const { $search, ...column } = columnItem;
        const searchConfig = assignSearchConfig($search, column);
        const dataIndex = String(searchConfig.dataIndex || columnItem.dataIndex || '');

        if (hasAuthority && !hasAuthority(searchConfig.authority)) {
          return;
        }

        result.push({
          searchConfig,
          column,
          dataIndex,
        });

        if (columnItem.children?.length) {
          loop(columnItem.children);
        }
      });
  };

  loop(columns);

  return result;
}
