// InputEvents
import Intl from '@baifendian/adhere-util-intl';

export const InputEvents = {
  handler: ({ values }) => {
    return [
      { label: 'onChange', value: 'onChange' },
      { label: 'onInput', value: 'onInput' },
      { label: 'onBeforeInput', value: 'onBeforeInput' },
      ...values.FocusEvents.value,
      ...values.KeyboardEvents.value,
      ...values.MouseEvents.value,
      ...values.ClipboardEvents.value,
    ];
  },
};
