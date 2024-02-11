import { Popup } from 'antd-mobile';
import type { PopupProps } from 'antd-mobile';

import { createFactory } from '../util';

const PopupHOC: typeof Popup & {
  defaultProps?: Partial<PopupProps>;
} = createFactory<PopupProps>(Popup, {});

PopupHOC.displayName = 'Popup';

export default PopupHOC;
