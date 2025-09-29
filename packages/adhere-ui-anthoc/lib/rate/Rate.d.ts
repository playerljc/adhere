import { Rate } from 'antd';
import type { RateProps } from 'antd';
declare const RateHOC: typeof Rate & {
    defaultProps?: Partial<RateProps>;
    override?: (props: Partial<RateProps>) => Partial<RateProps>;
};
export default RateHOC;
