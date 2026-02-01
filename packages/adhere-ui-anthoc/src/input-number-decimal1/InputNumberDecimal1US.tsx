import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal1USHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 1,
  formatter: (value) => Util.USNumberFormatter(value ?? '', 1),
  parser: (value) => Util.USNumberParse(value ?? ''),
});

InputNumberDecimal1USHOC.displayName = 'InputNumberDecimal1US';

export default InputNumberDecimal1USHOC;
