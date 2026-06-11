// TableRowSelectionType
import Intl from '@baifendian/adhere-util-intl';

export const TableRowSelectionType = {
  handler: () => {
    return [
      { label: Intl.get('table_row_selection_checkbox'), value: 'checkbox' },
      { label: Intl.get('table_row_selection_radio'), value: 'radio' },
    ];
  },
};
