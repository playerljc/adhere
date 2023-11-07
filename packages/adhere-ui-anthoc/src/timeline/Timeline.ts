import { Timeline } from 'antd';
import type { TimelineProps } from 'antd';

import { createFactory } from '../util';

const TimelineHOC: typeof Timeline & {
  defaultProps?: Partial<TimelineProps>;
} = createFactory<TimelineProps>(Timeline, {});

export default TimelineHOC;
