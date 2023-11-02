import { AutoComplete, AutoCompleteProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<AutoCompleteProps>(AutoComplete, {
  allowClear: true,
  filterOption: (input, option) =>
    (option?.value as string)?.toUpperCase?.()?.indexOf?.(input?.toUpperCase?.()) >= 0,
});
