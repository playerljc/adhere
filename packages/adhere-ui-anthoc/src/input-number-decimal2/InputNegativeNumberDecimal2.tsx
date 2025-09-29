import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import { createFactory } from '../util';

const InputNegativeNumberDecimal2HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { max: 0, precision: 2 });

InputNegativeNumberDecimal2HOC.displayName = 'InputNegativeNumberDecimal2';

export default InputNegativeNumberDecimal2HOC;
