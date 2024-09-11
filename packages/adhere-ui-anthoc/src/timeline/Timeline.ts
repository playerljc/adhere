import { Timeline } from 'antd';
import type { TimelineProps } from 'antd';

import { createFactory } from '../util';

const TimelineHOC: typeof Timeline & {
  defaultProps?: Partial<TimelineProps>;
} = createFactory<TimelineProps>(Timeline, {});

TimelineHOC.displayName = 'Timeline';

export default TimelineHOC;
