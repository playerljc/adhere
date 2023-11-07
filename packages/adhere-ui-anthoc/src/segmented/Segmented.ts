import { Segmented } from 'antd';
import type { SegmentedProps } from 'antd';

import { createFactory } from '../util';

const SegmentedHOC: typeof Segmented & {
  defaultProps?: Partial<SegmentedProps>;
} = createFactory<SegmentedProps>(Segmented, {});

export default SegmentedHOC;
