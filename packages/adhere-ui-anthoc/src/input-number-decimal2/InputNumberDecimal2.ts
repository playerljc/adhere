import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';
import InputNegativeNumberDecimal2 from './InputNegativeNumberDecimal2';
import InputPositiveNumberDecimal2 from './InputPositiveNumberDecimal2';

const InputNumberDecimal2HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  InputPositiveNumberDecimal2: typeof InputPositiveNumberDecimal2;
  InputNegativeNumberDecimal2: typeof InputNegativeNumberDecimal2;
} = createFactory<InputNumberProps>(InputNumber, { precision: 2 });

InputNumberDecimal2HOC.displayName = 'InputNumberDecimal2';
InputNumberDecimal2HOC.InputPositiveNumberDecimal2 = InputPositiveNumberDecimal2;
InputNumberDecimal2HOC.InputNegativeNumberDecimal2 = InputNegativeNumberDecimal2;
export default InputNumberDecimal2HOC;
