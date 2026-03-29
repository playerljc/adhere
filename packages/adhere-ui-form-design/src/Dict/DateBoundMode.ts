// 日期边界模式
import Intl from '@baifendian/adhere-util-intl';

export const DateBoundMode = {
  handler: () => {
    return [
      { label: Intl.get('none'), value: '' },
      { label: 'before', value: 'before' },
      { label: 'after', value: 'after' },
    ];
  },
};
