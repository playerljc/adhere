import { AutoComplete } from 'antd';

import { createFactory } from '../util';

export default createFactory(AutoComplete, {
  allowClear: true,
  filterOption: (input, option) => option!.value.toUpperCase().indexOf(input.toUpperCase()) >= 0,
});
