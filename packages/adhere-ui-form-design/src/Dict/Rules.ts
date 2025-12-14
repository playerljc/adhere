// Rules
import Intl from '@baifendian/adhere-util-intl';

export const Rules = {
  handler: () => {
    return [
      { label: Intl.get('required'), value: 'required' },
      { label: Intl.get('whitespace'), value: 'whitespace' },
      { label: Intl.get('max'), value: 'max' },
      { label: Intl.get('min'), value: 'min' },
      { label: Intl.get('pattern'), value: 'pattern' },
      { label: Intl.get('custom'), value: 'custom' },
    ];
  },
};
