import type { InputProps } from 'antd-mobile';

import Input from '../input';
import { createFactory } from '../util';

const InputNegativeNumberHOC: typeof Input & {
  defaultProps?: Partial<InputProps>;
} = createFactory<InputProps>(Input, { max: 0, type: 'number' });

InputNegativeNumberHOC.displayName = 'InputNegativeNumber';

export default InputNegativeNumberHOC;
