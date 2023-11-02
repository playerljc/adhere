import { AutoComplete, AutoCompleteProps } from 'antd';

import type { AutoCompleteHOCComponent } from '../types';
import { createFactory } from '../util';

const AutoCompleteHOC: AutoCompleteHOCComponent = createFactory<AutoCompleteProps>(AutoComplete, {
  allowClear: true,
  filterOption: (input, option) =>
    (option?.value as string)?.toUpperCase?.()?.indexOf?.(input?.toUpperCase?.()) >= 0,
});

export default AutoCompleteHOC;
