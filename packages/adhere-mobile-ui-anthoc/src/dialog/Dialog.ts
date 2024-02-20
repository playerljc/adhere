import { Dialog } from 'antd-mobile';
import type { DialogProps } from 'antd-mobile';

import type { DialogHOCComponent } from '../types';
import { createFactory } from '../util';

const DialogHOC: DialogHOCComponent = createFactory<DialogProps>(Dialog, {
  closeOnMaskClick: true,
});

DialogHOC.displayName = 'Dialog';

export default DialogHOC;
