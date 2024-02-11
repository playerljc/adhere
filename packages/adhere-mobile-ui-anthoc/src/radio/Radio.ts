import { Radio } from 'antd-mobile';
import type { RadioProps } from 'antd-mobile';

import { createFactory } from '../util';

const RadioHOC: typeof Radio & {
  defaultProps?: Partial<RadioProps>;
} = createFactory<RadioProps>(Radio, {});

RadioHOC.displayName = 'Radio';

export default RadioHOC;
