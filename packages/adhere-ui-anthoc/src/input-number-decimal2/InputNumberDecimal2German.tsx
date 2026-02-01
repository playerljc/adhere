import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal2GermanHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 2,
  formatter: (value) => Util.GermanNumberFormatter(value ?? '', 2),
  parser: (value) => Util.GermanNumberParse(value ?? ''),
});

InputNumberDecimal2GermanHOC.displayName = 'InputNumberDecimal2German';

export default InputNumberDecimal2GermanHOC;
