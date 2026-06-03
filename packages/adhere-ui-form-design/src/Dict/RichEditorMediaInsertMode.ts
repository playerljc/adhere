// RichEditorMediaInsertMode
import Intl from '@baifendian/adhere-util-intl';

export const RichEditorMediaInsertMode = {
  handler: () => {
    return [
      {
        label: Intl.get('rich_editor_insert_path'),
        value: 'path',
      },
      {
        label: Intl.get('rich_editor_insert_upload'),
        value: 'upload',
      },
    ];
  },
};
