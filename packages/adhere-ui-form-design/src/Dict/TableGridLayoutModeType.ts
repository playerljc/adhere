// TableGridLayout的mode类型
import Intl from '@baifendian/adhere-util-intl';

export const TableGridLayoutModeType = {
  handler: () => {
    return [
      {
        label: Intl.get('normal'),
        value: 'normal',
      },
      {
        label: Intl.get('parity'),
        value: 'parity',
      },
      {
        label: Intl.get('bordered'),
        value: 'bordered',
      },
    ];
  },
};
