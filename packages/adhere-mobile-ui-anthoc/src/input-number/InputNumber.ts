import type { InputProps } from 'antd-mobile';

import Input from '../input';
import { createFactory } from '../util';
import InputNegativeNumber from './InputNegativeNumber';
import InputPositiveNumber from './InputPositiveNumber';

const InputNumberHOC: typeof Input & {
  defaultProps?: Partial<InputProps>;
  override?: (props: Partial<InputProps>) => Partial<InputProps>;
  InputNegativeNumber: typeof InputNegativeNumber;
  InputPositiveNumber: typeof InputPositiveNumber;
} = createFactory<InputProps>(Input, {}, (props) => ({
  ...props,
  type: 'number',
}));

InputNumberHOC.displayName = 'InputNumber';

export default InputNumberHOC;
