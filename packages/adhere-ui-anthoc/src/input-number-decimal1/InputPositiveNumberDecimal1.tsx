import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import { createFactory } from '../util';

const InputPositiveNumberDecimal1HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { min: 0, precision: 1 });

InputPositiveNumberDecimal1HOC.displayName = 'InputPositiveNumberDecimal1';

export default InputPositiveNumberDecimal1HOC;
