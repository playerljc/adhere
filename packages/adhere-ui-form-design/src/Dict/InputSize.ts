// Input的尺寸
import Intl from '@baifendian/adhere-util-intl';

export const InputSize = {
  handler: () => {
    return [
      {
        label: Intl.get('large'),
        value: 'large',
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
