import { Dialog } from 'antd-mobile';
import type { DialogProps } from 'antd-mobile';

import { createFactory } from '../util';

const DialogHOC: typeof Dialog & {
  defaultProps?: Partial<DialogProps>;
} = createFactory<DialogProps>(Dialog, {});

DialogHOC.displayName = 'Dialog';

export default DialogHOC;
