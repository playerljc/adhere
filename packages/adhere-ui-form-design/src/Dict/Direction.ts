// 方向
import Intl from '@baifendian/adhere-util-intl';

export const Direction = {
  handler: () => {
    return [
      {
        label: Intl.get('horizontal'),
        value: 'horizontal',
      },
      {
        label: Intl.get('vertical'),
        value: 'vertical',
      },
    ];
  },
};
