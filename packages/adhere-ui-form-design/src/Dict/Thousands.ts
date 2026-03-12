// 千分位
import Intl from '@baifendian/adhere-util-intl';

export const Thousands = {
  handler: () => {
    return [
      {
        label: Intl.get('none'),
        value: '',
      },
      {
        label: 'French',
        value: 'French',
      },
      {
        label: 'German',
        value: 'German',
      },
      {
        label: 'US',
        value: 'US',
      },
      {
        label: 'International',
        value: 'International',
      },
    ];
  },
};
