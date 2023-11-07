import { Carousel } from 'antd';
import type { CarouselProps } from 'antd';
declare const CarouselHOC: typeof Carousel & {
    defaultProps?: Partial<CarouselProps>;
};
export default CarouselHOC;
