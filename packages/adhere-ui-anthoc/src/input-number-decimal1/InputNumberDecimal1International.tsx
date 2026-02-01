import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal1InternationalHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 1,
  formatter: (value) => Util.InternationalNumberFormatter(value ?? '', 1),
  parser: (value) => Util.InternationalNumberParse(value ?? ''),
});

InputNumberDecimal1InternationalHOC.displayName = 'InputNumberDecimal1International';

export default InputNumberDecimal1InternationalHOC;
