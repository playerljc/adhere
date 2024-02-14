import { Radio } from 'antd-mobile';
import type { RadioProps } from 'antd-mobile';

import type { RadioHOCComponent } from '../types';
import { createFactory } from '../util';

const RadioHOC: RadioHOCComponent = createFactory<RadioProps>(Radio, {});

RadioHOC.displayName = 'Radio';

export default RadioHOC;
