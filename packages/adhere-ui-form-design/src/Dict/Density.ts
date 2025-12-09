// 密度
import Intl from '@baifendian/adhere-util-intl';

export const Density = {
  handler: () => {
    return [
      {
        label: Intl.get('default'),
        value: 'default',
      },
      {
        label: Intl.get('middle'),
        value: 'middle',
      },
      {
        label: Intl.get('small'),
        value: 'small',
      },
    ];
  },
};
