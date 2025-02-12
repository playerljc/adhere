import { CascadePicker } from 'antd-mobile';
import type { CascadePickerProps } from 'antd-mobile';

import { createFactory } from '../util';

const CascadePickerHOC: typeof CascadePicker & {
  defaultProps?: Partial<CascadePickerProps>;
} = createFactory<CascadePickerProps>(CascadePicker, {});

CascadePickerHOC.displayName = 'CascadePicker';

export default CascadePickerHOC;
