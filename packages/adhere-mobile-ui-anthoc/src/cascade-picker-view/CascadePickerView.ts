import { CascadePickerView } from 'antd-mobile';
import type { CascadePickerViewProps } from 'antd-mobile';

import { createFactory } from '../util';

const CascadePickerViewHOC: typeof CascadePickerView & {
  defaultProps?: Partial<CascadePickerViewProps>;
} = createFactory<CascadePickerViewProps>(CascadePickerView, {});

CascadePickerViewHOC.displayName = 'CascadePickerView';

export default CascadePickerViewHOC;
