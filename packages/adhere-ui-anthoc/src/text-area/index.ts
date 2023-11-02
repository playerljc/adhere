import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';

import { createFactory } from '../util';

const { TextArea } = Input;

export default createFactory<TextAreaProps>(TextArea, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
  autoSize: false,
});
