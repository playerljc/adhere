import { Picker } from 'antd-mobile';
import type { PickerProps } from 'antd-mobile';

import { createFactory } from '../util';

const PickerHOC: typeof Picker & {
  defaultProps?: Partial<PickerProps>;
} = createFactory<PickerProps>(Picker, {});

PickerHOC.displayName = 'Picker';

export default PickerHOC;
