import { Input } from 'antd';

import { createFactory } from '../util';

const { TextArea } = Input;

export default createFactory(TextArea, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
  autoSize: false,
});
