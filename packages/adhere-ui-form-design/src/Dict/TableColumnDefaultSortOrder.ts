// TableColumnDefaultSortOrder
import Intl from '@baifendian/adhere-util-intl';

export const TableColumnDefaultSortOrder = {
  handler: () => {
    return [
      { label: Intl.get('table_column_sort_none'), value: 'none' },
      { label: Intl.get('table_column_sort_ascend'), value: 'ascend' },
      { label: Intl.get('table_column_sort_descend'), value: 'descend' },
    ];
  },
};
