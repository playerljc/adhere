import { CascadePicker } from 'antd-mobile';
import type { CascadePickerProps } from 'antd-mobile';
declare const CascadePickerHOC: typeof CascadePicker & {
    defaultProps?: Partial<CascadePickerProps>;
    override?: (props: Partial<CascadePickerProps>) => Partial<CascadePickerProps>;
};
export default CascadePickerHOC;
