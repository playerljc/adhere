import { Slider } from 'antd-mobile';
import type { SliderProps } from 'antd-mobile';

import { createFactory } from '../util';

const SliderHOC: typeof Slider & {
  defaultProps?: Partial<SliderProps>;
} = createFactory<SliderProps>(Slider, {});

SliderHOC.displayName = 'Slider';

export default SliderHOC;
