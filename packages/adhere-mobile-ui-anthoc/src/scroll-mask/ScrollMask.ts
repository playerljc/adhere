import { ScrollMask } from 'antd-mobile';
import type { ScrollMaskProps } from 'antd-mobile';

import { createFactory } from '../util';

const ScrollMaskHOC: typeof ScrollMask & {
  defaultProps?: Partial<ScrollMaskProps>;
} = createFactory<ScrollMaskProps>(ScrollMask, {});

ScrollMaskHOC.displayName = 'ScrollMask';

export default ScrollMaskHOC;
