// RadioGroup optionType
import Intl from '@baifendian/adhere-util-intl';

export const RadioGroupOptionType = {
  handler: () => {
    return [
      { label: Intl.get('default'), value: 'default' },
      { label: Intl.get('button'), value: 'button' },
    ];
  },
};
