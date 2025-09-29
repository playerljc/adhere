import { Segmented } from 'antd-mobile';
import type { SegmentedProps } from 'antd-mobile';
declare const SegmentedHOC: typeof Segmented & {
    defaultProps?: Partial<SegmentedProps>;
    override?: (props: Partial<SegmentedProps>) => Partial<SegmentedProps>;
};
export default SegmentedHOC;
