import { RangePickerProps } from 'antd/es/date-picker';
import type React from 'react';
declare const RangePickerHOC: ((props: RangePickerProps) => React.ReactElement) & {
    defaultProps?: Partial<RangePickerProps>;
    override?: (props: Partial<RangePickerProps>) => Partial<RangePickerProps>;
    displayName?: string;
};
export default RangePickerHOC;
