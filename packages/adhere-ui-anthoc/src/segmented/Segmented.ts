import { Segmented } from 'antd';
import { SegmentedProps as AntdSegmentedProps } from 'antd/es/segmented';
import { RefAttributes } from 'react';

import { createFactory } from '../util';

type SegmentedProps = Omit<AntdSegmentedProps, 'ref'> & RefAttributes<HTMLDivElement>;

const SegmentedHOC: typeof Segmented & {
  defaultProps?: Partial<SegmentedProps>;
} = createFactory<SegmentedProps>(Segmented, {});

export default SegmentedHOC;
