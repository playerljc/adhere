import type { CalendarPopupHOCComponent, CalendarPopupProps } from '../types';
import { createFactory } from '../util';
import InternalCalendarPopup from './InternalCalendarPopup';

const CalendarPopupHOC: CalendarPopupHOCComponent = createFactory<CalendarPopupProps>(
  InternalCalendarPopup,
  {},
);

CalendarPopupHOC.displayName = 'CalendarPopup';

export default CalendarPopupHOC;
