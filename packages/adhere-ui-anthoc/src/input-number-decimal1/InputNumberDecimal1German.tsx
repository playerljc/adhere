import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal1GermanHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 1,
  formatter: (value) => Util.GermanNumberFormatter(value ?? '', 1),
  parser: (value) => Util.GermanNumberParse(value ?? ''),
});

InputNumberDecimal1GermanHOC.displayName = 'InputNumberDecimal1German';

export default InputNumberDecimal1GermanHOC;
