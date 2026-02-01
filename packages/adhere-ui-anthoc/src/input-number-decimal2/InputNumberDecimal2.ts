import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';
import InputNegativeNumberDecimal2 from './InputNegativeNumberDecimal2';
import InputPositiveNumberDecimal2 from './InputPositiveNumberDecimal2';
import InputNumberDecimal2German from './InputNumberDecimal2German';
import InputNumberDecimal2US from './InputNumberDecimal2US';
import InputNumberDecimal2French from './InputNumberDecimal2French';
import InputNumberDecimal2International from './InputNumberDecimal2International';

const InputNumberDecimal2HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
  InputPositiveNumberDecimal2: typeof InputPositiveNumberDecimal2;
  InputNegativeNumberDecimal2: typeof InputNegativeNumberDecimal2;
  InputNumberDecimal2German: typeof InputNumberDecimal2German;
  InputNumberDecimal2US: typeof InputNumberDecimal2US;
  InputNumberDecimal2French: typeof InputNumberDecimal2French;
  InputNumberDecimal2International: typeof InputNumberDecimal2International;
} = createFactory<InputNumberProps>(InputNumber, { precision: 2 });

InputNumberDecimal2HOC.displayName = 'InputNumberDecimal2';
InputNumberDecimal2HOC.InputPositiveNumberDecimal2 = InputPositiveNumberDecimal2;
InputNumberDecimal2HOC.InputNegativeNumberDecimal2 = InputNegativeNumberDecimal2;
InputNumberDecimal2HOC.InputNumberDecimal2German = InputNumberDecimal2German;
InputNumberDecimal2HOC.InputNumberDecimal2US = InputNumberDecimal2US;
InputNumberDecimal2HOC.InputNumberDecimal2French = InputNumberDecimal2French;
InputNumberDecimal2HOC.InputNumberDecimal2International = InputNumberDecimal2International;
export default InputNumberDecimal2HOC;
