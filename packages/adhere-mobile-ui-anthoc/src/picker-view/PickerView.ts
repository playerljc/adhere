import { PickerView } from 'antd-mobile';
import type { PickerViewProps } from 'antd-mobile';

import { createFactory } from '../util';

const PickerViewHOC: typeof PickerView & {
  defaultProps?: Partial<PickerViewProps>;
} = createFactory<PickerViewProps>(PickerView, {});

PickerViewHOC.displayName = 'PickerView';

export default PickerViewHOC;
