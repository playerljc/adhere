import { Slider } from 'antd-mobile';
import type { SliderProps } from 'antd-mobile';

import { createFactory } from '../util';

const SliderHOC: typeof Slider & {
  defaultProps?: Partial<SliderProps>;
  override?: (props: Partial<SliderProps>) => Partial<SliderProps>;
} = createFactory<SliderProps>(Slider, {});

SliderHOC.displayName = 'Slider';

export default SliderHOC;
