import { Select } from 'antd';

import { createFactory } from '../util';

export default createFactory(Select, {
  showSearch: true,
  allowClear: true,
  mode: 'multiple',
  placement: 'bottomLeft',
  filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
});
