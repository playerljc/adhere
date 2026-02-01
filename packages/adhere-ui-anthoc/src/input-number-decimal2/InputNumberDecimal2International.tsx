import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal2InternationalHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 2,
  formatter: (value) => Util.InternationalNumberFormatter(value ?? '', 2),
  parser: (value) => Util.InternationalNumberParse(value ?? ''),
});

InputNumberDecimal2InternationalHOC.displayName = 'InputNumberDecimal2International';

export default InputNumberDecimal2InternationalHOC;
