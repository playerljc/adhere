import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete';

import type { AutoCompleteCheckAllMultipleSelectProps, CheckAllSelectProps } from '../types';
import { createFactory } from '../util';
import AutoCompleteCheckAllMultipleSelect from './AutoCompleteCheckAllMultipleSelect';
import AutoCompleteMultipleSelect from './AutoCompleteMultipleSelect';
import CheckAllSelect from './CheckAllMultipleSelect';
import MultipleSelect from './MultipleSelect';

MultipleSelect.CheckAllSelect = createFactory<CheckAllSelectProps>(CheckAllSelect, {});
MultipleSelect.AutoCompleteMultipleSelect = createFactory<AutoCompleteProps>(
  AutoCompleteMultipleSelect,
  {},
);
MultipleSelect.AutoCompleteCheckAllMultipleSelect =
  createFactory<AutoCompleteCheckAllMultipleSelectProps>(AutoCompleteCheckAllMultipleSelect, {});

export default MultipleSelect;
