import type { TimePopupProps } from '../types';
import { createFactory } from '../util';
import InternalTimePopup from './InternalTimePopup';

const TimePopupHOC: typeof InternalTimePopup & {
  defaultProps?: Partial<TimePopupProps>;
} = createFactory<TimePopupProps>(InternalTimePopup, {});

TimePopupHOC.displayName = 'TimePopup';

export default TimePopupHOC;
