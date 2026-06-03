// RichEditorToolbarPreset
import Intl from '@baifendian/adhere-util-intl';

export const RichEditorToolbarPreset = {
  handler: () => {
    return [
      {
        label: Intl.get('rich_editor_toolbar_basic'),
        value: 'basic',
      },
      {
        label: Intl.get('rich_editor_toolbar_full'),
        value: 'full',
      },
    ];
  },
};
