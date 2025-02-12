import { Segmented } from 'antd';
import { SegmentedProps as AntdSegmentedProps } from 'antd/es/segmented';
import { RefAttributes } from 'react';
type SegmentedProps = Omit<AntdSegmentedProps, 'ref'> & RefAttributes<HTMLDivElement>;
declare const SegmentedHOC: typeof Segmented & {
    defaultProps?: Partial<SegmentedProps>;
};
export default SegmentedHOC;
