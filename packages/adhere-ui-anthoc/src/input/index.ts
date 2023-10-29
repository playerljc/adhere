import { Input, InputProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<InputProps>(Input, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
});
