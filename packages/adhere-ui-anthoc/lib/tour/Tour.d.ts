import { Tour } from 'antd';
import type { TourProps } from 'antd';
declare const TourHOC: typeof Tour & {
    defaultProps?: Partial<TourProps>;
};
export default TourHOC;
