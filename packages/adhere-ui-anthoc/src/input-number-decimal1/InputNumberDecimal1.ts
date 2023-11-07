import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';

const InputNumberDecimal1HOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { precision: 1 });

export default InputNumberDecimal1HOC;
