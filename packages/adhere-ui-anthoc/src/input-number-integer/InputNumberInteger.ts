import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';

const InputNumberIntegerHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { precision: 0 });

export default InputNumberIntegerHOC;
