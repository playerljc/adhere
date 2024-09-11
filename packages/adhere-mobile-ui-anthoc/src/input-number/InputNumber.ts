import type { InputProps } from 'antd-mobile';

import Input from '../input';
import { createFactory } from '../util';

const InputNumberHOC: typeof Input & {
  defaultProps?: Partial<InputProps>;
} = createFactory<InputProps>(Input, {}, (props) => ({
  ...props,
  type: 'number',
}));

InputNumberHOC.displayName = 'InputNumber';

export default InputNumberHOC;
