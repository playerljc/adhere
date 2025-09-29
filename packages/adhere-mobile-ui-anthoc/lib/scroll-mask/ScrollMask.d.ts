import { ScrollMask } from 'antd-mobile';
import type { ScrollMaskProps } from 'antd-mobile';
declare const ScrollMaskHOC: typeof ScrollMask & {
    defaultProps?: Partial<ScrollMaskProps>;
    override?: (props: Partial<ScrollMaskProps>) => Partial<ScrollMaskProps>;
};
export default ScrollMaskHOC;
