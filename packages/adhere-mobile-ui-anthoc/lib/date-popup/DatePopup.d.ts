import type { DatePopupProps } from '../types';
import InternalDatePopup from './InternalDatePopup';
declare const DatePopupHOC: typeof InternalDatePopup & {
    defaultProps?: Partial<DatePopupProps>;
};
export default DatePopupHOC;
