// RadioGroup buttonStyle
import Intl from '@baifendian/adhere-util-intl';

export const RadioGroupButtonStyle = {
  handler: () => {
    return [
      { label: Intl.get('radio_group_button_outline'), value: 'outline' },
      { label: Intl.get('radio_group_button_solid'), value: 'solid' },
    ];
  },
};
