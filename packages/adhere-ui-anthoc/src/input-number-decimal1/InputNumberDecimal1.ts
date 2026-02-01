import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';
import InputNegativeNumberDecimal1 from './InputNegativeNumberDecimal1';
import InputPositiveNumberDecimal1 from './InputPositiveNumberDecimal1';
import InputNumberDecimal1German from './InputNumberDecimal1German';
import InputNumberDecimal1US from './InputNumberDecimal1US';
import InputNumberDecimal1French from './InputNumberDecimal1French';
import InputNumberDecimal1International from './InputNumberDecimal1International';

const InputNumberDecimal1HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
  InputNegativeNumberDecimal1: typeof InputNegativeNumberDecimal1;
  InputPositiveNumberDecimal1: typeof InputPositiveNumberDecimal1;
  InputNumberDecimal1German: typeof InputNumberDecimal1German;
  InputNumberDecimal1US: typeof InputNumberDecimal1US;
  InputNumberDecimal1French: typeof InputNumberDecimal1French;
  InputNumberDecimal1International: typeof InputNumberDecimal1International;
} = createFactory<InputNumberProps>(InputNumber, { precision: 1 });

InputNumberDecimal1HOC.displayName = 'InputNumberDecimal1';
InputNumberDecimal1HOC.InputNegativeNumberDecimal1 = InputNegativeNumberDecimal1;
InputNumberDecimal1HOC.InputPositiveNumberDecimal1 = InputPositiveNumberDecimal1;
InputNumberDecimal1HOC.InputNumberDecimal1German = InputNumberDecimal1German;
InputNumberDecimal1HOC.InputNumberDecimal1US = InputNumberDecimal1US;
InputNumberDecimal1HOC.InputNumberDecimal1French = InputNumberDecimal1French;
InputNumberDecimal1HOC.InputNumberDecimal1International = InputNumberDecimal1International;

export default InputNumberDecimal1HOC;
