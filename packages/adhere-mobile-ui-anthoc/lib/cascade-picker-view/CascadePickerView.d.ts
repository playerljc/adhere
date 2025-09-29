import { CascadePickerView } from 'antd-mobile';
import type { CascadePickerViewProps } from 'antd-mobile';
declare const CascadePickerViewHOC: typeof CascadePickerView & {
    defaultProps?: Partial<CascadePickerViewProps>;
    override?: (props: Partial<CascadePickerViewProps>) => Partial<CascadePickerViewProps>;
};
export default CascadePickerViewHOC;
