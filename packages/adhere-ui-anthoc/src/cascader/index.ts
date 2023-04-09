import { Cascader } from 'antd';

import { createFactory } from '../util';

export default createFactory(Cascader, {
  showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
  },
  allowClear: true,
  placement: 'bottomLeft',
});
