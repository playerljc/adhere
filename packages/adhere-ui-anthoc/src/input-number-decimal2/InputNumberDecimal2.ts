import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';

const InputNumberDecimal2HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { precision: 2 });

export default InputNumberDecimal2HOC;
