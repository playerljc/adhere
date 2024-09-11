import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';

import { createFactory } from '../util';

const SliderHOC: typeof Slider & {
  defaultProps?: Partial<SliderSingleProps | SliderRangeProps>;
} = createFactory<SliderSingleProps | SliderRangeProps>(Slider, {});

SliderHOC.displayName = 'Slider';

export default SliderHOC;
