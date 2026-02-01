import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal1FrenchHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 1,
  formatter: (value) => Util.FrenchNumberFormatter(value ?? '', 1),
  parser: (value) => Util.FrenchNumberParse(value ?? ''),
});

InputNumberDecimal1FrenchHOC.displayName = 'InputNumberDecimal1French';

export default InputNumberDecimal1FrenchHOC;
