import type { RadioGroupProps } from 'antd/es/radio';

import { createFactory } from '../util';
import Radio from './Radio';

const ButtonRadio = createFactory<RadioGroupProps>(Radio.Group, {
  optionType: 'button',
});

export default ButtonRadio;
