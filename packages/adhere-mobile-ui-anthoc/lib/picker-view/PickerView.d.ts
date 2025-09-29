import { PickerView } from 'antd-mobile';
import type { PickerViewProps } from 'antd-mobile';
declare const PickerViewHOC: typeof PickerView & {
    defaultProps?: Partial<PickerViewProps>;
    override?: (props: Partial<PickerViewProps>) => Partial<PickerViewProps>;
};
export default PickerViewHOC;
