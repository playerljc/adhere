import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import { createFactory } from '../util';

const InputPositiveNumberDecimal2HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { min: 0, precision: 2 });

InputPositiveNumberDecimal2HOC.displayName = 'InputPositiveNumberDecimal2';

export default InputPositiveNumberDecimal2HOC;
