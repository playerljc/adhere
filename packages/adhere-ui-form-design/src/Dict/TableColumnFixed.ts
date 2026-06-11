// TableColumnFixed
import Intl from '@baifendian/adhere-util-intl';

export const TableColumnFixed = {
  handler: () => {
    return [
      { label: Intl.get('table_column_not_fixed'), value: 'none' },
      { label: Intl.get('table_column_fixed_left'), value: 'left' },
      { label: Intl.get('table_column_fixed_right'), value: 'right' },
    ];
  },
};
