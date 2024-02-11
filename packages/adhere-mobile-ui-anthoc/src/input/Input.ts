import { Input } from 'antd-mobile';
import type { InputProps } from 'antd-mobile';

import { createFactory } from '../util';

const InputHOC: typeof Input & {
  defaultProps?: Partial<InputProps>;
} = createFactory<InputProps>(Input, {
  clearable: true,
  maxLength: 1000,
});

InputHOC.displayName = 'Input';

export default InputHOC;
