import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberIntegerInternationalHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 0,
  formatter: (value) => Util.InternationalNumberFormatter(value ?? '', 0),
  parser: (value) => Util.InternationalNumberParse(value ?? ''),
});

InputNumberIntegerInternationalHOC.displayName = 'InputNumberIntegerInternational';

export default InputNumberIntegerInternationalHOC;
