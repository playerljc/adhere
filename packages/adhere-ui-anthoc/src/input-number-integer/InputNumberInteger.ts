import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';
import InputNegativeNumberInteger from './InputNegativeNumberInteger';
import InputPositiveNumberInteger from './InputPositiveNumberInteger';

const InputNumberIntegerHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  InputNegativeNumberInteger: typeof InputNegativeNumberInteger;
  InputPositiveNumberInteger: typeof InputPositiveNumberInteger;
} = createFactory<InputNumberProps>(InputNumber, { precision: 0 });

InputNumberIntegerHOC.displayName = 'InputNumberInteger';
InputNumberIntegerHOC.InputNegativeNumberInteger = InputNegativeNumberInteger;
InputNumberIntegerHOC.InputPositiveNumberInteger = InputPositiveNumberInteger;

export default InputNumberIntegerHOC;
