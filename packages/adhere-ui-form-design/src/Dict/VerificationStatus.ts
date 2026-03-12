// 校验状态
import Intl from '@baifendian/adhere-util-intl';

export const VerificationStatus = {
  handler: () => {
    return [
      {
        label: 'error',
        value: 'error',
      },
      {
        label: 'warning',
        value: 'warning',
      },
    ];
  },
};
