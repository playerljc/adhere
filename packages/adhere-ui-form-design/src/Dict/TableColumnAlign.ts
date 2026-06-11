// TableColumnAlign
import Intl from '@baifendian/adhere-util-intl';

export const TableColumnAlign = {
  handler: () => {
    return [
      { label: Intl.get('align_left'), value: 'left' },
      { label: Intl.get('align_center'), value: 'center' },
      { label: Intl.get('align_right'), value: 'right' },
    ];
  },
};
