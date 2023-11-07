import { Input } from 'antd';
import type { InputProps } from 'antd';

import { createFactory } from '../util';

const InputHOC: typeof Input & {
  defaultProps?: Partial<InputProps>;
} = createFactory<InputProps>(Input, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
});

export default InputHOC;
