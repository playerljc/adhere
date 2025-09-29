import type { RangeCalendarPopupProps } from '../types';
import { createFactory } from '../util';
import CalendarPopup from './CalendarPopup';
import RangeCalendarPopup from './RangeCalendarPopup';

CalendarPopup.RangeCalendarPopup = createFactory<RangeCalendarPopupProps>(RangeCalendarPopup, {});

CalendarPopup.RangeCalendarPopup.displayName = 'RangeCalendarPopup';

export default CalendarPopup;
