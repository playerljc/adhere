import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import { createFactory } from '../util';

const InputNegativeNumberDecimal1HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { max: 0, precision: 1 });

InputNegativeNumberDecimal1HOC.displayName = 'InputNegativeNumberDecimal1';

export default InputNegativeNumberDecimal1HOC;
