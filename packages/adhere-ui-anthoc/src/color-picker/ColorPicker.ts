import { ColorPicker } from 'antd';
import type { ColorPickerProps } from 'antd';

import { createFactory } from '../util';

const ColorPickerHOC: typeof ColorPicker & {
  defaultProps?: Partial<ColorPickerProps>;
} = createFactory<ColorPickerProps>(ColorPicker, {});

ColorPickerHOC.displayName = 'ColorPicker';

export default ColorPickerHOC;
