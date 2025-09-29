import { Timeline } from 'antd';
import type { TimelineProps } from 'antd';
declare const TimelineHOC: typeof Timeline & {
    defaultProps?: Partial<TimelineProps>;
    override?: (props: Partial<TimelineProps>) => Partial<TimelineProps>;
};
export default TimelineHOC;
