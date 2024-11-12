import { Segmented } from 'antd-mobile';
import type { SegmentedProps } from 'antd-mobile';

import { createFactory } from '../util';

const SegmentedHOC: typeof Segmented & {
  defaultProps?: Partial<SegmentedProps>;
} = createFactory<SegmentedProps>(Segmented, {});

SegmentedHOC.displayName = 'Segmented';

export default SegmentedHOC;
