import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import { createFactory } from '../util';

const InputNegativeNumberIntegerHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { max: 0, precision: 0 });

InputNegativeNumberIntegerHOC.displayName = 'InputNegativeNumberInteger';

export default InputNegativeNumberIntegerHOC;
