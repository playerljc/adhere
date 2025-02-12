import { Swiper } from 'antd-mobile';
import type { SwiperProps } from 'antd-mobile';

import { createFactory } from '../util';

const SwiperHOC: typeof Swiper & {
  defaultProps?: Partial<SwiperProps>;
} = createFactory<SwiperProps>(Swiper, {});

SwiperHOC.displayName = 'Swiper';

export default SwiperHOC;
