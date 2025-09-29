import { Slider } from 'antd-mobile';
import type { SliderProps } from 'antd-mobile';
declare const SliderHOC: typeof Slider & {
    defaultProps?: Partial<SliderProps>;
    override?: (props: Partial<SliderProps>) => Partial<SliderProps>;
};
export default SliderHOC;
