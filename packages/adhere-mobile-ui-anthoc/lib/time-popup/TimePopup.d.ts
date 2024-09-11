import type { TimePopupProps } from '../types';
import InternalTimePopup from './InternalTimePopup';
declare const TimePopupHOC: typeof InternalTimePopup & {
    defaultProps?: Partial<TimePopupProps>;
};
export default TimePopupHOC;
