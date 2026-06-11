// Rules
import Intl from '@baifendian/adhere-util-intl';

export const Rules = {
  handler: () => {
    return [
      { label: 'required', value: 'required' },
      { label: 'whitespace', value: 'whitespace' },
      { label: 'max', value: 'max' },
      { label: 'min', value: 'min' },
      { label: 'pattern', value: 'pattern' },
      { label: 'custom', value: 'custom' },
      { label: Intl.get('table_select_required'), value: 'tableSelectRequired' },
      { label: Intl.get('tree_selection_required'), value: 'treeSelectionRequired' },
    ];
  },
};
