import { ColorPicker } from 'antd';
import type { ColorPickerProps } from 'antd';
declare const ColorPickerHOC: typeof ColorPicker & {
    defaultProps?: Partial<ColorPickerProps>;
};
export default ColorPickerHOC;
