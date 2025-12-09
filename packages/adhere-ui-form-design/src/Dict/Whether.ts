// 是否
import Intl from '@baifendian/adhere-util-intl';

export const Whether = {
  handler: () => {
    return [
      {
        label: Intl.get('yes'),
        value: true,
      },
      {
        label: Intl.get('no'),
        value: false,
      },
    ];
  },
};
