import { Rate } from 'antd-mobile';
import type { RateProps } from 'antd-mobile';
declare const RateHOC: typeof Rate & {
    defaultProps?: Partial<RateProps>;
    override?: (props: Partial<RateProps>) => Partial<RateProps>;
};
export default RateHOC;
