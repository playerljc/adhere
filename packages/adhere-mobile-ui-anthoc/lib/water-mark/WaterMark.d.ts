import { WaterMark } from 'antd-mobile';
import type { WaterMarkProps } from 'antd-mobile';
declare const WaterMarkHOC: typeof WaterMark & {
    defaultProps?: Partial<WaterMarkProps>;
    override?: (props: Partial<WaterMarkProps>) => Partial<WaterMarkProps>;
};
export default WaterMarkHOC;
