import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import { createFactory } from '../util';

const InputPositiveNumberIntegerHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, { min: 0, precision: 0 });

InputPositiveNumberIntegerHOC.displayName = 'InputPositiveNumberInteger';

export default InputPositiveNumberIntegerHOC;
