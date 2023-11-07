import { Carousel } from 'antd';
import type { CarouselProps } from 'antd';

import { createFactory } from '../util';

const CarouselHOC: typeof Carousel & {
  defaultProps?: Partial<CarouselProps>;
} = createFactory<CarouselProps>(Carousel, {});

export default CarouselHOC;
