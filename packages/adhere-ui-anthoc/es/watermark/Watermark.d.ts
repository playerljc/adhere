import { Watermark } from 'antd';
import type { WatermarkProps } from 'antd';
declare const WatermarkHOC: typeof Watermark & {
    defaultProps?: Partial<WatermarkProps>;
    override?: (props: Partial<WatermarkProps>) => Partial<WatermarkProps>;
};
export default WatermarkHOC;
