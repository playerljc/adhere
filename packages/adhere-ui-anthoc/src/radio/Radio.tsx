import { Radio, RadioProps } from 'antd';

import type { RadioHOCComponent } from '../types';
import { createFactory } from '../util';

const RadioHOC: RadioHOCComponent = createFactory<RadioProps>(Radio, {});

export default RadioHOC;
