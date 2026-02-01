import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal2USHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 2,
  formatter: (value) => Util.USNumberFormatter(value ?? '', 2),
  parser: (value) => Util.USNumberParse(value ?? ''),
});

InputNumberDecimal2USHOC.displayName = 'InputNumberDecimal2US';

export default InputNumberDecimal2USHOC;
