import type { DatePopupProps } from '../types';
import { createFactory } from '../util';
import InternalDatePopup from './InternalDatePopup';

const DatePopupHOC: typeof InternalDatePopup & {
  defaultProps?: Partial<DatePopupProps>;
} = createFactory<DatePopupProps>(InternalDatePopup, {});

DatePopupHOC.displayName = 'DatePopup';

export default DatePopupHOC;
