import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';
import InputNegativeNumberDecimal1 from './InputNegativeNumberDecimal1';
import InputPositiveNumberDecimal1 from './InputPositiveNumberDecimal1';

const InputNumberDecimal1HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
  InputNegativeNumberDecimal1: typeof InputNegativeNumberDecimal1;
  InputPositiveNumberDecimal1: typeof InputPositiveNumberDecimal1;
} = createFactory<InputNumberProps>(InputNumber, { precision: 1 });

InputNumberDecimal1HOC.displayName = 'InputNumberDecimal1';
InputNumberDecimal1HOC.InputNegativeNumberDecimal1 = InputNegativeNumberDecimal1;
InputNumberDecimal1HOC.InputPositiveNumberDecimal1 = InputPositiveNumberDecimal1;

export default InputNumberDecimal1HOC;
