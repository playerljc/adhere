import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';
declare const SliderHOC: typeof Slider & {
    defaultProps?: Partial<SliderSingleProps | SliderRangeProps>;
};
export default SliderHOC;
