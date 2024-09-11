import type { RadioGroupProps } from 'antd/es/radio';

import { createFactory } from '../util';
import Radio from './Radio';

const ButtonRadioHOC = createFactory<RadioGroupProps>(Radio.Group, {
  optionType: 'button',
});

ButtonRadioHOC.displayName = 'ButtonRadio';

export default ButtonRadioHOC;
