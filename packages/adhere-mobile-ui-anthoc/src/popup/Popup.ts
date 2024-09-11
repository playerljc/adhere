import { Popup } from 'antd-mobile';
import type { PopupProps } from 'antd-mobile';

import type { PopupHOCComponent } from '../types';
import { createFactory } from '../util';

const PopupHOC: PopupHOCComponent = createFactory<PopupProps>(Popup, {
  closeOnMaskClick: true,
  closeOnSwipe: true,
});

PopupHOC.displayName = 'Popup';

export default PopupHOC;
