import { CenterPopup } from 'antd-mobile';
import type { CenterPopupProps } from 'antd-mobile';

import { createFactory } from '../util';

const CenterPopupHOC: typeof CenterPopup & {
  defaultProps?: Partial<CenterPopupProps>;
} = createFactory<CenterPopupProps>(CenterPopup, {});

CenterPopupHOC.displayName = 'CenterPopup';

export default CenterPopupHOC;
